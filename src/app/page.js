import Explore from '@/Components/Explore'
import Gallery from '@/Components/Gallery'
import Header from '@/Components/Header'
import Nav from '@/Components/Nav'
import Outlets from '@/Components/Outlets'
import Testy from '@/Components/Testy'
import Thestory from '@/Components/Thestory'
import React from 'react'

function page() {
  return (
    <>
    <Nav/>
    <Header />
    <Thestory/>
    <Outlets/>
    <Explore/>
    <Gallery/>
    <Testy/>
    </>
  )
}

export default page