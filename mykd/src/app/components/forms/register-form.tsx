'use client'
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import ErrorMsg from "../common/err-message";
import { notifySuccess } from "@/utils/toast";

interface IFormInput {
    fname: string;
    lname: string;
    email: string;
    password: string;
    confirmPassword: string
}


export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
        // console.log(data)
        if (data) {
            notifySuccess('Register successfully!');
        }
        reset()
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="account__form">
            <div className="row gutter-20">
                <div className="col-md-6">
                    <ErrorMsg msg={errors.fname?.message as string} />
                    <div className="form-grp">
                        <label htmlFor="fast-name">First Name</label>
                        <input {...register("fname", { required: `First name is required!` })} type="text" id="fast-name" placeholder="First Name" />
                    </div>
                </div>
                <div className="col-md-6">
                    <ErrorMsg msg={errors.lname?.message as string} />
                    <div className="form-grp">
                        <label htmlFor="last-name">Last name</label>
                        <input {...register("lname", { required: `Last name is required!` })} type="text" id="last-name" placeholder="Last name" />
                    </div>
                </div>
            </div>
            <ErrorMsg msg={errors.email?.message as string} />
            <div className="form-grp">
                <label htmlFor="email">Email</label>
                <input {...register("email", { required: `Email is required!` })} type="email" id="email" placeholder="email" />
            </div>
            <ErrorMsg msg={errors.password?.message as string} />
            <div className="form-grp">
                <label htmlFor="password">Password</label>
                <input {...register("password", { required: `Password is required!` })} type="password" id="password" placeholder="password" />
            </div>
            <ErrorMsg msg={errors.confirmPassword?.message as string} />
            <div className="form-grp">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input {...register("confirmPassword", {
                    required: true, validate: (val: string) => {
                        if (watch('password') != val) {
                            return "Your passwords do no match";
                        }
                    },
                })} type="password" id="confirm-password" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="btn btn-two arrow-btn">Sign Up</button>
        </form>
    )
}
