import React from 'react';
import { checkIfStrongPassword, checkPasswordLength } from '../validator';

export const rules = {
  email: [
    {
      type: 'email',
      message: 'Email không hợp lệ!',
    },
    {
      required: true,
      whitespace: true,
      message: 'Vui lòng nhập email!',
    }
  ],
  password: [
    {
      required: true,
      whitespace: true,
      message: '',
    },
    {
      validator: checkPasswordLength,
    },
  ],
  username: [
    {
      required: true,
      whitespace: true,
      message: '',
    }
  ],
  phone: [
    {
      required: true,
      whitespace: true,
      message: '',
    }
  ],
  name: [
    {
      required: true,
      whitespace: true,
      message: '',
    },
  ],
};
