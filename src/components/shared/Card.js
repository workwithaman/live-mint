import React, { useState } from 'react'
import styles from '../../Styles/Card.module.css'
import { Link } from 'react-router-dom'

const Card = ({ item, home }) => {
    const [toggleBookmark, setToggleBookmark] = useState(false)
    const [toggleShare, setToggleShare] = useState(false)
    const time = new Date()
    const updateDate = time.toDateString(item.modifiedDate)

    // Logic for handleing bookmark
    const handleBookmark = () => {
        setToggleBookmark(!toggleBookmark)
    }

    // Popping Share widget--------
    // -------------

    const handleShare = () => {
        setToggleShare(!toggleShare)
    }
    return (
        <>
            <div className={home ? `${styles.wrapper} ${styles.active}` : styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.sub_title}>
                        <h5>
                            <Link to={`/news/${item.storyId}`}>
                                {item.headline}
                            </Link>
                        </h5>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_p}>
                                <p>
                                    {item.timeToRead} min read
                                </p>
                            <p> <li>{updateDate}</li></p>
                        </div>
                        <div className={styles.info_p}>
                            <img src={toggleBookmark ? '../images/bookmark_dark.svg' : '../images/bookmark.svg'} onClick={handleBookmark} alt='' />
                            {
                                home && <>
                                    <div className={styles.share_parent}>
                                        <img src='../images/share_dark.svg' alt='' onClick={handleShare} />
                                        <div className={toggleShare ? `${styles.share_widget} ${styles.active}` : styles.share_widget}>
                                            <p>
                                                Share Via
                                            </p>
                                            <div className={styles.share_icon}>
                                                <img src='../images/facebook_dark.svg' alt='' />
                                                <img src='../images/linkdIn_dark.svg' alt='' />
                                                <img src='../images/twitter_dark.svg' alt='' />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src={item.img} alt='' />
                </div>
            </div>
        </>
    )
}

export default Card