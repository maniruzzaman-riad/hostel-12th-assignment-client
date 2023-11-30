import { useForm } from "react-hook-form";
import registerLogo from '../../assets/register.svg'
import { Link } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";


const Register = () => {
    const { createNewUser, loginByGoogle } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        createNewUser(data.email, data.password)
            .then(result => {
                console.log(result);
                if(result){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registration succesfull",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
    }

    const handleGoogleLogin = () => {
        loginByGoogle()
        .then(result=>{
            if(result){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login succesfull",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    return (
        <div>
            <div className="min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row">
                    <img className="w-full md:w-1/2 p-12 " src={registerLogo} alt="" />
                    <div className="card flex-shrink-0 w-full md:w-1/2 shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-5xl font-bold">Registration Here</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" {...register("name", { required: true })} name="name" className="input input-bordered" />
                                {errors.name && <span>Name is required</span>}
                            </div>
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
                                {errors.password && <span>Password is required</span>}
                            </div>
                            {/* {
                                checkPassword && <h2 className="text-center my-5 font-semibold text-red-600">{checkPassword}</h2>
                            } */}

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Registration</button>
                            </div>
                        </form>
                        <button onClick={handleGoogleLogin} className=" flex items-center justify-center gap-3 border-2 w-1/2 mx-auto py-2 font-bold rounded-lg border-purple-600 hover:bg-purple-400"><FcGoogle></FcGoogle> <span className="hidden md:block">Login with</span> Google</button>

                        <h2 className="text-center my-5 font-semibold">If you have Already an account,Please Click Here to <Link to="/login"><span className="py-1 px-3 bg-green-600 rounded-lg text-white font-semibold">Login</span></Link></h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;