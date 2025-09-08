import React from "react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createUser } from "../services/api/user";
import { Link, useNavigate } from "react-router";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();

  const onSubmit = async (registerData) => {
    console.log(registerData);
    const data = await createUser(registerData);
    if (data) {
      console.log(data);
      toast.success(data.message || "Registration successful!");
      reset();
      navigate("/login");
    } else {
      toast.error(data.message || "Registration failed. Please try again.");
    }
  };


  return (
    <div className="relative w-full h-full md:px-12">
      <img src="/img/veleno.webp" alt="Brand Background"  className="absolute inset-0 w-full h-full object-cover"/>
      <div className="absolute inset-0 bg-black/50"></div>
       <div className="relative flex flex-col md:flex-row justify-around items-center md:gap-24 px-6 md:px-12 space-y-10 md:space-y-60 text-white font-poppins">
         <div className="max-w-xl space-y-8 mt-12 text-center md:text-left">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-[#D8F1A0]">
            Lets get started..
          </h2>
          <p className="text-base md:text-xl leading-relaxed">
             Join us in exploring the world of fragrances and find your signature
            scent. We are committed to your privacy and use the information you
            provide to contact you about our products, content, and services to
            enhance your experience.
          </p>
        </div>

        <div className="w-full max-w-4xl backdrop-blur-md rounded-2xl shadow-lg md:p-8 p-4 space-y-2 font-poppins my-12 ">
          <h2 className="text-xl md:text-2xl my-6 text-md font-bold text-[#D8F1A0] text-center">
            Registration Form
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-2">
            <div>
              <label
                htmlFor="register-first"
                className="block text-sm font-medium"
              >
                First Name
              </label>
              {errors.firstName && (
                <p className="text-center text-red-500">
                  {errors.firstName.message}
                </p>
              )}
              <input
                id="register-first"
                type="text"
                {...register("firstName", {
                  required: "First Name is required",
                  minLength: {
                    value: 5,
                  },
                })}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="First Name"
              />
            </div>
            <div>
              <label
                htmlFor="register-second"
                className="block text-sm font-medium"
              >
                Last Name
              </label>
              {errors.lastName && (
                <p className="text-center text-red-500">
                  {errors.lastName.message}
                </p>
              )}
              <input
                id="register-second"
                type="text"
                {...register("lastName", {
                  required: "Last Name is required",
                  minLength: {
                    value: 5,
                  },
                })}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label
                htmlFor="register-email"
                className="block text-sm font-medium"
              >
                Email
              </label>
              {errors.email && (
                <p className="text-center text-red-500">
                  {errors.email.message}
                </p>
              )}
              <input
                id="register-email"
                type="email"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your Email"
              />
            </div>
            <div>
              <label
                htmlFor="register-phone"
                className="block text-sm font-medium"
              >
                Phone
              </label>
              {errors.phone && (
                <p className="text-center text-red-500">
                  {errors.phone.message}
                </p>
              )}
              <input
                id="register-phone"
                {...register("phone", {
                  required: "Phone Number is required",
                  minLength: {
                    value: 5,
                  },
                })}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="345678"
              />
            </div>

            <div className="relative">
              <label
                htmlFor="register-password"
                className="block text-sm font-medium"
              >
                Password
              </label>
              {errors.password && (
                <p className="text-center text-red-500">
                  {errors.password.message}
                </p>
              )}
              <input
                id="register-password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 5,
                  },
                })}
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="********"
              />

              <button
                type="button"
                className="absolute right-3 bottom-2 text-sm font-medium text-[#D8F1A0] focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <div className="relative">
              <label
                htmlFor="register-confirm-password"
                className="block text-sm font-medium"
              >
                Confirm Password
              </label>
              {errors.confirmPassword && (
                <p className="text-center text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
              <input
                id="register-confirm-password"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  minLength: {
                    value: 5,
                  },
                })}
                type={showConfirmPassword ? "text" : "password"}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="********"
              />
              <button
                type="button"
                className="absolute right-3 bottom-2 text-sm font-medium text-[#D8F1A0] focus:outline-none"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="register-phone"
              className="block text-sm font-medium "
            >
              Home Address
            </label>
            {errors.address && (
              <p className="text-center text-red-500">
                {errors.address.message}
              </p>
            )}
            <input
              id="register-home-address"
              type="text"
              {...register("address", {
                required: "Home Address is required",
                minLength: {
                  value: 5,
                },
              })}
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Home address"
            />

            <input
              type="hidden"
              value={"USER"}
              name="role"
              {...register("role")}
            />
          </div>

          <button
            type="submit"
            // disabled={!isValid}
            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium ${
              isSubmitting ? "bg-[#D8F1A0] text-[#0B0500]" : "bg-[#0B0500] text-[#D8F1A0]"
            } focus:outline-none focus:ring-1  focus:ring-[#0b0500]`}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>


          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="font-medium hover:underline text-[#D8F1A0]">
              Sign in here
            </Link>
          </div> 
      
        </div>
      </div>
    </div>
  );
}

export default Register;
