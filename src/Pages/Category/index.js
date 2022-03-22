import React,{useState, useEffect} from "react";
import './category.css';
import CategoryComponent from "./CategoryComponent";

import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from "react-router-dom";

const Category=()=>{

    const[category, setCategory] = useState([])

    const getCategory = async () => {
        const url=`https://www.themealdb.com/api/json/v1/1/categories.php`
        const result = await fetch(url);
        const resultCategory = await result.json();
        console.log('Kategori =>',resultCategory);
        if(resultCategory.categories){
            setCategory(resultCategory.categories)
        }
    } 
    
    useEffect(() => {
        getCategory()
    },[])

    return(
        <>
        <div className="container">
            {/* <div className="col-12 col-sm-6 col-md-3" style={{ marginTop:30 }}>
                <Breadcrumb>
                    <BreadcrumbItem style={{ textDecoration:'none', color:'#4B5368'  }} active> Categories </BreadcrumbItem>
                </Breadcrumb>
            </div> */}
        </div>
        <div className="head"><h4>Search By Categories</h4></div>
        <div className="container">
            <div className="row align-items-start bodys">
            { category &&
                category.map(categorys => <CategoryComponent categorys={categorys}  />)
            }
            </div>
        </div>
        </>
    )
}


export default Category;