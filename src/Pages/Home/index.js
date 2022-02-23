import React,{useState, useEffect} from "react";
import './Home.css';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom'


function Home(){

    const [rekomendasi, setRekomendasi] = useState([])

    useEffect( async () => {
        const url = `https://www.themealdb.com/api/json/v1/1/random.php`
        
        const response = await fetch(url)
        const rekomendasis = await response.json()
        console.log('data json : ', rekomendasis)

        if(rekomendasis.meals){
            setRekomendasi(rekomendasis.meals)
            console.log('data dimasukkan ke hook state : ', rekomendasis.meals)
        } else{
            console.log("tidak dapat data")
        }
    },[])

    return(
        <React.Fragment>
        <div className="hero-shot">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 col-12 text">
                        <h1>Let’s Make New Journey with Wonderful Recipe</h1>
                        <p>Want to serve something extraordinary and even try a new menu that you have never tried before? Let's start your cooking adventure with us</p>
                    </div>
                    <div className="col-md-4 offset-md-1 col-12">
                        <div className="coverImage">
                            <img src="https://www.themealdb.com/images/media/meals/rvypwy1503069308.jpg" />
                        </div>
                    </div>
                </div>
                  
            </div>
        </div>
        <div className="body">
            <h3>How To Start</h3> <hr/>
            <div className="container">          
                <div className="row">
                    <div className="col-12 col-md-4">
                        <Card className="card">
                            <Link to={`/explore`} style={{ textDecoration:'none' }}>
                                <CardImg src="../assets/icon/search.png" />
                                <CardBody>
                                    <CardTitle className="title">Search Recipe</CardTitle>
                                    <CardText className ="text">Search as you wish or by category</CardText>
                                </CardBody>
                            </Link>
                        </Card>
                    </div>
                    <div className="col-12 col-md-4 cardtengah">
                        <Card className="card">
                            <Link to={`/mylibrary`} style={{ textDecoration:'none' }}>
                                <CardImg src="../assets/icon/recipe.png" className="imagecardtengah"/>
                                <CardBody>
                                    <CardTitle className="title">Add to Library</CardTitle>
                                    <CardText className ="text">Add your Favorite Recipe To Library</CardText>
                                </CardBody>
                            </Link>
                        </Card>
                    </div>
                    <div className="col-12 col-md-4">
                        <Card className="card">
                            <Link to={`/mylibrary`} style={{ textDecoration:'none' }}>
                                <CardImg src="../assets/icon/cook.png" className="imagecardkanan"/>
                                <CardBody>
                                    <CardTitle className="title">Try to Cook</CardTitle>
                                    <CardText className ="text">Cook according to the instructions received</CardText>
                                </CardBody>
                            </Link>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Home;