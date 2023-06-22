import {Button, Typography} from "@mui/material";
import {useEffect, useState} from "react";

const Logout = ({client}) => {

    const [countdown, setCountdown] = useState(15)

    useEffect(() => {
        const counter = setInterval(() => {
            setCountdown(cd => cd - 1)
            }, 1000);
        if (countdown === 0) {
            client.logOut()
        }
        return () => {
            clearInterval(counter);
        }
    },)


    return (
        <>
            <Typography>Auto logout in {countdown}</Typography>
            <Button variant="contained" onClick={client.logOut}>Log Out</Button>
        </>
    )
}

export default Logout;