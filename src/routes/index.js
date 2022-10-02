import { useRoutes } from "react-router-dom";

const routes = [
    {
        path: 'login',
        element: (
            <div></div>
        ),
    },

]

const RenderRouter = () => useRoutes(routes);

export default RenderRouter;