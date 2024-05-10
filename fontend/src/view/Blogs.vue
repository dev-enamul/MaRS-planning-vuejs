<script setup>
import BreadCrumbComponent from '@/components/BreadCrumbComponent.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const navigateClick = (id)=>{
    router.push(`/blog/${id}`)
}
 
const PageData = {
        title: 'Home',
        PageName: 'Blogs'
     }
</script>
<template> 
    <BreadCrumbComponent :PageData="PageData"/> 
    <section class="bg-white">
            <div class="container">
                <div id="content" class="row">
                    <div class="col-md-12">
                        <div class="title">
                            <h2>Blog</h2>
                        </div>
                    </div> 
                    <div id="main" class="col-md-8" role="main">
                        <!-- Article -->
                        <article>
                            <header>
                                <div class="post-thumbnail">
                                    <img src="../../assets/img/pic.jpg" alt="Post image">
                                </div>
                                <h2 class="entry-title"><a href="blogpost.html">Design and development of templates</a></h2>
                                <p class="author">
                                    <i class="fa fa-calendar"></i>
                                    MARCH 21, 2021 <span>/</span> BY <a href="#!"><strong>JOHN</strong></a> <span>/</span> IN <a href="#!"><strong>CATEGORY</strong></a> <span>/</span> 3 <a href="#!"><strong>COMMENTS</strong></a>
                                </p>
                            </header>
                            <div class="post_content">
                                <p>Sed posuere malesuada ante, a gravida ipsum congue id. Cras tempus libero sit amet mauris blandit laoreet. Vestibulum ac enim vel tellus pharetra pellentesque vitae vitae lacus. Etiam consequat hendrerit congue. Proin commodo metus ac augue adipiscing, ac aliquet eros posuere. Donec dignissim ullamcorper cursus. Cras eget quam volutpat, luctus nunc vel, euismod felis. Nunc ultrices euismod consequat. Suspendisse id augue ut diam pharetra ultrices blandit sed lectus...</p>
                                <a @click="navigateClick(1)" class="btn btn-primary-corp"><i class="fa fa-plus"></i> READ MORE</a>
                            </div>
                        </article>
                        <hr>
                        <!-- Article -->
                        <article>
                            <header>
                                <div class="post-thumbnail">
                                    <img src="../../assets/img/pic2.jpg" alt="Post image">
                                </div>READ MORE
                                <h2 class="entry-title"><a href="blogpost.html">Design and development of templates</a></h2>
                                <p class="author">
                                    <i class="fa fa-calendar"></i>
                                    MARCH 12, 2021 <span>/</span> BY <a href="#!"><strong>JOHN</strong></a> <span>/</span> IN <a href="#!"><strong>CATEGORY</strong></a> <span>/</span> 3 <a href="#!"><strong>COMMENTS</strong></a>
                                </p>
                            </header>
                            <div class="post_content">
                                <p>Sed posuere malesuada ante, a gravida ipsum congue id. Cras tempus libero sit amet mauris blandit laoreet. Vestibulum ac enim vel tellus pharetra pellentesque vitae vitae lacus. Etiam consequat hendrerit congue. Proin commodo metus ac augue adipiscing, ac aliquet eros posuere. Donec dignissim ullamcorper cursus. Cras eget quam volutpat, luctus nunc vel, euismod felis. Nunc ultrices euismod consequat. Suspendisse id augue ut diam pharetra ultrices blandit sed lectus...</p>
                                <a @click="navigateClick(1)" class="btn btn-primary-corp"><i class="fa fa-plus"></i> </a>
                            </div>
                        </article>
                        <hr>
                        <!-- Article -->
                        <article>
                            <header>
                                <div class="post-thumbnail">
                                    <img src="../../assets/img/pic3.jpg" alt="Post image">
                                </div>
                                <h2 class="entry-title"><a href="blogpost.html">Design and development of templates</a></h2>
                                <p class="author">
                                    <i class="fa fa-calendar"></i>
                                    MARCH 6, 2021 <span>/</span> BY <a href="#!"><strong>JOHN</strong></a> <span>/</span> IN <a href="#!"><strong>CATEGORY</strong></a> <span>/</span> 3 <a href="#!"><strong>COMMENTS</strong></a>
                                </p>
                            </header>
                            <div class="post_content">
                                <p>Sed posuere malesuada ante, a gravida ipsum congue id. Cras tempus libero sit amet mauris blandit laoreet. Vestibulum ac enim vel tellus pharetra pellentesque vitae vitae lacus. Etiam consequat hendrerit congue. Proin commodo metus ac augue adipiscing, ac aliquet eros posuere. Donec dignissim ullamcorper cursus. Cras eget quam volutpat, luctus nunc vel, euismod felis. Nunc ultrices euismod consequat. Suspendisse id augue ut diam pharetra ultrices blandit sed lectus...</p>
                                <a href="blogpost.html" class="btn btn-primary-corp"><i class="fa fa-plus"></i> READ MORE</a>
                            </div>
                        </article>
                        <hr>
                        <!-- Pagination -->
                        <ul class="pagination mt10">
                            <li class="page-item"><a href="#" title="First" class="page-link"><i class="fa fa-angle-double-left small"></i></a></li>
                            <li class="page-item"><a href="#" title="Previous" class="page-link"><i class="fa fa-angle-left small"></i></a></li>
                            <li class="active page-item"><a href="#" class="page-link">1</a></li>
                            <li class="page-item"><a href="#" class="page-link">2</a></li>
                            <li class="page-item"><a href="#" class="page-link">3</a></li>
                            <li class="page-item"><a href="#" title="Next" class="page-link"><i class="fa fa-angle-right small"></i></a></li>
                            <li class="page-item"><a href="#" title="Last" class="page-link"><i class="fa fa-angle-double-right small"></i></a></li>
                        </ul>
                        <div class="visible-xs-block visible-sm-block pt20"></div>
                    </div> 
 
                    <aside class="col-md-4 sidebar sidebar-right"> 
                        <div class="well widget">
							<form method="get">
                                <div class="input-group search-form" role="form">
                                    <label class="sr-only" for="subscribe-email">Search...</label>
                                    <input type="text" class="form-control" name="s" id="search" value="" placeholder="Search...">
                                    <span class="input-group-btn">
                                        <button type="submit" class="btn"><i class="fa fa-search"></i></button>
                                    </span>
                                </div>
                            </form>
						</div>

                        <div class="well widget">
							<h2>Blog Categories</h2>
							<ul class="list-unstyled">
                                <li><a href="#">Web Design <span class="badge">6</span></a>
                                </li>
                                <li><a href="#">Bootstrap Templates <span class="badge">3</span></a>
                                </li>
                                <li><a href="#">Corporate Template <span class="badge">9</span></a>
                                </li>
                                <li><a href="#">Business Services <span class="badge">2</span></a>
                                </li>
                            </ul>
						</div>
                        <!-- Recent posts -->
                        <div class="well widget">
							<h2>Recent Post</h2>
                            <ul class="list-unstyled">
                                <li><a href="#">Sed posuere malesuada ante</a>
                                </li>
                                <li><a href="#">Cras tempus libero sit amet mauris</a>
                                </li>
                                <li><a href="#">Cras eget quam volutpat luctus</a>
                                </li>
                                <li><a href="#">Nunc ultrices euismod consequat</a>
                                </li>
                            </ul>
						</div>
                        <!-- Tag Cloud -->
                        <div class="well widget">
							<h2>Tag Cloud</h2>
                            <div class="tagcloud">
                                <a href="blogpost.html">Corporate theme</a>
                                <a href="blogpost.html">website template</a>
                                <a href="blogpost.html">web</a>
                                <a href="blogpost.html">business theme</a>
                                <a href="blogpost.html">bootstrap theme</a>
                                <a href="blogpost.html">themes</a>
                                <a href="blogpost.html">plantilla</a>
                                <a href="blogpost.html">corporative</a>
                                <a href="blogpost.html">template</a>
                                <a href="blogpost.html">boostrap</a>
                                <a href="blogpost.html">html5</a>
                                <a href="blogpost.html">css3</a>
                            </div>
						</div>
                        <!-- Calendar -->
                        <div class="well widget">
						    <h2>Calendar</h2>
                            <div id="calendar_wrap">
                                <table id="wp-calendar">
                                    <caption class="color4">June 2021</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col" title="Monday">M</th>
                                            <th scope="col" title="Tuesday">T</th>
                                            <th scope="col" title="Wednesday">W</th>
                                            <th scope="col" title="Thursday">T</th>
                                            <th scope="col" title="Friday">F</th>
                                            <th scope="col" title="Saturday">S</th>
                                            <th scope="col" title="Sunday">S</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>4</td>
                                            <td>5</td>
                                            <td>6</td>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <td><a href="http://localhost/wordpress/2015/06/08/" title="We make it you live it, go for simple">8</a></td>
                                            <td id="today">9</td>
                                            <td>10</td>
                                            <td>11</td>
                                            <td>12</td>
                                            <td>13</td>
                                            <td>14</td>
                                        </tr>
                                        <tr>
                                            <td>15</td>
                                            <td>16</td>
                                            <td>17</td>
                                            <td>18</td>
                                            <td>19</td>
                                            <td>20</td>
                                            <td>21</td>
                                        </tr>
                                        <tr>
                                            <td>22</td>
                                            <td>23</td>
                                            <td>24</td>
                                            <td>25</td>
                                            <td>26</td>
                                            <td>27</td>
                                            <td>28</td>
                                        </tr>
                                        <tr>
                                            <td>29</td>
                                            <td>30</td>
                                            <td class="pad" colspan="5">&nbsp;</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colspan="3" id="prev"><a href="#!"><i class="fa fa-angle-left small"></i> Mar</a></td>
                                            <td class="pad">&nbsp;</td>
                                            <td colspan="3" id="next"><a href="#!">Jun <i class="fa fa-angle-right small"></i></a></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
						</div>
                    </aside> 
                </div> 
            </div> 
        </section>
</template>