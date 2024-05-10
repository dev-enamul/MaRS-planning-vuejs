<script setup> 
    import axios from 'axios';
    import { ref } from 'vue'; 
    const AboutData = ref([]);
    axios.get('http://127.0.0.1:8000/api/about-us')
        .then(response =>{
            AboutData.value = response.data;  
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
</script> 
<template>
     <section class="bg-gray">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="title">
                            <h2>About Us</h2>
                        </div>
                    </div>
                    <!-- VIDEO -->
                    <div class="col-sm-12 col-md-6">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe src="https://player.vimeo.com/video/183131568?title=0&amp;byline=0&amp;portrait=0&amp;rel=0" allowfullscreen></iframe>
                        </div>
                        <div class="visible-xs-block visible-sm-block pt20"></div>
                    </div>
                    <!-- DESCRIPTION -->
                    <div class="col-sm-12 col-md-6">
                        <div class="blognews">
                            <a href="about.html" class="mb20">
                                <div class="item-img-wrap">
                                    <img :src="AboutData.image" class="img-fluid" alt="template">
                                    <div class="item-img-overlay">
                                        <div class="about">
                                            <span class="btn btn-transparent-sm"><i class="fa fa-plus"></i> Read more</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <p> {{ AboutData.description }} <router-link to="/about">See Details</router-link> </p>
                    </div>
                </div><!-- /row -->
            </div><!-- /container -->
        </section> 
</template>