import React, {useState} from "react";

export const Register=(props)=>{
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');
    const [name,setName]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email);
    }

    return (    
        <div className="auth-form-container">
        <h2>Register</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Full Name" id="name" name="name" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Address" id="email" name="email" />
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
            <button type="submit">Register</button>
        </form>
        <hr />
        <p>Already have an account?</p>
        <button className="link-btn" onClick={()=> props.onFormSwitch('login')}>Log in</button>
        </div>
    )
}