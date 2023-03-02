import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  const [data, setData] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  console.log(data);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod", {
        params: {
          api_key: "Nx54ak8rFKVe6DBPOPJFhGPnXMGj5NZxF9JAFRXn",
          date: date

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

    <div className="App"
        style={{
          width :"100vw",
          height :"100vh",
          backgroundImage: `url(${data.hdurl})`,
      }}

      >
        

      {data && (
        <div className="container">
          <input type="date"
          style={{
            
            marginTop : "20px"
        }}
            value={date}
            onChange={(event) => setDate(event.target.value)} />
          <h3>{data.title}</h3>
          <h4>{data.date}</h4>
          <p>{data.copyright}</p>
          <div className="text"
          style={{
            
            marginTop : "300px"
        }}
        >
          <p>{data.explanation}</p>
          </div>
          {/* <img src={data.url} alt={data.title} /> */}
          
        </div>
      )}
      
    </ div>
      );
}

      export default App;
