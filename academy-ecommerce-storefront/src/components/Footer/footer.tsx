import React from 'react'
import logo from '../../images/Logo.png'
import {FooterImage, FooterContainer} from './StyledComponents'

const Footer = () => {
    return (
        <FooterContainer>
        <FooterImage src={logo } alt="Logo"></FooterImage>
        </FooterContainer>
    )
}


export default Footer