import React from 'react';
import './index.scss';
import { NewUser } from "./OpendataAuth";



export function OpendataStart(props){
    const [ShowError, setShowError] = React.useState("");


    async function signUp(){
        const rusername = document.getElementById("rusername").value;
        const rpassword = document.getElementById("rpassword").value;
        const newRegister = await NewUser(rusername, rpassword);
        if(newRegister === true){
        }else{
            setShowError("Username or password exist")
        }
    }

    async function signIn(){
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const isLoggedIn = await NewUser(username, password);
        if(isLoggedIn === true){

        }else{
            setShowError("Wrong username or password!!")
        }
    }

    function gotoOpendata(){
        props.navigate("Opendata");
      }


    return <div className= "LoginForm">

        <div className = "Create">
        <h1 class="title is-1">Create new User</h1>

        <div className = "NewUser">
        <label className="uname" htmlFor="uname"><b class="subtitle is-4">Username:</b></label>
        <input type="text" id="username"></input>


        <label className="psw" htmlFor="psw"><b class="subtitle is-4">Password:</b></label>
        <input type="password" id="password"></input>
        </div>
        <p><button class="button is-success button is-medium" onClick={signUp}>Create</button></p>
        </div>
        
        

        <div className="Login">
        <h1 class="title is-1">Allready a User</h1>
            
        <div className = "OldUser">
        <label className="uname" htmlFor="uname"><b class="subtitle is-4">Username:</b></label>
        <input type="text" id="username"></input>


        <label className="psw" htmlFor="psw"><b class="subtitle is-4">Password:</b></label>
        <input type="password" id="password"></input>
        </div>

        <p><button class="button is-success button is-medium" onClick={signIn}>Login</button></p>
        <p id= "ShowError">{ShowError}</p>


        <p className = "NoAccBtn"><button class="button is-info button is-medium" onClick={gotoOpendata}>Use without login</button></p>

        </div>
    </div>
}



