import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [data, setData] = useState("");

  const selectedData = data[id];

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
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div style={{ paddingTop: "9%" }}>{selectedData[0]}</div>
    </div>
  );
}

export default Details;
