import React from 'react'
import banner from '../../assets/banner.jpeg'
import './style.scss'

const ReportCard = ({ report }) => {
    console.log("Report Data:", report.content.img);
  return (
    <div>
        <div className='card1'>
            {report?.content?.img ? (
                <div className='w-100'>
                    <img className='w-100 h-100' src={report.content.img.i} alt="banner" loading='lazy' />
                </div>
            ) : null}
            <div className='py-3 px-3'>
                <span className='date'>{report.rec_date}</span>
                <h5 className='fw-bold pt-3 pb-1' style={{color: 'var(--blue-primary)'}}>{report.content.card.tit}</h5>
                {report?.content?.card?.subtit ? (
                    <div className='subtit py-2 px-3 rounded'>
                        <h6 className='fw-bold m-0 py-2'>{report.content.card.subtit}</h6>
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
                    <ul style={{paddingLeft: '1.5rem', marginBottom: '0'}} className='mt-2'>
                        {report.content.card.p.map((p) => (
                            <li className='pb-3' style={{lineHeight: 1.2}}>{p.t}</li>
                        ))}
                    </ul>
                ) : null}

                {report?.content?.card?.b ? (
                    <div className='d-flex'>
                        <i className='ms-auto' style={{color: 'var(--primary)', fontWeight: 700}}>{report.content.card.b} &gt;</i>
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
