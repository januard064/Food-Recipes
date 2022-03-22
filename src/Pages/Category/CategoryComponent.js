import React,{useState} from "react";
import './category.css';
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";



const CategoryComponent =({categorys}) => {

    const[tampil, setTampil] =useState(false)

    const toggleHandler = () => {
        setTampil(!tampil)
    }

    return(
        <>
        <div className="col-12 col-sm-6 col-md-3">
            <div className="cardsCategory">
                <div><img className="imagesCategory" src={categorys.strCategoryThumb} /></div>
                <div className="box2Category">
                    <div className="col-12 ket">
                        <div className="col-12 title">
                            {categorys.strCategory}
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 action">
                            <button className="buttonDetail" onClick={toggleHandler}>Details<span> <Icon icon="bi:arrow-up-right-square" /></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
            tampil && 
                <div className="col-10 col-sm-10 col-md-6 offset-1 offset-sm-1 offset-md-3 detail">
                    <div className="row">
                        <h4>{categorys.strCategory}<Icon className="close" icon="ant-design:close-circle-outlined" onClick={toggleHandler} /></h4>
                        <div className="col-12 col-sm-12 col-md-5">
                            <img src={categorys.strCategoryThumb} />
                        </div>
                        <div className="col-12 col-sm-12 col-md-7">
                        <p>{categorys.strCategoryDescription}</p>
                        </div>
                    </div>
                    <button > <Link className="links" to={`/categorys/${categorys.strCategory}`}>Explore</Link> </button>
                </div>
        }
        </>
    )
}

export default CategoryComponent;