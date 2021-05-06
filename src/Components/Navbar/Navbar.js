import React from 'react'
import { Link } from 'react-router-dom'
import {NavbarSection , Logo , LogoTxt , UlList , ListItem , Anchor , LinkAnchor} from './style'
function Navbar() {
    return (
        <NavbarSection className="navbar">
            
            <div className="container">
                
                <Logo className="logo">
                    <LogoTxt className="logo-text">Ultra Profile</LogoTxt>
                </Logo>
                
                <UlList className="ul-list">
                    <ListItem className="list-item"><LinkAnchor to="/" >Home</LinkAnchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem className="list-item"><Anchor href="#">About</Anchor></ListItem>
                    <ListItem className="list-item"><LinkAnchor to="/contact" >contact</LinkAnchor></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>
    )
}

export default Navbar
