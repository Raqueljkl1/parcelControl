import React from "react";
import { Col, Row } from "reactstrap";
import CardContent from "../components/CardContent";
import Filter from "../components/Filter";
import Profile from "../components/Profile";
import SideMenu from "../components/SideMenu";



function Home(){
    return(
    <div >  
        <div class="row">
          <div class="col-md-9">
            <Filter/>
          </div>
          <div class="col-4 col-md-2">
            <Profile/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-9">
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