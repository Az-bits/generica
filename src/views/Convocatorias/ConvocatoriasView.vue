<template>
  <div class="edu-breadcrumb-area breadcrumb-style-1 ptb--60 ptb_md--40 ptb_sm--40 bg-image">
    <div class="container eduvibe-animated-shape">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-inner text-start">
            <div class="page-title">
              <h3 class="title">{{ tipo }} vigentes de la carrera</h3>
            </div>
            <nav class="edu-breadcrumb-nav">
              <ol class="edu-breadcrumb d-flex justify-content-start liststyle">
                <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
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

  <div class="edu-event-grid-area edu-section-gap bg-color-white">
    <div class="container">
      <div class="row g-5">

        <!-- Start Event Grid   -->
        <div class="col-12 col-sm-12 col-xl-4 col-md-6" data-sal-delay="150" data-sal="slide-up" data-sal-duration="800">
          <div class="edu-event event-grid-1 radius-small">
            <div class="inner">
              <div class="thumbnail">
                <router-link to="/detalleConvocatoria">
                  <img src="assets/images/event/event-02/event-01.jpg" alt="Event Images">
                </router-link>
                <div class="top-position status-group left-top">
                  <span class="eduvibe-status status-06">04 Dec 2023</span>
                </div>
              </div>
              <div class="content">
                <ul class="event-meta">
                  <li><i class="icon-map-pin-line"></i>IAC Building, New York, NY</li>
                </ul>
                <h5 class="title"><a href="event-details.html">Painting Art Contest 2023</a></h5>
                <div class="read-more-btn">
                  <a class="btn-transparent" href="course-details.html">Get Ticket<i
                      class="icon-arrow-right-line-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Event Grid   -->

        <!-- Start Event Grid   -->
        <div class="col-12 col-sm-12 col-xl-4 col-md-6" data-sal-delay="200" data-sal="slide-up" data-sal-duration="800">
          <div class="edu-event event-grid-1 radius-small">
            <div class="inner">
              <div class="thumbnail">
                <a href="event-details.html">
                  <img src="assets/images/event/event-02/event-02.jpg" alt="Event Images">
                </a>
                <div class="top-position status-group left-top">
                  <span class="eduvibe-status status-06">06 Dec 2023</span>
                </div>
              </div>
              <div class="content">
                <ul class="event-meta">
                  <li><i class="icon-map-pin-line"></i>IAC Building, New York, NY</li>
                </ul>
                <h5 class="title"><a href="event-details.html">Logo Design Contest 2023</a></h5>
                <div class="read-more-btn">
                  <a class="btn-transparent" href="course-details.html">Get Ticket<i
                      class="icon-arrow-right-line-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Event Grid   -->

        <!-- Start Event Grid   -->
        <div class="col-12 col-sm-12 col-xl-4 col-md-6" data-sal-delay="250" data-sal="slide-up" data-sal-duration="800">
          <div class="edu-event event-grid-1 radius-small">
            <div class="inner">
              <div class="thumbnail">
                <a href="event-details.html">
                  <img src="assets/images/event/event-02/event-03.jpg" alt="Event Images">
                </a>
                <div class="top-position status-group left-top">
                  <span class="eduvibe-status status-06">09 Dec 2023</span>
                </div>
              </div>
              <div class="content">
                <ul class="event-meta">
                  <li><i class="icon-map-pin-line"></i>IAC Building, New York, NY</li>
                </ul>
                <h5 class="title"><a href="event-details.html">International Art Fair 2020</a></h5>
                <div class="read-more-btn">
                  <a class="btn-transparent" href="course-details.html">Get Ticket<i
                      class="icon-arrow-right-line-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End Event Grid   -->
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
</template>
<script>
import sal from 'sal.js';
export default {
  data() {
    return {
      tipo: 'Avisos'
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
import { mapState } from "vuex";
import SidebarCustom from "@/components/SidebarCustom.vue";
export default {
  name: "convocatoriasView",
  data() {
    return {
      tipo: "",
      Convocatorias: [],
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
    async getTipoConv(tipo_conv) {
      try {
        let res = await this.axios.get("/api/Tipoconvocatorias/" + tipo_conv);
        this.tipo = res.data.Descripcion.tipo_conv_comun_titulo;
        this.getConvocatorias();
      } catch (error) {
        console.log(error);
      }
    },
    async getConvocatorias() {
      try {
        let res = await this.axios.get(
          "/api/convocatoriasAll/" + process.env.VUE_APP_ID_CARRERA
        );
        this.Convocatorias = [];
        res.data.forEach((cca) => {
          if (
            cca.con_estado == "1" &&
            cca.tipo_conv_comun.tipo_conv_comun_titulo == this.tipo
          ) {
            this.Convocatorias.push(cca);
          }
        });
        this.pager = this.Convocatorias.length / this.NUM_RESULTS;
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
    dmy(fecha) {
      const meses = [
        "enero",
        "febrero",
        "marzo",
        "abril",
        "mayo",
        "junio",
        "julio",
        "agosto",
        "septiembre",
        "octubre",
        "noviembre",
        "diciembre",
      ];
      let fechaCadena = fecha.substr(0, 10);
      let fechaArray = fechaCadena.split("-");
      return (
        fechaArray[2] +
        " de " +
        meses[fechaArray[1] - 1] +
        " de " +
        fechaArray[0]
      );
    },
    buscar() {
      if (this.search != "") {
        this.searchGet = true;

        this.searchValues = [];
        this.Convocatorias.forEach((conv) => {
          if (
            conv.con_titulo.toUpperCase().includes(this.search.toUpperCase())
          ) {
            this.searchValues.push(conv);
          }
        });
      } else {
        this.searchGet = false;
      }
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getTipoConv(this.$route.params.tipo_conv);
  },
  updated() {
    if (this.getter) {
      this.$store.commit("loadOn");
      this.getTipoConv(this.$route.params.tipo_conv);
      this.$store.state.getter = false;
    }
  },
  created() {
    this.$store.commit("loadOn");
    this.getTipoConv(this.$route.params.tipo_conv);
  },
};
</script> -->