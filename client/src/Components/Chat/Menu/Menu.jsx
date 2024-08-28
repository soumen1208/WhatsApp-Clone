import React, { useState } from 'react'
import Hedder from './Hedder'
import { Box } from '@mui/material'
import Search from './Search'
import Conversation from './Conversation'

const Menu = () => {

    const [text, setText] = useState('');

    return (
        <Box>
            <Hedder />
            <Search setText={setText} />
            <Conversation text={text} />
        </Box>
    )
}

export default Menu