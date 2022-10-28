/**
 *
 * ChangePassword
 *
 */

 import React, { useEffect, useState } from 'react';
 import { useDispatch, useSelector } from 'react-redux';
 import { useInjectSaga } from '../../utils/injectSaga';
 import saga from './saga';
 import reducer from './reducer';
 import { useInjectReducer } from '../../utils/injectReducer';
 import {
   changePasswordAction,
   setFormValuesAction,
   clearFormAction,
 } from './actions';
 import { createStructuredSelector } from 'reselect';
 import {
   makeClearFormValueSelector,
   makeConfirmPasswordSelector,
   makeErrorsSelector,
   makeInitialValuesSelector,
   makeIsLoadingSelector,
   makeNewPasswordSelector,
 } from './selectors';
 import FormButtonWrapper from '../../components/FormButtonWrapper';
 import FormInputWrapper from '../../components/FormInputWrapper';
 import { Progress, Row, Form, Typography, Col } from 'antd';
 import { checkIfStrongPassword, checkPasswordLength } from '../../common/validator';
 import usePasswordStrengthCheckHook from '../../common/hooks/passwordStrengthHook';
 import AlertMessage from '../../containers/AlertMessage';
 import FormWrapper from '../../components/FormWrapper';
 
 const key = 'changePassword';
 
 const { Title } = Typography;
 
 const stateSelector = createStructuredSelector({
   newPass: makeNewPasswordSelector(),
   isLoading: makeIsLoadingSelector(),
   confirmPassword: makeConfirmPasswordSelector(),
   errors: makeErrorsSelector(),
   initialValues: makeInitialValuesSelector(),
   clearFormValue: makeClearFormValueSelector(),
 });
 
 const formItemLayout = {
   labelCol: {
     xs: { span: 24 },
     md: { span: 24 },
     sm: { span: 24 },
   },
   wrapperCol: {
     xs: { span: 24 },
     md: { span: 24 },
     sm: { span: 24 },
   },
 };
 
 export default function ChangePassword() {
   const dispatch = useDispatch();
 
   useInjectSaga({ key, saga });
 
   useInjectReducer({ key, reducer });
 
   const [form] = Form.useForm();
 
   const { errors, isLoading, initialValues, clearFormValue } =
     useSelector(stateSelector);
 
   const [newPass, setNewPass] = useState('');
 
   const [lowerCheck, upperCheck, numChecker, charCheck] =
     usePasswordStrengthCheckHook(newPass);
 
   const onFinish = async () => {
     await form.validateFields();
     dispatch(setFormValuesAction(form.getFieldsValue()));
     dispatch(changePasswordAction());
   };
 
   const checkConfirm = (rule: any, value: string) => {
     const newPassword = form.getFieldValue('newPass');
     if (newPassword !== value) {
       return Promise.reject(
         new Error('Mật khẩu xác nhận không khớp!'),
       );
     }
     return Promise.resolve();
   };
 
   useEffect(() => {
     if (clearFormValue) {
       form.resetFields();
       dispatch(clearFormAction(false));
     }
   }, [clearFormValue]);
 
   useEffect(() => {
     if (errors?.length) {
       form.setFields(errors);
     }
   }, [errors]);
 
   return (
     <>
       <div className="all-container">
         <Row>
           <Col xl={8} lg={12} md={12} sm={24}>
             <FormWrapper
               {...formItemLayout}
               values={initialValues}
               forminstance={form}
               name="changePassword"
               onFinish={onFinish}
               className="form-ant-items"
             >             
               <FormInputWrapper
                 passwordInput
                 rules={[
                   {
                     required: true,
                     whitespace: true,
                     message: 'Vui lòng nhập mật khẩu!',
                   },
                 ]}
                 name="oldPass"
                 id="oldPass"
                 type="password"
                 placeholder='Nhập mật khẩu hiện tại'
                 label='Mật khẩu hiện tại'
                 maxLength={20}
               />
 
               <FormInputWrapper
                 passwordInput
                 label='Mật khẩu mới'
                 rules={[
                   {
                     required: true,
                     whitespace: true,
                     message: 'Vui lòng nhập mật khẩu!',
                   },
                   {
                     validator: checkPasswordLength,
                   },
                 ]}
                 name="newPass"
                 id="newPass"
                 type="password"
                 placeholder='Nhập mật khẩu mới'
                 changeHandler={(e) => setNewPass(e.target.value)}
                 maxLength={20}
               >
                 <Progress
                   percent={
                     ((lowerCheck + charCheck + upperCheck + numChecker) / 4) *
                     100
                   }
                   steps={4}
                 />
               </FormInputWrapper>
 
               <FormInputWrapper
                 passwordInput
                 label='Xác nhận mật khẩu mới'
                 rules={[
                   {
                     required: true,
                     whitespace: true,
                     message: 'Vui lòng nhập mật khẩu xác nhận!',
                   },
                   ({ getFieldValue }:any) => ({
                     validator(_:any, value: any) {
                       if (!value || getFieldValue('newPass') === value) {
                         return Promise.resolve();
                       }
                       return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'))
                     },
                   }),
                 ]}
                 name="confirmNewPassword"
                 id="confirmNewPassword"
                 placeholder='Nhập lại mật khẩu mới'
                 maxLength={20}
                 dependencies={['newPass']}
               />
 
               <FormButtonWrapper
                 variant="primary"
                 disabled={isLoading}
                 form={form}
                 label='Cập nhật'
               /> 
             </FormWrapper>
           </Col>
         </Row>
       </div>
     </>
   );
 }
 