 
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  
    const { craeteNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // get form data
        const form = new FormData(e.target);
        const name = form.get("name");
        if(name.length <5){
            setError({...error, name: "Must be more than 5 characters"})
        };
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");

        craeteNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                updateUserProfile({displayName: name, photoURL: photo})
                .then(()=>{navigate("/")})
                .catch(err=>{alert(err);})
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorCode, errorMessage);
            });
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg p-4 rounded-none">
                <h2 className="text-2xl font-semibold text-center my-10">Register your account</h2>
                <hr />

                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Your Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" required />
                    </div>

                    {error.name && <label className="label text-sm text-red-600">{error.name}</label>}

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-semibold">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Enter your photo url" className="input input-bordered" required />
                    </div>
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
                    </div>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="terms"
                            // checked={isChecked}
                            // onChange={handleCheckboxChange}
                            className="checkbox checkbox-sm border-gray-400"
                        />
                        <label htmlFor="terms" className="text-gray-400 font-semibold">
                            Accept <span className="font-semibold text-gray-600">Terms & Conditions</span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-none">Register</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;