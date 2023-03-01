import React, { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css';
import { MuteFic } from "./MuteFic";
import { MuteTag } from "./MuteTag";
import { HowTo } from "./HowTo";

export const Nav = () => {
    const [tab, setTab] = useState(<HowTo/>);

    const handleOnClick = (navTab) => () => {
        const tabType = navTab;
        console.dir(tabType);
        setTab(tabType);
    }

    return (
        <div>
            <div className={styles.center}>
                <div className={styles.card} onClick={handleOnClick('muteTag')}>
                    <p className={styles.description}>
                    Mute a Tag
                    </p>
                </div>
                <div className={styles.card} onClick={handleOnClick('muteFic')}>
                    <p className={styles.description}>
                    Mute a Fic
                    </p>
                </div>
                <div className={styles.card} onClick={handleOnClick('howTo')}>
                    <p className={styles.description}>
                    How to Use
                    </p>
                </div>
            </div>
            {tab}
        </div>
    )
}