import {useFieldArray, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import styled from "styled-components";
import {
    CLASS_SCHEDULE_OPTIONS,
    COURSE_NAME_OPTIONS,
    courseScheduleSchema,
    SEMESTER_OPTIONS
} from "../schemas/CourseSchedule.js";
import {useEffect, useState} from "react";

const Input = styled.input`
    display: block;
`;

const Select = styled.select`
    display: block;
`;

const Div = styled.div`
    color: red;
    font-size: 0.875rem;
`;

const DivFlex = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default function CourseScheduleForm() {
    const [totalCredits, setTotalCredits] = useState(0);
    const [isUnique, setIsUnique] = useState(true);
    const {
        register, handleSubmit,
        watch, control,
        formState: {errors, isValid, isSubmitSuccessful, submitCount, isValidating}
    } =
        useForm({
            mode: 'onChange',
            resolver: yupResolver(courseScheduleSchema)
        });

    const onSubmit = (data) => {
        console.log('Form Data:', JSON.stringify(data));
    };

    const { fields, append, remove } = useFieldArray({
        control,
        name: 'courses'
    });

    const [coursesValue] = watch(['courses']);

    useEffect(() => {
        const array = coursesValue?.map(course => course?.courseName) || [];
        setTotalCredits(coursesValue?.map(course => Number(course?.credits) || 0).reduce((a, b) => a + b, 0))
        setIsUnique(new Set(array).size === array.length);
    }, [coursesValue, isValidating]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Course schedule form</h3>
            <Input
                {...register('studentId')}
                placeholder="Student ID"
            />
            {errors.studentId && <Div>{errors.studentId.message}</Div>}

            <Select {...register('semester')} defaultValue="">
                <option value="" disabled>Select a semester</option>
                {SEMESTER_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </Select>
            {errors.semester && <Div>{errors.semester.message}</Div>}
            <br></br>
            <button disabled={fields.length === 5} onClick={() => append({})}>Add a new course</button>
            {errors.courses && <Div>{errors.courses.message}</Div>}

            {fields.map((field, index) => CourseForm(fields, field, index, remove, register, errors))}
            <hr></hr>

            <br></br>
            <span>total credits: </span>
            <input
                readOnly={true}
                disabled={true}
                value={totalCredits}
                type={'number'}
            />
            {totalCredits > 20 ? <Div>Số tín chỉ vượt qua giới hạn cho phép</Div> : null}
            {!isUnique? <Div>Không cho phép đăng ký 2 khóa trùng tên</Div> : null}
            <Div>
                <button type="submit" disabled={(submitCount > 0) && (!isValid || totalCredits > 20 || !isUnique)}>Submit</button>
            </Div>
            {isSubmitSuccessful ? <Div>Form submitted successfully!</Div> : null}
        </form>
    );
}

function CourseForm(fields, field, index, remove, register, errors) {
    return (
        <div key={field.id}>
            <hr></hr>
            <div>Course number {index}:</div>
            <DivFlex>
                <div>
                    <Select {...register(`courses.${index}.courseName`)} defaultValue="">
                        <option value="" disabled>Select a course</option>
                        {COURSE_NAME_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </Select>
                    {errors.courses?.[index]?.courseName && <Div>{errors.courses?.[index]?.courseName.message}</Div>}
                    <br></br>

                    <Select {...register(`courses.${index}.classSchedule`)} defaultValue="">
                        <option value="" disabled>Select a schedule</option>
                        {CLASS_SCHEDULE_OPTIONS.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                        ))}
                    </Select>
                    {errors.courses?.[index]?.classSchedule && <Div>{errors.courses?.[index]?.classSchedule.message}</Div>}
                    <br></br>

                    <Input {...register(`courses.${index}.credits`)}
                           placeholder="credits"
                           type={'number'}
                    />
                    {errors.courses?.[index]?.credits && <Div>{errors.courses?.[index]?.credits.message}</Div>}

                    <Input
                        {...register(`courses.${index}.instructor`)}
                        placeholder="instructor"
                    />
                    {errors.courses?.[index]?.instructor && <Div>{errors.courses?.[index]?.instructor.message}</Div>}
                </div>
                <div>
                    <button disabled={fields.length === 1} onClick={() => remove(index)}>delete this course</button>
                </div>
            </DivFlex>
        </div>
    )
}