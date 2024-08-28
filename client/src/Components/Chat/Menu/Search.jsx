import { Box, styled } from '@mui/material'
import React from 'react'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Container = styled(Box)`
background: #fff;
height: 3.5rem;
border-bottom: 0.2px solid rgba(0,0,0,0.03);
display: flex;
align-items: center;

`
const Wrapper = styled(Box)`
background: #f0f2f5;
position: relative;
margin: 0px 13px;
width: 100%;
border-radius: 10px;
`
const Icon = styled(Box)`
position: absolute;
height: 100%;
padding: 8px;
color: #919191;

`
const Inputfield = styled(InputBase)`
width: 100%;
padding: 16px;
height: 15px;
padding-left: 10px;
margin-left: 5rem;
margin-top: 2px;
`

const Search = ({ setText }) => {
    return (
        <Container>
            <Wrapper>
                <Icon>
                    <SearchIcon />
                </Icon>
                <Inputfield placeholder='Search or start new chat'
                    onChange={(e) => setText(e.target.value)}
                />

            </Wrapper>
        </Container>
    )
}

export default Search