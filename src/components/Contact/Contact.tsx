import React, { useState } from "react";

import styles from "./Contact.module.scss";
import Link from "next/link";
import Image from "next/image";
import facebook from "../../assets/images/Facebook.png";
import instagram from "../../assets/images/Instagram.png";
import send from "../../assets/images/emailSend.png";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    comment: "",
  });

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log("Form data:", formData);
    // You can perform additional actions with the form data here
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.background}>
          <div className={styles.container}>
            <div className={styles.title}>CONTACT</div>
            <div className={styles.iconsContainer}>
              <Link href="/" className={styles.icons}>
                <Image src={instagram} alt="Instagram logo" />
              </Link>
              <Link href="/" className={styles.icons}>
                <Image src={facebook} alt="Facebook logo" />
              </Link>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                className={styles.input}
                placeholder="NAME"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="mail"
                className={styles.input}
                placeholder="MAIL"
                value={formData.mail}
                onChange={handleInputChange}
              />
              <textarea
                name="comment"
                className={styles.comment}
                placeholder="COMMENT"
                value={formData.comment}
                onChange={handleInputChange}
              />
              <button type="submit" value="Submit" className={styles.submit}>
                <Image src={send} alt="Send logo" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
