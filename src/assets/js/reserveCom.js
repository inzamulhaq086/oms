let myHeader = `<div class="w-1/2 sm:w-3/12 lg:w-4/12 xl:w-5/12 2xl:w-1/2">
<div class="flex items-center">
    <!-- Brand -->
    <div class="w-32 pr-4 md:pl-3">
        <img class="w-full" src="./src/assets/image/Logo.svg" alt="">
    </div>
    <!-- Menu Toggler -->
    <a class="lg:ml-16" href="javascript:;" id="menu-toggler">
        <svg class="h-8 w-8 text-TextColor pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        </svg>
    </a>
</div>
</div>
<!--    =====================================-->
<!--            start right side-->
<!--    =====================================-->
<div class="w-1/2 sm:w-9/12 lg:w-8/12 xl:w-7/12 2xl:w-1/2">
<div class="flex flex-wrap items-center">
    <div class="md:w-5/12 lg:w-1/2 hidden md:block">
        <form class="w-full lg:w-10/12 px-4">
            <div class="rounded-full border border-TextColor50 flex items-center pl-4">
                <button class="text-TextColor">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </button>
                <input class="px-3 py-3 outline-none block w-full bg-transparent" type="search" placeholder="Search">
                <div class="h-[40px] mr-1 custom-select custom-select-header  bg-TextColor40 rounded-full relative w-[130px]">
                    <i class="text-TextColor80 absolute pointer-events-none top-[6px] right-3 text-lg fa fa-angle-down font-thin"></i>
                    <select>
                        <option value="0">All</option>
                        <option value="1">All</option>
                        <option value="2">All</option>
                        <option value="3">All</option>
                        <option value="4">All</option>
                    </select>
                </div>
            </div>
        </form>
    </div>
    <div class="w-full md:w-7/12 lg:w-1/2">
        <div class="flex items-center justify-end md:justify-between">
        <div class="hidden sm:block text-3xl text-TextColor hover:text-TextColor80 relative">
        <div class="hover-dropdown-box h-14 w-14 rounded-full customShadow2 flex items-center justify-center cursor-pointer">
            <div class="pointer-events-none w-8 country-flag">
                <img alt="" class="w-full" src="./src/assets/image/um.svg">
            </div>
        </div>
        <div class="mr-4 hover-dropdown-show-box hidden absolute w-150px transition-all duration-500 rounded right-0 top-full">
            <div class="customShadow rounded-sm cursor-pointer bg-white mt-4 relative ">
                <div class="w-4 overflow-hidden inline-block absolute -top-3 right-1">
                    <div class="h-3 w-3 bg-white shadow rotate-45 transform origin-bottom-left"></div>
                </div>
                <ul class="text-TextColor customScroll">
                    <li class="px-3 py-2 text-xs  hover:bg-TextColor40 language">
                        <div class="flex items-center space-x-3 pointer-events-none">
                            <div class="w-6 "><img alt="" class="w-full" src="./src/assets/image/um.svg"></div>
                            <div class="text-gray-600 text-base">English</div>
                        </div>
                    </li>
                    <li class="px-3 py-2 text-xs  hover:bg-TextColor40 language">
                        <div class="flex items-center space-x-3 pointer-events-none">
                            <div class="w-6"><img alt="" class="w-full" src="./src/assets/image/it.svg"></div>
                            <div class="text-gray-600 text-base">Italiana</div>
                        </div>
                    </li>
                    <li class="px-3 py-2 text-xs  hover:bg-TextColor40 language">
                        <div class="flex items-center space-x-3 pointer-events-none">
                            <div class="w-6 "><img alt="" class="w-full" src="./src/assets/image/fr.svg"></div>
                            <div class="text-gray-600 text-base">Francais</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
            <!--        notification-->
            <div class="ml-4 relative items-center">
                <div class="hover-dropdown-box h-14 w-14 group rounded-full flex items-center justify-center customShadow2 cursor-pointer">
                    <div class="relative pointer-events-none">
                        <span class="pointer-events-none flex h-5 w-5 items-center justify-center absolute -top-4 -right-3">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-DangerColor opacity-75"></span>
                            <span class="flex relative rounded-full h-5 w-5 font-semibold text-xs text-white bg-DangerColor items-center justify-center">3</span>
                          </span>
                        <svg class="pointer-events-none h-8 w-8 text-TextColor group-hover:text-TextColor80" fill="none"
                             stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path class="pointer-events-none" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" stroke-linecap="round" stroke-linejoin="round"
                                  stroke-width="2"/>
                        </svg>
                    </div>
                </div>
                <div class="mr-4 hover-dropdown-show-box hidden absolute w-80 transition-all duration-500 rounded right-0 top-full">
                    <div class="customShadow bg-white mt-4 relative ">
                        <div class="w-4 overflow-hidden inline-block absolute -top-3 right-1">
                            <div class="h-3 w-3 bg-white shadow rotate-45 transform origin-bottom-left"></div>
                        </div>
                        <div class="flex p-4 items-center justify-between ">
                            <h5 class="text-md text-TextColor uppercase">Notifications</h5>
                            <a class="text-sm px-3 py-1 border border-default-color text-TextColor hover:bg-PrimeryColor hover:text-white transition-all rounded-full"
                               href="javascript:;">Clear
                                All</a>
                        </div>
                        <ul class="h-60 w-full overflow-y-auto text-TextColor customScroll">
                            <li class="">
                                <a class="p-3 border-t border-gray-100 text-xs flex space-x-3 hover:bg-gray-100" href="javascript:;">
                                    <img alt="" class="w-12 h-12 object-cover" src="./src/assets/image/Women.png">
                                    <div>
                                        <p class="text-base font-semibold">Geneva</p>
                                        <p class="text-gray-600 truncate whitespace-pre-wrap">Lorem ipsum dolor, sit amet consectetur.</p>
                                    </div>
                                </a>
                            </li>
                            <li class="">
                                <a class="p-3 border-t border-gray-100 text-xs flex space-x-3 hover:bg-gray-100" href="javascript:;">
                                    <img alt="" class="w-12 h-12 object-cover" src="./src/assets/image/Women.png">
                                    <div>
                                        <p class="text-base font-semibold">Geneva</p>
                                        <p class="text-gray-600 truncate whitespace-pre-wrap">Lorem ipsum dolor, sit amet consectetur.</p>
                                    </div>
                                </a>
                            </li>
                            <li class="">
                                <a class="p-3 border-t border-gray-100 text-xs flex space-x-3 hover:bg-gray-100" href="javascript:;">
                                    <img alt="" class="w-12 h-12 object-cover" src="./src/assets/image/Women.png">
                                    <div>
                                        <p class="text-base font-semibold">Geneva</p>
                                        <p class="text-gray-600 truncate whitespace-pre-wrap">Lorem ipsum dolor, sit amet consectetur.</p>
                                    </div>
                                </a>
                            </li>
                            <li class="">
                                <a class="p-3 border-t border-gray-100 text-xs flex space-x-3 hover:bg-gray-100" href="javascript:;">
                                    <img alt="" class="w-12 h-12 object-cover" src="./src/assets/image/Women.png">
                                    <div>
                                        <p class="text-base font-semibold">Geneva</p>
                                        <p class="text-gray-600 truncate whitespace-pre-wrap">Lorem ipsum dolor, sit amet consectetur.</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <a  class="block p-3 hover:bg-gray-200 text-center text-PrimeryColor" href="javascript:;">See All</a>
                    </div>
                </div>
            </div>
            <!--        profile-->
            <div class="ml-4 inline-block relative">
                <div class="hover-dropdown-box flex items-center cursor-pointer">
                    <div class="pointer-events-none w-14 h-14 rounded-full customShadow2 text-center overflow-hidden">
                        <img alt="Profile Image" class="w-12 h-12 object-cover" src="./src/assets/image/user.jpg">
                    </div>
                    <div class="hidden sm:flex items-center justify-between pointer-events-none">
                        <div class="ml-4">
                            <p class="capitalize text-TextColor font-medium text-lg">Austin</p>
                        </div>
                        <i class="ml-4 text-lg text-TextColor fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                </div>
                <div class="hover-dropdown-show-box absolute hidden w-64 transition-all duration-500 rounded right-0">
                    <div class="customShadow bg-white mt-2">
                        <div class="w-4 overflow-hidden inline-block absolute -top-1 right-4">
                            <div class=" h-3 w-3 bg-white shadow rotate-45 transform origin-bottom-left"></div>
                        </div>
                        <div class="flex border-b border-gray-100 p-4 items-center">
                            <div class="mr-4">
                                <img alt="Profile Image" class="w-12 h-12 object-cover" src="./src/assets/image/user.jpg">
                            </div>
                            <div>
                                <h3 class="text-md uppercase">Austin</h3>
                                <p class="text-xs text-gray-500">Chief Manager</p>
                            </div>
                        </div>
                        <ul class="border-b border-gray-100 px-4 py-3">
                            <li class="py-1"><a class="text-gray-500 hover:text-TextColor block" href="profile.html">
                                <i class="fa fa-user-o mr-2" aria-hidden="true"></i>
                                View Profile
                            </a></li>
                            <li class="py-1"><a class="text-gray-500 hover:text-TextColor block" href="javascript:;">
                                <i class="fa fa-cog mr-2" aria-hidden="true"></i>
                                Setting
                            </a>
                            </li>
                        </ul>
                        <div class="p-4">
                            <a class="text-gray-500 hover:text-TextColor block" href="javascript:;">
                                <i class="fa fa-sign-out mr-2" aria-hidden="true"></i>
                                Logout
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
`
let customCompCon = document.querySelector('.customCompCon')
customCompCon.innerHTML = myHeader