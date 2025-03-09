import banner from './../assets/banner.jpeg'
import bajra from './../assets/bajra.svg'
import kabuli from './../assets/kabuli.svg'
import urad from './../assets/urad.svg'
import chana from './../assets/chana.svg'
import dividerLine from './../assets/divider-line.svg'
import './style.css'

const Home = () => {
    return (
        <main>
            <div className='d-grid gap-3'>
                <div className='w-100 h-100 gap'>
                    <img className='w-100 h-100' src={banner} alt="" />
                </div>
                <div className='w-100 h-100 gap'>
                    <img className='w-100 h-100' src={banner} alt="" />
                </div>
                <div className='w-100 h-100 gap'>
                    <img className='w-100 h-100' src={banner} alt="" />
                </div>
                <div className='w-100 h-100 gap'>
                    <img className='w-100 h-100' src={banner} alt="" />
                </div>
                <div className='w-100 h-100 gap'>
                    <img className='w-100 h-100' src={banner} alt="" />
                </div>
            </div>

            <div className='mt-4'>
                <img className='w-100 h-100' src={dividerLine} alt="" />
            </div>

            <div className='mx-5'>
                <div className='hr-lines'>
                    <span><span style={{fontSize: '24px', padding: 0, backgroundColor: 'transparent'}}>C</span>EREALS</span>
                </div>
            </div>

            <div className='d-flex justify-content-evenly'>
                <div className='commodity'>
                    <div className='img'>
                        <img src={bajra} alt="" />
                    </div>
                    <span>Bajra</span>
                    <p className='special text-center'>• Special Report</p>
                </div>
            </div>

            <div className='mx-5'>
                <div className='hr-lines'>
                    <span><span style={{fontSize: '24px', padding: 0, backgroundColor: 'transparent'}}>P</span>ULSES</span>
                </div>
            </div>

            <div className='d-flex justify-content-evenly'>
                <div className='commodity'>
                    <div className='img'>
                        <img src={chana} alt="" />
                    </div>
                    <span>Chana</span>
                    <p className='special text-center'>• Special Report</p>
                </div>
                <div className='commodity' >
                    <div className='img'>
                        <img src={kabuli} alt="" />
                    </div>
                    <span>Kabuli</span>
                </div>
                <div className='commodity' >
                    <div className='img'>
                        <img src={urad} alt="" />
                    </div>
                    <span>Urad</span>
                </div>
            </div>

            <div style={{backgroundColor: '#FBEDE0', marginBottom: '66px'}} className='py-5 px-2'>
                <h1 style={{fontSize: '60px', color: '#E38125'}} className='fw-bold'>Mandi Centrar</h1>
                <p className='fs-5 mt-3'>Agri Trade Assistance App</p>
            </div>
        </main>
    );
  };
  
  export default Home;