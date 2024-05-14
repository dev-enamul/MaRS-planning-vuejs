<script setup>
const {AboutData} = defineProps(['AboutData']); 
</script> 

<template>
     <section class="bg-gray">
            <div class="container">
                <div class="row">
                    <!-- Mision -->
                    <div class="col-md-4">
                        <!-- <p><br><img src="../../assets/img/mission.jpg" alt="Mission" class="mb15 img-fluid"></p> -->
                        <h3 class="color5 wow fadeInUp">Mission</h3>
                        <p>{{ AboutData.mission }}</p>
                    </div>
                    <!-- Vision -->
                    <div class="col-md-4">
                        <!-- <p><br><img src="../../assets/img/vision.jpg" alt="Vision" class="mb15 img-fluid"></p> -->
                        <h3 class="color5 wow fadeInUp">Vision</h3>
                        <p>{{ AboutData.vission }}</p>
                    </div>
                    <!-- Values -->
                    <div class="col-md-4">
                        <!-- <p><br><img src="../../assets/img/values.jpg" alt="Values" class="mb15 img-fluid"></p> -->
                        <h3 class="color5 wow fadeInUp">Values</h3>
                        <p>{{ AboutData.valuees }}</p>
                    </div>
                </div><!-- /row -->
            </div><!-- /container -->
        </section>
</template>