import {useForm} from 'react-hook-form';
import {studentAccountSchema} from "../schemas/StudentAccount.js";
import {yupResolver} from '@hookform/resolvers/yup';
import styled from "styled-components";

const Input = styled.input`
    display: block;
`;

const Div = styled.div`
    color: red;
`;

export default function StudentRegistrationForm() {
    const {register, handleSubmit,
        formState: {errors, isValid, isSubmitSuccessful, submitCount}} =
        useForm({
            resolver: yupResolver(studentAccountSchema)
        });

    const onSubmit = (data) => {
        console.log('Form Data:', JSON.stringify(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Student registration form</h3>
            <Input
                {...register('name')}
                placeholder="Student Name"
            />
            {errors.name && <Div>{errors.name.message}</Div>}

            <Input
                {...register('email')}
                placeholder="Email"
            />
            {errors.email && <Div>{errors.email.message}</Div>}

            <Input
                type="password"
                {...register('password')}
                placeholder="Password"
            />
            {errors.password && <Div>{errors.password.message}</Div>}

            <Input
                type="password"
                {...register('confirmPassword')}
                placeholder="Confirm Password"
            />
            {errors.confirmPassword && <Div>{errors.confirmPassword.message}</Div>}

            <Input
                {...register('studentId')}
                placeholder="Student ID"
            />
            {errors.studentId && <Div>{errors.studentId.message}</Div>}

            <Input
                {...register('phoneNumber')}
                placeholder="Phone Number"
            />
            {errors.phoneNumber && <Div>{errors.phoneNumber.message}</Div>}

            <label>
                <input
                    type="checkbox"
                    {...register('terms')}
                />
                Agree to terms
            </label>
            {errors.terms && <Div>{errors.terms.message}</Div>}
            <Div>
                <button type="submit" disabled={    (submitCount > 0)  && !isValid}>Register</button>
            </Div>
            {isSubmitSuccessful ? <Div>Form submitted successfully!</Div> : null}
        </form>
    );
}