import React, { useState } from "react";

import styles from "./Contact.module.scss";
import Link from "next/link";
import Image from "next/image";
import facebook from "@/assets/images/Facebook.png";
import instagram from "@/assets/images/Instagram.png";
import send from "@/assets/images/emailSend.png";

import { useLanguage } from '@/hooks/LanguageContext';

export type Language = 'ENG' | 'FR';

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
  };

  const [focusedInput, setFocusedInput] = useState<string>();

  const { currentLanguage } = useLanguage();
  const placeholders: Record<Language, Record<string, string>> = {
    ENG: {
      name: 'NAME',
      comment: 'COMMENT',
    },
    FR: {
      name: 'NOM',
      comment: 'COMMENTAIRE',
    },
  };

  return (
    <>
      <div className={styles.main}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.container}>
          <div className={styles.title}>CONTACT</div>
          <div className={styles.contentWrapper}>
            <div className={styles.iconsContainer}>
              <Link href="https://www.instagram.com/tonias.necklaces/" className={styles.icons}
                rel="noopener noreferrer"
                target="_blank">
                <Image src={instagram} alt="Instagram logo" />
              </Link>
              <Link href="https://www.facebook.com/toniasnecklaces" className={styles.icons}
                rel="noopener noreferrer"
                target="_blank">
                <Image src={facebook} alt="Facebook logo" />
              </Link>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                className={styles.input}
                placeholder={focusedInput === "name" ? "" : placeholders[currentLanguage as Language][`name`]}
                value={formData.name}
                onChange={handleInputChange}
                onFocus={() => setFocusedInput('name')}
                onBlur={() => setFocusedInput('')}
                autoComplete="off"
              />
              <input
                type="email"
                name="mail"
                className={styles.input}
                placeholder={focusedInput === "mail" ? "" : "MAIL"}
                value={formData.mail}
                onChange={handleInputChange}
                onFocus={() => setFocusedInput('mail')}
                onBlur={() => setFocusedInput('')}
                autoComplete="off"
              />
              <textarea
                name="comment"
                className={styles.comment}
                placeholder={focusedInput === "comment" ? "" : placeholders[currentLanguage as Language][`comment`]}
                value={formData.comment}
                onChange={handleInputChange}
                onFocus={() => setFocusedInput('comment')}
                onBlur={() => setFocusedInput('')}
                autoComplete="off"
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
