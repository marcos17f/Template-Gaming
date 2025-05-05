import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import comment_img_1 from "@/assets/img/blog/comment01.png";
import comment_img_2 from "@/assets/img/blog/comment02.png";
import comment_img_3 from "@/assets/img/blog/comment03.png";

function CommentBox({
  user,
  name,
  date,
  desc,
}: {
  user: StaticImageData;
  name: string;
  date: string;
  desc: string;
}) {
  return (
    <div className="comments-box">
      <div className="comments-avatar">
        <Image src={user} alt="img" style={{height:'auto'}} />
      </div>
      <div className="comments-text">
        <div className="avatar-name">
          <h6 className="name">
            {name}{" "}
            <Link href="#" className="comment-reply-link">
              <i className="fas fa-reply"></i> Reply
            </Link>
          </h6>
          <span className="date">{date}</span>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
}
const BlogComments = () => {
  return (
    <div className="latest-comments">
      <ul className="list-wrap">
        <li>
          <CommentBox
            user={comment_img_1}
            name="John William"
            date="September 6, 2023"
            desc="Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor uni enim ad minim veniam quis nostrud today."
          />
          <ul className="children">
            <li>
              <CommentBox
                user={comment_img_2}
                name="Hanry Foul"
                date="October 12, 2023"
                desc="Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor uni enim ad minim veniam quis nostrud today."
              />
            </li>
          </ul>
        </li>
        <li>
          <CommentBox
            user={comment_img_3}
            name="Luna Rose"
            date="December 12, 2022"
            desc="Axcepteur sint occaecat atat non proident, sunt culpa officia deserunt mollit anim id est labor umLor emdolor uni enim ad minim veniam quis nostrud today."
          />
        </li>
      </ul>
    </div>
  );
};

export default BlogComments;
