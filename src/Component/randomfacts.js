import React, { useEffect, useState } from "react";

const Randomfacts = () => {
  const [facts, setFacts] = useState(""); 

  useEffect(() => {
    const limit = 1;
    const apiUrl = "https://api.api-ninjas.com/v1/facts?limit=" + limit;
    const apiKey = "fKmwljARkamJcMpCnl/yRQ==2SPjI5dX5MTEiyqX";

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        //  set fact variable with latest facts
        setFacts(data[0].fact);
        console.log(data[0].fact, "api mil gya"); //  JSON data 
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []); 

  return <h1>{facts}</h1>;
};

export default Randomfacts;
