"use client";

import styles from './darkModeToggle.module.css'
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useContext } from 'react';
import { ThemeContext } from '@/context/themeContext/ThemeContext';


const DarkModeToggle = () => {
    const { toggle, mode } = useContext(ThemeContext);
    return (
        <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}>
                <FaMoon />
            </div>
            <div className={styles.icon}>
                <MdSunny />
            </div>
            <div className={styles.ball} style={mode === "light" ? { left: "2px" } : { right: "2px" }} />
        </div>
    )
}

export default DarkModeToggle