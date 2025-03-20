import CenterRateCard from "../components/centerRateCard/CenterRateCard";

const Futures = () => {
    const futuresList = {
        "status": 200,
        "message": "Record found successfully!",
        "data": [
          {
            "zone_id": "3",
            "fut_id": "AR_CH-Maize-Borgaon-Feed Quality, CC",
            "rec_date": "2024-06-01",
            "is_detail": "0",
            "content": {
              "ba": [],
              "ca": [
                {
                  "ch": "",
                  "co": "",
                  "col": "",
                  "val": "₹2350-2350",
                  "title": "7 Days"
                }
              ],
              "co": [
                {
                  "i": "1",
                  "v": "Market continues to recovery, rates recoved by 150 in last 2 days"
                },
                {
                  "i": "9",
                  "v": "Sellers are hesitant to sell after rates declined by 500 in 1 week"
                },
                {
                  "i": "3",
                  "v": "3_English"
                }
              ],
              "Rate": {
                "loc": "Borgaon",
                "ref": {
                  "m": "",
                  "n": "Arihant Canvassers, Chhindwara"
                },
                "var": "Feed Quality, CC",
                "rate": "₹2350-2350",
                "change": {
                  "col": "#00AA08",
                  "val": "+10"
                }
              },
              "senti": {
                "col": "#00AA08",
                "val": "Steady to Firm"
              }
            }
          },
          {
            "zone_id": "2",
            "fut_id": "SI_NO-Maize-Gokak-Starch",
            "rec_date": "2024-06-01",
            "is_detail": "0",
            "content": {
              "ba": [],
              "ca": [
                {
                  "ch": "▲10",
                  "co": "",
                  "col": "#00AA08",
                  "val": "₹2500-2500",
                  "title": "7 Days"
                },
                {
                  "ch": "",
                  "co": "",
                  "col": "",
                  "val": "₹2500",
                  "title": "14 Days"
                }
              ],
              "co": [],
              "Rate": {
                "loc": "Gokak",
                "ref": {
                  "m": "",
                  "n": "Trade Sources"
                },
                "var": "Starch",
                "rate": "₹2500-2575",
                "change": {
                  "col": "#EE0000",
                  "val": "-50"
                }
              },
              "senti": {
                "col": "",
                "val": "Trading Range Bound"
              }
            }
          },
          {
            "zone_id": "4",
            "fut_id": "AR_CH-Maize-Badnawar-MP Billing",
            "rec_date": "2024-06-01",
            "is_detail": "0",
            "content": {
              "ba": [
                {
                  "i": "https://drive.google.com/file/d/1FORfeR4nYo2uFSjNL44XbA3aGGQw7C0_/view?usp=drive_link",
                  "r": "0.4",
                  "re": "",
                  "type": "e"
                },
                {
                  "i": "https://drive.google.com/file/d/1S0-lCnISGhBDdqbaweIJPbBLfKuDpLdC/view?usp=drive_link",
                  "r": "0.4",
                  "re": "",
                  "type": "a"
                }
              ],
              "ca": [
                {
                  "ch": "▼20",
                  "co": "",
                  "col": "EE0000",
                  "val": "₹2350-2350",
                  "title": "7 Days"
                }
              ],
              "co": [
                {
                  "i": "8",
                  "v": "Trade activity very dull"
                }
              ],
              "Rate": {
                "loc": "Badnawar",
                "ref": {
                  "m": "",
                  "n": "Arihant Canvassers, Chhindwara"
                },
                "var": "MP Billing",
                "rate": "₹2350-2375",
                "change": {
                  "col": "00AA09",
                  "val": "+5"
                }
              },
              "senti": {
                "col": "",
                "val": "Trading Range Bound"
              }
            }
          },
          {
            "zone_id": "3",
            "fut_id": "AD_AU-Maize-Baramati-Feed Quality, Party Account",
            "rec_date": "2024-06-01",
            "is_detail": "0",
            "content": {
              "ba": [],
              "ca": [],
              "co": [
                {
                  "i": "9",
                  "v": "New Arrivals are picking pace in MP"
                },
                {
                  "i": "13",
                  "v": "Supply constraint is getting eased"
                }
              ],
              "Rate": {
                "loc": "Baramati",
                "ref": {
                  "m": "",
                  "n": "Adinath Broker, Aurangabad"
                },
                "var": "Feed Quality, Party Account",
                "rate": "₹2530",
                "change": {
                  "col": "",
                  "val": "+40"
                }
              },
              "senti": {
                "col": "",
                "val": "Market Range Bound"
              }
            }
          },
          {
            "zone_id": "4",
            "fut_id": "AD_AU-Maize-Bhuinj-Feed Quality, Party Account",
            "rec_date": "2024-06-01",
            "is_detail": "0",
            "content": {
              "ba": [],
              "ca": [],
              "co": [
                {
                  "i": "13",
                  "v": "Supply from karnataka has started in Jalgaon "
                }
              ],
              "Rate": {
                "loc": "Bhuinj",
                "ref": {
                  "m": "",
                  "n": "Adinath Broker, Aurangabad"
                },
                "var": "Feed Quality, Party Account",
                "rate": "₹2550",
                "change": {
                  "col": "",
                  "val": ""
                }
              },
              "senti": {
                "col": "",
                "val": "Market Range Bound"
              }
            }
          },
          {
            "zone_id": "1",
            "fut_id": "SI_NO-Maize-Sangli-Sahyadri-Starch",
            "rec_date": "2024-06-01",
            "is_detail": "0",
            "content": {
              "ba": [
                {
                  "i": "https://drive.google.com/file/d/1S0-lCnISGhBDdqbaweIJPbBLfKuDpLdC/view?usp=drive_link",
                  "r": "0.4",
                  "re": "",
                  "type": "d"
                }
              ],
              "ca": [
                {
                  "ch": "",
                  "co": "",
                  "col": "",
                  "val": "₹2525",
                  "title": "7 Days"
                },
                {
                  "ch": "▼40",
                  "co": "",
                  "col": "EE0000",
                  "val": "₹2525-2550",
                  "title": "14 Days"
                }
              ],
              "co": [
                {
                  "i": "",
                  "v": "From last week market have increased by 150-175"
                }
              ],
              "Rate": {
                "loc": "Sangli",
                "ref": {
                  "m": "",
                  "n": ""
                },
                "var": "Starch",
                "rate": "₹2525",
                "change": {
                  "col": "00AA09",
                  "val": "+50"
                }
              },
              "senti": {
                "col": "",
                "val": "Trading Range Bound"
              }
            }
          },
          {
            "zone_id": "2",
            "fut_id": "AR_CH-Maize-Ghatabillod-Tirupati-Starch, Party account",
            "rec_date": "2024-06-01",
            "is_detail": "0",
            "content": {
              "ba": [],
              "ca": [],
              "co": [],
              "Rate": {
                "loc": "Ghatabillod",
                "ref": {
                  "m": "",
                  "n": ""
                },
                "var": "Starch, Party account",
                "rate": "₹2450-2450",
                "change": {
                  "col": "",
                  "val": ""
                }
              },
              "senti": {
                "col": "EE0000",
                "val": "Market Weak"
              }
            }
          },
          {
            "zone_id": "2",
            "fut_id": "AR_CH-Maize-Sadaipur-ABIS-Feed Quality, CC",
            "rec_date": "2024-06-01",
            "is_detail": "0",
            "content": {
              "ba": [],
              "ca": [
                {
                  "ch": "▼30",
                  "co": "",
                  "col": "EE0000",
                  "val": "₹2270-2270",
                  "title": "7 Days"
                },
                {
                  "ch": "",
                  "co": "",
                  "col": "",
                  "val": "₹2270-2270",
                  "title": "14 Days"
                },
                {
                  "ch": "▼30",
                  "co": "",
                  "col": "EE0000",
                  "val": "₹2270-2270",
                  "title": "21 Days"
                }
              ],
              "co": [
                {
                  "i": "6",
                  "v": "Supply constrained is being observed for ready delivery"
                }
              ],
              "Rate": {
                "loc": "Sadaipur",
                "ref": {
                  "m": "",
                  "n": ""
                },
                "var": "Feed Quality, CC",
                "rate": "₹2270-2270",
                "change": {
                  "col": "00AA08",
                  "val": "10"
                }
              },
              "senti": {
                "col": "",
                "val": "Market Range Bound"
              }
            }
          },
          {
            "zone_id": "4",
            "fut_id": "AR_CH-Maize-Jagdishpur-ABIS-Feed Quality, CC",
            "rec_date": "2024-06-01",
            "is_detail": "0",
            "content": {
              "ba": [],
              "ca": [
                {
                  "ch": "",
                  "co": "",
                  "col": "",
                  "val": "₹2260-2260",
                  "title": "7 Days"
                },
                {
                  "ch": "",
                  "co": "",
                  "col": "",
                  "val": "₹2260-2260",
                  "title": "14 Days"
                },
                {
                  "ch": "",
                  "co": "",
                  "col": "",
                  "val": "₹2260-2260",
                  "title": "21 Days"
                }
              ],
              "co": [
                {
                  "i": "4",
                  "v": "Sellers are on sidelines after NAFED stops auctions"
                }
              ],
              "Rate": {
                "loc": "Jagdishpur",
                "ref": {
                  "m": "",
                  "n": ""
                },
                "var": "Feed Quality, CC",
                "rate": "",
                "change": {
                  "col": "EE0001",
                  "val": "-10"
                }
              },
              "senti": {
                "col": "",
                "val": "Trading Range Bound"
              }
            }
          },
          {
            "zone_id": "3",
            "fut_id": "AR_CH-Maize-Muzaffarpur-ABIS-Feed Quality, CC",
            "rec_date": "2024-06-01",
            "is_detail": "0",
            "content": {
              "ba": [],
              "ca": [],
              "co": [
                {
                  "i": "1",
                  "v": "Buyers are on side lines after import annoucement"
                }
              ],
              "Rate": {
                "loc": "Muzaffarpur",
                "ref": {
                  "m": "",
                  "n": "Arihant Canvassers, Chhindwara"
                },
                "var": "Feed Quality, CC",
                "rate": "₹2230-2230",
                "change": {
                  "col": "",
                  "val": "+25"
                }
              },
              "senti": {
                "col": "",
                "val": "Trading Range Bound"
              }
            }
          }
        ]
      }

    return (
        <div className="bg-tertiary">
            {futuresList.data.map((p, index) => (
                <CenterRateCard key={index} rate={p} />
            ))}
        </div>
    );
  };
  
  export default Futures;