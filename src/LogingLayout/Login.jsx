import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Shared/Context";
import { useForm } from "react-hook-form";

const Login = () => {

    const {signIn}=useContext(AuthContext)
    const navigate=useNavigate()

    const {handleSubmit, reset, register}=useForm()
    const onSubmit=(data)=>{
        signIn(data.email,data.password)
        .then(result=>{
            console.log(result)
            reset()
            navigate('/')
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register('email', {required:true})} type="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register('password', {required:true})} type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-sm">Are Your New?<Link className="text-blue-500" to='/register'>Register Please</Link></p>
                    </div>
                </div>
            </div>
        </div>
        </form>
    );
};

export default Login;