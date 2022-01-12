import React from 'react'
import LeftSideBar from './LeftSideBar'
import MainContent from './MainContent'
import NavMenu from './NavMenu'

export default function Home() {
    return (
        <div>
            <NavMenu />
            <LeftSideBar />
            <MainContent />
        </div>
    )
}
