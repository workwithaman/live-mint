import React from 'react'
import Card from '../components/shared/Card'
import styles from '../Styles/RightNav.module.css'
import { News } from '../data'

const RightNav = () => {
    return (
        <>
            <div className={styles.right_wrapper}>
                {
                    News.map((News_tag) => (
                        <>
                            <div className={styles.title} key={News_tag.id}>
                                <h3>{News_tag.title}</h3>
                                <img src="../images/arrow_right.svg" alt=''/>
                            </div>
                            {
                                News_tag.items.map((item) => (
                                    <Card item={item} key={item.storyId} />
                                ))
                            }
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default RightNav
