import { useState, useEffect } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function CreateAccount() {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(8, 'Password must be at least 8 characters long')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .required('Required'),
    }),
    onSubmit: values => {
      // handle form submission
      console.log(values);
    },
  });

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-2 sm:px-6 lg:px-8">
        <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-8 sm:px-12">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="mt-0 mb-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Create Account
              </h2>
            </div>
            <div className="flex justify-center">
              <form onSubmit={formik.handleSubmit} className="space-y-2 border-none w-[350px]">
                <div data-aos="fade-up">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className={`block bg-[#EBE7E7] w-full h-[48px] rounded-md border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-[#3A3A3A]'} py-1.5 text-gray-900 shadow-sm outline outline-1 outline-[#3A3A3A] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-10`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
                    ) : null}
                    <MdOutlineMail className="absolute right-3 top-3 text-gray-400 text-xl pointer-events-none" />
                  </div>
                </div>

                <div data-aos="fade-down">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      autoComplete="current-password"
                      className={`block bg-[#EBE7E7] w-full h-[48px] rounded-md border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-[#3A3A3A]'} py-1.5 text-gray-900 shadow-sm outline outline-1 outline-[#3A3A3A] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-10`}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                    ) : null}
                    <div
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-3 text-gray-400 text-xl cursor-pointer"
                    >
                      {showPassword ? <BiHide /> : <BiShow />}
                    </div>
                  </div>
                  <div className="flex justify-between mt-1 mb-2 items-center" data-aos="fade-down">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember-me"
                        className="mr-1"
                      />
                      <label htmlFor="remember-me" className="text-sm text-[#3A3A3A] font-semibold cursor-pointer">
                        Remember me
                      </label>
                    </div>
                    <Link
                      to="/forgotten-password"
                      className="font-semibold text-[#3A3A3A] hover:text-[#413FA0] text-sm leading-6"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <div data-aos="fade-down">
                  <button
                    type="submit"
                    className="flex w-full h-[48px] mb-4 justify-center rounded-md bg-[#413FA0] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#413FA0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Create Account
                  </button>
                </div>

                <Link to='/'
                  type="button"
                  className="flex w-full h-[48px] justify-center rounded-md bg-[#EBE7E7] px-3 py-1.5 text-[#000000] text-sm font-semibold leading-6 shadow-sm outline outline-1 outline-[#3A3A3A] border border-[#3A3A3A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </Link>
              </form>
            </div>

            <div>
              <div className="relative mt-6">
                <div aria-hidden="true" className="absolute inset-0 flex items-center">
                  <div className="flex-grow border-t-2 border-[#CCCCCC]" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-white px-3 text-gray-900">Or continue with</span>
                </div>
              </div>

              <div className="mt-4 flex w-full mb-3 h-[48px] justify-center rounded-md bg-[#EBE7E7] px-3 py-1.5 text-[#000000] text-sm font-semibold leading-6 shadow-sm hover:bg-[#EBE7E7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <a
                  href="#"
                  className="flex items-center justify-center gap-3 w-full h-full"
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                    <path
                      d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
                      fill="#34A853"
                    />
                  </svg>
                  <span className="text-sm font-semibold leading-6">Continue with Google</span>
                </a>
              </div>
            </div>
            <p className="mt-0 text-center text-base text-gray-500 w-full">
              By clicking the sign you agree to our{' '}
              <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                terms <span className="text-gray-500">and</span> policies.
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
