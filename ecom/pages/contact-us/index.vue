<script setup></script>

<template>
  <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          'warm-gray': colors.warmGray,
          teal: colors.teal,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
  <div class="bg-[url('/assets/img/contact-background.jpg')] bg-cover">
    <main class="overflow-hidden">
      <!-- Header -->
      <div class="bg-warm-gray-50">
        <div class="py-24 lg:py-32">
          <div
            class="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8"
          >
            <h1
              class="text-4xl font-bold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl"
            >
              Get in touch
            </h1>
            <p class="mt-6 max-w-3xl text-xl text-warm-gray-500">
              Vel nunc non ut montes, viverra tempor. Proin lectus nibh
              phasellus morbi non morbi. In elementum urna ut volutpat. Sagittis
              et vel et fermentum amet consequat.
            </p>
          </div>
        </div>
      </div>

      <!-- Contact section -->
      <section class="relative" aria-labelledby="contact-heading">
        <div
          class="absolute h-1/2 w-full bg-warm-gray-50"
          aria-hidden="true"
        ></div>

        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="relative bg-white opacity-70 shadow-xl">
            <h2 id="contact-heading" class="sr-only">Contact us</h2>

            <div class="grid grid-cols-1 lg:grid-cols-3">
              <!-- Contact information -->
              <div
                class="relative overflow-hidden bg-gradient-to-b from-teal-500 to-teal-600 py-10 px-6 sm:px-10 xl:p-12"
              >
                <!-- Decorative angle backgrounds -->
                <div
                  class="pointer-events-none absolute inset-0 sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    class="absolute inset-0 h-full w-full"
                    width="343"
                    height="388"
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fill-opacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff"></stop>
                        <stop
                          offset="1"
                          stop-color="#fff"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    class="absolute inset-0 h-full w-full"
                    width="359"
                    height="339"
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fill-opacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff"></stop>
                        <stop
                          offset="1"
                          stop-color="#fff"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  class="pointer-events-none absolute top-0 right-0 bottom-0 hidden w-1/2 lg:block"
                  aria-hidden="true"
                >
                  <svg
                    class="absolute inset-0 h-full w-full"
                    width="160"
                    height="678"
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fill-opacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#fff"></stop>
                        <stop
                          offset="1"
                          stop-color="#fff"
                          stop-opacity="0"
                        ></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 class="text-lg font-medium text-white">
                  Contact information
                </h3>
                <p class="mt-6 max-w-3xl text-base text-teal-50">
                  Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                  volutpat massa dictumst amet. Sapien tortor lacus arcu.
                </p>
                <dl class="mt-8 space-y-6">
                  <dt><span class="sr-only">Phone number</span></dt>
                  <dd class="flex text-base text-teal-50">
                    <!-- Heroicon name: outline/phone -->
                    <svg
                      class="h-6 w-6 flex-shrink-0 text-teal-200"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      />
                    </svg>
                    <span class="ml-3">+1 (555) 123-4567</span>
                  </dd>
                  <dt><span class="sr-only">Email</span></dt>
                  <dd class="flex text-base text-teal-50">
                    <!-- Heroicon name: outline/envelope -->
                    <svg
                      class="h-6 w-6 flex-shrink-0 text-teal-200"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    <span class="ml-3">support@workcation.com</span>
                  </dd>
                </dl>
                <ul role="list" class="mt-8 flex space-x-12">
                  <li>
                    <a class="text-teal-200 hover:text-teal-100" href="#">
                      <span class="sr-only">Facebook</span>
                      <svg
                        class="h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a class="text-teal-200 hover:text-teal-100" href="#">
                      <span class="sr-only">GitHub</span>
                      <svg
                        class="h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a class="text-teal-200 hover:text-teal-100" href="#">
                      <span class="sr-only">Twitter</span>
                      <svg
                        class="h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>

              <!-- Contact form -->
              <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 class="text-lg font-medium text-warm-gray-900">
                  Send us a message
                </h3>
                <FormKit
                  type="form"
                  submit-label="Send Enquiry"
                  actions-class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-teal-500 px-6 py-3 text-lg font-medium text-white font-bold shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto float-right"
                  action="https://formeezy.com/api/v1/forms/639229ebc86f470008564e63/submissions"
                  method="POST"
                  enctype="multipart/form-data"
                  class="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div class="grid grid-cols-2 gap-1">
                    <FormKit
                      type="text"
                      label="First Name"
                      validation="required"
                      message-class="text-red-500"
                      input-class=" block w-full flex rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    />
                    <FormKit
                      type="text"
                      label="Last Name"
                      validation="required"
                      message-class="text-red-500"
                      input-class=" block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <div class="grid grid-cols-2 gap-1">
                    <FormKit
                      type="text"
                      label="E-mail"
                      validation="required|email"
                      message-class="text-red-500"
                      input-class=" block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    />
                    <FormKit
                      type="tel"
                      label="Phone number"
                      validation="required|matches:/^[0-9]{10}$/"
                      message-class="text-red-500"
                      input-class=" block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                      :validation-messages="{
                        matches: 'Phone number must be a 10 Digit Number',
                      }"
                      validation-visibility="dirty"
                    />
                  </div>

                  <div class="sm:col-span-2">
                    <FormKit
                      type="textarea"
                      label="Subject"
                      rows="1"
                      validation="required|length:5,30"
                      message-class="text-red-500"
                      input-class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <div class="sm:col-span-2">
                    <FormKit
                      type="textarea"
                      label="Message"
                      rows="4"
                      validation="required|length:5,500"
                      message-class="text-red-500"
                      input-class="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  <!-- <div class="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                      type="submit"
                      class="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-teal-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:w-auto"
                    >
                      Submit
                    </button>
                  </div> -->
                </FormKit>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact grid -->
      <section aria-labelledby="offices-heading">
        <div class="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h2
            id="offices-heading"
            class="text-3xl font-bold tracking-tight text-warm-gray-900"
          >
            Our offices
          </h2>
          <p class="mt-6 max-w-3xl text-lg text-warm-gray-500">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames.
          </p>
          <div
            class="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
          >
            <div>
              <h3 class="text-lg font-medium text-warm-gray-900">
                Los Angeles
              </h3>
              <p class="mt-2 text-base text-warm-gray-500">
                <span class="block">4556 Brendan Ferry</span>

                <span class="block">Los Angeles, CA 90210</span>
              </p>
            </div>

            <div>
              <h3 class="text-lg font-medium text-warm-gray-900">New York</h3>
              <p class="mt-2 text-base text-warm-gray-500">
                <span class="block">886 Walter Streets</span>

                <span class="block">New York, NY 12345</span>
              </p>
            </div>

            <div>
              <h3 class="text-lg font-medium text-warm-gray-900">Toronto</h3>
              <p class="mt-2 text-base text-warm-gray-500">
                <span class="block">7363 Cynthia Pass</span>

                <span class="block">Toronto, ON N3Y 4H8</span>
              </p>
            </div>

            <div>
              <h3 class="text-lg font-medium text-warm-gray-900">London</h3>
              <p class="mt-2 text-base text-warm-gray-500">
                <span class="block">114 Cobble Lane</span>

                <span class="block">London N1 2EF</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
