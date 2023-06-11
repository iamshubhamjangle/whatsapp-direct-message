import React, { useState } from "react";
import CountryCodeDropdown from "./CountryCodeDropdown";
import Navbar from "./Navbar";

function App() {
  const [prefix, setPrefix] = useState("91");
  const [number, setNumber] = useState("");

  const handleNumberChange = (num) => {
    num = num.replace(/[^0-9]/g, "").slice(-10);
    console.log(num);
    setNumber(num);
  };

  return (
    <div className="App">
      <Navbar />
      <main className="container mt-4 text-center d-flex flex-column justify-content-center">
        <h2 className="">Send a Whatsapp message without adding the number to your contacts</h2>
        <div className="row mt-4">
          <div className="col-md-3 my-1 my-md-0">
            <CountryCodeDropdown setPrefix={setPrefix} />
          </div>
          <div className="col-md-9  my-1 my-md-0">
            <input
              className="form-control"
              type="text"
              placeholder="1234567890"
              onChange={(e) => handleNumberChange(e.target.value)}
              value={number}
            ></input>
          </div>
        </div>
        <a
          href={`https://wa.me/${prefix}${number}`}
          target="_blank"
          rel="noreferrer"
        >
          <button className="btn btn-success mt-4 w-100">Send</button>
        </a>
      </main>
      <footer className="text-center">
        Made with ❤️ by{" "}
        <a href="https://www.linkedin.com/in/imshubhamjangle/" target="_blank">
          Shubham Jangle
        </a>
      </footer>
    </div>
  );
}

export default App;
