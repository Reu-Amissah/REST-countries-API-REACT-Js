import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Styles/Landing.css";
import "../Styles/Mq.css";

function Details() {
  const { id } = useParams();

  const [countryNameOfficial, setCountryNameOfficial] = useState("");
  const [countryNameNative, setCountryNameNative] = useState("");
  const [countryPopulation, setCountryPopulation] = useState("");
  const [countryRegion, setCountryRegion] = useState("");
  const [countrySubRegion, setCountrySubRegion] = useState("");
  const [countryDomain, setCountryDomain] = useState("");
  const [countryCapital, setCountryCapital] = useState("");
  const [countryLanguages, setCountryLanguages] = useState("");
  const [countryBorder, setCountryBorder] = useState([]);
  const [countryFlag, setCountryFlag] = useState("");
  const [countryCurrencies, setCountryCurrencies] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const jsonData = await response.json();

        setCountryNameOfficial(jsonData[id].name.official);

        // filtering through object-property(nativeName) using index of first property
        setCountryNameNative(
          jsonData[id].name.nativeName[
            Object.keys(jsonData[id].name.nativeName)[0]
          ].official
        );
        setCountryPopulation(jsonData[id].population);
        setCountryRegion(jsonData[id].region);
        setCountrySubRegion(jsonData[id].subregion);
        setCountryDomain(jsonData[id].tld);
        setCountryCapital(jsonData[id].capital[0]);
        setCountryBorder(jsonData[id].borders);
        setCountryFlag(jsonData[id].flags.png);

        // filtering through object-property(Languages) using index of first property
        setCountryLanguages(
          jsonData[id].languages[Object.keys(jsonData[id].languages)[0]]
        );

        // filtering through object-property(currencies) using index of first property
        setCountryCurrencies(
          jsonData[id].currencies[Object.keys(jsonData[id].currencies)[0]].name
        );

        console.log(jsonData[id]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <section className="details-page" id="details">
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
              src={countryFlag}
              width={"100%"}
              alt="country-flag"
              style={{ height: "auto", borderRadius: "5px" }}
            ></img>
          </div>
          <div className="details-content">
            <h3 className="details-header">{countryNameOfficial}</h3>
            <div className="details-sub-content">
              <div className="details-left">
                <div>Native Name: {countryNameNative}</div>
                <div>Population: {countryPopulation}</div>
                <div>Region: {countryRegion}</div>
                <div>Sub Region: {countrySubRegion}</div>
                <div>Capital: {countryCapital}</div>
              </div>
              <div className="details-right">
                <div>Top Level Domain: {countryDomain}</div>
                <div>Currencies: {countryCurrencies}</div>
                <div>Languages: {countryLanguages}</div>
              </div>
            </div>
            <div className="borders-content">
              <div style={{ marginRight: "15px", marginTop: "10px" }}>
                Border Countries:{" "}
              </div>
              {Array.isArray(countryBorder) ? (
                <div className="border-items">
                  {countryBorder.map((item, index) => (
                    <div className="borders" key={index}>
                      {item}
                    </div>
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
