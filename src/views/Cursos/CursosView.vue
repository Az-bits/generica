<template>
  <div>
    <div class="edu-breadcrumb-area breadcrumb-style-1 ptb--60 ptb_md--40 ptb_sm--40 bg-image">
      <div class="container eduvibe-animated-shape">
        <div class="row">
          <div class="col-lg-12">
            <div class="breadcrumb-inner text-start">
              <div class="page-title">
                <h3 class="title">{{ tipo }} abiertos en la carrera</h3>
              </div>
              <nav class="edu-breadcrumb-nav">
                <ol class="edu-breadcrumb d-flex justify-content-start liststyle">
                  <li class="breadcrumb-item">
                    <router-link to="/">Inicio</router-link>
                  </li>
                  <li class="separator"><i class="ri-arrow-drop-right-line"></i></li>
                  <li class="breadcrumb-item active" aria-current="page">{{ tipo }}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
          <div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
            <div class="shape-image shape-image-1">
              <img src="assets/images/shapes/shape-11-07.png" alt="Shape Thumb" />
            </div>
            <div class="shape-image shape-image-2">
              <img src="assets/images/shapes/shape-01-02.png" alt="Shape Thumb" />
            </div>
            <div class="shape-image shape-image-3">
              <img src="assets/images/shapes/shape-03.png" alt="Shape Thumb" />
            </div>
            <div class="shape-image shape-image-4">
              <img src="assets/images/shapes/shape-13-12.png" alt="Shape Thumb" />
            </div>
            <div class="shape-image shape-image-5">
              <img src="assets/images/shapes/shape-36.png" alt="Shape Thumb" />
            </div>
            <div class="shape-image shape-image-6">
              <img src="assets/images/shapes/shape-05-07.png" alt="Shape Thumb" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="edu-course-area edu-section-gap bg-color-white">
      <div class="container">
        <div class="row g-5 mt--10">

          <!-- Start Single Card  -->
          <div class="col-12 col-sm-6 col-lg-4" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            <div class="edu-card card-type-2 radius-small">
              <div class="inner">
                <div class="thumbnail">
                  <router-link to="/detalleCurso">
                    <img class="w-100" src="assets/images/course/course-01/course-01.jpg" alt="Course Meta">
                  </router-link>
                  <div class="top-position status-group left-top">
                    <span class="eduvibe-status status-02"><i class="icon-time-line"></i> 7 Hours</span>
                  </div>
                  <div class="wishlist-top-right">
                    <button class="wishlist-btn"><i class="icon-Heart"></i></button>
                  </div>
                </div>
                <div class="content">
                  <div class="card-top">
                    <div class="author-meta">
                      <div class="author-thumb">
                        <a href="instructor-profile.html">
                          <img src="assets/images/instructor/instructor-small/instructor-1.jpg" alt="Author Images">
                          <span class="author-title">Jhonathon Debio</span>
                        </a>
                      </div>
                    </div>
                    <div class="edu-rating rating-default">
                      <div class="rating">
                        <i class="icon-Star"></i>
                      </div>
                      <span class="rating-count">(4.9)</span>
                    </div>
                  </div>
                  <h6 class="title"><router-link to="/detalleCurso">Personal Finance: Financial Security Thinking &
                      Principles</router-link></h6>
                  <ul class="edu-meta meta-01">
                    <li><i class="icon-group-line"></i>146 Students</li>
                    <li><i class="icon-file-list-4-line"></i>39 Lessons</li>
                  </ul>
                  <div class="card-bottom">
                    <div class="price-list price-style-01">
                      <div class="price current-price">$59.00 USD</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Single Card  -->
          <!-- Start Single Card  -->
          <div class="col-12 col-sm-6 col-lg-4" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            <div class="edu-card card-type-2 radius-small">
              <div class="inner">
                <div class="thumbnail">
                  <router-link to="/detalleCurso">
                    <img class="w-100" src="assets/images/course/course-01/course-01.jpg" alt="Course Meta">
                  </router-link>
                  <div class="top-position status-group left-top">
                    <span class="eduvibe-status status-02"><i class="icon-time-line"></i> 7 Hours</span>
                  </div>
                  <div class="wishlist-top-right">
                    <button class="wishlist-btn"><i class="icon-Heart"></i></button>
                  </div>
                </div>
                <div class="content">
                  <div class="card-top">
                    <div class="author-meta">
                      <div class="author-thumb">
                        <a href="instructor-profile.html">
                          <img src="assets/images/instructor/instructor-small/instructor-1.jpg" alt="Author Images">
                          <span class="author-title">Jhonathon Debio</span>
                        </a>
                      </div>
                    </div>
                    <div class="edu-rating rating-default">
                      <div class="rating">
                        <i class="icon-Star"></i>
                      </div>
                      <span class="rating-count">(4.9)</span>
                    </div>
                  </div>
                  <h6 class="title"><router-link to="/detalleCurso">Personal Finance: Financial Security Thinking &
                      Principles</router-link></h6>
                  <ul class="edu-meta meta-01">
                    <li><i class="icon-group-line"></i>146 Students</li>
                    <li><i class="icon-file-list-4-line"></i>39 Lessons</li>
                  </ul>
                  <div class="card-bottom">
                    <div class="price-list price-style-01">
                      <div class="price current-price">$59.00 USD</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Single Card  -->
          <!-- Start Single Card  -->
          <div class="col-12 col-sm-6 col-lg-4" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
            <div class="edu-card card-type-2 radius-small">
              <div class="inner">
                <div class="thumbnail">
                  <router-link to="/detalleCurso">
                    <img class="w-100" src="assets/images/course/course-01/course-01.jpg" alt="Course Meta">
                  </router-link>
                  <div class="top-position status-group left-top">
                    <span class="eduvibe-status status-02"><i class="icon-time-line"></i> 7 Hours</span>
                  </div>
                  <div class="wishlist-top-right">
                    <button class="wishlist-btn"><i class="icon-Heart"></i></button>
                  </div>
                </div>
                <div class="content">
                  <div class="card-top">
                    <div class="author-meta">
                      <div class="author-thumb">
                        <a href="instructor-profile.html">
                          <img src="assets/images/instructor/instructor-small/instructor-1.jpg" alt="Author Images">
                          <span class="author-title">Jhonathon Debio</span>
                        </a>
                      </div>
                    </div>
                    <div class="edu-rating rating-default">
                      <div class="rating">
                        <i class="icon-Star"></i>
                      </div>
                      <span class="rating-count">(4.9)</span>
                    </div>
                  </div>
                  <h6 class="title"><router-link to="/detalleCurso">Personal Finance: Financial Security Thinking &
                      Principles</router-link></h6>
                  <ul class="edu-meta meta-01">
                    <li><i class="icon-group-line"></i>146 Students</li>
                    <li><i class="icon-file-list-4-line"></i>39 Lessons</li>
                  </ul>
                  <div class="card-bottom">
                    <div class="price-list price-style-01">
                      <div class="price current-price">$59.00 USD</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Single Card  -->
        </div>
        <div class="row">
          <div class="col-lg-12 mt--60">
            <nav>
              <ul class="edu-pagination">
                <li><a href="#"><i class="ri-arrow-drop-left-line"></i></a></li>
                <li><a href="#">1</a></li>
                <li class="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">...</a></li>
                <li><a href="#">8</a></li>
                <li><a href="#"><i class="ri-arrow-drop-right-line"></i></a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sal from 'sal.js';
export default {
  data() {
    return {
      tipo: 'Cursos'
    }

  },
  mounted() {
    sal();
  }
};
</script>
<!-- <style scoped>
.bg-overlay-img {
  background-image: url("@/assets/Fondo2.jpg");
}
</style>

<script>
import SidebarCustom from "@/components/SidebarCustom.vue";
import { mapState } from "vuex";
export default {
  name: "convocatoriasView",
  data() {
    return {
      tipo: "",
      Cursos: [],

      search: "",
      searchGet: false,
      searchValues: [],

      NUM_RESULTS: 4,
      pag: 1,
      pager: 0,
    };
  },
  components: {
    SidebarCustom,
  },
  computed: {
    ...mapState(["url_api", "getter"]),
  },
  methods: {
    async getTipoCur(tipo_cur) {
      try {
        let res = await this.axios.get("/api/TipoCurso/" + tipo_cur);
        this.tipo = res.data.Descripcion.tipo_conv_curso_nombre;
        this.getCursos();
      } catch (error) {
        console.log(error);
      }
    },
    async getCursos() {
      try {
        let res = await this.axios.get(
          "/api/cursosAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Cursos = [];
        res.data.forEach((cs) => {
          if (
            cs.det_estado == "1" &&
            cs.tipo_curso_otro.tipo_conv_curso_nombre == this.tipo
          ) {
            this.Cursos.push(cs);
          }
        });
        this.pager = this.Cursos.length / this.NUM_RESULTS;
        if (this.pager - Math.trunc(this.pager) > 0) {
          this.pager = Math.trunc(this.pager) + 1;
        }
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
      }
    },
    clickBack() {
      this.$store.commit("clickLink");
      this.$router.go(-1);
    },
    buscar() {
      if (this.search != "") {
        this.searchGet = true;

        this.searchValues = [];
        this.Cursos.forEach((cur) => {
          if (
            cur.det_titulo.toUpperCase().includes(this.search.toUpperCase())
          ) {
            this.searchValues.push(cur);
          }
        });
      } else {
        this.searchGet = false;
      }
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getTipoCur(this.$route.params.tipo_cur);
  },
  updated() {
    if (this.getter) {
      this.$store.commit("loadOn");
      this.getTipoCur(this.$route.params.tipo_cur);
      this.$store.state.getter = false;
    }
  },
  created() {
    this.$store.commit("loadOn");
    this.getTipoCur(this.$route.params.tipo_cur);
  },
};
</script> -->