import React from 'react'
import LanguageToggle from './../../components/LanguageToggle'

const ChangeLanguage = () => {
  return (
    <div className='container mt-2'>
      <h1 className='fw-bold'>Choose <span className='fw-bold' style={{color: 'var(--primary)'}}>Language</span></h1>

      <p className='mt-3'>You can use our app in Hindi or English. Please select your preferred language.</p>

      <p className='my-3'>आप हमारे ऐप को हिंदी या अंग्रेजी में उपयोग कर सकते हैं, कृपया अपनी पसंदीदा भाषा चुनें।</p>

      <LanguageToggle />
    </div>
  )
}

export default ChangeLanguage
