import React, { useEffect, useState } from "react";
import "../Styles/Landing.css";

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
        <input placeholder="Search for a country..."></input>
        <select>
          <option>Hello</option>
          <option>Hi</option>
        </select>
      </div>
      <div className="items-div">
        <div className="item">item1</div>
        <div className="item">item2</div>
        <div className="item">item3</div>
        <div className="item">item4</div>
        <div className="item">item5</div>
        <div className="item">item6</div>
        <div className="item">item7</div>
        {data.map((item, index) => (
          <li key={index}>{item.capital}</li>
        ))}
        {/* <div className="item"></div> */}
      </div>
    </section>
  );
};

export default LandingPage;
