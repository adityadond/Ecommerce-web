import React from 'react'
import styled from "styled-components";
import { FaSearch } from 'react-icons/fa';
import {MdAddShoppingCart}  from 'react-icons/md'




const Container=styled.div `
height:60px;

`
const Wrapper=styled.div`
padding:10px 20px;
display:flex;
align-items:center;
justify-content:space-between;
`
const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`;
const Language=styled.span`
font-size:14px;
cursor:pointer;
`;
const SearchContainer=styled.div`
border: 0.5px solid lightgray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`;
const Input=styled.input`
border:none;
`;

const Center=styled.div`
flex:1;
text-align:center;

`;
const Logo=styled.h1`

margin-right:10px;
 padding:5px;

`
const Right=styled.div`
flex:1;
display:flex !important;
align-items:center !important;
justify-content:flex-end !important;

`;

const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
       <Left>
         <Language>EN</Language>
         <SearchContainer>
         <Input/>
             <FaSearch style={{color:"gray",fontSize:16}}/>
         </SearchContainer>
       </Left>
       <Center>
           <Logo>LAMA.</Logo>
       </Center>
       <Right>
         <MenuItem>REGISTER
         </MenuItem>
         <MenuItem>Sign-In
         </MenuItem>
         <MenuItem><MdAddShoppingCart/>
         </MenuItem>
       </Right>
        </Wrapper>
    
    </Container>
  )
}

export default Navbar
