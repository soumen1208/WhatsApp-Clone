import { Dialog, Box, Typography, List, ListItem, styled } from '@mui/material'
import React, { useContext } from 'react'
import { qrCode } from '../../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../Service/api';


const Component = styled(Box)`
display: flex;
gap: 7rem;
margin-top: 2rem;
padding: 2rem
`
const Title = styled(Typography)`
font-size: 1.5rem;
color: #00bfa5;
font-family: inherit;
font-weight: 300;
margin-bottom: 2.5rem
`
const LoginDia = styled(Box)`
position: absolute;
top: 12rem;
right: 6.7rem;
cursor:pointer;
`

const dailogStyle = {
    height: "85%",
    width: "60%",
    marginTop: "8rem",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overFlow: "hidden"

}

const LoginDailog = () => {

    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = async (res) => {
        const decode = jwtDecode(res.credential);
        console.log(decode);
        setAccount(decode);
        await addUser(decode)
    }
    const onLoginError = (res) => {
        console.log('login error:', res);
    }

    return (
        <Dialog open={true} PaperProps={{ sx: dailogStyle }} hideBackdrop={true} >
            <Component>
                <Box>
                    <Title>To use your whatsapp through computer:</Title>
                    <List>
                        <ListItem style={{ fontWeight: "bold", color: "#4a4a4a" }}>1. Open Whatsapp on your phone</ListItem>
                        <ListItem style={{ fontWeight: "bold", color: "#4a4a4a" }}>2. Tap Menu : or settings and select linked device</ListItem>
                        <ListItem style={{ fontWeight: "bold", color: "#4a4a4a" }}>3. Point your phone to the screen to capture the code</ListItem>
                    </List>
                </Box>
                <Box>
                    <img src={qrCode} alt="qr-code" />
                    <LoginDia>
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}
                        />

                    </LoginDia>
                </Box>
            </Component>
        </Dialog >
    )
}

export default LoginDailog