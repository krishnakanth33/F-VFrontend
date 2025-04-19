// SignInWrapper.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import SignInPage from '../SignInPage'

const SignInWrapper = () => {
  const navigate = useNavigate()
  return <SignInPage navigate={navigate} />
}

export default SignInWrapper
