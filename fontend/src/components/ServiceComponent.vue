<script setup>
    const {service,index} = defineProps(['service', 'index']);
    import { ref } from 'vue';
    const titleClass = ref('title');
    const details = service.details;

    // title class dynamic 
    if(index % 2 == 0){
        titleClass.value = 'title';
    }
    else{
        titleClass.value = 'title-r';
    }
  
</script> 

<template>
    <section class="bg-white"> 
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div :class="titleClass">
                        <h2>{{ service.title }}</h2>
                    </div>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-6 wow fadeIn" data-wow-duration="1200ms" data-wow-delay="100ms">
                    <img :src="service.image" alt="Services" class="img-center img-fluid">
                    <p class="mt15">Sed posuere malesuada ante, a gravida ipsum congue id. Cras tempus libero sit amet mauris blandit laoreet. Vestibulum ac enim vel tellus pharetra pellentesque vitae vitae lacus. Etiam consequat hendrerit congue. Proin commodo metus ac augue adipiscing, ac aliquet eros posuere. Donec dignissim ullamcorper cursus. Cras eget quam volutpat, luctus nunc vel, euismod felis.</p>
                </div> 

                <div class="col-sm-12 col-md-6 col-lg-6">
                    <div v-for="(detail, key) in details" :key="key" class="row wow fadeInRight" data-wow-duration="600ms" data-wow-delay="100ms">
                        <div class="col-xs-2 col-lg-2 text-center">
                            <i :class="detail.icon + ' fa-4x ico-services'"></i>
                        </div>
                        <div class="col-xs-10 col-lg-10 servdesc">
                            <h3>{{ detail.title }}</h3>
                            <p>{{ detail.description }}</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section>
</template>