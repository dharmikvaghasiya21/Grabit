import React from "react";
import Blogitem from "./Blogitem";



const Blog = () => {
    return (
        <>
            <div className="blog_block">
                <div className="container">
                    <div className="blog_block_inner">
                        <div className="title">
                            <div className="title_inner">
                                <div className="text">
                                    <h2>Latest <span>Blog</span></h2>
                                    <p>We tackle interesting topics every day in 2023.</p>
                                </div>
                                <div className="title_link">
                                    <a href="#">All Blogs <i class="fa-solid fa-angles-right"></i></a>
                                </div>
                            </div>
                            <div className="blog_contant">
                                <Blogitem img="assets\img\Blog\01.jpg" date="June 30,2022 -" cat="Organic" handing="Marketing Guide: 5 Steps to Success to way." />
                                <Blogitem img="assets\img\Blog\2.jpg" date="April 02,2022 - " cat="Fruits" handing="Best way to solve business deal issue in market." />
                                <Blogitem img="assets\img\Blog\03.jpg" date="Mar 09,2022 -" cat="Vegetables" handing="31 grocery customer service stats know in 2019." />
                                <Blogitem img="assets\img\Blog\04.jpg" date="January 25,2022 -" cat="Fastfood" handing="Business ideas to grow your business traffic." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog;