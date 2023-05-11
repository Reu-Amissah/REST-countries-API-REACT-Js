import React, { useEffect, useState } from "react";
import "../Styles/Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-regular-svg-icons";

const LandingPage = () => {
  // const response = fetch("https://restcountries.com/v3.1/all");
  // const jsonData = response.json();
  // useEffect(() => {
  //   console.log(jsonData);
  //   // fetch("https://restcountries.com/v3.1/all", {
  //   //   method: "GET", // or 'PUT'
  //   //   headers: {
  //   //     "Content-Type": "application/json",
  //   //   },
  //   //   body: JSON.stringify(data),
  //   // })
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     console.log("Success:", data);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error:", error);
  //   //   });
  //   // getCountryInfo();
  // });

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((responseJSON) => {
      // do stuff with responseJSON here...
      console.log(responseJSON);
    })
    .catch((error) => {
      //handle error
    });

  // .then((data) => {
  //   //handle data
  //   console.log(data);
  // })
  return (
    <section className="landing-page" id="landing">
      <div className="search-item">
        <div className="search">
          <span className="material-symbols-outlined">search</span>
          <input
            className="search-input"
            placeholder="Search for a country..."
          ></input>
        </div>
        <select className="filter">
          {/* filter by region selector */}
          <option>Filter by Region</option>
          {data.map((item, index) => (
            <option className="item" key={index}>
              {item.region}
            </option>
          ))}
        </select>
      </div>

      <div className="items-div">
        {data.map((item, index) => (
          <div className="item" key={index}>
            <img
              src={item.flags.png}
              width={"100%"}
              height={160}
              alt="country-flag"
            ></img>
            <div className="item-description">
              <h3>{item.name.official}</h3>
              <p>Population: {item.population}</p>
              <p>Region: {item.region}</p>
              <p>Capital: {item.capital}</p>
            </div>
          </div>
        ))}
        <div className="item"></div>
      </div>
    </section>
  );
};

export default LandingPage;
