import { LineChart } from '@mui/x-charts/LineChart';

const Home = () => {
    return (
      <div className="container">
        <div className="d-flex align-items-center my-3 px-2">
            <div style={{borderRadius: "50%", backgroundColor: "gray", width: "50px", height: "50px"}}>
            </div>
            <div className="ms-2">
                <span className="fs-5 fw-bold">ADS</span><br />
                <span className="">From: Adidas AG (ADS)</span>
            </div>
            <div className="ms-auto">
                <button style={{color: "var(--primary-background-color)", border: "none"}} className="rounded fw-bold px-3 py-1 ">Holding</button>
            </div>
        </div>

        <div className="d-flex align-items-center my-3 px-2">
            <h4>Key Statistics</h4>
            <span className="ms-auto align-items-center fw-bold" style={{color: "var(--secondary-text-color)"}}>See More</span>
        </div>

        <div className="row align-items-center my-3 px-2">
            <div className="col-6 col-md-4 py-2">
                <div style={{backgroundColor: "var(--secondary-background-color)"}} className="px-3 py-2 rounded">
                    <span>Total Cash</span>
                    <h4 className="mt-1">51, 876 B</h4>
                </div>
            </div>
            <div className="col-6 col-md-4 py-2">
                <div style={{backgroundColor: "var(--secondary-background-color)"}} className="px-3 py-2 rounded">
                    <span>Total Cash</span>
                    <h4 className="mt-1">51, 876 B</h4>
                </div>
            </div>
            <div className="col-6 col-md-4 py-2">
                <div style={{backgroundColor: "var(--secondary-background-color)"}} className="px-3 py-2 rounded">
                    <span>Total Cash</span>
                    <h4 className="mt-1">51, 876 B</h4>
                </div>
            </div>
            <div className="col-6 col-md-4 py-2">
                <div style={{backgroundColor: "var(--secondary-background-color)"}} className="px-3 py-2 rounded">
                    <span>Total Cash</span>
                    <h4 className="mt-1">51, 876 B</h4>
                </div>
            </div>
        </div>

        <div className="d-flex align-items-center my-3 px-2">
            <h4>Order Book</h4>
            <span className="ms-auto align-items-center fw-bold" style={{color: "var(--secondary-text-color)"}}>See More</span>
        </div>

        <div className="row align-items-center my-3 px-1">
            <div className="col-6 col-md-4 py-2">
                <div style={{backgroundColor: "var(--secondary-background-color)"}} className="mx-1 py-2 rounded row">
                    <div className="col-6">
                        <h5 className="fw-bold mb-3">LOT</h5>
                        <p className="ms-auto fw-bold text-secondary">1,250</p>
                        <p className="ms-auto fw-bold text-secondary">1,250</p>
                        <p className="ms-auto fw-bold text-secondary">1,250</p>
                        <p className="ms-auto fw-bold text-secondary">1,250</p>
                    </div>
                    <div className="col-6 d-flex flex-column">
                        <h5 className="ms-auto fw-bold mb-3">BID</h5>
                        <p className="ms-auto fw-bold text-success">6,350</p>
                        <p className="ms-auto fw-bold text-danger">6,350</p>
                        <p className="ms-auto fw-bold text-danger">6,350</p>
                        <p className="ms-auto fw-bold text-danger">6,350</p>
                    </div>
                    <div>
                        <p className="fw-bold">21,13K</p>
                    </div>
                </div>
            </div>
            <div className="col-6 col-md-4 py-2">
                <div style={{backgroundColor: "var(--secondary-background-color)"}} className="mx-1 py-2 rounded row">
                    <div className="col-6">
                        <h5 className="fw-bold mb-3">ASK</h5>
                        <p className="ms-auto fw-bold text-success">1,250</p>
                        <p className="ms-auto fw-bold text-success">1,250</p>
                        <p className="ms-auto fw-bold text-success">1,250</p>
                        <p className="ms-auto fw-bold text-danger">1,250</p>
                    </div>
                    <div className="col-6 d-flex flex-column">
                        <h5 className="ms-auto fw-bold mb-3">LOT</h5>
                        <p className="ms-auto fw-bold text-secondary">6,350</p>
                        <p className="ms-auto fw-bold text-secondary">6,350</p>
                        <p className="ms-auto fw-bold text-secondary">6,350</p>
                        <p className="ms-auto fw-bold text-secondary">6,350</p>
                    </div>
                    <div>
                        <p className="fw-bold">21,13K</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="d-flex align-items-center my-3 px-2">
            <h4>Recommendation</h4>
            <span className="ms-auto align-items-center fw-bold" style={{color: "var(--secondary-text-color)"}}>See More</span>
        </div>

        <div className="d-flex align-items-center my-3 px-2">
            <div style={{borderRadius: "50%", backgroundColor: "gray", width: "50px", height: "50px"}}>
            </div>
            <div className="ms-2">
                <span className="fs-5 fw-bold">ADS</span><br />
                <span className="">From: Adidas AG (ADS)</span>
            </div>
            <div className="ms-auto d-flex flex-column">
                <h4 style={{marginBottom: "0"}}>$200.49</h4>
                <span style={{fontSize: "14px"}} className="ms-auto text-success">0.76%</span>
            </div>
        </div>

        <div className="d-flex align-items-center my-3 px-2">
            <div style={{borderRadius: "50%", backgroundColor: "gray", width: "50px", height: "50px"}}>
            </div>
            <div className="ms-2">
                <span className="fs-5 fw-bold">ADS</span><br />
                <span className="">From: Adidas AG (ADS)</span>
            </div>
            <div className="ms-auto d-flex flex-column">
                <h4 style={{marginBottom: "0"}}>$200.49</h4>
                <span style={{fontSize: "14px"}} className="ms-auto text-success">0.76%</span>
            </div>
        </div>

        <div className="d-flex align-items-center my-3 px-2">
            <div style={{borderRadius: "50%", backgroundColor: "gray", width: "50px", height: "50px"}}>
            </div>
            <div className="ms-2">
                <span className="fs-5 fw-bold">ADS</span><br />
                <span className="">From: Adidas AG (ADS)</span>
            </div>
            <div className="ms-auto d-flex flex-column">
                <h4 style={{marginBottom: "0"}}>$200.49</h4>
                <span style={{fontSize: "14px"}} className="ms-auto text-success">0.76%</span>
            </div>
        </div>

        <div className="d-flex align-items-center my-3 px-2">
            <div style={{borderRadius: "50%", backgroundColor: "gray", width: "50px", height: "50px"}}>
            </div>
            <div className="ms-2">
                <span className="fs-5 fw-bold">ADS</span><br />
                <span className="">From: Adidas AG (ADS)</span>
            </div>
            <div className="ms-auto d-flex flex-column">
                <h4 style={{marginBottom: "0"}}>$200.49</h4>
                <span style={{fontSize: "14px"}} className="ms-auto text-success">0.76%</span>
            </div>
        </div>

        <div className="d-flex align-items-center my-3 px-2">
            <h4>Your Portfolio</h4>
            <span className="ms-auto align-items-center fw-bold" style={{color: "var(--secondary-text-color)"}}>Add more</span>
        </div>

        <div className="d-flex" style={{overflowX: "auto", gap: "20px", whiteSpace: "nowrap"}}>
            <div style={{backgroundColor: "var(--secondary-background-color)", width: "250px", padding: "16px", flexShrink: "0"}} className="rounded">
                <div className="d-flex align-items-center mb-3">
                    <div style={{width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "gray"}}></div>
                    <h5 style={{margin: "0"}} className="ms-2">Saving</h5>
                    <h3 className="ms-auto">...</h3>
                </div>
                <h2>$4,342.71</h2>
                <div className="d-flex">
                    <span>Your porfit this goal</span>
                    <span className="ms-2 text-success fw-bold">8.2</span>
                </div>
            </div>

            <div style={{backgroundColor: "var(--secondary-background-color)", width: "250px", padding: "16px", flexShrink: "0"}} className="rounded">
                <div className="d-flex align-items-center mb-3">
                    <div style={{width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "gray"}}></div>
                    <h5 style={{margin: "0"}} className="ms-2">Saving</h5>
                    <h3 className="ms-auto">...</h3>
                </div>
                <h2>$4,342.71</h2>
                <div className="d-flex">
                    <span>Your porfit this goal</span>
                    <span className="ms-2 text-success fw-bold">8.2</span>
                </div>
            </div>

            <div style={{backgroundColor: "var(--secondary-background-color)", width: "250px", padding: "16px", flexShrink: "0"}} className="rounded">
                <div className="d-flex align-items-center mb-3">
                    <div style={{width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "gray"}}></div>
                    <h5 style={{margin: "0"}} className="ms-2">Saving</h5>
                    <h3 className="ms-auto">...</h3>
                </div>
                <h2>$4,342.71</h2>
                <div className="d-flex">
                    <span>Your porfit this goal</span>
                    <span className="ms-2 text-success fw-bold">8.2</span>
                </div>
            </div>
        </div>

        <div className="d-flex align-items-center my-3 px-2">
            <h4>Changes</h4>
            <span className="ms-auto align-items-center fw-bold" style={{color: "var(--secondary-text-color)"}}>See more</span>
        </div>

        <div className="px-3">
            <div className="row py-3 px-2 rounded" style={{backgroundColor: "var(--secondary-background-color)"}}>
                <div className="col-4">
                    <h5 className="mb-3">Location</h5>
                    <p>Delhi</p>
                    <p>Pune</p>
                    <p>Mumbai</p>
                </div>
                <div className="col-4">
                    <h5 className="mb-3">Rate</h5>
                    <p>5000</p>
                    <p>5500</p>
                    <p>4500</p>
                </div>
                <div className="col-4">
                    <h5 className="mb-3">Change</h5>
                    <p className="text-success fw-bold">2.5</p>
                    <p className="text-success fw-bold">3.5</p>
                    <p className="text-success fw-bold">2.3</p>
                </div>
            </div>
        </div>

        <div className='my-2'>
            <h1 className='fw-bold'>$200.49</h1>
            <span className='text-secondary'>Trend is </span>
            <span className='ms-2 text-success fw-bold'>$58.16 (45%)</span>
        </div>
        
        <div className='w-100 h-100'>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                    {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
                width={350}
                height={300}
            />
        </div>
      </div>
    );
  };
  
  export default Home;