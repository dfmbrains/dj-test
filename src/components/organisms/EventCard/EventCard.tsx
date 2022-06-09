import React from 'react';
import styles from './eventCard.module.scss'
import eventsTest from '../../../assets/images/testEvent.png';
import {Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import { ROUTES } from '../../../utils/constants/general';

const EventCard = () => {

    const navigate = useNavigate();

    return (
        <div className={styles.box}>
            <div className={styles.top}>
                <div>
                    <div className={styles.titleBox}>
                        <Typography variant={"h5"}>14 HR PARTY: Secret Special Guest</Typography>
                    </div>
                    <Typography className={styles.place} variant={"subtitle1"}>London</Typography>
                    <Typography variant={"subtitle2"}>Saturday 25th June 2022</Typography>
                    <Typography className={styles.time} variant={"subtitle2"}>10:30 PM (5 hours)</Typography>
                    <Typography variant={"body1"}>
                        Friday night techno. Need someone experienced to cover up.
                    </Typography>
                </div>
                <div className={styles.logo}>
                    <img className={styles.eventImage} src={eventsTest} alt=""/>
                    <Typography className={styles.name} variant={"body1"}>Studio 338</Typography>
                </div>
            </div>
            <div className={styles.bot}>
                <Button onClick={() => navigate(ROUTES.EVENT_DETAILS)} variant={"text"}>
                    <Typography variant={"h6"}>View details</Typography>
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.6623 1.04549L16.2835 1.42425C16.0325 1.67528 16.0325 2.08232 16.2835 2.33341L20.7797 6.80362H0.642857C0.287839 6.80362 0 7.09146 0 7.44648V7.98219C0 8.33721 0.287839 8.62505 0.642857 8.62505H20.7797L16.2835 13.0953C16.0325 13.3463 16.0325 13.7533 16.2835 14.0044L16.6623 14.3832C16.9134 14.6342 17.3204 14.6342 17.5714 14.3832L23.8117 8.16889C24.0627 7.91785 24.0627 7.51082 23.8117 7.25973L17.5714 1.04549C17.3204 0.794405 16.9134 0.794405 16.6623 1.04549Z"
                            fill="white"/>
                    </svg>
                </Button>
            </div>
        </div>
    );
};

export default EventCard;