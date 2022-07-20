import React from 'react'
import LoginOrRegisterForm from '../component/LoginOrRegisterForm'

export default function Register() {
  return (
    <div style={{
      width: '100%',
      height: '770px',
      margin: 'auto',
      padding: '10em'

  }}>
    <LoginOrRegisterForm loginOrRegister={"register"} />
  </div>

  )
}
