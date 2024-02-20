import logo from './logo.svg';
import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import './App.css';

const host = "https://databackend-vt1h.onrender.com"
// const Data=()=>{
// const [data, setData] = useState([]);

// useEffect(() => {
//   axios
//     .get(`${host}/api/patient`)
//     .then((response) => {
//       console.log(response.data);
//       setData(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);
// console.log(data)
// }



function App() {
  const [patdata, patdatachange] = useState(null);


  useEffect(() => {
    fetch(`${host}/data`).then((res) => {
      return res.json();
    }).then((resp) => {
      patdatachange(resp);
    }).catch((err) => {
      console.log(err.message);
    })
  }, [])

  // const id = data[0].id;

  return (
    <>
      <header>
        <h2>IOT HealthCare Device</h2>
      </header>

      <table>
        <thead>
          <tr>
            <th>Id. No.</th>
            <th>Temperature</th>
            <th>SpO2</th>
            <th>Pulse Rate</th>
            <th>Fall Detected</th>
          </tr>
        </thead>
        <tbody>

          {patdata &&
            patdata.map(item => (
              <tr key={item.Id}>
                <td>{item.Id}</td>
                <td>{item.temperature}</td>
                <td>{item.spo2}</td>
                <td>{item.pulse_rate}</td>
                <td>{item.fall_detected}</td>

              </tr>
            ))
          }

        </tbody>
      </table>
    </>
  );
}

export default App;
