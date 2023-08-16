/* eslint-disable prettier/prettier */
import React from 'react'
import { Button } from '../../common/Button/Button'
import Logo from './components/Logo/logo'
import './Header.css'
export const Header = () => {
  const userName = 'Harshini'
  return (
    <div className='header'>
      <div className='logo'>
        <Logo />
      </div>

      <div className='nav-bar'>
        <p className='user-name'>{userName}</p>
        <Button name='Logout' />
      </div>
    </div>
  )
}
