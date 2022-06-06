import React from "react";
import { Col, Row } from "reactstrap";
import CardContent from "../components/CardContent";
import Filter from "../components/Filter";
import Profile from "../components/Profile";
import SideMenu from "../components/SideMenu";



function Home(){
    return(
    <div className="row">
        <div class="d-flex justify-content-around">
          <Filter/>
          <Profile/>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <CardContent/>
          </div>
          <div class="col-6 col-md-2">
             <SideMenu/>
          </div>
        </div>
    </div>    
    )
}
export default Home;