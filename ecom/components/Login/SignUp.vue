<script setup>
import { useUserStore } from "~~/store/UserStore";
const userStore = useUserStore();
const client = useSupabaseAuthClient();
const signUpdata = reactive({
  email: "",
  password: "",
  confirmPassword: "",
  phone: "",
});

const signUpHandler = async function () {
  console.log("signup");
  if (signUpdata.password !== signUpdata.confirmPassword) return;

  await client.auth.signUp({
    email: signUpdata.email,
    password: signUpdata.password,
    options: {
      phone: signUpdata.phone,
    },
  });
};
</script>

<template>
  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto h-12 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2
        class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900"
      >
        Create an Account
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form
          @submit.prevent="signUpHandler"
          class="space-y-6"
          action="#"
          method="POST"
        >
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Email address</label
            >
            <div class="mt-1">
              <input
                v-model="signUpdata.email"
                id="email"
                name="email"
                type="email"
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700"
              >Mobile Number</label
            >
            <div class="mt-1">
              <input
                v-model="signUpdata.phone"
                id="phone"
                name="phone"
                type="number"
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Password</label
            >
            <div class="mt-1">
              <input
                v-model="signUpdata.password"
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <label
              for="password"
              class="block text-sm font-medium text-gray-700"
              >Confirm Password</label
            >
            <div class="mt-1">
              <input
                v-model="signUpdata.confirmPassword"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autocomplete="current-password"
                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Create Account
            </button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-300"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="bg-white px-2 text-gray-500">Alreay a User ?</span>
            </div>
          </div>

          <div class="mt-6 gap-3">
            <div>
              <button
                @click="userStore.toggleLoginCard"
                href="#"
                class="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
              >
                <span class="">Sign In</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
