import React from 'react'
import Navbar from '../../common/Navbar'
import Hero from '../../common/Hero'
import Image from "../../../assets/about/about.webp"; // Adjusted image path
import { Outlet } from 'react-router-dom'

const ResourceLayout = () => {
  return (
    <div>
      <Navbar />
      <Hero
        title="Resources"
        description="We’re the Resourceful Partner You Want on Your Side"
        Image={Image} // Adjusted image usage
      />
      <Outlet />
    </div>
  )
}

export default ResourceLayout

