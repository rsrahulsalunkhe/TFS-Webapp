import React from 'react'
import ThemeToggle from './../../components/ThemeToggle'

const ChangeTheme = () => {
  return (
    <div className='container pt-3' style={{minHeight: 'calc(100vh - 56px)'}}>
        <h1 className='fw-bold mb-5'>Choose <span className='fw-bold' style={{color: 'var(--primary)'}}>Theme</span></h1>
        <ThemeToggle />
    </div>
  )
}

export default ChangeTheme
