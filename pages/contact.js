import React, { useState } from 'react';
import styles from "@/styles/Contact.module.css";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, email, phone, desc };
        fetch("http://localhost:3000/api/postcontact", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                response.json();
            })
            .then((data) => {
                console.log('Success:', data);
                alert("Thanks for Contacting Us");
                setName("");
                setEmail("");
                setPhone("");
                setDesc("");
            })
            .catch((error) => {
                console.log("Error:", error);
            });
    }
    const handleChange = (e) => {
        if (e.target.name == "phone") {
            setPhone(e.target.value);
        }
        else if (e.target.name == "name") {
            setName(e.target.value);
        }
        else if (e.target.name == "email") {
            setEmail(e.target.value);
        }
        else if (e.target.name == "desc") {
            setDesc(e.target.value);
        }
    }
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [desc, setDesc] = useState("");
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.mb3}>Contact Us</h1>
                <form onSubmit={handleSubmit} method='post'>
                    <div className={styles.mb3}>
                        <label htmlFor="name" className={styles.formlabel}>Enter Your Name</label>
                        <input value={name} onChange={handleChange} type="text" className="form-control" id="name" name='name' />
                    </div>
                    <div className={styles.mb3}>
                        <label htmlFor="email" className={styles.formlabel}>Email address</label>
                        <input value={email} onChange={handleChange} type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
                    </div>
                    <div className={styles.mb3}>
                        <label htmlFor="phone" className={styles.formlabel}>Phone Number</label>
                        <input value={phone} onChange={handleChange} type="phone" className="form-control" id="phone" name='phone' />
                    </div>
                    <div className={styles.mb3}>
                        <label htmlFor="desc" className={styles.formlabel}>Elaborate your concern</label>
                        <textarea value={desc} onChange={handleChange} className="form-control" placeholder="Write your concern here" id="desc" name='desc'></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </main>
        </div>
    )
};

export default Contact;