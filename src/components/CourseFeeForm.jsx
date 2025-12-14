import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import styled from "styled-components";
import {courseFeeSchema} from "../schemas/CourseFee.js";
import {useEffect} from "react";

const Input = styled.input`
    display: block;
`;

const Div = styled.div`
    color: red;
`;

const COURSE_OPTIONS = [
    { label: 'Web Development', fee: 5000000 },
    { label: 'Data Science', fee: 6000000 },
    { label: 'Mobile App Development', fee: 7000000 },
    { label: 'AI & Machine Learning', fee: 8000000 },
];

const DISCOUNT_OPTIONS = [
    { label: '', fee: 0 },
    { label: 'STUDENT10', fee: 10 },
    { label: 'STUDENT20', fee: 20 },
    { label: 'EARLYBIRD', fee: 15 },
];

export default function CourseFeeForm() {
    const {
        register, handleSubmit,
        setValue, watch,
        formState: {errors, isValid, isSubmitSuccessful, submitCount}
    } =
        useForm({
            mode: 'onChange',
            resolver: yupResolver(courseFeeSchema)
        });

    const onSubmit = (data) => {
        console.log('Form Data:', JSON.stringify(data));
    };

    const [courseValue, courseFeeValue, discountCodeValue, discountPercentageValue, numberOfMonthsValue, totalFeeValue] =
        watch(['course', 'courseFee', 'discountCode', 'discountPercentage', 'numberOfMonths', 'totalFee']);

    useEffect(() => {
        setValue('courseFee',
            COURSE_OPTIONS.filter(opt => opt.label === courseValue)[0]?.fee || 0);
    }, [courseValue, setValue])

    useEffect(() => {
        setValue('discountPercentage',
            DISCOUNT_OPTIONS.filter(opt => opt.label === discountCodeValue)[0]?.fee || 0, {shouldValidate: true});
    }, [discountCodeValue, setValue])

    useEffect(() => {
        setValue('totalFee', (courseFeeValue*numberOfMonthsValue) * (1 - (discountPercentageValue/100.0)) || 0);
    }, [courseFeeValue, discountPercentageValue, numberOfMonthsValue, setValue])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Course fee form</h3>
            <Input
                {...register('studentId')}
                placeholder="Student ID"
            />
            {errors.studentId && <Div>{errors.studentId.message}</Div>}

            <select {...register('course')} defaultValue="">
                <option value="" disabled>Select a course</option>
                {COURSE_OPTIONS.map((opt) => (
                    <option key={opt.label} value={opt.label}>{opt.label}</option>
                ))}
            </select>
            {errors.course && <Div>{errors.course.message}</Div>}

            <br></br>
            <span>Course fee: </span>
            <input
                type="courseFee"
                {...register('courseFee')}
                placeholder="course fee"
                readOnly={true}
                disabled={true}
                defaultValue={0}
            />
            {errors.courseFee && <Div>{errors.courseFee.message}</Div>}

            <Input {...register('numberOfMonths')}
                   placeholder="number of months"
                   type={'number'}
            />
            {errors.numberOfMonths && <Div>{errors.numberOfMonths.message}</Div>}

            <Input
                {...register('discountCode')}
                placeholder="discount code"
            />
            {errors.discountCode && <Div><Div>mã giảm giá không hợp lệ</Div></Div>}

            <span>discount percentage: </span>
            <input
                {...register('discountPercentage')}
                placeholder="discount percentage"
                readOnly={true}
                disabled={true}
            /> <span>%</span>
            {errors.discountPercentage && <Div>{errors.discountPercentage.message}</Div>}
            <br></br>
            <span>total fee: </span>
            <input
                {...register('totalFee')}
                placeholder="total fee"
                readOnly={true}
                disabled={true}
            /> <span> VND</span>
            {errors.totalFee && <Div>{errors.totalFee.message}</Div>}

            <Div>
                <button type="submit" disabled={(submitCount > 0) && !isValid}>Submit</button>
            </Div>
            {totalFeeValue > 50000000 ? <Div>Miễn phí tài liệu học</Div> : null}
            {isSubmitSuccessful ? <Div>Form submitted successfully!</Div> : null}
        </form>
    );
}