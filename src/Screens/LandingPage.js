import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Landing.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-regular-svg-icons";

function LandingPage() {
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
  const [filterPath, setFilterPath] = useState("all");
  const [filterSearch, setFilterSearch] = useState("");

  useEffect(() => {
    // fetch(`https://restcountries.com/v3.1/${filterPath}/${filterSearch}`)
    //   .then((response) => response.json())
    //   .then((responseJSON) => {
    //     setData(responseJSON);
    //     console.log(responseJSON);
    //   })
    //   .catch((error) => {
    //     //handle error
    //   });

    const fetchData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //       `https://restcountries.com/v3.1/${filterPath}/${filterSearch}`
  //     );
  //     const jsonData = await response.json();
  //     setData(jsonData);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  const handleSearch = (e) => {
    if (e.target.value === "") {
      setFilterPath("all");
    } else {
      setFilterPath("name");
    }
    setFilterSearch(e.target.value);
    fetch(`https://restcountries.com/v3.1/${filterPath}/${filterSearch}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setData(responseJSON);
      })
      .catch((error) => {
        //handle error
      });
  };

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setFilterPath("all");
    } else {
      setFilterPath("region");
    }
    setFilterSearch(e.target.value);
    fetch(`https://restcountries.com/v3.1/${filterPath}/${filterSearch}`)
      .then((response) => response.json())
      .then((responseJSON) => {
        setData(responseJSON);
      })
      .catch((error) => {
        //handle error
      });
  };

  return (
    <section className="landing-page" id="landing">
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
            <Link to={`detail/${index}`}>
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
            </Link>
          </div>
        ))}
        <div className="item"></div>
      </div>
    </section>
  );
}

export default LandingPage;
