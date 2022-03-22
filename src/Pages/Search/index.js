import React, {useState, useEffect} from "react";
import { Card, CardImg, CardBody, CardTitle, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';

import SearchComponent from "../../Component/SearchComponent";

function Search(){

    const [search, setSearch] = useState('""');
    const [explore, setExplore] = useState([]);

    
    const getExplore = async () =>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        const result = await fetch(url);
        const resultExplore = await result.json();
        console.log('hasil explore',resultExplore);
        console.log(`isi dari hasil explore`, resultExplore.meals)
        if(resultExplore.meals){
            setExplore(resultExplore.meals);
        }
    }

    useEffect(() => {
        getExplore()
    }, [search])
  
     return(
        
        <div className="container">
            <div className="col-12 search">
                {/* <Breadcrumb>
                    <BreadcrumbItem style={{ color:'#4B5368' }} active>Explore</BreadcrumbItem>
                </Breadcrumb> */}
                <h4>Let's Do It</h4>
                <div className="col-12 col-sm-12 col-md-6 offset-md-3">
                    <input id="search" onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div>
            <div className="row align-items-start bodys">
                <SearchComponent search={explore} />
            </div>
        </div>
    )
}

export default Search;