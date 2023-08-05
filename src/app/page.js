import Image from "next/image";
import Form from "@/components/form";

export default function Home() {
  return (
    <main
      id="main"
      className="flex flex-col items-center lg:justify-center h-screen"
    >
      <div className="flex flex-col lg:flex-row lg:items-center w-[375px] lg:w-full lg:max-w-[900px] bg-white lg:p-6 lg:rounded-3xl shadow-lg ring-1 ring-black ring-opacity-5">
        <div className="order-first lg:order-last">
          <div className="relative block lg:hidden">
            <Image
              src="/illustration-sign-up-mobile.svg"
              alt="illustration"
              width={375}
              height={284}
              priority
            />
          </div>
          <div className="relative hidden lg:block">
            <Image
              src="/illustration-sign-up-desktop.svg"
              alt="illustration"
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
              <li className="flex flex-row items-start lg:items-center gap-4 lg:gap-6 mb-2">
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
              <li className="flex flex-row items-start lg:items-center gap-4 lg:gap-6 mb-2">
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
              <li className="flex flex-row items-start lg:items-center gap-4 lg:gap-6">
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
    </main>
  );
}
