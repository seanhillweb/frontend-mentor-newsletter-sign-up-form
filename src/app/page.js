"use client";

/**
 * Summary. Frontend Mentor Challenge.
 *
 * Description. A newsletter sign up component that requires a valid email for submission. Once a successful submission occurs, a response message will appear.
 *
 * @link https://www.freecodecamp.org/news/how-to-build-forms-in-react/
 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";

export default function Home() {
  const [isSuccessfullySubmitted, setSuccessfullySubmitted] = useState(false);

  function Form() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = () => {
      setSuccessfullySubmitted(true);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mb-6">
          <div className="flex flex-row justify-between mb-2">
            <label htmlFor="email" className="text-xs font-semibold">
              Email address
            </label>
            {errors.email && errors.email.type === "required" && (
              <span role="alert" className="text-tomato text-xs font-semibold">
                Valid email required
              </span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span role="alert" className="text-tomato text-xs font-semibold">
                Valid email format required
              </span>
            )}
          </div>
          <input
            id="email"
            type="email"
            name="email"
            className={`rounded-lg px-4 py-3 border-grey hover:border-slate focus:border-slate focus:ring-transparent hover:cursor-pointer ${
              errors.email
                ? "text-tomato bg-tomato bg-opacity-10 border-tomato hover:border-tomato focus:border-tomato"
                : ""
            }`}
            placeholder="email@company.com"
            aria-invalid={errors.email ? "true" : "false"}
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
        </div>
        <button
          type="submit"
          className="inline-block w-full px-4 py-3 bg-charcoal text-white font-semibold text-center rounded-lg focus:border-none focus:ring-transparent hover:bg-gradient-to-r hover:from-[#FF527B] hover:to-[#FF6A3A] focus:bg-gradient-to-r focus:from-[#FF527B] focus:to-[#FF6A3A]"
        >
          Subscribe to monthly newsletter
        </button>
      </form>
    );
  }

  function Success() {
    const handleClick = () => {
      setSuccessfullySubmitted(false);
    };

    return (
      <div className="flex flex-col justify-between lg:justify-normal w-full max-w-[375px] lg:max-w-[480px] min-h-screen lg:min-h-0 bg-white px-6 py-10 lg:p-12 lg:rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="mt-12 lg:mt-0 lg:mb-12">
          <Image
            src="/icon-list.svg"
            alt="checkmark"
            width={64}
            height={64}
            priority
            aria-hidden={true}
          />
          <h1 className="text-4xl lg:text-6xl font-semibold mt-12 mb-6">
            Thanks for subscribing!
          </h1>
          <p>
            A confirmation email has been sent to{" "}
            <strong>ash@loremcompany.com.</strong> {""}
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
        <button
          onClick={handleClick}
          className="inline-block w-full px-4 py-3 bg-charcoal text-white font-semibold text-center rounded-lg focus:border-none focus:ring-transparent hover:bg-gradient-to-r hover:from-[#FF527B] hover:to-[#FF6A3A] focus:bg-gradient-to-r focus:from-[#FF527B] focus:to-[#FF6A3A]"
        >
          Dismiss message
        </button>
      </div>
    );
  }

  return (
    <main
      id="main"
      className="flex flex-col items-center lg:justify-center min-h-screen"
      aria-label="Content"
      aria-live="polite"
    >
      {isSuccessfullySubmitted ? (
        <Success />
      ) : (
        <div className="flex flex-col lg:flex-row lg:items-center w-full max-w-[375px] min-h-screen lg:w-full lg:max-w-[900px] lg:min-h-0 bg-white lg:p-6 lg:rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="order-first lg:order-last">
            <div className="relative block lg:hidden">
              <Image
                src="/illustration-sign-up-mobile.svg"
                alt="Illustration of a tablet, web browser, graphs, and charts"
                width={375}
                height={284}
                priority
              />
            </div>
            <div className="relative hidden lg:block">
              <Image
                src="/illustration-sign-up-desktop.svg"
                alt="Illustration of a tablet, web browser, graphs, and charts"
                width={400}
                height={593}
                priority
              />
            </div>
          </div>
          <div>
            <div className="px-6 py-10 lg:pl-12 lg:pr-[4.5rem] lg:p-12">
              <h1 className="text-4xl lg:text-6xl font-semibold mb-6">
                Stay updated!
              </h1>
              <p className="my-6">
                Join 60,000+ product managers receiving monthly updates on:
              </p>
              <ul className="my-6 list-none">
                <li className="flex flex-row items-start lg:items-center gap-4 mb-2">
                  <Image
                    src="/icon-list.svg"
                    alt="checkmark"
                    width={21}
                    height={21}
                    priority
                    aria-hidden={true}
                  />
                  <span>Product discovery and building what matters</span>
                </li>
                <li className="flex flex-row items-start lg:items-center gap-4 mb-2">
                  <Image
                    src="/icon-list.svg"
                    alt="checkmark"
                    width={21}
                    height={21}
                    priority
                    aria-hidden={true}
                  />
                  <span>Measuring to ensure updates are a success</span>
                </li>
                <li className="flex flex-row items-start lg:items-center gap-4">
                  <Image
                    src="/icon-list.svg"
                    alt="checkmark"
                    width={21}
                    height={21}
                    priority
                    aria-hidden={true}
                  />
                  <span>And much more!</span>
                </li>
              </ul>
              <Form />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
