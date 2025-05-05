import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IBlog } from "@/types/blog-type";

const BlogItem = ({blog}:{blog:IBlog}) => {
  return (
    <div className="blog-post-item">
      <div className="blog-post-thumb">
        <Link href={`/blog-details/${blog.id}`}>
          <Image src={blog.img} alt="img" style={{width:'100%',height:'auto'}} />
        </Link>
      </div>
      <div className="blog-post-content">
        <div className="blog-post-meta">
          <ul className="list-wrap">
            <li>
              By<Link href={`/blog-details/${blog.id}`}>{blog.author}</Link>
            </li>
            <li>
              <i className="far fa-calendar-alt"></i> {blog.author}
            </li>
            <li>
              <i className="far fa-comments"></i>
              <Link href={`/blog-details/${blog.id}`}>{blog.comments === 0 ? 'No comments' : `${blog.comments} comments`}</Link>
            </li>
          </ul>
        </div>
        <h2 className="title">
          <Link href={`/blog-details/${blog.id}`}>{blog.title}</Link>
        </h2>
        <p>
          {blog.desc}
        </p>
        <div className="blog-post-bottom">
          <div className="blog-post-read">
            <Link href={`/blog-details/${blog.id}`}>
              READ MORE <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          <div className="blog-post-share">
            <h5 className="share">share :</h5>
            <ul className="list-wrap">
              <li>
                <Link href={`https://www.facebook.com/`} target="_blank">
                  <i className="fab fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link href={`https://twitter.com/`} target="_blank">
                  <i className="fab fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link href={`https://www.linkedin.com/`} target="_blank">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
