// Order and payment status constants

export const ORDER_STATUS = {
  NEW: { label: 'Đơn Mới', class: 'soft-color' },
  COOKING: { label: 'Đang Nấu', class: 'soft-color' },
  DONE: { label: 'Đã Xong', class: 'soft-color' },
} as const;

export const PAYMENT_STATUS = {
  UNPAID: 'Chưa Trả',
  PAID: 'Đã Thanh Toán',
} as const;
