<script setup> 
 import { useRoute } from 'vue-router'; 
    const route = useRoute();
    const path = route.path; 
</script> 

<template>
      <nav class="navbar navbar-expand-lg position-fixed navbar-fixed-top navbar-default w-100">
            <div class="container">
                <!-- Change your logo here -->
                <a class="navbar-brand" href="index.html"><img src="../../public/assets/img/logo.png" alt="Logo"></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><i class="fa fa-bars"></i></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="nav navbar-nav navbar-right ml-auto">
                        <li>
                            <router-link class="nav-link" to="/"> 
                                Home
                            </router-link> 
                        </li>
                        <li>
                            <router-link class="nav-link" to="/about"> 
                                About Us
                            </router-link> 
                        </li> 
                        <li>
                            <router-link class="nav-link" to="/service"> 
                                Service
                            </router-link> 
                        </li> 

                        <li>
                            <router-link class="nav-link" to="/portfolio"> 
                                portfolio
                            </router-link> 
                        </li> 
                        <li>
                            <router-link class="nav-link" to="/blogs"> 
                                Blogs
                            </router-link> 
                        </li> 
                        <li>
                            <router-link class="nav-link" to="/contact"> 
                                Contact
                            </router-link> 
                        </li> 
                        
                    </ul>
                </div>
            </div>
        </nav> 
</template>