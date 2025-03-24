import React from 'react'
import './style.scss'
import banner2 from './../../assets/banner2.jpeg'

const Price = (props) => {
  return (
    <div className='price-status'>
        <span className='' style={{fontSize: '14px', fontWeight: 700, color: '#242424'}}>{props.status}</span>
        <span style={{fontSize: '16px', fontWeight: 500}}>{props.price}</span>
        <span style={{fontSize: '14px', fontWeight: 500, color: props.color}}>{props.change}</span>
    </div>
  )
}

const CenterRateCard = ({rate}) => {
  return (
    <div>
        <div className='mb-3 bg-primary'>
            <div className='p-3'>
                <div className='d-flex align-items-center'>
                    <span className='date'>{rate.rec_date}</span>
                    <p className='m-0 ms-auto fw-bold' style={{color: rate.content.senti.col}}>{rate.content.senti.val}</p>
                </div>
                <div className='d-flex mt-2'>
                    <div className='location'>
                        <p className='m-0'>{rate.content.Rate.loc}</p>
                        <span>{rate.content.Rate.var}</span>
                    </div>
                    <div className='price'>
                        <span className='price-range'>{rate.content.Rate.rate}</span>
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
                    <div className='summery'>
                        <ul className='ps-3 pt-2 m-0'>
                            {rate.content.co.map((item, index) => (
                                <li 
                                    key={index} 
                                    style={{ color: '#242424', fontWeight: 500, lineHeight: 1.15, fontSize: '15px' }} 
                                    className='mb-2 p-0'
                                >
                                    {item.v}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <p className='text-left m-0 mt-2' style={{color: '#1400FC', fontWeight: 600, fontSize: '14px'}}>{rate.content.Rate.ref.n}</p>
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