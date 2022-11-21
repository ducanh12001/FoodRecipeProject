/**
 *
 * AddNewsForm
 *
 */

import React, { useEffect, useState } from 'react';
import { Button, Form, Upload, Modal } from 'antd';

import FormWrapper from '../../components/FormWrapper';
import FormInputWrapper from '../../components/FormInputWrapper';
import FormButtonWrapper from '../../components/FormButtonWrapper';
import { UploadOutlined } from '@ant-design/icons';

const AddRecipeModal = (props: any) => {	
	const {
		open = false,
		onOK,
		onCancel
	} = props;
	
	const [form] = Form.useForm();
	
	const initialValues = {};
	const isLoading = false;
	
	const onFinish = () => {};
	
	const footer = [
		<FormButtonWrapper
		variant="primary"
		disabled={isLoading}
		form={form}
		label="Add recipe" />
	];
	
	return (
		<Modal
		open={open}
		onOk={onOK}
		onCancel={onCancel}
		footer={footer}
		>
			<div style={{marginTop: '2rem'}}>
				<FormWrapper
				className="add-recipe-form"
				values={initialValues}
				forminstance={form}
				onFinish={onFinish}
				name="add-news-form"
				>
					<FormInputWrapper
					name="Title"
					id="title"
					type="text"
					rules={[
						{
							required: true,
							whitespace: true,
							message: 'Title required',
						}
					]}
					placeholder="Title"
					/>
					
					<FormInputWrapper
					name="Author"
					id="author"
					type="text"
					rules={[
						{
							required: true,
							whitespace: true,
							message: 'Author required',
						}
					]}
					placeholder="Author"
					/>
					
					<FormInputWrapper
					name="Content"
					id="content"
					type="text"
					rules={[
						{
							required: true,
							whitespace: true,
							message: 'Content required',
						}
					]}
					placeholder="Content"
					/>
					
					<Form.Item>
						<Upload>
							<Button icon={<UploadOutlined />}>
								Upload picture
							</Button>
						</Upload>
					</Form.Item>				
				</FormWrapper>
			</div>
		</Modal>
	);
};
export default AddRecipeModal;
