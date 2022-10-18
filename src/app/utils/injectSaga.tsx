import React, { ComponentType } from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { useStore, ReactReduxContext } from 'react-redux';

import getInjectors from './sagaInjectors';

/**
 * Dynamically injects a saga, passes component's props as saga arguments
 *
 * @param {string} key A key of the saga
 * @param {function} saga A root saga that will be injected
 * @param {string} [mode] By default (constants.DAEMON) the saga will be started
 * on component mount and never canceled or started again. Another two options:
 *   - constants.RESTART_ON_REMOUNT — the saga will be started on component mount and
 *   cancelled with `task.cancel()` on component unmount for improved performance,
 *   - constants.ONCE_TILL_UNMOUNT — behaves like 'RESTART_ON_REMOUNT' but never runs it again.
 *
 */
export default ({ key, saga, mode }: any) =>
  (WrappedComponent: ComponentType<any>) => {
    class InjectSaga extends React.Component {
      static WrappedComponent = WrappedComponent;

      // eslint-disable-next-line react/static-property-placement
      static contextType = ReactReduxContext;

      // eslint-disable-next-line react/static-property-placement
      static displayName = `withSaga(${
        WrappedComponent.displayName || WrappedComponent.name || 'Component'
      })`;
      injectors: { injectSaga: (key: string, descriptor: any, args: any) => void; ejectSaga: (key: string) => void; };

      constructor(props: any, context: any) {
        super(props, context);

        this.injectors = getInjectors(context.store);

        this.injectors.injectSaga(key, { saga, mode }, this.props);
      }

      componentWillUnmount() {
        this.injectors.ejectSaga(key);
      }

      render() {
        return <WrappedComponent {...this.props} />;
      }
    }

    return hoistNonReactStatics(InjectSaga, WrappedComponent);
  };

const useInjectSaga = ({ key, saga, mode = null }: any) => {
  const store = useStore();

  React.useEffect(() => {
    const injectors = getInjectors(store);
    injectors.injectSaga(key, { saga, mode }, null);

    return () => {
      injectors.ejectSaga(key);
    };
  }, []);
};

export { useInjectSaga };
