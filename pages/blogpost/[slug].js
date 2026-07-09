import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/BlogPost.module.css";

const slug = () => {
    const router = useRouter();
    const [blog, setBlog] = useState();
    useEffect(() => {
        if (!router.isReady) {
            return;
        }
        const { slug } = router.query;
        fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((fetchedData) => {
            return fetchedData.json();
        }).then((data) => {
            setBlog(data);
        })
    }, [router.isReady])
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

export default slug;