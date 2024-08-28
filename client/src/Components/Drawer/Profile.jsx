import React, { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider';
import { Box, styled, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ImageContainer = styled(Box)`
display: flex;
justify-content: center;
height: 13rem;
align-items: center
`

const Image = styled('img')({
    height: "11rem",
    width: "11rem",
    borderRadius: "100%"

})
const Name = styled(Box)`
height: 6rem;
width: auto;
background: white;
padding: 1px 20px;
box-shadow:0px 1px 3px rgba(0,0,0,0.2)
`
const Icon = styled(EditIcon)` 
margin-left: 18rem;
font-size: 1.3rem;
`
const DescBox = styled(Box)`
height: 5rem;
padding: 1rem 2rem;
& > p{
font-size: 14px;
color: gray;
font-family: 
}
`
const About = styled(Box)`
height: 3rem;
width: auto;
background: white;
padding: 20px 20px;
box-shadow:0px 1px 3px rgba(0,0,0,0.2);
& : first-child {
font-size: 14px;
margin-bottom: 10px;
color: #008069

}
`

const Profile = () => {
    const { account } = useContext(AccountContext);

    return (

        <>
            <ImageContainer>
                <Image src={account.picture} alt="dp" />
            </ImageContainer>
            <Name>
                <p style={{ color: "#008069", fontSize: "15px" }}>Your name</p>
                <span>{account.name}</span>
                <Icon />
            </Name>
            <DescBox>
                <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts</Typography>
            </DescBox>
            <About>
                <Typography>About</Typography>
                <Typography>mnlanlan</Typography>
            </About>
        </>

    )
}

export default Profile