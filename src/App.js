import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


function App() {
  const [data, setData] = useState("");
  const [date, setDate] = useState(new Date());
  console.log(data);
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "DEMO_KEY",
          date: date.toISOString().split("T")[0]
        }
      })
      .then(function (res) {
        console.log(res.data);
        setData(res.data)

      })
      .catch((error) => {
        console.error(error);

      })
  }, [date])
  return (

    <div className="App">
      
      {data && (
        <div className="container">
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
          <h3>{data.title}</h3>
          <h4>{data.date}</h4>
          <p>{data.copyright}</p>
          <img src={data.url} alt={data.title} />

        </div>
      )}
    </div>
  );
}

export default App;
