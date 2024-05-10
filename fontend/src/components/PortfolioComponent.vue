<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
const navicateQuiz = (id)=>{
        router.push(`/portfolio/details/${id}`);
    }

</script> 
<template>
    <section id="portfolio-section" class="bg-white">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="title">
                            <h2>Portfolio</h2>
                        </div>
                    </div>
                    <div class="col-md-12 text-center">
                        <!-- PORTFOLIO INTRO TEXT -->
                        <div class="text-center">
                            <p class="lead wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="200ms">
                                Quisque eu ante at tortor imperdiet gravida nec sed turpis phasellus augue augue.
                            </p>
                        </div>
                        <!-- PORTFOLIO NAV -->
                        <ul class="portfolio-filters list-inline">
                            <li class="filter active list-inline-item" data-filter="all">All</li>
                            <li class="filter list-inline-item" data-filter="webdesign">Web Design</li>
                            <li class="filter list-inline-item" data-filter="responsive">Responsive</li>
                            <li class="filter list-inline-item" data-filter="wordpress">Wordpress</li>
                            <li class="filter list-inline-item" data-filter="bootstrap">Bootstrap</li>
                        </ul>
                    </div>
                    <div class="col-md-12">
                        <!-- PORTFOLIO GRID -->
                        <div id="grid" class="row text-center">
                            <div class="col-sm-4 mix webdesign">
                               <a title="Project Title" @click="navicateQuiz(1)">
                                    <div class="item-img-wrap">
                                        <img src="../../assets/img/port1.jpg" class="img-fluid" alt="template">
                                        <div class="item-img-overlay">
                                            <div>
                                                <i class="fa fa-eye"></i>
                                                <h5>Project Title<br><small>HTML / CSS / JS</small></h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div><!-- /work col -->
                            <div class="col-sm-4 mix wordpress bootstrap">
                                <a title="Project Title" @click="navicateQuiz(1)">
                                    <div class="item-img-wrap">
                                        <img src="../../assets/img/port2.jpg" class="img-fluid" alt="template">
                                        <div class="item-img-overlay">
                                            <div>
                                                <i class="fa fa-eye"></i>
                                                <h5>Project Title<br><small>HTML / CSS / JS</small></h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div><!-- /work col -->
                            <div class="col-sm-4 mix webdesign responsive">
                                <a title="Project Title" href="portfolio-item.html">
                                    <div class="item-img-wrap">
                                        <img src="../../assets/img/port3.jpg" class="img-fluid" alt="template">
                                        <div class="item-img-overlay">
                                            <div>
                                                <i class="fa fa-eye"></i>
                                                <h5>Project Title<br><small>HTML / CSS / JS</small></h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div><!-- /work col -->
                            <div class="col-sm-4 mix responsive bootstrap">
                                <a title="Project Title" href="portfolio-item.html">
                                    <div class="item-img-wrap">
                                        <img src="../../assets/img/port4.jpg" class="img-fluid" alt="template">
                                        <div class="item-img-overlay">
                                            <div>
                                                <i class="fa fa-eye"></i>
                                                <h5>Project Title<br><small>HTML / CSS / JS</small></h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div><!-- /work col -->
                             <div class="col-sm-4 mix wordpress webdesign">
                                <a title="Project Title" href="portfolio-item.html">
                                    <div class="item-img-wrap">
                                        <img src="../../assets/img/port5.jpg" class="img-fluid" alt="template">
                                        <div class="item-img-overlay">
                                            <div>
                                                <i class="fa fa-eye"></i>
                                                <h5>Project Title<br><small>HTML / CSS / JS</small></h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div><!-- /work col -->
                             <div class="col-sm-4 mix responsive bootstrap">
                                 <a title="Project Title" href="portfolio-item.html">
                                    <div class="item-img-wrap">
                                        <img src="../../assets/img/port6.jpg" class="img-fluid" alt="template">
                                        <div class="item-img-overlay">
                                            <div>
                                                <i class="fa fa-eye"></i>
                                                <h5>Project Title<br><small>HTML / CSS / JS</small></h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div><!-- /work col -->
                             <div class="col-sm-4 mix webdesign wordpress">
                                 <a title="Project Title" href="portfolio-item.html">
                                    <div class="item-img-wrap">
                                        <img src="../../assets/img/port7.jpg" class="img-fluid" alt="template">
                                        <div class="item-img-overlay">
                                            <div>
                                                <i class="fa fa-eye"></i>
                                                <h5>Project Title<br><small>HTML / CSS / JS</small></h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div><!-- /work col -->
                             <div class="col-sm-4 mix wordpress webdesign">
                                <a title="Project Title" href="portfolio-item.html">
                                    <div class="item-img-wrap">
                                        <img src="../../assets/img/port8.jpg" class="img-fluid" alt="template">
                                        <div class="item-img-overlay">
                                            <div>
                                                <i class="fa fa-eye"></i>
                                                <h5>Project Title<br><small>HTML / CSS / JS</small></h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div><!-- /work col -->
                             <div class="col-sm-4 mix responsive bootstrap">
                                <a title="Project Title" href="portfolio-item.html">
                                    <div class="item-img-wrap">
                                        <img src="../../assets/img/port9.jpg" class="img-fluid" alt="template">
                                        <div class="item-img-overlay">
                                            <div>
                                                <i class="fa fa-eye"></i>
                                                <h5>Project Title<br><small>HTML / CSS / JS</small></h5>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div><!-- /work col -->
                        </div><!-- /row -->
                    </div>
                </div><!-- /row -->
            </div><!-- /container -->
        </section>
</template>