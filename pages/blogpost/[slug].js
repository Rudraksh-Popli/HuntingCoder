import React from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/BlogPost.module.css";

const slug = () => {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Title of the page {slug}</h1>
                <br /><br />
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque exercitationem eius natus ab id sequi vero itaque praesentium earum, quam velit doloremque molestiae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, distinctio voluptate itaque aspernatur aut at quaerat natus. Illo fugit odio incidunt doloribus quia non unde enim facere ipsum a dolor doloremque, placeat quisquam? Consequuntur, veniam? Deserunt officiis vitae nobis laudantium ipsum similique. Sapiente, placeat earum!
                </div>
            </main>
        </div>
    )
};

export default slug;