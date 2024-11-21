import React from 'react'
import Navbar from '../../components/common/Navbar'
import CaseStudy from '../../components/resources/CaseStudy'
import { Outlet } from 'react-router-dom'

const CaseStudies = () => {
  return (
    <div>
     <Navbar />
     {/* <Outlet /> */}
     <CaseStudy />

    </div>
  )
}

export default CaseStudies
