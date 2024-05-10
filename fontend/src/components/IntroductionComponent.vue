<script setup>
    import {ref} from 'vue';
    import axios from 'axios'
    const {AboutData} = defineProps(['AboutData']); 
    const faqs = ref([]);
    axios.get('http://127.0.0.1:8000/api/faq')
    .then(response=>{
        faqs.value = response.data;
    })
    .catch(error => {
        alert(error);
    })
</script>

<template>
    <section class="bg-white" data-wow-duration="1200ms" data-wow-delay="100ms">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="title">
                        <h2>About Us</h2>
                    </div>
                </div>
                <div class="col-md-6">
                    <p><img :src="AboutData.image_2" alt="Photo" class="mr20 mt5 mb20 float-left">{{ AboutData.description }}</p>
                </div>
                <!-- FAQ -->
                <div class="col-md-6">
                    <h4 class="color5">Three frequently asked questions</h4>
                    <!-- Accordion -->
                    <div class="accordion mb-5" id="accordionExample">
                        <!-- Card -->
                        <div class="card" v-for="(faq,index) in faqs" :key="faq.id">
                            <div class="card-header" :id="faq.id">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse"
                                        :data-target="`#item${faq.id }`" aria-expanded="true" :aria-controls="faq.id">
                                        {{ ++index }}.{{ faq.title }}
                                    </button>
                                </h2>
                            </div>
                            <div :id="`item${faq.id }`" :class="`${index==1?'show':'collapse'}`" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div class="card-body">
                                    {{ faq.description }}
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>