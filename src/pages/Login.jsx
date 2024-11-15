import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";


const Login = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email, password });
        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user);
                alert ("Login successful")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert ("Email or Password incorrect", errorCode, errorMessage);
            });
    };

    const { userLogin, setUser } = useContext(AuthContext);

    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg p-4 rounded-none">
                <h2 className="text-2xl font-semibold text-center my-10">Login your account</h2>
                <hr />

                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Email address</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter your email address" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Enter your password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Login</button>
                    </div>
                </form>
                <p className="text-center font-semibold">
                    Don’t Have An Account ? <Link to={"/auth/register"} className="text-[#FF8C47] hover:text-blue-500">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;