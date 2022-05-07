import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../Styles/Announcement.module.css'

const Announcement = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <p>Upto 15% off on premium plans </p>
                <Link to="/">
                    <h5>
                    Subscribe Now
                    </h5>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Announcement
