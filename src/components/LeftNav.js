import React, {useState, useEffect} from 'react'
import styles from '../Styles/LeftNav.module.css'
import {Link, useLocation} from 'react-router-dom'

const LeftNav = () => {

    // assining values for background effects
    // of links

    const [isLink, setIsLink] = useState("")
    const location = useLocation()

    useEffect(() => {
        setIsLink(location.pathname)
    }, [location.pathname])
    
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.left_wrapper}>
                    <div className={styles.routes}>
                    <li>
                        <Link to="/" className={ isLink === "/" ? `${styles.links} ${styles.active}` : styles.links}>
                            <h5>
                        Home
                            </h5>
                        </Link>
                    </li>
                    <li>
                        <Link to="/latest-news" className={ isLink === "/latest-news" ? `${styles.links} ${styles.active}` : styles.links}>
                            <h5>
                        Latest
                            </h5>
                        </Link>
                    </li><li>
                        <Link to="/market" className={ isLink === "/market" ? `${styles.links} ${styles.active}` : styles.links}>
                            <h5>
                        Markets
                            </h5>
                        </Link>
                    </li><li>
                        <Link to="/premium" className={ isLink === "/premium" ? `${styles.links} ${styles.active}` : styles.links}>
                            <h5>
                        Premium
                            </h5>
                        </Link>
                    </li><li>
                        <Link to="/recommended-for-you" className={ isLink === "/recommended-for-you" ? `${styles.links} ${styles.active}` : styles.links}>
                            <h5>
                        For You
                            </h5>
                        </Link>
                    </li>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LeftNav
