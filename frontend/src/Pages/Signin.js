import react from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./SigninStyle.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  
  
  const Login = () => {

    const LoginUser = {
      email: email,
      password: password
    };
    axios.post('/api/users/signIn',LoginUser)
    .then((res)=>{
      console.log('Hi');
    })
    
  
  };


  
  return (
    <div className="Signin">
      <div className="formContainer">
        <form>
        <label>Login</label>

          <br />

          <input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button type="submit" className="btn" id="btn" onClick={()=>Login()}>SignIn</button>

        </form>

        <Link to = "/SigninDoc"><h6>sign in as Doctor</h6></Link>

      </div>
    </div>
  );
}
