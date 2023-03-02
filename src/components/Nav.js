import React, { useState, useEffect } from "react";
import styles from '@/styles/Home.module.css';
import { MuteFic } from "./MuteFic";
import { MuteTag } from "./MuteTag";
import { HowTo } from "./HowTo";

export const Nav = () => {
    const [tab, setTab] = useState(<HowTo/>);

    const handleOnClick = (navTab) => () => {
        console.log(navTab);
        switch(navTab) {
            case 'muteTag':
                setTab(<MuteTag/>);
                break;
            case 'muteFic':
                setTab(<MuteFic/>);
                break;
            case 'howTo':
                setTab(<HowTo/>);
                break;
        }
    }

    return (
        <div>
            <div className={styles.centeredNav}>
                <div className={styles.card} onClick={handleOnClick('muteTag')}>
                    <p className={styles.navigation}>
                    Mute a Tag
                    </p>
                </div>
                <div className={styles.card} onClick={handleOnClick('muteFic')}>
                    <p className={styles.navigation}>
                    Mute a Fic
                    </p>
                </div>
                <div className={styles.card} onClick={handleOnClick('howTo')}>
                    <p className={styles.navigation}>
                    How to Use
                    </p>
                </div>
            </div>
            {tab}
        </div>
    )
}