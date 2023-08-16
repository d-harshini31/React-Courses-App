/* eslint-disable prettier/prettier */
import React from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { CourseCard } from './components/Courses/components/CourseCard/CourseCard'
import { Courses } from './components/Courses/Courses'
function App() {
  return (
    <React.StrictMode>
      <Header />
      <CourseCard />
    </React.StrictMode>
  )
}

export default App
