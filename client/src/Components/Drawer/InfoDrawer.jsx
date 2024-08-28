import React from 'react'

import { Box, Drawer, styled, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Profile from './Profile';

const drawerSrtle = {
    left: "24px",
    top: "13.2px",
    width: "29.9rem",
    height: '96.2%',
    boxShadow: "none",
}

const ProfileHedder = styled(Box)`
display: flex;
height: 6.19rem;
background: #008069;
& >*{
margin-top: auto;
color: white;
font-weight: 600;
padding: 16px
}
`
const Component = styled(Box)`
background: #ededed;
height: 85%;
`


const InfoDrawer = ({ open, setOpen }) => {  // {open: true, setOPen: function()} = props  -->> object destructuring method  
    //                                      /OR/   props.open or props.setOpen  
    const handleCLose = () => {
        setOpen(false)
    }


    return (
        <div>

            <Drawer
                open={open}
                onClose={handleCLose}
                PaperProps={{ sx: drawerSrtle }}
                style={{ zIndex: 1500 }}
            >
                <ProfileHedder>
                    <ArrowBackIcon onClick={() => setOpen(false)} />
                    <Typography>Profile</Typography>
                </ProfileHedder>

                <Component>
                    <Profile />
                </Component>
            </Drawer>

        </div>
    )
}

export default InfoDrawer