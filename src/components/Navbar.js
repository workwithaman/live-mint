import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../Styles/Navbar.module.css'
import Announcement from '../components/Announcement'

const Navbar = () => {
    const [shrink, setShrink] = useState(false)

    // Declaring Date instace ------------
    // -------------------
    
    const date1 = new Date()
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = date1.toLocaleDateString([], options); 

    // Scroll Effect to the navbar--------------
    // ------------------------

        window.onscroll = () => {
            if (window.scrollY >= 40) {
                setShrink(true)
            }
            else if (window.scrollY < 15) {
                setShrink(false)
            }
        }

    return (
        <>
            <header className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={shrink ? `${styles.header} ${styles.showOff}` : styles.header}>
                        <div className={styles.hamburgerMenu}>
                            <div className={styles.hamburger}>
                                <img src="../images/menu-copy.svg" alt="" />
                                <h5>Explore</h5>
                            </div>
                        </div>
                        <div className={shrink ? `${styles.headerLogo} ${styles.small}` : styles.headerLogo}>
                            <Link to="/">
                                <img src="../images/livemint-logo-v2.svg" alt="" />
                            </Link>
                        </div>
                        <div className={styles.headerIcon}>
                            <div className={styles.subheader}>
                                <div className={styles.iconSprite}>
                                    <img src="../images/ico-search.svg" alt="" />
                                </div>
                                <div className={styles.iconSprite}>
                                    <img src="../images/ico-notification.svg" alt="" />
                                </div>
                                <div className={styles.epaper}>
                                    <Link to="">
                                        <h4>e-paper</h4>
                                    </Link>
                                </div>
                                <div className={styles.epaper}>
                                    <Link to="">
                                        <h4>Sign in</h4>
                                    </Link>
                                </div>
                            </div>
                            <div className={shrink ? `${styles.headerDate} ${styles.showOff}` : styles.headerDate}>
                                <h5>
                                    {currentDate}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <Announcement />
        </>
    )
}

export default Navbar
