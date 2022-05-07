import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from '../Styles/Index.module.css'
import Card from '../components/shared/Card'
import { News } from '../data'

const Index = () => {

    // getting query Id to search news---------
    // ----------------------------

    const location = useLocation()
    const id = location.pathname.split('/')[2]
    let post

    if(id) {
         post = News[0].items.find((item) => {
            return item.storyId == id
        })
    }

    console.log(post.description)

        return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.home_wrapper}>
                        <div className={styles.content}>
                            <h3>
                                {post.headline}
                            </h3>
                            <img src={post.img} alt='' />
                            {
                                post.description.map((desc) => (
                            <p>
                                {desc}
                            </p>
                                ))
                            }
                        </div>
                    </div>
                    {<>
                        {
                            News[0].items.map((item) => (
                                <Card item={item} key={item.storyId} home={true} />
                            ))
                        }
                    </>}
                </div>
            </div>
        </>
    )
}

export default Index