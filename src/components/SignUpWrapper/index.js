// SignUpWrapper.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignUpPage from '../SignUpPage'

const SignUpWrapper = () => {
  const navigate = useNavigate()
  return <SignUpPage navigate={navigate} />
}

export default SignUpWrapper
