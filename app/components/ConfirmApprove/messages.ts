import { defineMessages } from 'react-intl';

export const scope = 'components.ConfirmApprove';

export default defineMessages({
  questionTitle: {
    id: `${scope}.questionTitle`,
    defaultMessage: 'Bạn có chắc chắn muốn duyệt',
  },
  submit: {
    id: `${scope}.submit`,
    defaultMessage: 'Đồng ý',
  },
  cancel:{
    id: `${scope}.cancel`,
    defaultMessage: 'Hủy',
  },
  warning:{
    id: `${scope}.warning`,
    defaultMessage: 'Bạn không thể hoàn tác hành động này',
  }
})
