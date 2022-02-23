import React from 'react'
import './Result.css';
import { Icon } from '@iconify/react';
import {Link} from 'react-router-dom';

import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

const ResultComponent = ({recipes}) => {

    return(
        <>
        <div key={recipes.idMeal} className="col-12 col-sm-6 col-md-4">
                
            <div class="cardsCategorys">
                <div><img className="imagesCategorys" src={recipes.strMealThumb} /></div>
                <div class="box2Categorys ">
                    <div className="col-12 ketCategorys">
                        <div className="col-12 titleCategorys">
                            {recipes.strMeal}
                        </div>
                    <div className="col-12 col-sm-12 col-md-12 actionCategorys">
                        <button className="buttonDetail"><Link target="_blank" className="links" to={`/recipe/${recipes.idMeal}`}>Details<span> <Icon icon="bi:arrow-up-right-square" /></span></Link></button>
                    </div>
                    </div>
                
                </div>
                
            </div>
        </div>
        </>
    )
}

export default ResultComponent;