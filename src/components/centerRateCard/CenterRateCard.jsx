import React from 'react'
import './style.scss'
import banner2 from './../../assets/banner2.jpeg'

const Price = (props) => {
  return (
    <div className='price-status'>
        <span className='' style={{fontSize: '14px', fontWeight: 700, color: '#606060'}}>{props.status}</span>
        <span style={{fontSize: '16px', fontWeight: 500}}>{props.price}</span>
        <span style={{fontSize: '14px', fontWeight: 500, color: props.color}}>{props.change}</span>
    </div>
  )
}

const CenterRateCard = () => {
  return (
    <div>
    <div className='mb-3 bg-primary'>
        <div className='p-3'>
            <div className='d-flex align-items-center'>
                <span className='date'>27-09-2023</span>
                <p className='status m-0 ms-auto'>STEADY TO FIRM</p>
            </div>
            <div className='d-flex mt-2'>
                <div className='location'>
                    <p className='m-0'>DELHI</p>
                    <span>RJ Line</span>
                </div>
                <div className='price'>
                    <span className='price-range'>₹5100-5200</span>
                    <p className='up-down'><span className='up-down1 py-1'>+50</span></p>
                </div>
            </div>

            <div className='divider1'>
                <div className='gradient-background1'></div>
                <div className='gradient-dot me-2'></div>
                <span>KEY STATISTICS</span>
                <div className='gradient-dot ms-2'></div>
                <div className='gradient-background2'></div>
            </div>
            
            <div className='key-statistics'>
                <Price status='7 Days' price='₹5000-5100' change='▲812' color='#00AA08'/><div className="divider2"></div>
                <Price status='14 Days' price='₹5000-5100' change='▲812' color='#EE0000'/><div className="divider2"></div>
                <Price status='21 Days' price='₹5000-5100' change='▲812' color='#00AA08'/>
            </div>

            <div className='summery'>
                <ul className='ps-3 pt-2'>
                    <li style={{color: '#27292A', fontWeight: 500, lineHeight: 1.15}} className='mb-2 p-0'>Trading Activity Very Dull in Chana and rate down</li>
                    <li style={{color: '#27292A', fontWeight: 500, lineHeight: 1.15}} className='mb-2 p-0'>Trading Activity Very Dull in Chana and rate down</li>
                </ul>
            </div>
            <p className='text-left mt-2' style={{color: '#1400FC', fontWeight: 600, fontSize: '14px'}}>M P AGRO OVERSEAS, DELHI</p>
        </div>
    </div>
    <div className='w-100 pb-3'>
            <img className='w-100 h-100 rounded' src={banner2} alt="" loading="lazy" />
        </div>
    </div>
  )
}

export default CenterRateCard