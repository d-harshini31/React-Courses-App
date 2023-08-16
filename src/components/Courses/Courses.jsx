/* eslint-disable prettier/prettier */
import React from 'react'
import './Courses.css'
import { Button } from '../../common/Button/Button'
export const Courses = (props) => {
  const { title, description, creationDate, duration, Aname } = props
  return (
    <>
      <section className='course'>
        <section className='tile'>
          <h2>{title}</h2>
          <p>{description}</p>
        </section>
        <section className='details'>
          <h5>Creation Date: {creationDate}</h5>
          <h5>Duration: {duration}</h5>
          <h5>Authors: {Aname}</h5>
          <Button name='Show course' />
        </section>
      </section>
    </>
  )
}
