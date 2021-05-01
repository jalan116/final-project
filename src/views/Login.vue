<template>
    <section class="flex items-center justify-center text-center bg-gray-400 text-gray-800 py-10 my-8">
        <form string="boolean" action="" class="flex flex-col w-full max-w-lg p-12 rounded shadow-lg text-gray-800 ng-untouched ng-pristine ng-valid">
            <label for="username" class="self-start text-xs font-semibold">Username or Email</label>
            <input id="username" type="text" class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900">
            <label for="password" class="self-start mt-3 text-xs font-semibold">Password</label>
            <input id="password" type="password" class="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 text-coolGray-900">
            <button type="submit" class="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-violet-600 text-coolGray-50">Login</button>
            <div class="flex justify-center mt-6 space-x-2 text-xs">
                <a href="#" class="text-gray-800">Forgot Password?</a>
                <span class="text-gray-900">/</span>
                <a href="#" class="text-gray-800">Sign Up</a>
            </div>
        </form>
    </section>
</template>