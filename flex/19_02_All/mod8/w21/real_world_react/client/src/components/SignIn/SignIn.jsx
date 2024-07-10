import "./SignIn.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/userContext";
// import { useContext, UserContext } from "../../contexts/userContext";

const SignIn = () => {
    const navigate = useNavigate();
    const { login } = useUser();
    // const { login } = useContext(UserContext);



    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
        login(email, password)
            .then(() => navigate("/"))
            .catch(() => alert("Invalid email or password"));
    }

    return (
        <main className="form">
            <h1>Sign In!</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />
                <button type="submit">Sign In</button>
            </form>
        </main>
    )
}

export default SignIn;