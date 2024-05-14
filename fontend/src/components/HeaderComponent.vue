<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    const sliders = ref([]);
    axios.get('http://127.0.0.1:8000/api/slider')
        .then(response =>{
            sliders.value = response.data; 
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
</script>


<template>
    <header class="container-fluid intro-slider">
            <div class="bg-slider-wrapper">
                <div id="bg-slider" class="flexslider bg-slider">
                    <ul class="slides">
                        <li v-for="slider in sliders" :key="slider.id" :style="{ background: `#222 url(${slider.image}) no-repeat 50% top` }" :class="{ 'slide': true, [`slide-${slider.id}`]: true }"></li>
                    </ul>
                </div>
            </div>
            <!-- HOME PROMO -->
            <section class="home-promo">
                <div class="text-center wow">
                    <h2 class="titlepro">
                        <span class="upper">Welcome to</span>
                        <span class="middle"> <strong>MaRS</strong> planning and engineering</span>
                        <span class="bottom">M@RS PLANNING AND ENGINEERING SERVICES IS ALWAYS AT YOUR SIDE TO FULFILL YOUR DREAMS.</span>
                    </h2> 
                </div>
            </section>
        </header>
</template>

<style scoped>
    
</style>