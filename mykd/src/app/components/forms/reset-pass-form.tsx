'use client'
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import ErrorMsg from "../common/err-message";
import { notifySuccess } from "@/utils/toast";

interface IFormInput {
    email: string;
}

export default function ResetPassForm() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        // console.log(data)
        if (data) {
            notifySuccess('Login successfully!');
        }
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="account__form">
            <ErrorMsg msg={errors.email?.message as string} />
            <div className="form-grp">
                <label htmlFor="email">Email</label>
                <input {...register("email", { required: `Email is required!` })} id="email" type="text" placeholder="Enter your email" />
            </div>
            <button type="submit" className="btn mt-15 btn-two arrow-btn">Send mail</button>
        </form>
    )
}
