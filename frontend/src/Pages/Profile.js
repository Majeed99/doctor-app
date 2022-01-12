import react from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Circles } from "react-loading-icons";

function Profile() {

const [profile , setProfile]=useState();
// const [loading, setLoading] = useState(true);



// useEffect(() => {
//     axios.get("/api/doctor/allDoctors").then((res) => {
     
 
//       });
  
//     });
//   }, []);


  return <div className="loading">  <Circles stroke="rgb(50, 93, 141)" /></div>;
}

export default Profile;
