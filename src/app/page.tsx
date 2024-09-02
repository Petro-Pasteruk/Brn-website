'use client';

import Image from "next/image";
import styles from "./page.module.css";

declare global {
    interface Window {
        fbq: (...args: any[]) => void;
    }
}

export default function LandingPage() {
    const handleClick = () => {
        if (typeof window !== "undefined" && window.fbq) {
            window.fbq('track', 'Appstore_button', {
                content_name: 'Get in Now Button Click',
                content_category: 'Intro Section',
            });
        }
    };

    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <a href="https://brnapp.com" className={styles.header__logo}>
                    <Image
                        src="/images/logo.png"
                        alt="BRN Logo"
                        width={482}
                        height={482}
                        priority
                    />
                </a>
            </header>
            <main className={styles.main}>
                <div className={styles.intro}>
                    <h1 className={styles.intro__title}>BRN</h1>
                    <div className={styles.intro__desc}>Unlock your brain’s full potential</div>
                    <a href="https://apps.apple.com/app/apple-store/id1521846241?pt=118212041&ct=Website%20button&mt=8" className={styles.intro__link} onClick={handleClick}>
                        Get it Now
                    </a>
                </div>
            </main>
            <footer className={styles.footer}>
                <Image
                    src="/images/footer-img.png"
                    alt="Footer Img"
                    className={styles.footer__img}
                    width={390}
                    height={857}
                    priority
                />
            </footer>
        </div>
    );
}
