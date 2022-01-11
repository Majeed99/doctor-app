import react from "react";
import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './SigninStyle.css'

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();
  const Login = () => {
    const LoginUser = {
      email: email,
      password: password,
    };
  };
  return (
    <div className="Signin">
      <div className="formContainer">
        <div className="topL"></div>
        <div className="bottom"></div>
        <form>
          <label>Email</label>
          <input type="text" placeholder = "Email" onChange={(e)=>setEmail(e.target.value)}/><br/>
          <label>Password</label>
          <input type="text"placeholder = "Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
        </form>
        <button>Submit</button>
      </div>
    </div>
  );
}
