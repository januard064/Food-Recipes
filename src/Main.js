import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Search from "./Pages/Search";
import Details from "./Component/Details";
import Category from "./Pages/Category";
import MyLibrary from "./Pages/MyLibrary";
import ResultCategory from "./Pages/ResultCategory";
import ResultAreas from "./Pages/ResultAreas";

function Main () {
    return(
        <>
        <Header />
        <Switch>
            <Route exact path ="/" component={Home} />
            <Route exact path ="/explore" component={Search} />
            <Route path="/recipe/:id" component={Details} />
            <Route path="/category" component={Category} />
            <Route path="/categorys/:strCategory" component={ResultCategory}/>
            <Route path="/areas/:strArea" component={ResultAreas}/>
            <Route path="/mylibrary" component={MyLibrary} />
            <Redirect to="/" />
        </Switch>
        <Footer />
        </>
    )
}

export default Main;