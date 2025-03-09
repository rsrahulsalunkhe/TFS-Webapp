import { LineChart } from '@mui/x-charts/LineChart';

const Temp = () => {
    return (
      <div style={{width: "100%", maxWidth: "1320px", margin: "0 auto", paddingLeft: "15px", paddingRight: "15px"}}>
        <div
        style={{
            display: "flex",
            alignItems: "center",
            marginTop: "1rem",
            marginBottom: "1rem",
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem"
        }}
        >
        {/* Circular Gray Box */}
        <div
            style={{
            borderRadius: "50%",
            backgroundColor: "gray",
            width: "50px",
            height: "50px"
            }}
        ></div>

        {/* Text Section */}
        <div style={{ marginLeft: "0.5rem" }}>
            <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>ADS</span><br />
            <span>From: Adidas AG (ADS)</span>
        </div>

        {/* Button Section (Pushed to Right) */}
        <div style={{ marginLeft: "auto" }}>
            <button
            style={{
                color: "var(--primary-background-color)",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                padding: "0.25rem 0.75rem"
            }}
            >
            Holding
            </button>
        </div>
        </div>

        <div
            style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1rem",
                marginBottom: "1rem",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem"
            }}
            >
            <h4>Key Statistics</h4>

            <span
                style={{
                marginLeft: "auto",
                alignItems: "center",
                fontWeight: "bold",
                color: "var(--secondary-text-color)"
                }}
            >
                See More
            </span>
        </div>

        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                marginTop: "1rem",
                marginBottom: "1rem",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
                gap: "1rem" // Adds spacing between grid items
            }}
            >
            {[...Array(4)].map((_, index) => (
                <div
                key={index}
                style={{
                    flex: "1 1 calc(50% - 1rem)", // 50% width on small screens
                    maxWidth: "calc(50% - 1rem)", // Ensures items don't exceed 50% width
                    padding: "0.5rem",
                    boxSizing: "border-box"
                }}
                >
                <div
                    style={{
                    backgroundColor: "var(--secondary-background-color)",
                    padding: "0.75rem",
                    borderRadius: "0.5rem"
                    }}
                >
                    <span>Total Cash</span>
                    <h4 style={{ marginTop: "0.5rem" }}>51, 876 B</h4>
                </div>
                </div>
            ))}
            </div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "1rem",
                    marginBottom: "1rem",
                    paddingLeft: "0.5rem",
                    paddingRight: "0.5rem"
                }}
                >
                <h4>Order Book</h4>
                <span
                    style={{
                    marginLeft: "auto", // Pushes the text to the right
                    fontWeight: "bold",
                    color: "var(--secondary-text-color)",
                    display: "flex",
                    alignItems: "center"
                    }}
                >
                    See More
                </span>
            </div>

        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                marginTop: "1rem",
                marginBottom: "1rem",
                paddingLeft: "0.25rem",
                paddingRight: "0.25rem",
            }}
            >
            {/* First Column */}
            <div style={{ width: "50%", padding: "0.5rem" }}>
                <div
                style={{
                    backgroundColor: "var(--secondary-background-color)",
                    padding: "0.5rem",
                    borderRadius: "0.25rem",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
                >
                <div style={{ width: "50%" }}>
                    <h5 style={{ fontWeight: "bold", marginBottom: "0.75rem" }}>LOT</h5>
                    <p style={{ fontWeight: "bold", color: "gray", textAlign: "right" }}>1,250</p>
                    <p style={{ fontWeight: "bold", color: "gray", textAlign: "right" }}>1,250</p>
                    <p style={{ fontWeight: "bold", color: "gray", textAlign: "right" }}>1,250</p>
                    <p style={{ fontWeight: "bold", color: "gray", textAlign: "right" }}>1,250</p>
                </div>
                <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
                    <h5 style={{ fontWeight: "bold", marginBottom: "0.75rem", textAlign: "right" }}>BID</h5>
                    <p style={{ fontWeight: "bold", color: "green", textAlign: "right" }}>6,350</p>
                    <p style={{ fontWeight: "bold", color: "red", textAlign: "right" }}>6,350</p>
                    <p style={{ fontWeight: "bold", color: "red", textAlign: "right" }}>6,350</p>
                    <p style={{ fontWeight: "bold", color: "red", textAlign: "right" }}>6,350</p>
                </div>
                <div style={{ width: "100%", marginTop: "0.5rem" }}>
                    <p style={{ fontWeight: "bold" }}>21,13K</p>
                </div>
                </div>
            </div>

            {/* Second Column */}
            <div style={{ width: "50%", padding: "0.5rem" }}>
                <div
                style={{
                    backgroundColor: "var(--secondary-background-color)",
                    padding: "0.5rem",
                    borderRadius: "0.25rem",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                }}
                >
                <div style={{ width: "50%" }}>
                    <h5 style={{ fontWeight: "bold", marginBottom: "0.75rem" }}>ASK</h5>
                    <p style={{ fontWeight: "bold", color: "green", textAlign: "right" }}>1,250</p>
                    <p style={{ fontWeight: "bold", color: "green", textAlign: "right" }}>1,250</p>
                    <p style={{ fontWeight: "bold", color: "green", textAlign: "right" }}>1,250</p>
                    <p style={{ fontWeight: "bold", color: "red", textAlign: "right" }}>1,250</p>
                </div>
                <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
                    <h5 style={{ fontWeight: "bold", marginBottom: "0.75rem", textAlign: "right" }}>LOT</h5>
                    <p style={{ fontWeight: "bold", color: "gray", textAlign: "right" }}>6,350</p>
                    <p style={{ fontWeight: "bold", color: "gray", textAlign: "right" }}>6,350</p>
                    <p style={{ fontWeight: "bold", color: "gray", textAlign: "right" }}>6,350</p>
                    <p style={{ fontWeight: "bold", color: "gray", textAlign: "right" }}>6,350</p>
                </div>
                <div style={{ width: "100%", marginTop: "0.5rem" }}>
                    <p style={{ fontWeight: "bold" }}>21,13K</p>
                </div>
                </div>
            </div>
        </div>

        <div
            style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1rem",
                marginBottom: "1rem",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
            }}
            >
            <h4>Recommendation</h4>
            <span
                style={{
                marginLeft: "auto",
                fontWeight: "bold",
                color: "var(--secondary-text-color)",
                display: "flex",
                alignItems: "center",
                }}
            >
                See More
            </span>
        </div>

        <div
            style={{
                display: "flex",
                alignItems: "center",
                marginTop: "1rem",
                marginBottom: "1rem",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
            }}
            >
            <div
                style={{
                borderRadius: "50%",
                backgroundColor: "gray",
                width: "50px",
                height: "50px",
                }}
            ></div>

            <div
                style={{
                marginLeft: "0.5rem",
                }}
            >
                <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>ADS</span>
                <br />
                <span>From: Adidas AG (ADS)</span>
            </div>

            <div
                style={{
                marginLeft: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                }}
            >
                <h4 style={{ marginBottom: "0" }}>$200.49</h4>
                <span style={{ fontSize: "14px", color: "green" }}>0.76%</span>
            </div>
        </div>

        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "1rem 0",
                padding: "0 0.5rem",
            }}
            >
            <div
                style={{
                borderRadius: "50%",
                backgroundColor: "gray",
                width: "50px",
                height: "50px",
                }}
            ></div>

            <div
                style={{
                marginLeft: "0.5rem",
                }}
            >
                <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>ADS</span>
                <br />
                <span>From: Adidas AG (ADS)</span>
            </div>

            <div
                style={{
                marginLeft: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                }}
            >
                <h4 style={{ marginBottom: "0" }}>$200.49</h4>
                <span style={{ fontSize: "14px", color: "green" }}>0.76%</span>
            </div>
        </div>

        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "1rem 0",
                padding: "0 0.5rem",
            }}
            >
            <div
                style={{
                borderRadius: "50%",
                backgroundColor: "gray",
                width: "50px",
                height: "50px",
                }}
            ></div>

            <div
                style={{
                marginLeft: "0.5rem",
                }}
            >
                <span style={{ fontSize: "1.25rem", fontWeight: "bold" }}>ADS</span>
                <br />
                <span>From: Adidas AG (ADS)</span>
            </div>

            <div
                style={{
                marginLeft: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                }}
            >
                <h4 style={{ marginBottom: "0" }}>$200.49</h4>
                <span style={{ fontSize: "14px", color: "green" }}>0.76%</span>
            </div>
        </div>

        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "1rem 0",
                padding: "0 0.5rem",
            }}
            >
            <h4>Your Portfolio</h4>
            <span
                style={{
                marginLeft: "auto",
                fontWeight: "bold",
                color: "var(--secondary-text-color)",
                display: "flex",
                alignItems: "center",
                }}
            >
                Add more
            </span>
        </div>

        <div
            style={{
                display: "flex",
                overflowX: "auto",
                gap: "20px",
                whiteSpace: "nowrap",
            }}
            >
            {[...Array(3)].map((_, index) => (
                <div
                key={index}
                style={{
                    backgroundColor: "var(--secondary-background-color)",
                    width: "250px",
                    padding: "16px",
                    flexShrink: "0",
                    borderRadius: "8px", // Equivalent to Bootstrap's 'rounded'
                }}
                >
                <div
                    style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                    }}
                >
                    <div
                    style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: "gray",
                    }}
                    ></div>
                    <h5 style={{ margin: "0", marginLeft: "8px" }}>Saving</h5>
                    <h3 style={{ marginLeft: "auto" }}>...</h3>
                </div>
                <h2>$4,342.71</h2>
                <div style={{ display: "flex" }}>
                    <span>Your profit this goal</span>
                    <span
                    style={{
                        marginLeft: "8px",
                        color: "green", // Bootstrap's 'text-success'
                        fontWeight: "bold",
                    }}
                    >
                    8.2
                    </span>
                </div>
                </div>
            ))}
        </div>

        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "1rem 0",
                padding: "0 0.5rem",
            }}
            >
            <h4>Changes</h4>
            <span
                style={{
                marginLeft: "auto",
                fontWeight: "bold",
                color: "var(--secondary-text-color)",
                display: "flex",
                alignItems: "center",
                }}
            >
                Add more
            </span>
        </div>

        <div style={{ padding: "0 16px" }}>
            <div
                style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "16px",
                borderRadius: "8px",
                backgroundColor: "var(--secondary-background-color)",
                }}
            >
                {/* Location Column */}
                <div>
                <h5 style={{ marginBottom: "12px" }}>Location</h5>
                <p>Delhi</p>
                <p>Pune</p>
                <p>Mumbai</p>
                </div>

                {/* Rate Column */}
                <div>
                <h5 style={{ marginBottom: "12px" }}>Rate</h5>
                <p>5000</p>
                <p>5500</p>
                <p>4500</p>
                </div>

                {/* Change Column */}
                <div>
                <h5 style={{ marginBottom: "12px" }}>Change</h5>
                <p style={{ color: "green", fontWeight: "bold" }}>2.5</p>
                <p style={{ color: "green", fontWeight: "bold" }}>3.5</p>
                <p style={{ color: "green", fontWeight: "bold" }}>2.3</p>
                </div>
            </div>
        </div>

        <div style={{ margin: "8px 0" }}>
            <h1 style={{ fontWeight: "bold" }}>$200.49</h1>
            <span style={{ color: "var(--secondary-text-color)" }}>Trend is </span>
            <span style={{ marginLeft: "8px", color: "green", fontWeight: "bold" }}>
                $58.16 (45%)
            </span>
        </div>

        
        <div style={{ width: "100%", height: "100%" }}>
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[{ data: [2, 5.5, 2, 8.5, 1.5, 5] }]}
                width={350}
                height={300}
            />
        </div>
      </div>
    );
  };
  
  export default Temp;