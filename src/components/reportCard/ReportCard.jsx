import React, { useEffect, useState  } from 'react';
import ellipseLight from './../../assets/ellipse-light.svg'
import ellipseDark from './../../assets/ellipse-dark.svg'
import rightArrow from '../../assets/right-arrow-white.svg'
import './style.scss'

const ReportCard = ({ report }) => {
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
            <div className='py-3 ps-3 pe-2'>
                <span className='date'>{report.rec_date}</span>
                <h5 className='fw-bold pt-3 pb-1' style={{ fontSize: lang === 'hi' ? '20px' : '19px', color: 'var(--blue-text)' }}>{report.content.card.tit}</h5>
                {report?.content?.card?.subtit ? (
                    <div className='subtit py-2 px-2 rounded'>
                        <h6 className='m-0 fw-bold py-1 text-gray-primary' style={{ fontSize: lang === 'hi' ? '18px' : '16px', lineHeight: '1.3' }}>{report.content.card.subtit}</h6>
                    </div>
                ) : null }

                <div className='divider1 mt-3'>
                    <div className='gradient-background1'></div>
                    <div className='gradient-dot me-2'></div>
                    <span>HIGHLIGHTS</span>
                    <div className='gradient-dot ms-2'></div>
                    <div className='gradient-background2'></div>
                </div>

                {report?.content?.card?.p ? (
                    <div className='mt-3'>
                        {report.content.card.p.map((p) => (
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
                                {p.t}
                            </span>
                        ))}
                    </div>
                ) : null}

                {report?.content?.card?.b ? (
                    <div className="d-flex justify-content-center mt-3">
                        <button className="px-2 fw-bold d-flex align-items-center"
                            style={{ fontSize: '14px', padding: '10px 12px', maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'inline-block', flex: '1 1 auto', lineHeight: 1.3 }}>
                                {report.content.card.b}
                            </span>
                            <img className="me-2" src={rightArrow} alt="" style={{ flexShrink: 0 }} />
                        </button>
                    </div>
                ) : (
                    <div className="d-flex justify-content-center mt-3">
                        {lang === 'hi' ? (
                            <button className="px-2 fw-bold d-flex align-items-center"
                                style={{ fontSize: '14px', padding: '10px 12px', maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'inline-block', flex: '1 1 auto', lineHeight: 1.3 }}>
                                    Click For More Detail
                                </span>
                                <img className="me-2" src={rightArrow} alt="" style={{ flexShrink: 0 }} />
                            </button>
                        ) : (
                            <button className="px-2 fw-bold d-flex align-items-center"
                                style={{ fontSize: '14px', padding: '10px 12px', maxWidth: '250px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', display: 'inline-block', flex: '1 1 auto', lineHeight: 1.3 }}>
                                    क्लिक करें
                                </span>
                                <img className="me-2" src={rightArrow} alt="" style={{ flexShrink: 0 }} />
                            </button>
                        )}
                    </div>
                )}
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
