import React from "react";
import './ingredients.css';
import {Icon} from '@iconify/react';

const SearchComponentIngredients = ({key, ingredients1,ingredients2,ingredients3,ingredients4,ingredients5,ingredients6,ingredients7,ingredients8,ingredients9,ingredients10,
                                    ingredients11,ingredients12,ingredients13,ingredients14,ingredients15,ingredients16,ingredients17,ingredients18,ingredients19,ingredients20}) => {
    return(
        <>
            <div className="ingredients" key={key}>
                <div className='row'>
                    <div className="col-6">
                        <table>
                            <tr>{ingredients1}</tr>
                            <tr>{ingredients2}</tr>
                            <tr>{ingredients3} </tr>
                            <tr>{ingredients4}</tr>
                            <tr>{ingredients5}</tr>
                            <tr>{ingredients6}</tr>
                            <tr>{ingredients7}</tr>
                            <tr>{ingredients8}</tr>
                            <tr>{ingredients9}</tr>
                            <tr>{ingredients10} </tr>
                        </table>
                    </div>
                    <div className="col-6">
                        <table>
                            <tr>{ingredients11}</tr>
                            <tr>{ingredients12}</tr>
                            <tr>{ingredients13} </tr>
                            <tr>{ingredients14}</tr>
                            <tr>{ingredients15}</tr>
                            <tr>{ingredients16}</tr>
                            <tr>{ingredients17}</tr>
                            <tr>{ingredients18}</tr>
                            <tr>{ingredients19}</tr>
                            <tr>{ingredients20} </tr>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchComponentIngredients;