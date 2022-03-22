import React,{useState, useEffect, useContext} from "react";
import './Details.css'
import ReactPlayer from 'react-player'
import {Link} from "react-router-dom";
import { Icon } from '@iconify/react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

import { GlobalContext } from '../GlobalContext/GlobalState';

function Details({match}){

    const [detail, setDetail] = useState([])
    
    const { library, addToMyLibrary, removeFromLibrary } = useContext(GlobalContext)
    
        
    let idRecipe = match.params.id;
    
    useEffect( async () => {
        // fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRecipe}`)
        // .then((response) => response.json())
        // .then((data) => setDetail(data.meals[0]))
        // .then((data) => console.log('detail',data))
        // .catch((error) => console.log(error));
        const url= `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idRecipe}`
        const response = await fetch(url);
        const responseDetail = await response.json();
        console.log('detail.json', responseDetail.meals);
        console.log('detail[0]', responseDetail.meals[0]);
        if(responseDetail.meals){
            setDetail(responseDetail.meals[0])
        }
    },[idRecipe])

    const exist = library.find((el) => el.idMeal === idRecipe);
    const isMyLibrary = exist ? true :false;

    return(
        <>  
        
            <div className="container bodys">
                {/* <Breadcrumb>
                    <BreadcrumbItem> <Link style={{ textDecoration:'none', color:'#4B5368'  }} to={`/explore`}>Explore</Link> </BreadcrumbItem>
                    <BreadcrumbItem active> {detail.strMeal}  </BreadcrumbItem>
                </Breadcrumb> */}
                <h4>{detail.strMeal}</h4>
                <div className="details">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <img src={detail.strMealThumb} />
                            <div className="tag">
                                {   
                                    detail.strTags && <button className="kategori">{detail.strTags}</button>
                                }
                                <button className="area"><Link className="links" to={`/areas/${detail.strArea}`}>{detail.strArea}</Link></button>
                                <button className="kategori"> <Link className="links" to={`/categorys/${detail.strCategory}`}>{detail.strCategory}</Link></button>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 right">
                            <div className='row'>
                                <div className="col-8">
                                    <h5>Ingredients</h5>
                                    <table>
                                        <tr><td>{detail.strIngredient1}</td> <td> {detail.strMeasure1}</td></tr>
                                        <tr><td>{detail.strIngredient2}</td> <td> {detail.strMeasure2}</td></tr>
                                        <tr><td>{detail.strIngredient3}</td> <td> {detail.strMeasure3}</td></tr>
                                        <tr><td>{detail.strIngredient4}</td> <td> {detail.strMeasure4}</td></tr>
                                        <tr><td>{detail.strIngredient5}</td> <td> {detail.strMeasure5}</td></tr>
                                        <tr><td>{detail.strIngredient6}</td> <td> {detail.strMeasure6}</td></tr>
                                        <tr><td>{detail.strIngredient7}</td> <td> {detail.strMeasure7}</td></tr>
                                        <tr><td>{detail.strIngredient8}</td> <td> {detail.strMeasure8}</td></tr>
                                        <tr><td>{detail.strIngredient9}</td> <td> {detail.strMeasure9}</td></tr>
                                        <tr><td>{detail.strIngredient10}</td> <td> {detail.strMeasure10}</td></tr>
                                        <tr><td>{detail.strIngredient11}</td> <td> {detail.strMeasure11}</td></tr>
                                        <tr><td>{detail.strIngredient12}</td> <td> {detail.strMeasure12}</td></tr>
                                        <tr><td>{detail.strIngredient13}</td> <td> {detail.strMeasure13}</td></tr>
                                        <tr><td>{detail.strIngredient14}</td> <td> {detail.strMeasure14}</td></tr>
                                        <tr><td>{detail.strIngredient15}</td> <td> {detail.strMeasure15}</td></tr>
                                        <tr><td>{detail.strIngredient16}</td> <td> {detail.strMeasure16}</td></tr>
                                        <tr><td>{detail.strIngredient17}</td> <td> {detail.strMeasure17}</td></tr>
                                        <tr><td>{detail.strIngredient18}</td> <td> {detail.strMeasure18}</td></tr>
                                        <tr><td>{detail.strIngredient19}</td> <td> {detail.strMeasure19}</td></tr>
                                        <tr><td>{detail.strIngredient20}</td> <td> {detail.strMeasure20}</td></tr>
                                    </table>
                                </div>
                                
                                <div className="col-4 addLibrary">
                                    {
                                        isMyLibrary? (
                                            <button style={{ backgroundColor:'#ffcc00' }} onClick={() => removeFromLibrary(detail.idMeal)}>Remove from Library<Icon icon="carbon:delete" /></button>
                                        ):(
                                            <button onClick={() => addToMyLibrary(detail)}>Add to My Library <Icon className="star" icon="akar-icons:star" /> </button>
                                        )
                                    }
                                </div>
                            </div>
                            <div className="instructions">
                                <h5>Instructions</h5>
                                <p>{`${detail.strInstructions}`}</p>
                            </div>
                            <div className="tutorial">
                                <h5>Tutorial</h5>
                                <ReactPlayer 
                                    url={detail.strYoutube}
                                    width="100%"
                                    className="video"
                                >
                                </ReactPlayer>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        </>
    )
}

export default Details;