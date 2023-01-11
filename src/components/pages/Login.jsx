import React, {useState} from "react";
import axios from "axios";

// export default function Quotes(){
//     const[response,setResponse]=useState(null);

//     const fetchQuotes=async () =>{
//         try{
//             const res=await axios.get('')
//         }
//     }
// }

export const Login=(props)=>{
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }

    return (    
        <div className="auth-form-container">
        <h2>Log in</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" id="email" name="email" />
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
            <button type="submit">Log in</button>
        </form>
        <hr />
        <p>Don't have an account?</p>
        <button className="link-btn" onClick={()=> props.onFormSwitch('register')}>Register</button>
        </div>
    )
}