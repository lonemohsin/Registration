// import React, {Component, useState} from "react";
import React, { useState } from "react";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
// class Home extends Component{
//     const [currentForm,setCurrentForm]=useState('login');

//     const toggleForm = (formName) => {
//         setCurrentForm(formName);
//     }
//     render(){
//         return (
//             <div>
//                 This is the homepage.
//             </div>
//             { currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} /> }
//         )
//     }
// }

// export default Home;

function Home(){

    const [currentForm,setCurrentForm]=useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return(
        // <div className="nav">
        // <div className="home">
        //     <div class="container">
        //         <div class="row align-items-center my-5">
        //             <div class="col-lg-7">
        //                 <img class="img-fluid rounded mb-4 mb-lg-0" src="http://placehold.it/900x400" alt="" />
        //             </div>
        //             <div class="col-lg-5">
        //                 <h1 class="font-weight-light">Home</h1>
            //             <p>Lorem Ipsum is simply dummy text of the printing and typesetting
            //   industry. Lorem Ipsum has been the industry's standard dummy text
            //   ever since the 1500s, when an unknown printer took a galley of
            //   type and scrambled it to make a type specimen book.
            //   </p>
        //       </div>
            <div className="nav">
                <div className="home-nav">
                    <h1>Home</h1>
                    <div className="home-par">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
              </p>
              </div>
                </div>
              <div className="forms">
              {
                currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
              }
                    </div>
            </div>
        //     </div>
        // </div>
        // </div>
    )
}

export default Home;