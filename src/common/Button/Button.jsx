/* eslint-disable prettier/prettier */
import React from 'react'
import './Button.css'
export const Button = (props) => {
  const handleclick = () => {
    alert('loged out')
  }
  return (
    <button className='button' onClick={handleclick}>
      {props.name}
    </button>
  )
}
