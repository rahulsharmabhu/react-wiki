import React, { useState,useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap';
import Filters from './components/Filters/filters'
import Cards from "./components/Cards/cards";
import Pagination from './components/Pagination/pagination'; 
import Search from './components/Search/search'

function App() {

  let [pageNumber,setPagenumber] = useState(1);
  let [search,setSearch] = useState("");
  let [fetchedData,updateFetchedData] = useState([]);

  let {info, results} = fetchedData
  console.log(info);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

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
      <Search setPagenumber = {setPagenumber} setSearch={setSearch}/>
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
      <Pagination info={info} pageNumber={pageNumber} setPagenumber = {setPagenumber} />
    </div>
  );
}

export default App;
