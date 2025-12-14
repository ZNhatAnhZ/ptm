import * as yup from 'yup';

export const SEMESTER_OPTIONS = ["Spring 2024", "Summer 2024", "Fall 2024", "Winter 2024"];

export const COURSE_NAME_OPTIONS = ["Web Development", "Data Science", "Mobile App", "AI & ML"];

export const CLASS_SCHEDULE_OPTIONS = ["Mon-Wed-Fri Morning", "Tue-Thu Evening", "Weekend", "Online"];

export const courseSchema = yup.object({
    courseName: yup
        .string()
        .required('Tên khóa học là bắt buộc')
        .oneOf(COURSE_NAME_OPTIONS),
    classSchedule: yup
        .string()
        .required('Lịch học là bắt buộc')
        .oneOf(CLASS_SCHEDULE_OPTIONS),
    credits: yup
        .number()
        .typeError('Số tín chỉ là bắt buộc')
        .required('Số tín chỉ là bắt buộc')
        .min(2, 'Số tín chỉ phải ít nhất là 2')
        .max(5, 'Số tín chỉ không được vượt quá 5'),
    instructor: yup
        .string()
        .required('Giảng viên là bắt buộc')
        .min(3, 'Tên giảng viên phải có ít nhất 3 ký tự'),
});

export const courseScheduleSchema = yup.object({
    studentId: yup
        .string()
        .required('Mã sinh viên là bắt buộc'),
    semester: yup
        .string()
        .required('Học kỳ là bắt buộc')
        .oneOf(SEMESTER_OPTIONS),
    courses: yup
        .array()
        .of(courseSchema)
        .required('Danh sách khóa học là bắt buộc')
        .min(1, 'Phải có ít nhất một khóa học'),
});