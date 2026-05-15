import axios from "axios";
import { useState } from "react";
import useLogin from "../store/useLogin";

export default function LoginPage(props){

    const inputClasses = "border-2 my-2 w-90 hover:rounded-xl rounded-2xl px-2 transition-all bg-white  py-1.5";

    const submitBtnCss = "cursor-pointer border-2 hover:rounded-2xl rounded-3xl my-2 w-40 transition-all text-xl py-2";
    
    const loginBtnCss = "border-cyan-900 hover:bg-cyan-300 text-cyan-950  self-end bg-cyan-500";
    const signupBtnCss = "border-yellow-900 hover:bg-yellow-300 text-yellow-950  self-start bg-yellow-500";

    const loginBgDivCss = "bg-linear-to-b via-cyan-100 from-cyan-200 hover:from-cyan-300";
    const signupBgDivCss = "bg-linear-to-t via-yellow-100 from-yellow-200 hover:from-yellow-300";

    const loginBg = "bg-linear-to-b via-cyan-100 to-cyan-200";
    const signupBg = "bg-linear-to-t via-yellow-100 to-yellow-200";

    //useStates below
    const [thePage, setThePage] = useState(props.loadPage);
    // const [userName, setUserName] = useState("");
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })
    const [signupData, setSignupData] = useState({
        name: "",
        username: "",
        password: ""
    })

    const setAuth = useLogin ((state) => state.setIsAuthenticated);

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");
    
    function setPage(){
        setThePage((prev) => prev === "login" ? "signup" : "login");
    }

    async function submitForm(){
        
        // const creds = loginData;
        // console.log("THIS IS CREDS _ " + creds.password + creds.username);
            
        console.log("THIS IS LOGOIN DATA - " + loginData.username + loginData.password)
        
        try{
            
            const response = await axios.post(
                "https://login-logout-alpha.vercel.app/login",
                loginData
            );
            
            console.log(response.status);
            console.log("We are inside try block");
            setAuth(true);
            
        } catch(err) {
            console.log("We are inside catch block");
            console.log(err);
            alert(loginData.password)
            setAuth(false);
        }

    }

    return (<>
    <div className={` ${thePage == "login" ? loginBg : signupBg} flex flex-col min-h-screen from-white items-center justify-center`}>
        <div className={` ${thePage == "login" ? loginBgDivCss : signupBgDivCss} p-20 rounded-2xl border-2 to-white hover:p-22 transition-all`}>
            <h2 className="justify-self-center text-2xl mb-8 " >{thePage === "signup" ? "SignUP" : "LogIn"}</h2>

            <div className="flex flex-col ">

                {thePage === "signup" && (<input type="text" value={signupData.name} onChange={(e) => setSignupData({...signupData, name: e.target.value})} className={inputClasses} placeholder="name" name="name" required />)}
                
                <input type="text" className={`${inputClasses}`} value={thePage === "signup" ? signupData.username : loginData.username} placeholder="username" required
                onChange={thePage === "signup" ? (e)=>setSignupData({...signupData, username: e.target.value}) : 
                (e)=>setLoginData({...loginData, username: e.target.value})} />

                <input type="password" className={inputClasses} placeholder="password" required value={thePage === "signup" ? signupData.password : loginData.password}
                onChange={thePage === "signup" ? (e) => setSignupData({...signupData, password: e.target.value}) : (e) => setLoginData({...loginData, password: e.target.value})} />

                <button onClick={submitForm} className={` ${thePage == "login" ? loginBtnCss : signupBtnCss} ${submitBtnCss}`}>{thePage}</button>
            </div>
            
            <h2 className="justify-self-center mt-4" >{thePage === "signup" ? "Already have an account? -" : "New here? -"} 
                <button onClick={setPage} className="cursor-pointer underline underline-offset-2 text-blue-800" >{thePage === "login" ? "SignUP" : "LogIn"}</button>
            </h2>
        </div>
    </div>    
    </>)
}