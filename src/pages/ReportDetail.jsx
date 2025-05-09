import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

const ReportDetail = () => {
    
  return (
    <div className='pt-3' style={{backgroundColor: 'var(--tertiary-bg)'}}>
      <div className='px-3 py-4 mb-3' style={{backgroundColor: 'var(--secondary-bg)'}}>
        <div className='d-flex align-items-center'>
          <h5>Gulabbagh</h5>
          <span className='date ms-auto'>21-12-2024</span>
        </div>
        <h6 style={{color: 'var(--black-6)'}}>Warehouse Delivery</h6>

        <div className='d-flex align-items-center pt-3'>
          <h5 className='fw-medium'>₹2000-2300</h5>
          <span style={{color: 'var(--green)', fontSize: '18px'}}>▲30</span>
        </div>
        <h6 style={{color: 'var(--black-6)'}} className='d-flex'>Sentiments are <h6 style={{color: 'var(--green)', marginLeft: '4px'}}>Steady to firm</h6></h6>

        <div style={{ width: "100%", height: "100%" }}>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[{ data: [2, 5.5, 2, 8.5, 1.5, 5] }]}
                // width={350}
                height={300}
            />
        </div>

        <div style={{backgroundColor: 'var(--tertiary-bg)', borderRadius: '8px'}} className='p-3 my-3 d-flex flex-column'>
          <h5 style={{fontSize: '18px', fontStyle: 'italic'}}>We are we what we repeatedly do. Excellence, then, is not an act, but a habit</h5>
          <p style={{color: 'var(--primary)'}} className='ms-auto m-0 mt-2'>-Aristole</p>
        </div>
      </div>

      <div className='px-3 py-4 mb-3' style={{backgroundColor: 'var(--secondary-bg)'}}>
        <h5 className="fw-semibold mb-2" style={{color: 'var(--primary)'}}>Key Statistics</h5>
        <div className="row g-3">
          <div className="col-6">
            <div style={{ backgroundColor: 'var(--tertiary-bg)', borderRadius: '8px' }} className="p-3">
              <h6 className="fw-bold mb-2" style={{color: 'var(--black-6)'}}>Total Cash</h6>
              <h5 className="fw-medium">51,876</h5>
            </div>
          </div>
          <div className="col-6">
            <div style={{ backgroundColor: 'var(--tertiary-bg)', borderRadius: '8px' }} className="p-3">
              <h6 className="fw-bold mb-2" style={{color: 'var(--black-6)'}}>Market Cap</h6>
              <h5 className="fw-medium">51,876K</h5>
            </div>
          </div>
          <div className="col-6">
            <div style={{ backgroundColor: 'var(--tertiary-bg)', borderRadius: '8px' }} className="p-3">
              <h6 className="fw-bold mb-2" style={{color: 'var(--black-6)'}}>Dividend</h6>
              <h5 className="fw-medium">640.00</h5>
            </div>
          </div>
          <div className="col-6">
            <div style={{ backgroundColor: 'var(--tertiary-bg)', borderRadius: '8px' }} className="p-3">
              <h6 className="fw-bold mb-2" style={{color: 'var(--black-6)'}}>Dividend Yield</h6>
              <h5 className="fw-medium">9.92%</h5>
            </div>
          </div>
        </div>

        <div style={{backgroundColor: 'var(--tertiary-bg)', borderRadius: '8px'}} className='p-3 my-3 d-flex flex-column'>
          <h5 style={{fontSize: '18px', fontStyle: 'italic'}}>People don’t change they just reveal who they are.</h5>
          <p style={{color: 'var(--primary)'}} className='ms-auto m-0 mt-2'>-Aristole</p>
        </div>

        <div style={{backgroundColor: 'var(--tertiary-bg)', borderRadius: '8px'}} className='p-3 mt-3 d-flex flex-column'>
          <h6 className='pb-2'>Commodity prices were/are quoted steady today.</h6>
          <p style={{fontSize: '15px', fontWeight: 500}}>The wave of profit-taking introduced a balance between selling pressure and ready demand, bringing the market in range bound zone.</p>
        </div>
      </div>

      <div className='px-3 py-4 mb-3' style={{backgroundColor: 'var(--secondary-bg)'}}>
        <h5 className="fw-semibold mb-2" style={{color: 'var(--primary)'}}>Past Record</h5>
        <div className='p-3' style={{backgroundColor: 'var(--tertiary-bg)', borderRadius: '8px'}}>
          <div className='row mb-2'>
            <div className='col-4'><h6 className='fw-bold' style={{color: 'var(--blue-secondary)'}}>Date</h6></div>
            <div className='col-4'><h6 className='fw-bold' style={{color: 'var(--blue-secondary)'}}>Rate</h6></div>
            <div className='col-4'><h6 className='fw-bold' style={{color: 'var(--blue-secondary)'}}>Change</h6></div>
          </div>
          <div className='row mb-2'>
            <div className='col-4 fw-medium'><span>21-12-2024</span></div>
            <div className='col-4 fw-medium'><span>₹2340-2350</span></div>
            <div className='col-4 fw-medium' style={{color: 'var(--green)'}}><span>▲10</span></div>
          </div>
          <div className='row mb-2'>
            <div className='col-4 fw-medium'><span>21-12-2024</span></div>
            <div className='col-4 fw-medium'><span>₹2340-2350</span></div>
            <div className='col-4 fw-medium' style={{color: 'var(--green)'}}><span>▲10</span></div>
          </div>
          <div className='row mb-2'>
            <div className='col-4 fw-medium'><span>21-12-2024</span></div>
            <div className='col-4 fw-medium'><span>₹2340-2350</span></div>
            <div className='col-4 fw-medium' style={{color: 'var(--green)'}}><span>▲10</span></div>
          </div>
          <div className='row mb-2'>
            <div className='col-4 fw-medium'><span>21-12-2024</span></div>
            <div className='col-4 fw-medium'><span>₹2340-2350</span></div>
            <div className='col-4 fw-medium' style={{color: 'var(--green)'}}><span>▲10</span></div>
          </div>
          <div className='row mb-2'>
            <div className='col-4 fw-medium'><span>21-12-2024</span></div>
            <div className='col-4 fw-medium'><span>₹2340-2350</span></div>
            <div className='col-4 fw-medium' style={{color: 'var(--green)'}}><span>▲10</span></div>
          </div>
          <div className='row mb-2'>
            <div className='col-4 fw-medium'><span>21-12-2024</span></div>
            <div className='col-4 fw-medium'><span>₹2340-2350</span></div>
            <div className='col-4 fw-medium' style={{color: 'var(--green)'}}><span>▲10</span></div>
          </div>
          <div className='row mb-2'>
            <div className='col-4 fw-medium'><span>21-12-2024</span></div>
            <div className='col-4 fw-medium'><span>₹2340-2350</span></div>
            <div className='col-4 fw-medium' style={{color: 'var(--green)'}}><span>▲10</span></div>
          </div>
        </div>

        <div style={{backgroundColor: 'var(--tertiary-bg)', borderRadius: '8px'}} className='p-3 mt-3 d-flex flex-column'>
          <h5 style={{fontSize: '18px', fontStyle: 'italic'}}>We are what we repeatedly do, Excellence, then it not an act, but a habbit</h5>
          <p style={{color: 'var(--primary)'}} className='ms-auto m-0 mt-2'>-Aristole</p>
        </div>
      </div>

      <div className='px-3 py-4 mb-3' style={{backgroundColor: 'var(--secondary-bg)'}}>
        <h5 className="fw-semibold mb-2" style={{color: 'var(--primary)'}}>More Commodities </h5>
        <div>
          <h5 className='mb-3'>1. Chana</h5>

          <div className='d-flex gap-3 w-100' style={{overflowY: 'scroll'}}>
            <div className='p-3' style={{backgroundColor: 'var(--tertiary-bg)', minWidth: '200px', borderRadius: '8px'}}>
              <h5 className='fw-medium'>Delhi</h5>
              <p className='fw-medium m-0'>RJ Line</p>
              <div className='d-flex align-items-center'>
                <p className='fw-medium m-0' style={{fontSize: '18px'}}>₹6000-6300</p>
                <p className='fw-medium m-0' style={{fontSize: '18px', color: 'var(--green)'}}>▲30</p>
              </div>
            </div>

            <div className='p-3' style={{backgroundColor: 'var(--tertiary-bg)', minWidth: '200px', borderRadius: '8px'}}>
              <h5 className='fw-medium'>Delhi</h5>
              <p className='fw-medium m-0'>RJ Line</p>
              <div className='d-flex align-items-center'>
                <p className='fw-medium m-0' style={{fontSize: '18px'}}>₹6000-6300</p>
                <p className='fw-medium m-0' style={{fontSize: '18px', color: 'var(--green)'}}>▲30</p>
              </div>
            </div>

            <div className='p-3' style={{backgroundColor: 'var(--tertiary-bg)', minWidth: '200px', borderRadius: '8px'}}>
              <h5 className='fw-medium'>Delhi</h5>
              <p className='fw-medium m-0'>RJ Line</p>
              <div className='d-flex align-items-center'>
                <p className='fw-medium m-0' style={{fontSize: '18px'}}>₹6000-6300</p>
                <p className='fw-medium m-0' style={{fontSize: '18px', color: 'var(--green)'}}>▲30</p>
              </div>
            </div>

            <div className='p-3' style={{backgroundColor: 'var(--tertiary-bg)', minWidth: '200px', borderRadius: '8px'}}>
              <h5 className='fw-medium'>Delhi</h5>
              <p className='fw-medium m-0'>RJ Line</p>
              <div className='d-flex align-items-center'>
                <p className='fw-medium m-0' style={{fontSize: '18px'}}>₹6000-6300</p>
                <p className='fw-medium m-0' style={{fontSize: '18px', color: 'var(--green)'}}>▲30</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='px-3 py-4 mb-3' style={{backgroundColor: 'var(--secondary-bg)'}}>
        <h5 className="fw-semibold mb-2" style={{color: 'var(--primary)'}}>Other Benchmark Centers</h5>
        <div className='p-3' style={{backgroundColor: 'var(--tertiary-bg)', minWidth: '200px', borderRadius: '8px'}}>
          <div className='d-flex pb-2'>
            <p style={{color: 'var(--blue-secondary)', fontSize: '12px'}} className='m-0'>21-12-2025</p>
            <p style={{color: 'var(--green)', fontSize: '13px'}} className='m-0 ms-auto'>Steady to firm</p>
          </div>
          <div className='d-flex'>
            <h5 style={{fontSize: '18px'}}>Chindwara</h5>
            <h5 style={{fontSize: '17px'}} className='ms-auto'>₹2200-2250</h5>
          </div>
          <span style={{color: 'var(--black-6)', fontSize: '14px', fontWeight: 500}}>Feed Quality</span>
        </div>
      </div>
    </div>
  )
}

export default ReportDetail
