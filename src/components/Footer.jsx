import home from './../assets/home.svg'
import futures from './../assets/futures.svg'
import account from './../assets/account.svg'


const Footer = () => {
    return (
        <footer
            className="d-flex w-100 justify-content-around align-items-center bg-white border-top"
            >
            {/* Home */}
            <div className="d-flex flex-column align-items-center">
                <div
                className="d-flex justify-content-center align-items-center"
                style={{ width: '25px', height: '25px' }}
                >
                <img className="img-fluid" src={home} alt="Home" />
                </div>
                <span style={{ fontSize: '14px', fontWeight: '500', color: '#333' }}>HOME</span>
            </div>

            {/* Futures */}
            <div className="d-flex flex-column align-items-center">
                <div
                className="d-flex justify-content-center align-items-center"
                style={{ width: '25px', height: '25px' }}
                >
                <img className="img-fluid" src={futures} alt="Futures" />
                </div>
                <span style={{ fontSize: '14px', fontWeight: '500', color: '#333' }}>FUTURES</span>
            </div>

            {/* Account */}
            <div className="d-flex flex-column align-items-center">
                <div
                className="d-flex justify-content-center align-items-center"
                style={{ width: '25px', height: '25px' }}
                >
                <img className="img-fluid" src={account} alt="Account" />
                </div>
                <span style={{ fontSize: '14px', fontWeight: '500', color: '#333' }}>ACCOUNT</span>
            </div>
        </footer>
    );
  };
  
  export default Footer;