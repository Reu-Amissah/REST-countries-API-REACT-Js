import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../Styles/Landing.css";
import "../Styles/Mq.css";
import { DarkModeContext } from "../Components/DarkMode";
// import { faAslInterpreting } from "@fortawesome/free-solid-svg-icons";

function LandingPage() {
  const { isDarkMode } = useContext(DarkModeContext);
  const [data, setData] = useState([]);
  const [filterPath, setFilterPath] = useState("all");
  const [filterSearch, setFilterSearch] = useState("");
  const [defaultData, setDefaultData] = useState([]);

  const [error, setError] = useState(false);

  // const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const jsonData = await response.json();
        setData(jsonData);
        setDefaultData(jsonData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  // search filter UseEffect handler
  useEffect(() => {
    // setFilterSearch(e.target.value);
    fetch(`https://restcountries.com/v3.1/${filterPath}/${filterSearch}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        if (responseJSON && responseJSON.length > 0) {
          setData(responseJSON);
          setError(false);
        } else {
          // Handle invalid search result
          // alert(`${filterSearch} is an Invalid input...`);
          setError(true);
          document.getElementById("search").value = "";
          setData(defaultData); // setData to the defaultData generated
        }
      })
      .catch((error) => {
        //
      });
  }, [filterPath, filterSearch, defaultData]);

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setFilterPath("all");
      setError(false);
    } else {
      setFilterPath("name");
    }
    setFilterSearch(e.target.value);
  };

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setFilterPath("all");
      setError(false);
    } else {
      setFilterPath("region");
    }
    setFilterSearch(e.target.value);
    // fetch(`https://restcountries.com/v3.1/${filterPath}/${filterSearch}`)
    //   .then((response) => response.json())
    //   .then((responseJSON) => {
    //     setData(responseJSON);
    //   })
    //   .catch((error) => {
    //     //handle error
    //   });
  };
  const uniqueRegions = [...new Set(defaultData.map((item) => item.region))];

  return (
    <section
      className={`landing-page ${isDarkMode ? "dark-mode" : ""}`}
      id="landing"
    >
      <div className="search-item">
        <div className="search">
          <span className="material-symbols-outlined">search</span>
          <input
            id="search"
            className="search-input"
            placeholder="Search for a country..."
            onChange={handleSearch}
          ></input>
        </div>
        <select className="filter" onChange={handleFilter}>
          {/* filter by region selector */}
          <option>Filter by Region</option>
          {uniqueRegions.map((region, index) => (
            <option className="item" key={index}>
              {region}
            </option>
          ))}
        </select>
      </div>

      {error ? (
        <h1
          className="items-div"
          style={{
            paddingTop: "50px",
            height: "100vh",
            fontSize: "16px",
            display: "block",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          ...Oops! Seems your search item doesn't match any item within the
          Database
          <p style={{ paddingTop: "30px" }}>Please Try Again</p>
        </h1>
      ) : (
        <div className="items-div">
          {data.map((item, index) => (
            <div className="item" key={index}>
              <Link to={`detail/${item.area}`}>
                <img
                  src={item.flags.png}
                  width={"100%"}
                  height={160}
                  alt="country-flag"
                ></img>
                <div className="item-description">
                  <h3>{item.name.official}</h3>
                  <p>Population: {item?.population}</p>
                  <p>Region: {item?.region}</p>
                  <p>Capital: {item?.capital}</p>
                </div>
              </Link>
            </div>
          ))}
          <div className="item"></div>
        </div>
      )}
    </section>
  );
}

export default LandingPage;
