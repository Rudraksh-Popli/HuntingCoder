import React from 'react';
import styles from "@/styles/Blog.module.css";
import Link from 'next/link';

const Blog = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.blogItem}>
                    <Link href={'blogpost/learn-javascript'}>
                        <h2>How to Learn JavaScript in 2026</h2>
                    </Link>
                    <br />
                    <p>JavaScript is the language used to design logic for the web</p>
                </div>
                <div className={styles.blogItem}>
                    <h2>How to Learn JavaScript in 2026</h2>
                    <br />
                    <p>JavaScript is the language used to design logic for the web</p>
                </div>
                <div className={styles.blogItem}>
                    <h2>How to Learn JavaScript in 2026</h2>
                    <br />
                    <p>JavaScript is the language used to design logic for the web</p>
                </div>
                <div className={styles.blogItem}>
                    <h2>How to Learn JavaScript in 2026</h2>
                    <br />
                    <p>JavaScript is the language used to design logic for the web</p>
                </div>
            </main>
        </div>
    )
};

export default Blog;