import * as yup from 'yup';

export const courseFeeSchema = yup.object({
    studentId: yup
        .string()
        .required('Mã sinh viên là bắt buộc'),
    course: yup
        .string()
        .required('Khoá học là bắt buộc')
        .oneOf(["Web Development", "Data Science", "Mobile App Development", "AI & Machine Learning"],
            'Khoá học không hợp lệ'),
    courseFee: yup
        .number(),
    numberOfMonths: yup
        .number()
        .typeError('Số tháng là bắt buộc')
        .required('Số tháng là bắt buộc')
        .integer('Số tháng phải là số nguyên')
        .min(1, 'Số tháng phải ít nhất là 1')
        .max(12, 'Số tháng phải nhiều nhất là 12'),
    discountCode: yup
        .string()
        .oneOf(["", "STUDENT10", "STUDENT20", "EARLYBIRD"]),
    discountPercentage: yup
        .number()
        .notRequired(),
    totalFee: yup
        .number(),
});