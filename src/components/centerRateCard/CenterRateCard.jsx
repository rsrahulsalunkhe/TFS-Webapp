import React from 'react'
import './style.scss'
import banner2 from './../../assets/banner2.jpeg'
import ellipse from './../../assets/ellipse.svg'

const Price = (props) => {
  return (
    <div className='price-status'>
        <span className='text-gray-primary pt-1' style={{fontSize: '14px', fontWeight: 700}}>{props.status}</span>
        <span style={{fontSize: '16px', fontWeight: 500}}>{props.price}</span>
        <span style={{fontSize: '14px', fontWeight: 500, color: props.color}}>{props.change}</span>
    </div>
  )
}

const CenterRateCard = ({rate}) => {
  return (
    <div>
        <div className='mb-3 bg-secondary'>
            <div className='p-3'>
                <div className='d-flex align-items-center'>
                    <span className='date'>{rate.rec_date}</span>
                    <p className='m-0 ms-auto fw-bold' style={{color: rate.content.senti.col}}>{rate.content.senti.val}</p>
                </div>
                <div className='d-flex mt-2'>
                    <div className='location'>
                        <p className='m-0'>{rate.content.Rate.loc}</p>
                        <span className='text-gray-primary'>{rate.content.Rate.var}</span>
                    </div>
                    <div className='price'>
                        <span className='price-range text-gray-secondary'>{rate.content.Rate.rate}</span>
                        <p className='up-down'><span className='up-down1' style={{backgroundColor: rate.content.Rate.change.col}}>{rate.content.Rate.change.val}</span></p>
                    </div>
                </div>

                <div className='divider1'>
                    <div className='gradient-background1'></div>
                    <div className='gradient-dot me-2'></div>
                    <span>KEY STATISTICS</span>
                    <div className='gradient-dot ms-2'></div>
                    <div className='gradient-background2'></div>
                </div>
                
                {rate?.content?.ca && rate.content.ca.length > 0 && (
                    <div className='key-statistics'>
                        {rate.content.ca.map((item, index) => (
                            <React.Fragment key={index}>
                                <Price status={item.title} price={item.val} change={item.ch} color={item.col} />
                                {index !== rate.content.ca.length - 1 && <div className="divider2"></div>}
                            </React.Fragment>
                        ))}
                    </div>
                )}

                {rate?.content?.co && rate.content.co.length > 0 && (
                    <div className='summery bg-tertiary'>
                        {/* <ul className=' m-0'> */}
                            {rate.content.co.map((item, index) => (
                                <span
                                    key={index} 
                                    style={{ fontWeight: 500, lineHeight: 1.15, fontSize: '15px' }} 
                                    className='d-flex py-1 text-gray-primary'
                                >
                                    <div>
                                        <img src={ellipse} className='me-3' alt="" />
                                    </div>
                                    
                                    {item.v}
                                </span>
                            ))}
                        {/* </ul> */}
                    </div>
                )}
                <p className='text-left m-0 mt-2 text-blue' style={{ fontWeight: 600, fontSize: '14px'}}>{rate.content.Rate.ref.n}</p>
            </div>
        </div>
        {rate?.content?.ba && rate.content.ba.length > 0 && (
            <div className='w-100 pb-3'>
                {rate.content.ba.map((item, index) => (
                    <img 
                        key={index} 
                        className='w-100 h-100' 
                        src={item.i} 
                        alt={`Image ${index + 1}`} 
                        loading="lazy" 
                    />
                ))}
            </div>
        )}
    </div>
  )
}

export default CenterRateCard