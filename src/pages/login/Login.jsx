import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
//for tost
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    // Error show
    const [regerror, setRegerror] = useState('')

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

          //resetError
          setRegerror('');

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log('LogIn', loggedInUser);
                toast.success("LogIn successfully");
                //alert('LogIn successfully')
                //Navigate After Login
                navigate(location?.state ? location.state : '/login');

                if (!location.state) {
                    navigate('/')
                }

                // const user = { email };

                // get access token
                // axios.post('https://car-doctor-server-final-cyan.vercel.app/jwt', user, { withCredentials: true })
                //     .then(res => {
                //         console.log(res.data)
                //         if (res.data.success) {
                //             navigate(location?.state ? location?.state : '/')
                //         }
                //     })

            })
            .catch(error => {
                console.log(error)
                setRegerror('Invalid email or password. Please try again.')
            });
             
    }

    // Google dia LOogin)
    const hadleGoogleSign = () => {
        //(google provider(Transfer data to createUser function)
        signInWithGoogle()
            .then(res => {
                console.log(res.user)
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="hero  lg:h-[600px] bg-black rounded-xl">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center"><button onClick={hadleGoogleSign} className="btn btn-link md:text-xm text-orange-700">Google-Login!</button></p>

                        {
                            regerror && <p className="text-xm text-red-700 text-center">{regerror}</p>
                        }

                        <p className='my-4 text-center'>New to Car Doctors <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;