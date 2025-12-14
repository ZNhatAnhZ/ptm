import * as yup from 'yup';

export const studentAccountSchema = yup.object({
    name: yup
        .string()
        .required('Tên là bắt buộc')
        .min(3, 'Tên phải có ít nhất 3 ký tự'),
    email: yup
        .string()
        .required('Email là bắt buộc')
        .email('Email không hợp lệ'),
    password: yup
        .string()
        .required('Mật khẩu là bắt buộc')
        .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
        .matches(/^(?=.*[A-Z])(?=.*\d).*$/, 'Mật khẩu phải chứa ít nhất một chữ cái viết hoa và một chữ số'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Mật khẩu xác nhận không khớp')
        .required('Xác nhận mật khẩu là bắt buộc'),
    studentId: yup
        .string()
        .required('Mã sinh viên là bắt buộc')
        .length(8, 'Mã sinh viên phải có đúng 8 ký tự'),
    phoneNumber: yup
        .string()
        .required('Số điện thoại là bắt buộc')
        .matches(/^(0)(\d{9})$/, 'Số điện thoại không hợp lệ'),
    terms: yup
        .boolean()
        .oneOf([true], 'Bạn phải đồng ý với các điều khoản'),
});