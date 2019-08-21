import * as React from 'react'
import {FunctionComponent} from "react";
import styles from '../MainStyles.module.scss'
export interface PostProps {

}

export const Post:FunctionComponent<PostProps>=()=>{
    return(
        <div className={styles.post}>
            <title className={styles.postTitle}>title</title>
            <div className={styles.postBody}>body</div>
            <p className={styles.postDate}>date</p>
            <div className={styles.actionPost}>
                <p>comment</p>
                <p>like</p>
            </div>
        </div>
    )
}