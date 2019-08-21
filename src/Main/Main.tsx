import * as React from 'react'
import {FunctionComponent} from "react";
import {StaticControlPanel} from "./ComponentsMain/StaticControlPanel";
import {ImageGallery} from "./ComponentsMain/ImageGallery";
import {AvatarFull} from "./ComponentsMain/AvatarFull";
import {Avatardescription} from "./ComponentsMain/Avatardescription";
import {AccountStatus} from "./ComponentsMain/AccountStatus";
import {Subscribe} from "./ComponentsMain/Subscribe";
import {Message} from "./ComponentsMain/Message";
import {Recommended} from "./ComponentsMain/Recommended";
import {VideoList} from "./ComponentsMain/VideoList";
import {Post} from "./ComponentsMain/Post";
import styles from './MainStyles.module.scss'
export interface MainProps {

}

export const Main:FunctionComponent<MainProps>=()=>{
    return(
        <div className={styles.main}>
        <StaticControlPanel/>
        <VideoList/>
        <AvatarFull/>
        <Avatardescription/>
        <AccountStatus/>
        <Post/>
        <Subscribe/>
        <Message/>
        <Recommended/>
        <ImageGallery/>


        </div>
    )
}