import React, { useEffect, useState } from 'react';
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/api/getallblogs").then((fetchedData) => {
            return fetchedData.json();
        }).then((data) => {
            setBlogs(data);
        })
    }, [])
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

export default Blog;