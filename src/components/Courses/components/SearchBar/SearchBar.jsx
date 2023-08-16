/* eslint-disable prettier/prettier */
import React from 'react'
import '../../Courses.css'
import { Button } from '../../../../common/Button/Button'
export const SearchBar = () => {
  return (
    <div className='search-bar'>
      <input
        type='text'
        placeholder='Enter course name..'
        className='search-input'
      />
      <Button name='Search' />
      <div className='add-new-course'>
        <Button name='Add new Course' />
      </div>
    </div>
  )
}
