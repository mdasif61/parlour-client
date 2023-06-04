import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Register = () => {
    const {createUser,updateUser}=useAuth()
    const {handleSubmit, reset, register}=useForm()
    const navigate=useNavigate()

    const onSubmit=(data)=>{
        createUser(data.email, data.password)
        .then(result=>{
            console.log(result)
            updateUser(data.name)
            .then(result=>{}).catch(err=>{console.error(err)})
            reset()
            navigate('/login')
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
                                    <span className="label-text">Name</span>
                                </label>
                                <input {...register('name', {required:true})} type="text" placeholder="Name" className="input input-bordered" />
                            </div>
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
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <p className="text-sm">Already Have An Account?<Link className="text-blue-500" to='/login'>Login Please</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Register;