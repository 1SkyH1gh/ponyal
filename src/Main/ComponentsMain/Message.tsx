import * as React from "react";
import {FunctionComponent} from "react";
import styles from '../MainStyles.module.scss'
export interface MessageProps{


}

export const Message:FunctionComponent<MessageProps>=()=>{
    return(
        <div className={styles.message}>
            <form className={styles.formMess}>
                <input placeholder="new post" className={styles.inputMess}/>
            </form>
            <div className={styles.sendMess}>send</div>
        </div>
    )
}