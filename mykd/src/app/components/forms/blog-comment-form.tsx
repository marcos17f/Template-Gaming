"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import ErrorMsg from "../common/err-message";
import { notifySuccess } from "@/utils/toast";

// type
interface IFormInput {
  name: string;
  email: string;
  comment: string;
}
const BlogCommentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    // console.log(data)
    if (data) {
      notifySuccess("Message sent successfully!");
    }
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="comment-form">
      <p className="comment-notes">
        Email address will not be published. Required fields are marked *
      </p>
      <div className="row">
        <div className="col-sm-6">
          <ErrorMsg msg={errors.name?.message as string} />
          <div className="form-grp">
            <input
              type="text"
              placeholder="Name *"
              {...register("name", { required: `Name is required!` })}
              name="name"
            />
          </div>
        </div>
        <div className="col-sm-6">
          <ErrorMsg msg={errors.email?.message as string} />
          <div className="form-grp">
            <input
              type="email"
              placeholder="Email *"
              {...register("email", { required: `Email is required!` })}
              name="email"
            />
          </div>
        </div>
      </div>
      <div className="form-grp">
        <ErrorMsg msg={errors.comment?.message as string} />
        <textarea
          {...register("comment", { required: `Comment is required!` })}
          name="message"
          placeholder="Comment *"
        />
      </div>
      <button type="submit">Post Comment</button>
    </form>
  );
};

export default BlogCommentForm;
