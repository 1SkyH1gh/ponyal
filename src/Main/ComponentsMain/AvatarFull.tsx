import * as React from "react";
import {FunctionComponent} from "react";
import styles from '../MainStyles.module.scss'
export interface AvatarFullProps {

}

export const AvatarFull:FunctionComponent<AvatarFullProps>=()=>{
    return(
        <div className={styles.avatarFull}>
            <img/>

        </div>
    )
}