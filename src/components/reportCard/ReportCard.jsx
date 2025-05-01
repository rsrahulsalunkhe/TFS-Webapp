import React, { useEffect, useState  } from 'react';
import ellipse from '../../assets/ellipse.svg'
import rightArrow from '../../assets/right-arrow.svg'
import './style.scss'

const ReportCard = ({ report }) => {
    const [lang, setLang] = useState('hi');
    
    useEffect(() => {
        const storedLang = localStorage.getItem('lang') || 'hi';
        setLang(storedLang);
    }, []);
  return (
    <div>
        <div className='card1'>
            {report?.content?.img ? (
                <div className='w-100'>
                    {report.content.img.i ? (
                        <img
                            className="w-100 h-100"
                            src={report.content.img.i}
                            alt="banner"
                            loading="lazy"
                        />
                        ) : null}
                </div>
            ) : null}
            <div className='py-3 px-3'>
                <span className='date'>{report.rec_date}</span>
                <h5 className='fw-bold pt-3 pb-1' style={{ fontSize: lang === 'hi' ? '20px' : '18px', color: 'var(--blue-primary)' }}>{report.content.card.tit}</h5>
                {report?.content?.card?.subtit ? (
                    <div className='subtit py-2 px-2 rounded'>
                        <h6 className='m-0 py-1 text-gray-primary' style={{ fontSize: lang === 'hi' ? '18px' : '16px', }}>{report.content.card.subtit}</h6>
                    </div>
                ) : null }

                <div className='divider1 mt-3'>
                    <div className='gradient-background1'></div>
                    <div className='gradient-dot me-2'></div>
                    <span>Highlights</span>
                    <div className='gradient-dot ms-2'></div>
                    <div className='gradient-background2'></div>
                </div>

                {report?.content?.card?.p ? (
                    <div className='mt-3'>
                        {report.content.card.p.map((p) => (
                            <span className='pb-3 d-flex' style={{ fontSize: lang === 'hi' ? '18px' : '16px', lineHeight: 1.2 }}>
                                <div>
                                    <img src={ellipse} className='me-3' alt="" />
                                </div>
                                {p.t}
                            </span>
                        ))}
                    </div>
                ) : null}

                {report?.content?.card?.b ? (
                    // <div className='d-flex'>
                    //     <i className='ms-auto' style={{color: 'var(--primary)', fontWeight: 700}}>{report.content.card.b} &gt;</i>
                    // </div>
                    <div className='d-flex justify-content-center'>
                        <button className='px-5 py-2 fw-bold'>Check More Update <img className='ms-2' src={rightArrow} alt="" /></button>
                    </div>
                ) : null }
            </div>
        </div>

        {report?.content?.ban && report?.content?.ban[0]?.i ? (
            <div className='w-100 mt-3'>
                {report.content.ban.map((b) => (
                    <img className='w-100 h-100' src={b.i} alt="" />
                ))}
            </div>
        ) : null}
    </div>
  )
}

export default ReportCard
