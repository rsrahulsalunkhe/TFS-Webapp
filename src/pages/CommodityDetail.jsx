import { useParams } from 'react-router-dom';
import CenterRateCard from '../components/centerRateCard/CenterRateCard';
import ReportCard from '../components/reportCard/ReportCard';

const Detail = () => {
    const { commodity } = useParams();

    const reportList = 
        {
            "status": 200,
            "message": "Record found successfully!",
            "data": {
                "card": [
                    {
                        "card_id": "68",
                        "rec_date": "2025-02-21",
                        "blog_type": "s",
                        "com_id": "68",
                        "blog_key": null,
                        "blog_id": "Maize-2024-08-09",
                        "content_id": "Maize_68_10",
                        "content_sub_id": "Maize-68-10",
                        "content": {
                            "ban": [
                                {
                                    "i": "",
                                    "r": "",
                                    "re": "",
                                    "type": ""
                                }
                            ],
                            "img": {
                                "i": "https://i.imgur.com/DPMh3Ng.png",
                                "r": "0.4",
                                "re": "",
                                "type": "a"
                            },
                            "card": {
                                "b": "English Button",
                                "p": [
                                    {
                                        "i": "1",
                                        "t": "Chana Rises Sharply, Good Demand in Evening"
                                    },
                                    {
                                        "i": "2",
                                        "t": "After year-long rise, prices of pulses start declining"
                                    },
                                    {
                                        "i": "",
                                        "t": "Maize : Will prices rally again? Find Answers"
                                    }
                                ],
                                "tit": "Gaurav Joshi, Jalgaon Indicative Trade Maize Nor",
                                "subtit": ""
                            }
                        }
                    },
                    {
                        "card_id": "82",
                        "rec_date": "2024-11-01",
                        "blog_type": "g",
                        "com_id": "68",
                        "blog_key": null,
                        "blog_id": "Maize-2024-08-09",
                        "content_id": "Maize_68_75",
                        "content_sub_id": "Maize-68-75",
                        "content": {
                            "ban": [
                                {
                                    "i": "https://i.imgur.com/2yyawuW.png",
                                    "r": "0.4",
                                    "re": "",
                                    "type": ""
                                },
                                {
                                    "i": "https://i.imgur.com/2yyawuW.png",
                                    "r": "0.5",
                                    "re": "c",
                                    "type": "c"
                                }
                            ],
                            "img": {
                                "i": "https://i.imgur.com/DPMh3Ng.png",
                                "r": "0.4",
                                "re": "",
                                "type": ""
                            },
                            "card": {
                                "b": "Gulshan Kumar, Jaipur Indicative Trade Maize Nor",
                                "p": [
                                    {
                                        "i": "",
                                        "t": "Crop Damage Surpasses 1.5 Lakh Hectares"
                                    }
                                ],
                                "tit": "Gulshan Kumar, Jaipur Indicative Trade Maize Nor",
                                "subtit": "Maize Nor Deals in Chana, Kabuli Chana, Masoor, Matar, Moong, Moth, Tur, Urad"
                            }
                        }
                    },
                    {
                        "card_id": "77",
                        "rec_date": "2024-10-30",
                        "blog_type": "s",
                        "com_id": "68",
                        "blog_key": null,
                        "blog_id": "Maize-2024-08-09",
                        "content_id": "Maize_68_34",
                        "content_sub_id": "Maize-68-34",
                        "content": {
                            "ban": [
                                {
                                    "i": "",
                                    "r": "",
                                    "re": "",
                                    "type": ""
                                }
                            ],
                            "img": {
                                "i": "https://i.imgur.com/DPMh3Ng.png",
                                "r": "0.4",
                                "re": "",
                                "type": ""
                            },
                            "card": {
                                "b": "Krishna Canvassing Company, Hingoli Indicative Trade Maize Nor",
                                "p": [
                                    {
                                        "i": "",
                                        "t": "India's kharif crop sowing outpaces previous year figures"
                                    },
                                    {
                                        "i": "",
                                        "t": "Soybeans, corn fall as US rain forecast eases supply fears"
                                    },
                                    {
                                        "i": "",
                                        "t": "Agricultural Exports Decline by 3.24% in Q1"
                                    }
                                ],
                                "tit": "Krishna Canvassing Company, Hingoli Indicative Trade Maize Nor",
                                "subtit": "Maize Nor Deals in Tur, Urad, Chana, Masoor, Moong"
                            }
                        }
                    },
                    {
                        "card_id": "69",
                        "rec_date": "2024-09-02",
                        "blog_type": "n",
                        "com_id": "68",
                        "blog_key": null,
                        "blog_id": "Maize-2024-08-09",
                        "content_id": "Maize_68_1",
                        "content_sub_id": "Maize-68-1",
                        "content": {
                            "ban": [
                                {
                                    "i": "https://i.imgur.com/2yyawuW.png",
                                    "r": "0.4",
                                    "re": "",
                                    "type": "b"
                                }
                            ],
                            "img": {
                                "i": "https://i.imgur.com/2yyawuW.png",
                                "r": "0.4",
                                "re": "",
                                "type": "b"
                            },
                            "card": {
                                "b": "Shri Arihant Trading, Indore Indicative Trade Maize Nor",
                                "p": [
                                    {
                                        "i": "2",
                                        "t": "Soy prices move down in Brazil"
                                    }
                                ],
                                "tit": "Shri Arihant Trading, Indore Indicative Trade Maize Nor",
                                "subtit": "Maize Nor Deals in Moong, Masoor, Tur, Urad, Musturd, Soybean, Chana"
                            }
                        }
                    },
                    {
                        "card_id": "90",
                        "rec_date": "2024-08-09",
                        "blog_type": "n",
                        "com_id": "68",
                        "blog_key": null,
                        "blog_id": "Maize-2024-08-09",
                        "content_id": "Maize_68_87",
                        "content_sub_id": "Maize-68-87",
                        "content": {
                            "ban": [],
                            "img": null,
                            "card": {
                                "b": "Click For Complete Detail",
                                "p": [
                                    {
                                        "i": "24",
                                        "t": "Chicago corn and soy strengthen on weaker dollar"
                                    }
                                ],
                                "tit": "Ajay Garg, Delhi Indicative Trade Maize Nor",
                                "subtit": "Maize Nor Deals in Maize, Masoor, Chana, Rajma, Tur Dal, Moong, Moong Dal Urad, Urad Dal"
                            }
                        }
                    }
                ],
                "ban": [
                    {
                        "i": "https://jaswantbafna.in.net//ImageStorage/1726906604-17.png",
                        "r": "0.4",
                        "re": "https://tradeforsure.com/news.html?/24399&mandiReport",
                        "type": "b"
                    }
                ]
            }
        }

    return (
        <div className='container d-flex flex-column gap-3 py-3'>
            {/* <h2>Detail Page for {commodity.charAt(0).toUpperCase() + commodity.slice(1)}</h2>
            <p>More information about {commodity} will be displayed here.</p> */}
            {reportList.data.card.map((report) => (
                <ReportCard key={report.card_id} report={report} />
            ))}
        </div>
    );
  };
  
  export default Detail;