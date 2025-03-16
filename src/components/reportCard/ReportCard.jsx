import React from 'react'
import banner from '../../assets/banner.jpeg'
import './style.scss'

const ReportCard = () => {
  return (
    <div className='card'>
      <div className='w-100'>
        <img className='w-100 h-100' src={banner} alt="banner" loading='lazy' />
      </div>
      <div className='py-3 px-3'>
        <span className='date'>27-09-2023</span>
        <h5 className='fw-bold pt-2' style={{color: 'var(--blue-primary)'}}>Maize trade offer Aboti canvassing Jalgaon</h5>
        <div className='bg-gray-200 py-2 px-3 rounded'>
            <h6 className='fw-bold m-0' style={{fontSize: '18px'}}>Deals in Maize, Wheat, Moong, Chana Urad, Jowar, Kabuli</h6>
        </div>

        <div className='divider1 mt-3'>
            <div className='gradient-background1'></div>
            <div className='gradient-dot me-2'></div>
            <span>HIGHLIGHTS</span>
            <div className='gradient-dot ms-2'></div>
            <div className='gradient-background2'></div>
        </div>

        <ul style={{paddingLeft: '1.5rem', marginBottom: '0'}} className='mt-2'>
            <li className='fw-bold pb-3' style={{lineHeight: 1.2}}>Trading Activity Very Dull in Chana and rate down</li>
            <li className='fw-bold pb-3' style={{lineHeight: 1.2}}>Trading Activity Very Dull in Chana and rate down</li>
        </ul>
        <i style={{color: 'var(--blue-secondary)'}}>Load More Reports &gt;</i>
      </div>
    </div>
  )
}

export default ReportCard
