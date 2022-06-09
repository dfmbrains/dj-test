import React from 'react';
import classes from './loginNotification.module.css';
import {Typography} from "@mui/material";
import { Button } from '../../atoms';

const LoginNotification = () => {
    return (
        <div>
            <i className="ri-close-fill"/>
            <Typography variant={"h4"}>You need to be logged in to apply for this event.</Typography>
            <Button>Login</Button>
        </div>
    );
};

export default LoginNotification;