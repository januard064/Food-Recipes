import React,{useState} from "react";
import Details from "../../Component/Details";
import './MyLibrary.css';
import {Icon} from '@iconify/react';
import { Link } from "react-router-dom";
import FoodComponent from '../../Component/SearchComponent/foodComponent'

import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

const MyLibrary = () => {
    
    const myLibrary = JSON.parse(localStorage.getItem("recipes"))
    
    return(
        <>
        <div className="container">
            <div className="col-12" style={{ marginTop:30 }}>
                <Breadcrumb>
                    <BreadcrumbItem active>MyLibrary</BreadcrumbItem>
                </Breadcrumb>
            </div>
        </div>
        <div style={{
            marginBottom:70
        }} >
            <h4 style={{ fontWeight:'bold' }}>My Library</h4>
        </div>
        <div className="container">
        {
            myLibrary.length !== 0 ? (
                <div className="row align-items-start bodys">
                    {myLibrary.map((library) =>  <FoodComponent exploring={library} />   )}
                </div>
            ) : (
                <div className="col-12 datakosong">Tidak ada data menu untuk ditampilkan</div>
            )
        }
        </div>
        </>
    )
}

export default MyLibrary;