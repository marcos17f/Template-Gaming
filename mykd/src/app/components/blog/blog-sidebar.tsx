import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import avatar from '@/assets/img/blog/avatar.jpg';
import SidebarInstagram from './sidebar-instagram';
import blog_data from '@/data/blog-data';

const BlogSidebar = () => {
  return (
    <aside className="blog-sidebar">
        <div className="blog-widget">
            <div className="sidebar__author">
                <div className="sidebar__author-thumb">
                    <Image src={avatar} alt="img" style={{width:'100%',height:'auto'}} />
                </div>
                <div className="sidebar__author-content">
                    <h4 className="name">Kaceytron G.</h4>
                    <p>Lorem ipsum sitamet conteur adipiscing Duis elementum solliciin</p>
                    <div className="sidebar__author-social">
                        <Link href="#"><i className="fab fa-twitter"></i></Link>
                        <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                        <Link href="#"><i className="fab fa-linkedin-in"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="blog-widget">
            <form className="sidebar-search-form position-relative">
                <input type="text" placeholder="Search here.."/>
                <button><i className="flaticon-loupe"></i></button>
            </form>
        </div>
        <div className="blog-widget widget_categories">
            <h4 className="fw-title">CATEGORIES</h4>
            <ul className="list-wrap">
                <li><Link href="#">gaming</Link><span className="float-right">(11)</span></li>
                <li><Link href="#">ELECTRONIC</Link><span className="float-right">(4)</span></li>
                <li><Link href="#">online</Link><span className="float-right">(21)</span></li>
                <li><Link href="#">TOURNAMENT</Link><span className="float-right">(15)</span></li>
                <li><Link href="#">controller</Link><span className="float-right">(2)</span></li>
                <li><Link href="#">live</Link><span className="float-right">(7)</span></li>
            </ul>
        </div>
        <div className="blog-widget">
            <h4 className="fw-title">Recent Posts</h4>
            <div className="rc__post-wrapper">
              {blog_data.slice(0,3).map((b) => (
                <div key={b.id} className="rc__post-item">
                    <div className="rc__post-thumb">
                        <Link href={`/blog-details/${b.id}`}>
                          <Image src={b.img} alt="img" width={112} height={88} />
                        </Link>
                    </div>
                    <div className="rc__post-content">
                        <h6 className="title"><Link href={`/blog-details/${b.id}`}>{b.title}</Link></h6>
                        <span className="date">{b.date}</span>
                    </div>
                </div>
              ))}
            </div>
        </div>
        <div className="blog-widget">
            <h4 className="fw-title">Newsletter</h4>
            <div className="sidebar__newsletter">
                <p>Lorem ipsum sitamet conteur adipiscin</p>
                <form action="#" className="sidebar__newsletter-form">
                    <input type="email" name="email" placeholder="Enter Your Email"/>
                    <button type="submit"><i className="fas fa-arrow-right"></i></button>
                </form>
            </div>
        </div>
        <div className="blog-widget">
            <h4 className="fw-title">INSTAGRAM</h4>
            {/* instagram area start */}
            <SidebarInstagram/>
            {/* instagram area end */}
        </div>
        <div className="blog-widget">
            <h4 className="fw-title">Tag Cloud</h4>
            <div className="tagcloud">
                <Link href="#">E-sports</Link>
                <Link href="#">Fantasy</Link>
                <Link href="#">game</Link>
                <Link href="#">Tournaments</Link>
                <Link href="#">Matches</Link>
                <Link href="#">Streamers</Link>
            </div>
        </div>
    </aside>
  );
};

export default BlogSidebar;