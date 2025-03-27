import { useNavigate } from 'react-router-dom';
import banner from './../assets/banner.jpeg'
import bajra from './../assets/bajra.svg'
import kabuli from './../assets/kabuli.svg'
import urad from './../assets/urad.svg'
import chana from './../assets/chana.svg'
import dividerLine from './../assets/divider-line.svg'
import './style.scss'

const Home = () => {
    const homeData = {
        "status": 200,
        "message": "Record found successfully!",
        "data": {
          "ban": [
            {
              "i": "https://mandicentral.com//ImageStorage/1614685144-blue-slider-1.png",
              "r": "0.38",
              "re": "https://tradeforsure.com/news.html?/24399&mandiReport",
              "type": "b"
            },
            {
              "i": "https://imgur.com/tTgScGf",
              "r": "0.38",
              "re": "https://tradeforsure.com/news.html?/24399&mandiReport",
              "type": "b"
            },
            {
              "i": "https://mandicentral.com//ImageStorage/1614685144-yellow-slider_1.png",
              "r": "0.38",
              "re": "https://tradeforsure.com/news.html?/28899&marketNews",
              "type": "b"
            },
            {
              "i": "https://mandicentral.com//ImageStorage/1614674495-slider-6.png",
              "r": "0.38",
              "re": "https://tradeforsure.com/news.html?/28894&marketNews",
              "type": "a"
            },
            {
              "i": "https://mandicentral.com//ImageStorage/1614685144-brown-slider-1.png",
              "r": "0.38",
              "re": "https://tradeforsure.com/news.html?/28896&marketNews",
              "type": "c"
            },
            {
              "i": "https://mandicentral.com//ImageStorage/1614685144-red-slider_1.png",
              "r": "0.38",
              "re": "https://tradeforsure.com/news.html?/28900&marketNews",
              "type": "a"
            },
            {
              "i": "https://i.pinimg.com/originals/11/78/cf/1178cf5dd4a6ccd59318305541030945.jpg",
              "r": "1",
              "re": "https://www.youtube.com/watch?v=qvC3xyOxMyY",
              "type": "b"
            }
          ],
          "N": {
            "sec": [
              {
                "cat_id": "1",
                "cat_name": "Cereals",
                "com": [
                  {
                    "commodity_id": "90",
                    "commodity_name": "Guar seed",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1710226027-Guar_Icon.jpg",
                      "n": "Guar seed ",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "98",
                    "commodity_name": "Paddy",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993736-Paddy.jpg",
                      "n": "Paddy",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "86",
                    "commodity_name": "Rice",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993751-Rice.jpg",
                      "n": "Rice",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "54",
                    "commodity_name": "Wheat",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993751-Wheat.jpg",
                      "n": "Wheat",
                      "t": "Auction Update"
                    }
                  }
                ]
              },
              {
                "cat_id": "2",
                "cat_name": "Pulses",
                "com": [
                  {
                    "commodity_id": "109",
                    "commodity_name": "Chana Daal",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993751-Tur_dal.jpg",
                      "n": "Chana Daal",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "83",
                    "commodity_name": "Kabuli Chana",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993736-Kabuli_chana.jpg",
                      "n": "Kabuli Chana",
                      "t": "Import Update"
                    }
                  },
                  {
                    "commodity_id": "85",
                    "commodity_name": "Masoor",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993736-Masoor.jpg",
                      "n": "Masoor",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "110",
                    "commodity_name": "Masoor Daal",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993736-Masoor_dal.jpg",
                      "n": "Masoor Daal",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "93",
                    "commodity_name": "Matar",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993736-Matar.jpg",
                      "n": "Matar",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "11",
                    "commodity_name": "Moong Daal",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993736-Moong_dal.jpg",
                      "n": "Moong Daal",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "99",
                    "commodity_name": "Moth",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993736-Moth.jpg",
                      "n": "Moth",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "112",
                    "commodity_name": "Tur Daal",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1710226085-toor-dal_icon.jpg",
                      "n": "Tur Daal",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "23",
                    "commodity_name": "Urad",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993751-Urad.jpg",
                      "n": "Urad",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "113",
                    "commodity_name": "Urad Daal",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993751-Urad_dal.jpg",
                      "n": "Urad Daal",
                      "t": ""
                    }
                  }
                ]
              },
              {
                "cat_id": "3",
                "cat_name": "Oil seeds",
                "com": [
                  {
                    "commodity_id": "100",
                    "commodity_name": "Castor",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993725-Castor.jpg",
                      "n": "Castor",
                      "t": "Gujarat Update"
                    }
                  },
                  {
                    "commodity_id": "130",
                    "commodity_name": "Castor Oil",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993725-Castor_oil.jpg",
                      "n": "Castor Oil",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "87",
                    "commodity_name": "Groundnut",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993725-Groundnut.jpg",
                      "n": "Groundnut",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "128",
                    "commodity_name": "Groundnut Oil",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993725-Groundnut_oil.jpg",
                      "n": "Groundnut Oil",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "94",
                    "commodity_name": "Mustard",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993736-Mustard.jpg",
                      "n": "Mustard",
                      "t": "Agra Rates"
                    }
                  },
                  {
                    "commodity_id": "131",
                    "commodity_name": "Mustard DOC",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993736-Mustard_doc.jpeg",
                      "n": "Mustard DOC",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "125",
                    "commodity_name": "Mustard Oil",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993736-Mustard_oil.jpg",
                      "n": "Mustard Oil",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "118",
                    "commodity_name": "Palmolein",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993751-Palmolein.jpeg",
                      "n": "Palmolein",
                      "t": "KLC Updated"
                    }
                  },
                  {
                    "commodity_id": "134",
                    "commodity_name": "Rice Bran DOC",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1710226085-sugar_icon.jpg",
                      "n": "Rice Bran DOC",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "107",
                    "commodity_name": "Sesame",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993751-Sesame.jpg",
                      "n": "Sesame",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "135",
                    "commodity_name": "Sesame oil",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1710226085-SesameOil_icon.jpg",
                      "n": "Sesame oil",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "117",
                    "commodity_name": "Soya DOC",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993751-Soya-doc.jpg",
                      "n": "Soya DOC",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "127",
                    "commodity_name": "Soya Oil",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993751-Soya_oil.jpg",
                      "n": "Soya Oil",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "101",
                    "commodity_name": "Soybean",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993751-Soyabran.jpg",
                      "n": "Soybean",
                      "t": "CBOT Analysis"
                    }
                  },
                  {
                    "commodity_id": "88",
                    "commodity_name": "Sunflower",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993751-Sunflower_seed.jpg",
                      "n": "Sunflower Seed",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "126",
                    "commodity_name": "Sunflower Oil",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993751-Sunflower_oil.jpg",
                      "n": "Sunflower Oil",
                      "t": ""
                    }
                  }
                ]
              },
              {
                "cat_id": "4",
                "cat_name": "Fibers",
                "com": [
                  {
                    "commodity_id": "89",
                    "commodity_name": "Cotton",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993725-Cotton.jpg",
                      "n": "Cotton",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "124",
                    "commodity_name": "Cotton Bales",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993725-Cotton_Bales.jpg",
                      "n": "Cotton Bales",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "129",
                    "commodity_name": "Cotton Oil",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993725-Cotton_oil.jpg",
                      "n": "Cotton Oil",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "120",
                    "commodity_name": "Cotton Oil Cake",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993725-Cotton_oil_cake.jpg",
                      "n": "Cotton Oil Cake",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "108",
                    "commodity_name": "Cotton Oil Seed",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993725-Cotton_Seed.jpg",
                      "n": "Cotton Oil Seed",
                      "t": ""
                    }
                  }
                ]
              },
              {
                "cat_id": "5",
                "cat_name": "Spices",
                "com": [
                  {
                    "commodity_id": "115",
                    "commodity_name": "Black Pepper",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1710225978-Black-Pepper_icon.jpg",
                      "n": "Black Pepper",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "116",
                    "commodity_name": "Cardamom",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1710225978-cardomam_icon.jpg",
                      "n": "Cardamom",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "119",
                    "commodity_name": "Clove",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1710225978-cloves_icon.jpg",
                      "n": "Clove",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "92",
                    "commodity_name": "Coriander seeds",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993725-Coriander_seed.jpg",
                      "n": "Coriander seeds",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "132",
                    "commodity_name": "Fennel",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1710226065-sauf_icon.jpg",
                      "n": "Fennel",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "133",
                    "commodity_name": "Fenugreek",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1710226027-fenugreek_icon.jpg",
                      "n": "Fenugreek",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "41",
                    "commodity_name": "Jeera",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993736-Jeera.jpg",
                      "n": "Jeera",
                      "t": "NCDEX Update"
                    }
                  },
                  {
                    "commodity_id": "97",
                    "commodity_name": "Red Chilli",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1726993751-Red_chilli.jpg",
                      "n": "Red Chilli",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "96",
                    "commodity_name": "Turmeric",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1710226085-turmeric_icon.jpg",
                      "n": "Turmeric",
                      "t": "NCDEX Update"
                    }
                  }
                ]
              },
              {
                "cat_id": "6",
                "cat_name": "Other",
                "com": [
                  {
                    "commodity_id": "114",
                    "commodity_name": "Gram Flour(Besan)",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1710225978-besan_icon.jpg",
                      "n": "Gram Flour(Besan)",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "123",
                    "commodity_name": "Jaggery",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "https://jaswantbafna.in.net//ImageStorage/1710226027-jaggery_icon.jpg",
                      "n": "Jaggery",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "104",
                    "commodity_name": "Maida",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "",
                      "n": "Maida",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "122",
                    "commodity_name": "Maize oil cake",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "",
                      "n": "Maize oil cake",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "106",
                    "commodity_name": "Semolina(suji)",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "",
                      "n": "Semolina(suji)",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "91",
                    "commodity_name": "Sugar",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "",
                      "n": "Sugar",
                      "t": ""
                    }
                  },
                  {
                    "commodity_id": "105",
                    "commodity_name": "Wheat bran",
                    "expiry_date": null,
                    "is_expiry": null,
                    "det": {
                      "i": "",
                      "n": "Wheat bran",
                      "t": ""
                    }
                  }
                ]
              }
            ],
            "img": []
          },
          "G": {
            "sec": []
          },
          "S": {
            "sec": []
          }
        }
      }

    const navigate = useNavigate();

    const handleNavigation = (commodity) => {
        navigate(`/${commodity}`);
    };
    return (
        <main className='bg-primary'>
            <div className='d-grid'>
                {homeData.data.ban.map((b) => (
                    <div className='w-100 h-100'>
                        <img className='w-100 h-100' src={b.i} alt="" />
                    </div>
                ))}
            </div>

            <div className='mt-4'>
                <img className='w-100 h-100' src={dividerLine} alt="" />
            </div>
            
            {homeData.data.N.sec.map((s) => (
                <div key={s.cat_id}>
                    <div className='mx-5'>
                        <div className='hr-lines'>
                            <span className='text-secondary'>{s.cat_name}</span>
                        </div>
                    </div>

                    {/* Grouping commodities into rows of 3 */}
                    {Array.from({ length: Math.ceil(s.com.length / 3) }, (_, rowIndex) => (
                        <div 
                            key={`row-${rowIndex}`} 
                            className='d-flex flex-wrap justify-content-start' // Added spacing
                        >
                            {s.com.slice(rowIndex * 3, rowIndex * 3 + 3).map((c, cIndex) => (
                                <div 
                                    key={c.id || `commodity-${rowIndex}-${cIndex}`} 
                                    className='commodity d-flex flex-column align-items-center text-center p-3' 
                                    style={{ width: '33%', gap: '10px' }} // Increased spacing
                                >
                                    {/* Image Handling */}
                                    <div className='img' style={{ width: '75px', height: '75px' }}>
                                        {c.det.i ? (
                                            <img src={c.det.i} alt={c.commodity_name} className='w-100 h-100 rounded-circle' />
                                        ) : (
                                            <div className='w-100 h-100 rounded-circle bg-secondary'></div>
                                        )}
                                    </div>
                                    {/* Centered Text */}
                                    <div className='w-100'>
                                        <h5 style={{fontSize: '16px'}} className='m-0'>{c.commodity_name}</h5>
                                        {c.det.t && <p style={{fontSize: '14px'}} className='special m-0'>• {c.det.t}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}

            <div className='d-flex justify-content-evenly'>
                <div className='commodity' onClick={() => handleNavigation("chana")}>
                    <div className='img'>
                        <img src={chana} alt="" />
                    </div>
                    <span>Chana</span>
                    <p className='special text-center'>• Special Report</p>
                </div>
                <div className='commodity' onClick={() => handleNavigation("kabuli")}>
                    <div className='img'>
                        <img src={kabuli} alt="" />
                    </div>
                    <span>Kabuli</span>
                </div>
                <div className='commodity' onClick={() => handleNavigation("urad")}>
                    <div className='img'>
                        <img src={urad} alt="" />
                    </div>
                    <span>Urad</span>
                </div>
            </div>

            <div style={{backgroundColor: '#FBEDE0'}} className='py-5 px-2 mt-3'>
                <h1 style={{fontSize: '60px', color: 'var(--primary)'}} className='fw-bold'>Mandi Centrar</h1>
                <p className='fs-5 mt-3' style={{color: '#000000'}}>Agri Trade Assistance App</p>
            </div>
        </main>
    );
  };
  
  export default Home;