<script setup>
import { ref } from 'vue';
import axios from 'axios';
const services = ref([]);
axios.get('http://127.0.0.1:8000/api/advantage')
    .then(response => {
        services.value = response.data;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

</script> 

<template>
      <section class="bg-white">
            <div class="container">
                <div class="row">
                    <div v-for="service in services" :key="service.id" class="col-sm-6 col-md-3 text-center home-icons">
                        <i :class="`wow fadeInUp ${service.image}`" data-wow-delay="20ms"></i>
                        <div>
                            <h4>{{ service.title }}</h4>
                            <h5>{{ service.description }}</h5>
                        </div>
                    </div> 
                </div><!-- /row -->
            </div> 
        </section>
</template>