import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();

  const [countryNameOfficial, setCountryNameOfficial] = useState("");
  //   const [countryNameNative, setCountryNameNative] = useState("");
  //   const [countryPopulation, setCountryPopulation] = useState("");
  //   const [countryRegion, setCountryRegion] = useState("");
  //   const [countrySubRegion, setCountrySubRegion] = useState("");
  //   const [countryDomain, setCountryDomain] = useState("");
  const [countryCapital, setCountryCapital] = useState("");
  //   const [countryLanguages, setCountryLanguages] = useState("");
  const [countryBorder, setCountryBorder] = useState("");
  //   const [countryFlag, setCountryFlag] = useState("");

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

        setCountryNameOfficial(jsonData[id].name.official);
        // setCountryNameNative(jsonData[id].name.nativeName);
        // setCountryPopulation(jsonData[id].population);
        // setCountryRegion(jsonData[id].region);
        // setCountrySubRegion(jsonData[id].subregion);
        // setCountryDomain(jsonData[id].tld);
        setCountryCapital(jsonData[id].capital[0]);
        // setCountryLanguages(jsonData[id].languages);
        setCountryBorder(jsonData[id].borders);
        // setCountryFlag(jsonData[id].flags.png);

        console.log(jsonData[id]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <div style={{ paddingTop: "9%" }}>
        {/* <div>{countryPopulation}</div>
        <div>{countryRegion}</div>
        <div>{countryNameNative}</div>
        <div>{countrySubRegion}</div>
        <div>{countryDomain}</div>
        <div>{countryFlag}</div> */}
        {/* <div>{countryLanguages}</div> */}
        {countryNameOfficial}
        <div>{countryBorder}</div>
        <div>{countryCapital}</div>
      </div>
    </div>
  );
}

export default Details;
