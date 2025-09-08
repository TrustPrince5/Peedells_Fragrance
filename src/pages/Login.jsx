import { AuthContext } from '../context/AuthContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useContext, useState } from 'react';
import { loginUser } from '../services/api/user';
import { Link, useNavigate } from 'react-router';



function Login () {
  const [showPassword, setShowPassword] = useState(false);
  const [state, dispatch] = useContext(AuthContext)
  const { register, handleSubmit, formState: { errors, isSubmitting, isValid }, reset} = useForm({
      mode: "onChange"
    });
    const navigate = useNavigate();

    const onSubmit = async (loginData) => {
      const data = await loginUser(loginData);
      if(data){
        console.log(data)
        localStorage.setItem("auth-token", data.token);
        dispatch({ type: "setToken", payload: data.token})
        toast.success(data?.message || "Login successful!");
        reset();
        navigate('/');
      }else{
        toast.error(data?.message || "Login failed. Please try again.");
      }
    }
   


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Welcome Back</h2>
        <p className="text-center text-gray-600">Please enter your credentials</p>
        
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="login-email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="login-email"
              type="email"
              { ...register("email", {
                required: "Email Address is required",
              })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              placeholder="your@email.com"
            />
            {errors.email && (<p className='text-center text-red-500'>{errors.email.message}</p>)}
          </div>
          
          <div className="relative">
            <label htmlFor="login-password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="login-password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "User Password is required"
              })}
                placeholder='**********'
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            />
            <button
              type="button"
              className="absolute right-3 bottom-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
            {errors.password && (<p className='text-center text-red-500'>{errors.password.message}</p>)}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0B0500] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </span>
            ) : "Login"}
              
          </button>
        </form>
        
        <div className="text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="font-medium text-[#0B0500]">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};



// function Login() {
//   return (
// // {/* <Container> */}
//   <div className="relative w-full h-full min-h-screen overflow-hidden">
//     <img src="/img/Natali.jpg" alt="Brand Background" className="absolute inset-0 w-full h-screen object-cover" />
//     <div className="absolute inset-0 bg-black/50"></div>
//     <div className="relative flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-12 space-y-10 md:space-y-10 text-gray-300 font-poppins">      
//       <div className="max-w-xl space-y-8 mt-12 text-center md:text-left">
//         <h2 className="font-serif font-bold text-4xl md:text-6xl text-[#D8F1A0]">Welcome Back!</h2>
//         <p className="text-base md:text-xl leading-relaxed">We’re glad to see you again. Log in to access your personalized dashboard and continue exploring the experience of fragrance with us.</p>
//       </div>

//       <div className="w-full max-w-md backdrop-blur-md rounded-2xl shadow-lg p-4 space-y-2 font-poppins my-12">
//         <p className="text-md font-bold text-[#D8F1A0] md:text-2xl my-6 text-center md:text-left"> Sign in to continue..</p>
//          <form className="space-y-5">
//           <div>
//             <label className="block font-medium mb-1">User ID or Email</label>
//             <input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#b58b65]" />
//           </div>
//           <div>
//             <label className="block font-medium mb-1">Password</label>
//             <input type="password" placeholder="Enter your password" className="w-full px-4 py-3 rounded bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#b58b65]" />
//           </div>

//           <div className="flex items-center justify-between">
//             <label className="flex items-center space-x-2">
//               <input type="checkbox" className="w-4 h-4" /><span>Remember me</span>
//             </label>
//             <a href="#" className="text-[#D8F1A0] hover:underline">Forgot password?</a>
//           </div>

//           <button type="submit" className="bg-[#0B0500] duration-500 hover:bg-[#D8F1A0] hover:text-[#0B0500] text-[#D8F1A0] w-full py-3 rounded"> Login </button>
//         </form>

//         <p className=" text-gray-200 text-center my-8"> Don’t have an account? 
//           <Link to="/register" className="text-[#D8F1A0] hover:underline ml-1">Sign up</Link>
//         </p>
//       </div>
//     </div>
//   </div>
// // </Container>
//   )
// }

export default Login;
