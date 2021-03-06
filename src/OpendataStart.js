import React from 'react';
import './index.scss';
import { CreateUser } from "./services/RegisterService";
import { CheckUser } from "./services/LoginService";  



export function OpendataStart(props){
    const [isCreateError, setIsCreateError] = React.useState(false);
    const [isLoginError, setIsLoginError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");

    const [rUsername, setRUsername] = React.useState("");
    const [rPassword, setRPassword] = React.useState("");

    const [lUsername, setLUsername] = React.useState("");
    const [lPassword, setLPassword] = React.useState("");

    function gotoOpendata(){
        props.navigate("Opendata");
    }

    async function handleRegister() {
        const result = await CreateUser(rUsername, rPassword);
        try {
            if (result.status === 201) {
                setErrorMessage("");
                setRUsername("");
                setRPassword("");
            } else {
                setIsCreateError(true);
                setIsLoginError(false);
                setRPassword("");
                setErrorMessage("User already exists!");
            }
        } catch (err) {
            setIsCreateError(true);
            setErrorMessage(err);
        }
    }

    async function handeLogin() {
        const result = await CheckUser(lUsername, lPassword);
        try {
            if (result.status === 200) {
                setErrorMessage("");
                setLUsername("");
                setLPassword("");
                props.setIsLoggedIn(true);
                props.setUsername(lUsername);
                gotoOpendata();
            } else {
                setIsLoginError(true);
                setIsCreateError(false);
                setLPassword("");
                setErrorMessage("Something is fishy!"); //error handling could be much better
            }
        } catch (err) {
            setIsLoginError(true);
            setErrorMessage(err);
        }
    }


    return <div className= "LoginForm">
                <div className = "Create">
                    <h1 className="title is-1">Create new User</h1>

                    <div className = "NewUser">
                        <label className="uname" htmlFor="uname"><b className="subtitle is-4">Username:</b></label>
                        <input
                            type="text"
                            className="username"
                            value={rUsername}
                            onChange={e => setRUsername(e.target.value)}
                        />


                        <label className="psw" htmlFor="psw"><b className="subtitle is-4">Password:</b></label>
                        <input
                            type="password"
                            className="password"
                            value={rPassword}
                            onChange={e => setRPassword(e.target.value)}
                        />

                    </div>
                    <p><button className="button is-success button is-medium" onClick={handleRegister}>Create</button></p>
                    {isCreateError && <p className="ShowError" id="create-error">{errorMessage}</p>}
                </div>

            

                <div className="Login">
                    <h1 className="title is-1">Already a User</h1>
                        
                    <div className = "OldUser">
                        <label className="uname" htmlFor="uname"><b className="subtitle is-4">Username:</b></label>
                        <input
                            type="text"
                            className="username"
                            value={lUsername}
                            onChange={e => setLUsername(e.target.value)}
                        />


                        <label className="psw" htmlFor="psw"><b className="subtitle is-4">Password:</b></label>
                        <input
                            type="password"
                            className="password"
                            value={lPassword}
                            onChange={e => setLPassword(e.target.value)}    
                        />
                    </div>

                    <p><button className="button is-success button is-medium" onClick={handeLogin}>Login</button></p>
                    {isLoginError && <p className="ShowError" id="login-error">{errorMessage}</p>}

                </div>

                <div className="NoAcc">
                    <p className = "NoAccBtn"><button className="button is-info button is-medium" onClick={gotoOpendata}>Use without login</button></p>
                </div>
            </div>
}



