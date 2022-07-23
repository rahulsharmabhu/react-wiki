import React, { useState,useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/Filters/filters'
import Cards from "./components/Cards/cards";
import Pagination from './components/Pagination/pagination'; 

function App() {

  let [pageNumber,setPagenumber] = useState(1);
  let [fetchedData,updateFetchedData] = useState([]);

  let {info, results} = fetchedData
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;

  useEffect(() => {
    (async function() {
      let data = await fetch(api).then(res => res.json());
      updateFetchedData(data)
    })();
  },[api])
  
  return (
    <div className="App">
      <h1 className="text-center ubuntu my-4">
      Rick & Morty <span className="text-primary">Wiki</span>
      </h1>
      <div className="container">
        <div className="row">
         <div className="col-md-3">
           <Filters/>
         </div>
         <div className="col-md-8">
           <div className="row">
             <Cards results={results}/>
           </div>
         </div>
        </div>
      </div>
      <Pagination pageNumber={pageNumber} setPagenumber = {setPagenumber} />
    </div>
  );
}

export default App;
