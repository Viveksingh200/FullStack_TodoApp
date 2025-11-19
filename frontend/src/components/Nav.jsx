import React from 'react'
import { ThemeToggle } from 'react-theme-snap';

export default function Nav({isDark, toggleTheme}) {
    
  return (
     <div className='w-10/12 flex mx-auto items-center justify-between p-4'>
        <span className='font-bold text-xl'>XERO<span className='dark:text-custom-orange text-beige'>TODO</span></span>
        <div className=''>
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
     </div>
  )
}
