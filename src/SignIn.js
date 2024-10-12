import React from 'react'
import { Button, Input } from '@mui/material'

export const SignIn = () => {
    return (
        <div>
            <h1>Sign In</h1>
            <Input placeholder='Enter the username' /><br /><br />
            <Input placeholder='Enter the password' /><br /><br />
            <Button variant='contained' color='secondary' >Submit</Button>
        </div>
    )
}