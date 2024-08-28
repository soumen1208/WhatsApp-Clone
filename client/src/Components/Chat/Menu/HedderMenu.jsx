import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Menu, MenuItem, styled } from '@mui/material';
import { useState } from 'react';

const MenuOpt = styled(MenuItem)`
color:#4a4a4a;
font-size: 14px;
padding: 15px 60px 5px 24px;

`

const HedderMenu = ({ setOpenDrawer }) => {

    const [open, setOpen] = useState(null);

    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }


    return (
        <div>
            <MoreVertIcon onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getcontentanchore1={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <MenuOpt onClick={() => { handleClose(); setOpenDrawer(true) }}>Profile</MenuOpt>
            </Menu>
        </div>
    )
}

export default HedderMenu