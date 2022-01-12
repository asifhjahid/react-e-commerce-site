import React from 'react'
import Banner from './Banner'
import LeftSideBar from './LeftSideBar'
import NavMenu from './NavMenu'

export default function Home() {
    return (
        <div>
            <NavMenu />
            <LeftSideBar />
            <Banner />
        </div>
    )
}
