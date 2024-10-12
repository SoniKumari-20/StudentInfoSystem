import React from 'react'
import { FormLabel, Input, Radio } from '@mui/material'

export default function SignUp() {
  return (
    <div>
        <h1>Sign Up</h1>
        <Input  type='text' placeholder='Enter the username' ></Input><br /><br />
        <Input type='email' placeholder='Enter the email' ></Input><br /><br />
        <Input type='password' placeholder='Enter the password' ></Input><br /><br />
        <Input type='text' placeholder='Enter the phoneNo.'></Input><br /><br />
        <Radio color='info'></Radio><FormLabel>male</FormLabel>
        <Radio color='info'></Radio><FormLabel>Female</FormLabel>
    </div>
  )
}
