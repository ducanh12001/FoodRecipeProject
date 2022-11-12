/**
 *
 * profileForm
 *
 */
import React, { useState } from 'react';
import { UploadOutlined, UserOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  DatePicker,
  DatePickerProps,
  Form,
  message,
  Row,
  Upload,
} from 'antd';
import commonMessage from 'common/messages';
import { rules } from 'common/rules';
import FormButtonWrapper from 'components/FormButtonWrapper';
import FormInputWrapper from 'components/FormInputWrapper';
import FormWrapper from 'components/FormWrapper';
import {
  makeIsLoadingSelector,
  makeLoggedInUserSelector,
} from 'containers/App/selectors';
import {
  setFormValues,
  submitAvatarFormAction,
  submitFormAction,
} from 'containers/UserAccount/actions';
import messages from 'containers/UserAccount/messages';
import { makeErrorSelector } from 'containers/UserAccount/selectors';
import moment from 'moment';
import { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import FormSelectWrapper from 'components/FormSelectWrapper';
import commonMessages from 'common/messages';
import { RangePickerProps } from 'antd/lib/date-picker';

const dateFormat = 'DD/MM/YYYY'; // YYYY/MM/DD

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    md: { span: 12 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    md: { span: 12 },
    sm: { span: 24 },
  },
};

const stateSelector = createStructuredSelector({
  user: makeLoggedInUserSelector(),
  loading: makeIsLoadingSelector(),
  errors: makeErrorSelector(),
});

export default function ProfileForm() {
  const dispatch = useDispatch();
  const intl = useIntl();
  const [form] = Form.useForm();
  const { user, loading, errors } = useSelector(stateSelector);
  const [birthday, setBirthday] = useState<any>(null);

  function convertDigitIn(str: string,pram1:string,pram2:string) {
    if(str)
    {
      return str.split(pram1).reverse().join(pram2);
    }
    else {
      return undefined
    }

  }

  const onFinish = async () => {
    await form.validateFields();
    dispatch(
      setFormValues({
        ...form.getFieldsValue(),
        fileAvatarId: user.fileAvatarId,
        companyId: user.companyId,
        birthday: birthday,
      }),
    );
    dispatch(submitFormAction());
  };

  const onBirthdayChange: DatePickerProps['onChange'] = (date, dateString) => {
    setBirthday(convertDigitIn(dateString,'/','-'));
  };

  const uploadProps = {
    name: 'avatar',
    accept: '.png,.jpg,.jpeg',
    beforeUpload: (file: any) => {
      const validExtension = ['image/png', 'image/jpg', 'image/jpeg'];
      const checkExtension = validExtension.includes(file.type);
      const validSize = file.size / 1024 / 1024 <= 2;
      if (!checkExtension) {
        message.error(`${file.name} is not a valid file type!`);
      }
      if (!validSize) {
        message.error('Avatar cannot be greater than 2mb');
      }
      return checkExtension && validSize ? true : Upload.LIST_IGNORE;
    },
    customRequest: (options: any) => {
      dispatch(
        setFormValues({
          'file-avatar': options.file,
        }),
      );
      dispatch(submitAvatarFormAction());
    },
  };

  useEffect(() => {
    if (errors?.length) {
      form.setFields(errors);
    }
  }, [errors]);

  useEffect(() => form.resetFields(), [user]);
  useEffect(() => {
    setBirthday(user.birthday);
  }, [user]);
  const genderOptions = [
    { label: `${intl.formatMessage(messages.genderMale)}`, value: 'MALE' },
    { label: `${intl.formatMessage(messages.genderFemale)}`, value: 'FEMALE' },
  ];

  const positionOptions = [
    { label: `${intl.formatMessage(messages.positionCEO)}`, value: 1 },
    { label: `${intl.formatMessage(messages.positionManagement)}`, value: 2 },
    { label: `${intl.formatMessage(messages.positionStaff)}`, value: 3 },
  ];

  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days after today or earlier than 1960-01-01
    return (
      current &&
      (current < moment('1960-01-01').startOf('day') ||
        current.valueOf() > Date.now())
    );
  };

  return (
    <>
      <Row>
        <Col
          xxl={{ span: 12, order: 1 }}
          xl={{ span: 12, order: 1 }}
          lg={{ span: 12, order: 1 }}
          md={{ span: 24, order: 2 }}
          sm={{ span: 24, order: 2 }}
          xs={{ span: 24, order: 2 }}
        >
          <FormWrapper
            {...formItemLayout}
            values={user}
            forminstance={form}
            onFinish={onFinish}
            name="user-account"
            className="user-acccount"
          >
            <FormInputWrapper
              label={commonMessage.nameLabel}
              name="fullName"
              id="fullName"
              type="text"
              required
              placeholder={commonMessage.namePlaceHolder}
              allowClear
              maxLength={50}
              rules={[
                {
                  required: true,
                  message: (
                    <FormattedMessage {...commonMessages.nameRequired} />
                  ),
                },
              ]}
            />

            <FormSelectWrapper
              label={commonMessage.genderLabel}
              name="genderType"
              id="genderType"
              options={genderOptions}
              placeholder={commonMessage.genderPlaceHolder}
              allowClear
            />
            <FormInputWrapper
              name="email"
              label={commonMessage.emailLabel}
              id="email"
              type="email"
              value={user?.email}
              placeholder={commonMessage.emailPlaceHolder}
              disabled={true}
            />
            <FormButtonWrapper
              variant="primary"
              disabled={loading}
              form={form}
              label={messages.submit}
            />
          </FormWrapper>
        </Col>

        <Col
          className="wrapper-upload-avatar"
          xxl={{ order: 2, span: 12 }}
          xl={{ order: 2, span: 12 }}
          lg={{ order: 2, span: 10 }}
          md={{ order: 1, span: 24 }}
          sm={{ order: 1, span: 24 }}
          xs={{ order: 1, span: 24 }}
        >
          <div className="user-image">
            {user.avatar ? (
              <img src={user.avatar} alt="avatar" />
            ) : (
              <UserOutlined style={{ fontSize: 20 }} />
            )}
          </div>
          <Upload showUploadList={false} {...uploadProps}>
            <div>
              <Button>
                <UploadOutlined />
                <FormattedMessage {...messages.upload} />
              </Button>
            </div>
          </Upload>
        </Col>
      </Row>
    </>
  );
}
