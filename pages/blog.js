import React, { useEffect, useState } from 'react';
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';

const Blog = (props) => {
    const [blogs, setBlogs] = useState(props.allBlogs);
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {blogs.map((blog_item) => {
                    return (
                        <div key={blog_item.slug} className={styles.blogItem}>
                            <Link href={`blogpost/${blog_item.slug}`}>
                                <h2>{blog_item.title}</h2>
                            </Link>
                            <br />
                            <p>{blog_item.content.substr(0, 200)}...</p>
                        </div>
                    )
                })}
            </main>
        </div>
    )
};

export async function getServerSideProps(context) {
    let data = await fetch("http://localhost:3000/api/getallblogs");
    let allBlogs = await data.json();
    return {
        props: {allBlogs},
    }
}

export default Blog;