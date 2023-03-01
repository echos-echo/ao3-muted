import React, { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css';
import { MuteFic } from "./MuteFic";
import { MuteTag } from "./MuteTag";
import { HowTo } from "./HowTo";

export const Nav = () => {


    return (
        <div>
            <div className={styles.center}>
                <div className={styles.card}>
                    <p className={styles.description}>
                    Mute a Tag
                    </p>
                </div>
                <div className={styles.card}>
                    <p className={styles.description}>
                    Mute a Fic
                    </p>
                </div>
                <div className={styles.card}>
                    <p className={styles.description}>
                    How to Use
                    </p>
                </div>
            </div>
            {true ? <HowTo/> : <MuteFic/>}
        </div>
    )
}