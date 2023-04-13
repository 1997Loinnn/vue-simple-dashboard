<template>
    <div class="w-screen h-screen flex">
        <!-- Side bar -->
        <div class="w-[400px] h-full bg-gray-200 text-white" v-show="showSide">
            <div class="h-[50px] bg-gray-900 flex justify-start items-center">
                <div class="px-[20px]">
                    <h3 class="fond-bold text-xl">Admin Dashboard</h3>
                </div>
            </div>
            <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]">
                <div class="flex flex-col justify-between h-full px-[20px] space-y-[10px]">
                    <div class=" flex flex-col justify-between space-y-[10px]">
                            <router-link to="/home" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-900">
                                <svg area-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16"> 
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/> <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/> 
                                </svg>
                                Home
                            </router-link>
                            
                            <router-link to="/profile" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-900">
                                <svg area-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16"> 
                                    <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                                </svg>
                                Profile
                            </router-link>
                            
                            <router-link to="/message" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-900">
                                <svg area-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16"> 
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                </svg>
                                Messages
                            </router-link>
                            
                            <router-link to="/download" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-900">
                                <svg area-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16"> 
                                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                                </svg>
                                Download
                            </router-link>
                    </div>
                    <div class="h-[50px]">
                        <div>
                            <router-link to="/setting" class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-900">
                                <svg area-hidden="true" class="mr-2 w-[25px] h-[25px] fill-current" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16"> 
                                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                                </svg>
                                Setting
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full h-full bg-gray-400">
            <div class="h-[50px] bg-gray-100 flex items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b">
                <!-- bar menu -->
                <div class="cursor-pointer w-[30px]" @click="toggleSideBar">
                    <svg  class="w-[25px] h-[25px]" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 16 16"> 
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </div>
                <!-- Search bar -->
                <div class="w-[calc(100%-30px)] flex">
                    <div class="w-[calc(100%-200px)] flex justify-center ">
                        <!-- Search bar -->
                        <form class="flex items-center w-[500px]">
                        <label for="voice-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-auto text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                            </svg>
                            </div>
                            <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required>
                            <router-link to="/" class="flex absolute inset-y-0 right-0 items-center pr-3">
                            <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path>
                            </svg>
                            </router-link>
                        </div>
                        </form>
                    </div>
                    <div class="w-[200px]">
                        <div class="flex items-center justify-start space-x-4 cursor-pointer" @click="toggleDrop">
                            <img class="w-10 h-10 rounded-full border-2 border-gray-50" src="https://storage.googleapis.com/support-forums-api/avatar/profile-6419-493425123996111530.png" alt="">
                            <div class="font-semibold dark:text-white text-left">   
                                <div>Sherzod, Dev OP</div>
                                <div class="text-sm text-gray-500 dark:text-gray-400">Admin</div>
                            </div>
                        </div>
                        <div v-show="showDropDown" class="absolute right-[10px] z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role>
                            <div class="py-1 text-left" role="none">
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-0">Account settings</a>
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-1">Support</a>
                                <a href="#" class="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabindex="-1" id="menu-item-2">License</a>
                                <form method="POST" action="#" role="none">
                                    <button type="submit" class="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" tabindex="-1" id="menu-item-3">Sign out</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="h-[calc(100vh-50px)] bg-gray-50 p-[20px]">
                <div class="border border-gray-300 rounded-md p-[20px] h-full">
                    <router-view></router-view>
                </div>
            </div>
        </div>
        <!-- Main -->
    </div>
</template>

<script>
export default {
    name: 'DashboardPage',
    data() {
        return {
            showDropDown: false,
            showSide: true
        }
    },  
    methods: {
        toggleSideBar() {
            this.showSide = !this.showSide
        },
        toggleDrop() {
            this.showDropDown = !this.showDropDown
        }
    }
}
</script>

<style>

</style>