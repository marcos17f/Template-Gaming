'use client'
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import ErrorMsg from "../common/err-message";
import { notifySuccess } from "@/utils/toast";

interface IFormInput {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormTwo() {
    const { register, handleSubmit,formState: { errors },reset } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => {
      // console.log(data)
      if(data){
        notifySuccess('Message sent successfully!');
      }
      reset()
    }
    return (
        <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-12">
                  <ErrorMsg msg={errors.name?.message as string} />
                    <div className="input-grp">
                        <input {...register("name", { required: `Name is required!` })} name="name" type="text" placeholder="Your Name *" />
                    </div>
                </div>
                <div className="col-12">
                  <ErrorMsg msg={errors.email?.message as string} />
                    <div className="input-grp">
                        <input {...register("email", { required: `Email is required!` })} name="email" type="email" placeholder="Your Email *" />
                    </div>
                </div>
            </div>
            <div className="input-grp message-grp">
              <ErrorMsg msg={errors.message?.message as string} />
                <textarea {...register("message", { required: `Message is required!` })} name="message" cols={30} rows={10} placeholder="Enter your message"></textarea>
            </div>
            <button className="submit-btn tg-btn-5" type="submit">
                <span>Submit Now</span>
            </button>
        </form>
    )
}
