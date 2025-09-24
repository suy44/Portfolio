import { useState, useContext } from "react";
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import "../../styles/index.css"
export function Login(){
    const [error, setError] = useState("");
    const [username , setUsername] = useState(null);
    const [password , setPassword] = useState(null);
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        if (!username || !password) {
        setError("Please enter both username and password");
        return; // stop login
        }
        setError(""); // clear previous errors
        login(username , password);
        navigate("/Dashboard");
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="login-page">
            <div className="login-box">
                <h1 className="l-login" >Login Page</h1>
                <input className="user" value={username} type="text" placeholder="enter admin user" onChange={(e)=>setUsername(e.target.value)}/>
                <input className="pass" value={password} type="password" placeholder="enter admin pass" onChange={(e)=>setPassword(e.target.value)}/>
                {error && <p className="error-message">{error}</p>}
                <button className="l-button" type="submit">Login</button>
            </div>
            </div>
        </form>
    );
}