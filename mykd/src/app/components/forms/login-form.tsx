'use client'
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import ErrorMsg from "../common/err-message";
import { notifySuccess } from "@/utils/toast";
import Link from "next/link";

interface IFormInput {
    email: string;
    password: string;
}


export default function LoginForm() {
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
                <input {...register("email", { required: `Email is required!` })} id="email" type="text" placeholder="email" />
            </div>
            <ErrorMsg msg={errors.password?.message as string} />
            <div className="form-grp">
                <label htmlFor="password">Password</label>
                <input {...register("password", { required: `Password is required!`,minLength: 6 })} id="password" type="text" placeholder="password" />
            </div>
            <div className="account__check">
                <div className="account__check-remember">
                    <input type="checkbox" className="form-check-input" value="" id="terms-check" />
                    <label htmlFor="terms-check" className="form-check-label">Remember me</label>
                </div>
                <div className="account__check-forgot">
                    <Link href="/reset-password">Forgot Password?</Link>
                </div>
            </div>
            <button type="submit" className="btn btn-two arrow-btn">Login</button>
        </form>
    )
}
