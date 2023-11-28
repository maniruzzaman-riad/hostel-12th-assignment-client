import { useForm } from "react-hook-form";
import loginLogo from '../../assets/login.svg'
import { FcGoogle } from 'react-icons/fc';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";



const Login = () => {
    const {loginByGoogle} = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    const handleGoogleLogin=()=>{
        loginByGoogle()
        .then()
        .catch()
    }
    return (
        <div>
            <div className="min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <img className="w-full md:w-[40%] p-12" src={loginLogo} alt="" />
                    <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h2 className="text-4xl font-bold my-5">Login Here</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" {...register("email", { required: true })} name="email" className="input input-bordered" />
                                {errors.email && <span>email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" {...register("password", { required: true })} name="password" className="input input-bordered" />
                                {errors.password && <span>password is required</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <button onClick={handleGoogleLogin} className=" flex items-center justify-center gap-3 border-2 w-1/2 mx-auto py-2 font-bold rounded-lg border-purple-600 hover:bg-purple-400"><FcGoogle></FcGoogle> <span className="hidden md:block">Login with</span> Google</button>

                        <h2 className="text-center my-5 font-semibold">Are You new in BD-Jobs?, Please <Link to="/register"><span className="py-1 px-3 bg-green-600 rounded-lg text-white font-semibold">Registration</span></Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;