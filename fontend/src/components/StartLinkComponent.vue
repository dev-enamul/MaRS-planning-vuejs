<script setup>
    import { ref } from 'vue';
    import axios from 'axios';
    const link = ref('');  
    axios.get('http://127.0.0.1:8000/api/start-link')
    .then(response=>{
        link.value = response.data;
    })
    .catch(error =>{
        alert(error);
    });
</script>

<template>
     <section class="bg-buy parallax">
            <div class="container-fluid">
                <div class="row text-center">
                    <div class="col-md-12">
                        <h1 class="intro-text mt30 wow fadeInUp">
                            {{ link.title }}
                        </h1>
                        <p class="lead mt30">{{ link.subtitle }}</p>
                        <p><a :href="link.link" class="btn btn-primary-corp-big btn-secondary"> {{ link.button_text }}</a></p>
                    </div>
                </div><!-- /row -->
            </div><!-- /container-fluid -->
        </section> 
</template>