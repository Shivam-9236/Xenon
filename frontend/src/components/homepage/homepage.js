// import React from "react";
// import "./homepage.css";

// const Homepage = ({ setLoginUser }) => {
//   return (
//     <div classNameName="homepage">
//       <h1>Xenon Stack</h1>
//       <p>Shivam Gupta </p>
//       <p>shivamrdr6502@gmail.com</p>

//       <div classNameName="button" onClick={() => setLoginUser({})}>
//         Logout
//       </div>
//     </div>
//   );
// };

// export default Homepage;

import React from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

const Homepage = ({ setLoginUser }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-white">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <h1 className=" font-extrabold text-2xl">Xenon</h1>
                <img
                  className="h-8 w-auto"
                  src="https://www.google.com/url?sa=i&url=httpshttps://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fvectors%2Fsearch%2Flogo%2F&psig=AOvVaw0W1Uwr0RyxKxl70WGOhKMC&ust=1707819100119000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCKDo4YTIpYQDFQAAAAAdAAAAABAE%3A%2F%2Fpartners.amazonaws.com%2Fpartners%2F001E000001AoR0YIAV%2FXenonStack&psig=AOvVaw18MBVbxNcjKRQiaoFhY5ts&ust=1707818931233000&sourhttps://apn-portal.file.force.com/servlet/servlet.ImageServer?id=0150h000003yfUBAAY&oid=00DE0000000c48tMAAce=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJDKx7THpYQDFQAAAAAdAAAAABAE"
                  alt=""
                />
              </a>
            </div>

            <div className="lg:flex lg:gap-x-12">
              <a
                href="#"
                className=" flex text-sm font-semibold leading-6 text-gray-900 text-2xl justify-center"
              >
                Home
              </a>

              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900 text-2xl"
                onClick={() => {
                  navigate("/contactus");
                }}
              >
                Contact Us
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={() => {
                  setLoginUser({});
                  sessionStorage.removeItem("user");
                }}
              >
                Log out <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
        </header>

        <div className="relative isolate px-6 pt-6 lg:px-8">
          {/* <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  " polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div> */}
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-34">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Develop Generative AI Applications with Data-Driven Approach.{" "}
                <a
                  href="https://www.xenonstack.com/"
                  className="font-semibold text-indigo-600"
                >
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Transform to Neural Company to redefine your business
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Digitization and digitalization integrated with AI and Real-Time
                Analytics transforming Industries towards Vision Intelligence
                and New Trends Emerging Retail 4.0, Supply Chain and Logistics
                5.0 and Smart Factory 5.0
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="https://www.xenonstack.com/neural-company/"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
                <a
                  href="https://www.xenonstack.com/"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>
      </div>
      {/* //next page start from header */}
      <div class="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <svg
            class="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width="200"
                height="200"
                x="50%"
                y="-1"
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="-1" class="overflow-visible fill-gray-50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                stroke-width="0"
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              stroke-width="0"
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
            />
          </svg>
        </div>
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="lg:max-w-lg">
                <p class="text-base font-semibold leading-7 text-indigo-600">
                  Deploy faster
                </p>
                <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A better workflow
                </h1>
                <p class="mt-6 text-xl leading-8 text-gray-700">
                  Real Time Interactions and decision data driven analytics to
                  help businesses to make faster decisions for operational and
                  customer-facing processes.
                </p>
              </div>
            </div>
          </div>
          <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img
              class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt=""
            />
          </div>
          <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div class="lg:pr-4">
              <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                <p>
                  Product-mode organisations are formed with innovation stack
                  approach and independent teams that respond rapidly to
                  segmented and unsegmented user needs and continuous
                  experimentation.
                </p>
                <ul role="list" class="mt-8 space-y-8 text-gray-600">
                  <li class="flex gap-x-3">
                    <svg
                      class="mt-1 h-5 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong class="font-semibold text-gray-900">
                        Contact Center Intelligence
                      </strong>{" "}
                      Embed AI-driven capabilities to facilitate conversation
                      insights and improve customer experience.
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="mt-1 h-5 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong class="font-semibold text-gray-900">
                        Platform Engineering/IDP
                      </strong>{" "}
                      Designing and building self service capabilities in
                      Cloud-Native era for modern software engineering with
                      Toolchains and workflows.
                    </span>
                  </li>
                  <li class="flex gap-x-3">
                    <svg
                      class="mt-1 h-5 w-5 flex-none text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                      <path
                        fill-rule="evenodd"
                        d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span>
                      <strong class="font-semibold text-gray-900">
                        Database backups.
                      </strong>{" "}
                      Harness the capabilities of real-time access and immediate
                      query suggestions for supporting decision making
                    </span>
                  </li>
                </ul>
                <p class="mt-8">
                  With custom Generative AI service businesses can increase
                  productivity and enable consistent experience.
                </p>
                <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                  No server? No problem.
                </h2>
                <p class="mt-6">
                  If your enterprise wants to scale your capabilities and deploy
                  cloud-native applications in kubernetes, then you must read
                  this use case.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //next page of team photos */}

      <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div class="max-w-2xl">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet our leadership
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio
              vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>
          <ul
            role="list"
            class="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            <li>
              <div class="flex items-center gap-x-6">
                <img
                  class="h-16 w-16 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Leslie Alexander
                  </h3>
                  <p class="text-sm font-semibold leading-6 text-indigo-600">
                    Co-Founder / CEO
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div class="flex items-center gap-x-6">
                <img
                  class="h-16 w-16 rounded-full"
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Michael Foster
                  </h3>
                  <p class="text-sm font-semibold leading-6 text-indigo-600">
                    Co-Founder / CTO
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div class="flex items-center gap-x-6">
                <img
                  class="h-16 w-16 rounded-full"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Dries Vincent
                  </h3>
                  <p class="text-sm font-semibold leading-6 text-indigo-600">
                    Business Relations
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div class="flex items-center gap-x-6">
                <img
                  class="h-16 w-16 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div>
                  <h3 class="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    Tom Cook
                  </h3>
                  <p class="text-sm font-semibold leading-6 text-indigo-600">
                    Director of Product
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
