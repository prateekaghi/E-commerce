<script setup></script>

<template>
  <footer aria-labelledby="footer-heading" class="bg-gray-900">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="grid grid-cols-2 gap-8 xl:col-span-2">
          <div class="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div>
              <h3 class="text-sm font-medium text-white">Shop</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white">Bags</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-medium text-white">Company</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white"
                    >Who we are</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div>
              <h3 class="text-sm font-medium text-white">Account</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li class="text-sm">
                  <a href="#" class="text-gray-300 hover:text-white"
                    >Manage Account</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h3 class="text-sm font-medium text-white">Connect</h3>
              <ul role="list" class="mt-6 space-y-6">
                <li class="text-sm">
                  <NuxtLink
                    target="_blank"
                    to="https://api.whatsapp.com/send?phone=919416120900"
                  >
                    <Icon name="mdi:whatsapp" class="text-green-500 h-6 w-6"
                  /></NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="mt-12 md:mt-16 xl:mt-0">
          <h3 class="text-sm font-medium text-white">
            The latest deals and savings, sent to your inbox weekly.
          </h3>

          <FormKit
            type="form"
            action="https://formeezy.com/api/v1/forms/63922c7f388f6200083fba52/submissions"
            method="POST"
            enctype="multipart/form-data"
            submit-label="Get Deals"
            actions-class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            class="mt-4 flex sm:max-w-md"
          >
            <label for="email" class="sr-only">Email address</label>
            <FormKit
              type="email"
              name="email"
              label=""
              outer-class="mb-5 text-red-500"
              validation="required|email"
              label-class="text-sm font-medium text-white"
              message-class="text-cyan-200"
              inner-class="max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500"
              input-class="w-full min-w-0 appearance-none rounded-md border border-white bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
            />
          </FormKit>
        </div>
      </div>

      <div class="border-t border-gray-800 py-10">
        <p class="text-sm text-gray-400">
          Copyright &copy; 2021 Your Company, Inc.
        </p>
      </div>
    </div>
  </footer>
</template>
