import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const detailData = data[id];
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
      fetch(`https://restcountries.com/v3.1/all`)
        .then((response) => response.json())
        .then((responseJSON) => {
          setData(responseJSON);
          console.log(responseJSON);
        })
        .catch((error) => {
          //handle error
        });
    };
    fetchData();
  }, []);

  return (
    <div>
      <div style={{ paddingTop: "9%" }}>{detailData}</div>
    </div>
  );
}

export default Details;
