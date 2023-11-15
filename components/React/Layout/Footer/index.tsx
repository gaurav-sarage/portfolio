import { useState, useEffect, useContext } from "react";
import Link from "next/link";

import config from "config.json";

import styles from "./style.module.css";
import HomeStyles from "@/styles/Home.module.css";

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div></div>
                <p className={styles.paragraph}>
                    Made with <span className={HomeStyles.highlight}>
                        NextJS
                    </span>
                </p>
            </div>
            <div className={styles.others}>
                <div className={styles.socialsContainer}>
                    <div className={styles.linksColumn}>
                        <Link href={"/"}>
                            <a aria-label="Home">Home</a>
                        </Link>
                        <Link href={"/blog"}>
                            <a aria-label="Blogs">Blogs</a>
                        </Link>
                        <Link href={"/about"}>
                            <a aria-label="About">About</a>
                        </Link>
                        <Link href={"/resume"}>
                            <a target="_blank" rel="noreferrer"
                            aria-label="Resume">
                                Resume
                            </a>
                        </Link>
                    </div>
                    <div className={styles.linksColumn}>
                        <a
                            href={config.user.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="GitHub"
                        >
                            GitHub
                        </a>
                        <a
                            href={config.user.twitterLink}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitter"
                        >
                            Twitter
                        </a>
                    </div>
                    <div className={styles.linksColumn}>
                        <a
                            href={config.user.linkedinLink}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            LinkedIn
                        </a>
                        <a
                            href={config.user.devToLink}
                            target="`_blank"
                            rel="noreferrer"
                            aria-label="DevTo"
                        >
                            DevTo
                        </a>
                        <a
                            href="/rss.xml"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="RSS Feed"
                        >
                            RSS
                        </a>
                        <a
                            href="https://spotify.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Spotify"
                        >
                            Spotify
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}