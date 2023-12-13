import React from 'react'
import MenuItems from './MenuItems'
import { useSelector } from 'react-redux'

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  //Early Return process
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className='p-5 col-span-1 shadow-lg fixed left-0 w-56'>

        <MenuItems/>
        <ul>
          <li>Home</li>
          <li>Shorts</li>
          <li>Video</li>
          <li>Live</li>
        </ul>
        <h1 className='font-bold pt-10'>Subscriptions</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>

        <h1 className='font-bold pt-10'>Explore</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
        </ul>
    </div>
  )
}

export default SideBar