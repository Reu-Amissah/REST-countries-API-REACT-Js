import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Styles/Landing.css";
import "../Styles/Mq.css";
import { DarkModeContext } from "../Components/DarkMode";

function Details() {
  const { isDarkMode } = useContext(DarkModeContext);
  const { id } = useParams();
  const [filteredData, setFilteredData] = useState(null);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((responseJSON) => {
        // Check if responseJSON is not null or undefined
        if (responseJSON != null) {
          Object.keys(responseJSON).forEach((key) => {
            const res = responseJSON[key];
            if (res && res?.area === parseInt(id)) {
              console.log(res?.area === parseInt(id) ? res : "");
              setFilteredData(res);
            }
          });
        }
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }, [id]);

  console.log(filteredData);
  //
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(`https://restcountries.com/v3.1/all`);
  //       const jsonData = await response.json();

  //       setCountryNameOfficial(jsonData[id].name.official);

  //       // filtering through object-property(nativeName) using index of first property
  //       setCountryNameNative(
  //         jsonData[id].name.nativeName[
  //           Object.keys(jsonData[id].name.nativeName)[0]
  //         ].official
  //       );
  //       setCountryPopulation(jsonData[id].population);
  //       setCountryRegion(jsonData[id].region);
  //       setCountrySubRegion(jsonData[id].subregion);
  //       setCountryDomain(jsonData[id].tld);
  //       setCountryCapital(jsonData[id].capital[0]);
  //       setCountryBorder(jsonData[id].borders);
  //       setCountryFlag(jsonData[id].flags.png);

  //       // filtering through object-property(Languages) using index of first property
  //       setCountryLanguages(
  //         jsonData[id].languages[Object.keys(jsonData[id].languages)[0]]
  //       );

  //       // filtering through object-property(currencies) using index of first property
  //       setCountryCurrencies(
  //         jsonData[id].currencies[Object.keys(jsonData[id].currencies)[0]].name
  //       );

  //       // console.log(jsonData[id]);
  //     } catch (error) {
  //       console.error("Error:", error);
  //     }
  //   };

  //   fetchData();
  // }, [id]);

  return (
    <section
      className={`details-page ${isDarkMode ? "dark-mode" : ""}`}
      id="details"
    >
      {/* <h1>hello</h1>
      <img
        src={filteredData?.flags?.png}
        width={"100%"}
        alt="country-flag"
        style={{ height: "auto", borderRadius: "5px" }}
      ></img>
      <div>
        Native Name:
        {filteredData?.name?.nativeName
          ? filteredData?.name?.nativeName[
              Object.keys(filteredData?.name?.nativeName)[0]
            ]?.official
          : "None"}
      </div>
      <h3 className="details-header">{filteredData?.name?.official}</h3>
      <div>Population: {filteredData?.population}</div>
      <div>Region: {filteredData?.region}</div>
      <div>Sub Region: {filteredData?.subregion}</div>
      <div>
        Capital: {filteredData?.capital ? filteredData?.capital[0] : "None"}
      </div>
      <div>Top Level Domain: {filteredData?.tld}</div>
      <div>
        Currencies:{" "}
        {filteredData?.currencies
          ? filteredData?.currencies[Object.keys(filteredData.currencies)[0]]
              .name
          : "None"}
      </div>
      <div>
        Languages:{" "}
        {filteredData?.languages
          ? filteredData?.languages[Object.keys(filteredData?.languages)[0]]
          : "None"}
      </div>
      {Array.isArray(filteredData?.borders) ? (
        <div className="border-items">
          {filteredData?.borders.map((item, index) => (
            <Link to={`../border/${item}`}>
              <div className="borders" key={index}>
                {item}
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="borders-container">
          <div className="borders">No Borders</div>
        </div>
      )} */}

      <div className="details-container">
        <Link to={"/"}>
          <div className="back-button">
            <span className="material-symbols-outlined">
              keyboard_backspace
            </span>
            <div style={{ paddingLeft: "6px" }}>Back</div>
          </div>
        </Link>

        <div className="details-body">
          <div className="details-flag">
            <img
              src={filteredData?.flags?.png}
              width={"100%"}
              alt="country-flag"
              style={{ height: "auto", borderRadius: "5px" }}
            ></img>
          </div>
          <div className="details-content">
            <h3 className="details-header">{filteredData?.name?.official}</h3>
            <div className="details-sub-content">
              <div className="details-left">
                <div>
                  Native Name:
                  {filteredData?.name?.nativeName
                    ? filteredData?.name?.nativeName[
                        Object.keys(filteredData?.name?.nativeName)[0]
                      ]?.official
                    : "None"}
                </div>
                <div>Population: {filteredData?.population}</div>
                <div>Region: {filteredData?.region}</div>
                <div>Sub Region: {filteredData?.subregion}</div>
                <div>
                  Capital:{" "}
                  {filteredData?.capital ? filteredData?.capital[0] : "None"}
                </div>
              </div>
              <div className="details-right">
                <div>Top Level Domain: {filteredData?.tld}</div>
                <div>
                  Currencies:{" "}
                  {filteredData?.currencies
                    ? filteredData?.currencies[
                        Object.keys(filteredData.currencies)[0]
                      ].name
                    : "None"}
                </div>
                <div>
                  Languages:{" "}
                  {filteredData?.languages
                    ? filteredData?.languages[
                        Object.keys(filteredData?.languages)[0]
                      ]
                    : "None"}
                </div>
              </div>
            </div>
            <div className="borders-content">
              <div style={{ marginRight: "15px", marginTop: "10px" }}>
                Border Countries:{" "}
              </div>
              {Array.isArray(filteredData?.borders) ? (
                <div className="border-items">
                  {filteredData?.borders.map((item, index) => (
                    <Link to={`../border/${item}`}>
                      <div className="borders" key={index}>
                        {item}
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="borders-container">
                  <div className="borders">No Borders</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
