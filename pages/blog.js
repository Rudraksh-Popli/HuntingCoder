import React, { useEffect, useState } from 'react';
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';
import fs from 'node:fs';

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
                            <p>{blog_item.metadesc.substr(0, 200)}...</p>
                        </div>
                    )
                })}
            </main>
        </div>
    )
};

export async function getStaticProps(context) {
    let data = await fs.promises.readdir("blogdata");
    let myBlog;
    let allBlogs = [];
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        myBlog = await fs.promises.readFile(`blogdata/${element}`, 'utf-8');
        allBlogs.push(JSON.parse(myBlog));
    }
    return {
        props: { allBlogs },
    }
}

export default Blog;