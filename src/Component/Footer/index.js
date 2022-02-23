import React from "react";
import './Footer.css';
import { Icon } from '@iconify/react';

function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="image col-12 col-md-4">
                        <img src="../assets/icon/Logofix-removebg-preview.png" alt="Logo" />
                       
                    </div>
                    <div className=" col-12 col-md-4">
                        <div className="tengah">We help you to try something new</div>
                        <div style={{ textAlign:'center', marginTop:10, fontSize:12 }}>
                            Data Obtained From <span><a target="_blank" href="https://www.themealdb.com/"> TheMealDB </a></span>  <br/>
                            Inspired by several projects
                        </div>
                    </div>
                    <div className="sosmed col-4">
                        <div><Icon className="iconFooter" icon="dashicons:instagram" /> Food.Recipe</div>
                        <div><Icon className="iconFooter" icon="feather:youtube" /> Food Recipe Official</div>
                    </div>
                </div>
            </div>
                <p><span><Icon className="iconCopy" icon="ant-design:copyright-circle-outlined" /></span> Copyright <span><a href="https://www.linkedin.com/in/januardlg01/" target="_blank">Januard Lumbangaol</a></span></p>
        </div>
    )
}

export default Footer;