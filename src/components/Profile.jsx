import React, {useState, useEffect} from "react";
import {Button} from "reactstrap"
import user from "../assets/images/user.png"
import ProfileModal from "./ProfileModal";

export default function Profile() {
    const [modalView, setModalView ] = useState(false)
    console.log(modalView);

    return(
    <div className="d-flex justify-content-center p-2">
       <Button className="btn btn-profile position-fixed">
           <img src={user} alt="user" className="image-profile" onClick={() => setModalView(!modalView)}/>
       </Button>
       { modalView && <ProfileModal/> }
    </div>
    )
}