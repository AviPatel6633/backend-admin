'use client'
import React from 'react'
import Header from './header'
import { usePathname } from 'next/navigation'

const HeaderExport = () => {
  const  pathname = usePathname();
  return (
    <div>
        {pathname == '/login' ? ('') : (<Header/>)}
    </div>
  )
}

export default HeaderExport