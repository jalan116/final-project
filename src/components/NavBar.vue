<template> 
    <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
        <div class="flex-1 px-2 mx-2 lg:flex-none">
          <span class="text-lg font-bold">
                  Garage Sales Online
                </span>
        </div> 
        <div class="justify-center flex-1 flex px-2 mx-2 lg:flex">
          <div class="flex items-stretch">
            <router-link to="/" class="btn btn-ghost btn-sm rounded-btn">
                    Home
                  </router-link> 
            <router-link to="/locator" class="btn btn-ghost btn-sm rounded-btn">
                    Locator
                  </router-link> 
            <router-link to="/items" class="btn btn-ghost btn-sm rounded-btn">
                    Items
                  </router-link> 
            <router-link to="/seller" class="btn btn-ghost btn-sm rounded-btn">
                    Seller
                  </router-link>
            <router-link to="/login" class="btn btn-ghost btn-sm rounded-btn">
                    Login
                  </router-link>
            <router-link to="/about" class="btn btn-ghost btn-sm rounded-btn">
                    About Us
                  </router-link>
          </div>
        </div> 
      </div>
</template>
