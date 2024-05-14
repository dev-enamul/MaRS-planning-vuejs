<script setup>
import { ref } from 'vue';
import axios from 'axios';
const counterData = ref([]);
    axios.get('http://127.0.0.1:8000/api/status')
        .then(response =>{
            counterData.value = response.data;  
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        }); 

</script> 
<template>
    <section class="bg-gray" id="counterUp">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="title">
                            <h2>Our Status</h2>
                        </div>
                    </div>

                    <div class="col-md-12">
                        <div class="col-md-12">
                            <div class="row">
                                <!-- Fact -->
                                <div class="col-sm-6 col-md-6 col-lg-3 text-center pt60" v-for="item in counterData" :key="item.id">
                                    <h3 class="facts-title"><i :class="item.icon"></i> <span class="count" style="font-weight: bold">{{ item.number }}</span></h3>
                                    <h6 class="color4">{{ item.name }}</h6>
                                </div> 
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
</template>