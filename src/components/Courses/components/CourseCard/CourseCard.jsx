/* eslint-disable prettier/prettier */
import React from 'react'
import { mockedAuthorsList } from './mockedCoursesList'
import { Courses } from '../../Courses'
import '../../Courses.css'
import { SearchBar } from '../SearchBar/SearchBar'
export const CourseCard = () => {
  return (
    <section className='courseslist'>
      <div className='search-box'>
        <SearchBar />
      </div>
      {mockedAuthorsList.map((mockedAuthorsList, id) => {
        return <Courses key={id} {...mockedAuthorsList} />
      })}
    </section>
  )
}
