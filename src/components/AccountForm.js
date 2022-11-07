import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Authenticate } from "../api";

const AccountForm = ({ setToken }) => {
    const { action } = useParams();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        try {
            const path = action === "login" ? "/users/login" : "/users/register";
            e.preventDefault();
            const data = await Authenticate({path, method: "POST", body: {username, password}});
            setToken(data.token);
            navigate("/");
        }

        catch (error) {
            console.log(error);
            setError(error);
        }
    }

    const title = action === "login" ? "Log in" : "Register";

    return (
        <>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="form-label">Username</label>
                <input value={username} onChange={e => setUsername(e.target.value)} name="username" type="text" className="form-control" />
                <label htmlFor="password" className="form-label">Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} name="password" type="password" className="form-control" />
                {error && <p>{error}</p>}
                <button type="submit" className="btn btn-primary mt-4">{title}</button>
            </form>
        </>
    )
}


export default AccountForm;