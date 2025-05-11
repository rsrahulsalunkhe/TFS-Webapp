import phone from '../../assets/phone.svg'

const AboutUs = () => {
    return (
        <div style={{backgroundColor: 'var(--tertiary-bg)'}}>
            <div style={{backgroundColor: 'var(--secondary-bg)'}} className="mt-4 px-3 py-4">
                <h2 className="text-center fw-bold">PagarBook Lagao, Business Badhao</h2>
                <h4 className="mt-3 text-center" style={{color: 'var(--black-6)'}}>Manage your staff attendance, salary, payments and compliances in few clicks</h4>

                <div className='w-100 d-flex justify-content-center mt-4'>
                    <button style={{backgroundColor: '#10aa70', fontSize: '20px'}} className='py-2'>Talk To an Expert (Free) <img src={phone} alt="" /></button>
                </div>

                <div className='w-100 d-flex justify-content-center mt-3'>
                    <button style={{backgroundColor: '#0066fd', fontSize: '20px'}} className='py-2'>Sign Up</button>
                </div>

                <div className='d-flex justify-content-center align-items-center mt-2'>
                    <p className='m-0 fs-5' style={{color: 'var(--black-6)'}}>Available on</p>
                    <img src="https://pagarbook.com/assets/icons/android-primary.svg" alt="" />
                    <img src="https://pagarbook.com/assets/icons/ios-primary.svg" alt="" />
                </div>
            </div>

            <div className="mt-4 px-3 py-4" style={{backgroundColor: 'var(--secondary-bg)'}} >
                <div className='w-100'>
                    <img className='w-100 h-100' src="https://pagarbook.com/assets/in-image/home-banner.jpg" alt="" />
                </div>

                <div className="d-flex flex-wrap justify-content-center gap-4 mt-5">
                    <div className="text-center">
                        <img
                        src="https://pagarbook.com/assets/icons/person-green.svg"
                        alt="Registered SMEs"
                        />
                        <h5 className="fw-bold mt-2">80+ Lakhs</h5>
                        <p style={{ color: 'var(--black-6)' }}>Registered SMEs</p>
                    </div>

                    <div className="text-center">
                        <img
                        src="https://pagarbook.com/assets/icons/flag-blue.svg"
                        alt="Presence in India"
                        />
                        <h5 className="fw-bold mt-2">650+ Districts</h5>
                        <p style={{ color: 'var(--black-6)' }}>Presence in India</p>
                    </div>

                    <div className="text-center">
                        <img
                        src="https://pagarbook.com/assets/icons/language-yellow.svg"
                        alt="Used across India"
                        />
                        <h5 className="fw-bold mt-2">10+ Languages</h5>
                        <p style={{ color: 'var(--black-6)' }}>Used across India</p>
                    </div>
                </div>
            </div>

            <div className="mt-4 px-3 py-4" style={{backgroundColor: 'var(--secondary-bg)'}}>
                <div className='mt-4'>
                    <div className='w-100'>
                        <img className='w-100' src="https://pagarbook.com/assets/in-image/home-description-1.jpg" alt="" />
                    </div>

                    <h1 className='fw-bold'>Keep track of your staff attendance</h1>
                    <ul>
                        <li>Track your attendance with selfie, location, or face biometric based attendance</li>
                        <li>Your supervisors can approve attendance, mark absent, add late fine/overtime etc. with a single click of a button</li>
                    </ul>
                </div>

                <div className='mt-4'>
                    <div className='w-100'>
                        <img className='w-100' src="https://pagarbook.com/assets/in-image/home-description-1.jpg" alt="" />
                    </div>

                    <h1 className='fw-bold'>Keep track of your staff attendance</h1>
                    <ul>
                        <li>Track your attendance with selfie, location, or face biometric based attendance</li>
                        <li>Your supervisors can approve attendance, mark absent, add late fine/overtime etc. with a single click of a button</li>
                    </ul>
                </div>

                <div className='mt-4'>
                    <div className='w-100'>
                        <img className='w-100' src="https://pagarbook.com/assets/in-image/home-description-1.jpg" alt="" />
                    </div>

                    <h1 className='fw-bold'>Keep track of your staff attendance</h1>
                    <ul>
                        <li>Track your attendance with selfie, location, or face biometric based attendance</li>
                        <li>Your supervisors can approve attendance, mark absent, add late fine/overtime etc. with a single click of a button</li>
                    </ul>
                </div>

                <div className='mt-4'>
                    <div className='w-100'>
                        <img className='w-100' src="https://pagarbook.com/assets/in-image/home-description-1.jpg" alt="" />
                    </div>

                    <h1 className='fw-bold'>Keep track of your staff attendance</h1>
                    <ul>
                        <li>Track your attendance with selfie, location, or face biometric based attendance</li>
                        <li>Your supervisors can approve attendance, mark absent, add late fine/overtime etc. with a single click of a button</li>
                    </ul>
                </div>

                <div className='mt-4'>
                    <div className='w-100'>
                        <img className='w-100' src="https://pagarbook.com/assets/in-image/home-description-1.jpg" alt="" />
                    </div>

                    <h1 className='fw-bold'>Keep track of your staff attendance</h1>
                    <ul>
                        <li>Track your attendance with selfie, location, or face biometric based attendance</li>
                        <li>Your supervisors can approve attendance, mark absent, add late fine/overtime etc. with a single click of a button</li>
                    </ul>
                </div>

                <div className='mt-4'>
                    <div className='w-100'>
                        <img className='w-100' src="https://pagarbook.com/assets/in-image/home-description-1.jpg" alt="" />
                    </div>

                    <h1 className='fw-bold'>Keep track of your staff attendance</h1>
                    <ul>
                        <li>Track your attendance with selfie, location, or face biometric based attendance</li>
                        <li>Your supervisors can approve attendance, mark absent, add late fine/overtime etc. with a single click of a button</li>
                    </ul>
                </div>
            </div>

            <div className="mt-4 px-3 py-4 w-100 h-100">
                <div style={{
                    backgroundColor: 'var(--secondary-bg)',
                    backgroundImage: "url('https://pagarbook.com/assets/in-image/dots-blue.png')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover', // or 'contain' depending on design need
                    minHeight: '130px' // ensure there's enough height to show the image
                }}>
                    <h1 className='fw-bold'>Get in touch with us now!</h1>

                    <button style={{backgroundColor: '#0066fd', width: '50%'}} className='py-3 fw-bold mt-3'>Request Callback</button>
                </div>

                <h6>Need assistance? We're here to help. (Monday to Sunday, 8am - 8pm)</h6>

                <div className='d-flex gap-3 mt-2'>
                    <div className='d-flex gap-2'>
                        <img src="https://pagarbook.com/assets/icons/call-us.svg" alt="" />
                        <p className='m-0 fw-bold'>Call Us</p>
                    </div>
                    
                    <div>|</div>

                    <div className='d-flex gap-2'>
                        <img src="https://pagarbook.com/assets/icons/whatsapp-us.svg" alt="" />
                        <p className='m-0 fw-bold'>Whatsapp</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs