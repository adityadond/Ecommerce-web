import React from 'react'
import styled from "styled-components";
import { FaSearch } from 'react-icons/fa';
import {MdAddShoppingCart}  from 'react-icons/md'
import { mobile } from '../Responsive';
import { Link } from "react-router-dom";



const Container=styled.div `
height:60px;
${mobile({height:" 50px"})}

`
const Wrapper=styled.div`
padding:10px 20px;
display:flex;
align-items:center;
justify-content:space-between;
${mobile({padding:" 10px 0 px", height:" 50px"})}
`
const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`;
const Language=styled.span`
font-size:14px;
cursor:pointer;
${mobile({display:" none"})}
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
${mobile({width:" 50px"})}
`;

const Center=styled.div`
flex:1;
text-align:center;

`;
const Logo=styled.h1`

margin-right:10px;
 padding:5px;
 ${mobile({fontSize:"24px"})}

`
const Right=styled.div`
flex:1;
display:flex !important;
align-items:center !important;
justify-content:flex-end !important;
${mobile({flex:2,justifyContent:" center"})}


`;

const MenuItem=styled.div`
font-size:14px;
cursor:pointer;
margin-left:25px;

${mobile({fontSize:"12px",marginLeft:"25px"})}
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
       <Left>
         <Language>EN</Language>
         <SearchContainer>
         <Input placeholder='Search'/>
             <FaSearch style={{color:"gray",fontSize:16}}/>
         </SearchContainer>
       </Left>
       <Center>
           <Logo>LAMA.</Logo>
       </Center>
       <Right>
         <MenuItem>
         <Link to="/register" >REGISTER</Link>
         </MenuItem>
         <MenuItem >
         <Link to="/login" >Sign-In</Link>
         </MenuItem>
         <MenuItem><MdAddShoppingCart/>
         </MenuItem>
       </Right>
        </Wrapper>
    
    </Container>
  )
}

export default Navbar
