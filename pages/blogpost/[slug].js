import React, { useEffect, useState } from 'react';
import styles from "@/styles/BlogPost.module.css";
import fs from 'node:fs';

const slug = (props) => {
    const [blog, setBlog] = useState(props.myBlog);
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>{blog && blog.title}</h1>
                <br /><br />
                <div>
                    {blog && blog.content}
                </div>
            </main>
        </div>
    )
};

export async function getStaticPaths() {
    return {
        paths: [
            { params: { 'slug': 'how-to-learn-flask' } },
            { params: { 'slug': 'how-to-learn-javascript' } },
            { params: { 'slug': 'how-to-learn-nextjs' } },
            { params: { 'slug': 'how-to-learn-python' } },
            { params: { 'slug': 'how-to-learn-react' } },
        ],
        fallback: true
    };
}

export async function getStaticProps(context) {
    const { slug } = context.params;
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, { encoding: 'utf8' });
    return {
        props: { 'myBlog': JSON.parse(myBlog) },
    }
}

export default slug;