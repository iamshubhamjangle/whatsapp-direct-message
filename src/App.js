import React, { useState } from "react";
import CountryCodeDropdown from "./CountryCodeDropdown";
import Navbar from "./Navbar";

function App() {
  const [prefix, setPrefix] = useState("91");
  const [number, setNumber] = useState("9673735362");

  return (
    <div className="App">
      <Navbar />
      <main className="container mt-4 text-center d-flex flex-column justify-content-center">
        <h2 className="">Send a message without adding to contacts</h2>
        <div className="row mt-4">
          <div className="col-md-3 my-1 my-md-0">
            <CountryCodeDropdown setPrefix={setPrefix} />
          </div>
          <div className="col-md-9  my-1 my-md-0">
            <input
              className="form-control"
              type="text"
              placeholder="1234567890"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            ></input>
          </div>
        </div>
        <button className="btn btn-success mt-4 w-100">
          <a
            href={`https://wa.me/${prefix}${number}`}
            target="_blank"
            rel="noreferrer"
          >
            Send
          </a>
        </button>
      </main>
    </div>
  );
}

export default App;
