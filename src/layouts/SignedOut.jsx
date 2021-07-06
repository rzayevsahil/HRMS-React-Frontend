import { Button, Menu } from "semantic-ui-react";
import React from 'react'
import { NavLink } from "react-router-dom";

export default function SignedOut({signIn}) {
    return (
        <div>
            <Menu.Item>
            <Button as={NavLink} to="/signUp" color="purple" style={{marginRight:"5px",marginTop:"5px"}}>Sign Up</Button> 
            <Button onClick={signIn} color="violet" style={{marginLeft:"0.5em",marginTop:"5px"}}>Sign In</Button>
            </Menu.Item>
        </div>
    )
}
