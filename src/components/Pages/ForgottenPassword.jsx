import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";

export default function ForgottenPassword() {


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-2 sm:px-6 lg:px-8">
        <div className="mt-0 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-8 sm:px-12">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="mt-0 mb-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Forgot Password
              </h2>
            </div>
            <div className="flex justify-center">
              <form action="#" method="POST" className="space-y-4 border-none w-[350px]">
                <div data-aos="fade-up">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                     Enter email 
                  </label>
                  <div className="mt-1 relative mb-14">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block bg-[#EBE7E7] w-full h-[48px] rounded-md border border-[#3A3A3A] py-1.5 text-gray-900 shadow-sm outline outline-1 outline-[#3A3A3A] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pr-10"
                    />
                    <MdOutlineMail className="absolute right-3 top-3 text-gray-400 text-xl pointer-events-none" />
                  </div>
                </div>

                <div >
                  <Link to='/tokeninput'
                    type="submit"
                    className="flex w-full h-[48px]  justify-center rounded-md bg-[#413FA0] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#413FA0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    data-aos="fade-down"
                  >
                  Recovery token
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
