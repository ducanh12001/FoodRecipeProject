import { Image, message, Typography, Upload } from 'antd';
import React, { useEffect, useState } from 'react'
import _ from 'lodash';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

const { Text } = Typography;

function ImageUpload({ onSubmit, existingFiles }: any) {

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [fileListInfo, setFileListInfo] = useState<Array<any>>([]);
  const [maxImage, setMaxImage] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (existingFiles && existingFiles.length > 0) {
      setFileList(existingFiles);
      setFileListInfo(existingFiles?.map((item: any) => ({ name: item.name, path: item.path })));
    }
  }, [existingFiles]);

  const onChange: UploadProps['onChange'] = (info) => {
    let newFileList = [...info.fileList];
    const newFilesInfo = newFileList
      .filter((file) => file.response)
      .map((file) => {
        return {
          name: file.name,
          path: file.response?.data?.file_path,
        };
      });

    if (newFilesInfo.length > 0) {
      setFileListInfo(_.uniqBy(_.union(fileListInfo, newFilesInfo), function (e) {
        return e.path;
      }));
    }
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    if (!isValidImage(file)) return;
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    setPreviewImage(src || (file.preview as string));
    setVisible(true)
  };

  const onRemove = async (file: UploadFile) => {
    let newFileList = [...fileListInfo];
    const newFileListInfo = newFileList.filter((f: any) => !(f.name === file.name &&
      (f.path === file.response?.files?.path || f.path === file?.path)));
    setFileListInfo(newFileListInfo);
  };

  const isValidImage = (file: UploadFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    const isLt2M = (file.size ?? 0) / 1024 / 1024 < 2;

    return isJpgOrPng && isLt2M;
  };

  const uploadProps: UploadProps = {
    accept: 'image/png, image/jpeg, image/jpeg',
    action: 'https://api.foodrecipe.nvquynh.codes/api/upload/image',
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('ACCESS_TOKEN') ?? ''}`
    },
    beforeUpload: (file: any, fileList1: any) => {
      const validExtension = ['image/png', 'image/jpg', 'image/jpeg'];
      const checkExtension = validExtension.includes(file.type);
      const validSize = file.size / 1024 / 1024 <= 2;
      const lengthNotExceeded = fileList.length + fileList1.length <= 2;
      if (!lengthNotExceeded) {
        setMaxImage(true)
      } else {
        setMaxImage(false)
      }
      if (!checkExtension) {
        message.error('Chỉ hỗ trợ định dạng .jpg, .jpeg, .png');
      }
      if (checkExtension && !validSize) {
        message.error('Chọn ảnh có kích thước không vượt quá 2MB');
      }
      return lengthNotExceeded && checkExtension && validSize
        ? true
        : Upload.LIST_IGNORE;
    },
    listType: 'picture-card',
    onChange: onChange,
    onPreview: onPreview,
    onRemove: onRemove
  };

  useEffect(() => {
    if (fileListInfo.length > 0) {
      const images = fileListInfo.map(item => ({ name: item.name, path: item.path }));
      onSubmit(images);
    } else {
      onSubmit([]);
    }
  }, [fileListInfo]);

  useEffect(() => {
    if (maxImage === true) {
      message.error('Chỉ có thể tải lên tối đa 1 ảnh');
    }
  }, [maxImage]);

  return (
    <>
      <Upload {...uploadProps} fileList={fileList}>
        {fileList.length < 1 && <Text style={{ fontSize: 24 }}>+</Text>}
      </Upload>
      <Image
        src={previewImage}
        style={{ display: 'none' }}
        preview={{
          visible,
          src: `${previewImage}`,
          onVisibleChange: value => {
            setVisible(value);
          },
        }} />
    </>
  )
}

export default ImageUpload;