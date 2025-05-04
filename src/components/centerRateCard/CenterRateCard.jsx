import React, { useEffect, useState  } from 'react'
import './style.scss'
import banner2 from './../../assets/banner2.jpeg'
import ellipseLight from './../../assets/ellipse-light.svg'
import ellipseDark from './../../assets/ellipse-dark.svg'
import rightArrowWhite from "./../../assets/right-arrow-white.svg"

const Price = (props) => {
    const [lang, setLang] = useState('hi');
    const [theme, setTheme] = useState('light');
    
    useEffect(() => {
        const storedLang = localStorage.getItem('language') || 'hi';
        setLang(storedLang);

        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
    }, []);

  return (
    <div className='price-status'>
        <span className='pt-1' style={{fontSize: lang === 'hi' ? '16px' : '14px', fontWeight: 700, color: 'var(--black-6)'}}>{props.status}</span>
        <p style={{fontSize: '15px', fontWeight: 600}} className='m-0 mt-1'>{props.price}</p>
        <p style={{fontSize: '15px', fontWeight: 600, color: `#${props.color}`, paddingTop: '2px'}} className='m-0'>{props.change}</p>
    </div>
  )
}

const CenterRateCard = ({rate}) => {
    const [lang, setLang] = useState('hi');
    const [theme, setTheme] = useState('light');
    
    useEffect(() => {
        const storedLang = localStorage.getItem('language') || 'hi';
        setLang(storedLang);

        const storedTheme = localStorage.getItem('theme') || 'light';
        setTheme(storedTheme);
    }, []);

  return (
    <div>
        <div className='mb-3 bg-secondary' style={{borderRadius: '12px'}}>
            <div style={{padding: '16px 12px 16px 16px'}}>
                <div className='d-flex align-items-center pb-2'>
                    <span className='date'>{rate.rec_date}</span>
                    <p className='m-0 ms-auto fw-semibold' style={{color: `#${rate.content.senti.col}`, fontSize: lang === 'hi' ? '18px' : '16px' }}>{rate.content.senti.val}</p>
                </div>
                <div className='d-flex mt-2'>
                    <div className='location'>
                        <p className='m-0 fw-bold' style={{fontSize: lang === 'hi' ? '20px' : '18px'}}>{rate.content.Rate.loc}</p>
                    </div>
                    <div className='price'>
                        <p className='price-range text-gray-secondary m-0'>{rate.content.Rate.rate}</p>
                        {rate.content.Rate.change.val && (
                            <p className='up-down m-0'>
                            <span
                                className='up-down1'
                                style={{ backgroundColor: `#${rate.content.Rate.change.col}` }}
                            >
                                {rate.content.Rate.change.val}
                            </span>
                            </p>
                        )}
                    </div>
                </div>
                <p className='fw-semibold mt-1' style={{color: 'var(--black-6)', fontSize: lang === 'hi' ? '18px' : '16px'}}>{rate.content.Rate.var}</p>

                {rate?.content?.ca && rate.content.ca.length > 0 && (
                    <div className='divider1'>
                        <div className='gradient-background1'></div>
                        <div className='gradient-dot me-2'></div>
                        <span>KEY HIGHLIGHTS</span>
                        <div className='gradient-dot ms-2'></div>
                        <div className='gradient-background2'></div>
                    </div>
                )}
                
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
                        {rate.content.co.map((item, index) => (
                            <span className='pb-2 d-flex' style={{ fontSize: lang === 'hi' ? '18px' : '16px', lineHeight: 1.3, fontWeight: 500 }}>
                                {theme === 'light' ? (
                                    <div>
                                        <img src={ellipseLight} className='me-2' alt="" />
                                    </div>
                                ) : (
                                    <div>
                                        <img src={ellipseDark} className='me-2' alt="" />
                                    </div>
                                )}
                                {item.v}
                            </span>
                        ))}
                    </div>
                )}
                <p className='text-left m-0 text-blue' style={{ fontWeight: 600, fontSize: lang === 'hi' ? '16px' : '14px', color: 'var(--black-6)', paddingTop: '12px'}}>{rate.content.Rate.ref.n}</p>
                
                {rate?.is_detail === '1' && (
                    <div>
                        {lang === 'hi' ? (
                            // <div className='d-flex justify-content-center'>
                            //     <h5 className='m-0 py-2 px-5 mt-3 fw-bold' style={{backgroundColor: 'var(--primary)', color: '#FFFFFF', borderRadius: '8px', fontSize: '16px'}}>विश्लेषण के लिए क्लिक करें</h5>
                            //     <img src={rightArrowWhite} alt="Right Arrow" />
                            // </div>
                            <div className='d-flex justify-content-center mt-3'>
                                <button className='px-2 fw-bold' style={{fontSize: '16px', padding: '8px 0 6px 0'}}>विश्लेषण के लिए क्लिक करें  <img className='ms-2' src={rightArrowWhite} alt="Right Arrow" /></button>
                            </div>
                        ) : (
                            // <div className='d-flex justify-content-center'>
                            //     <h5 className='m-0 py-2 px-5 mt-3 fw-bold' style={{backgroundColor: 'var(--primary)', color: '#FFFFFF', borderRadius: '8px', fontSize: '14px'}}>Click For More Detail</h5>
                            //     <img src={rightArrowWhite} alt="Right Arrow" />
                            // </div>
                            <div className='d-flex justify-content-center mt-3'>
                                <button className='px-2 fw-bold' style={{fontSize: '14px', padding: '8px 0'}}>Click For More Detail  <img className='ms-2' src={rightArrowWhite} alt="Right Arrow" /></button>
                            </div>
                        )}
                    </div>
                )}
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