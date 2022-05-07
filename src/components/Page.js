import React, { useEffect} from 'react'
import Card from './shared/Card'
import styles from '../Styles/Home.module.css'
import {News} from '../data'
import { useLocation } from 'react-router-dom'

const Page = ({index, isHome}) => {
    // const [path, setPath] = useState("")
    const location = useLocation()

    useEffect(() => {
        // setPath(location.pathname)
        if(location.pathname === "/") {
            document.title = "Business News Today: Read Latest Business News, Live India Share Market News, Finance & Economy News | Mint"
        }

        else if(location.pathname === "/latest-news") {
            document.title = "Latest News Today: Latest News Headlines, Breaking News, Current News | Mint"
        }

        else if(location.pathname === "/market") {
            document.title = "Market News: Sensex Today, Share Market News, NIFTY, BSE/NSE LIVE, Sensex Nifty Updates | Mint"
        }

        else if(location.pathname === "/premium") {
            document.title = "Read Premium News and Stories on Mint"
        }

        else if(location.pathname === "/recommended-for-you") {
            document.title = "Mint Business News Displaying Recommended For You Stories Customized To Match Your Interests"
        }
    }, [location.pathname])

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.home_wrapper}>
                    <>
                            {
                                News[index].items.map((item) => (
                                    <Card item={item} key={item.storyId} home={true} />
                                ))
                            }
                        </>                

                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
