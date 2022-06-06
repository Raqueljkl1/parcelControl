import React from "react";
import {Button} from "reactstrap"
import user from "../assets/images/user.png"

export default function Profile() {
    return(
    <div className="d-flex justify-content-center p-2">
       <Button className="btn btn-profile">
           <img src={user} alt="user" className="image-profile"/>
       </Button>
    </div>
    )
}