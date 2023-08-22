<template>
  <div class="edu-breadcrumb-area breadcrumb-style-1 ptb--60 ptb_md--40 ptb_sm--40 bg-image">
    <div class="container eduvibe-animated-shape">
      <div class="row">
        <div class="col-lg-12">
          <div class="breadcrumb-inner text-start">
            <div class="page-title">
              <h3 class="title">{{ Convocatoria.titulo }}</h3>
            </div>
            <nav class="edu-breadcrumb-nav">
              <ol class="edu-breadcrumb d-flex justify-content-start liststyle">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="separator"><i class="ri-arrow-drop-right-line"></i></li>
                <li>
                  <a style="cursor: pointer" @click="() => { alert() }">{{
                    Convocatoria.tipo
                  }}</a>
                </li>
                <li class="separator"><i class="ri-arrow-drop-right-line"></i></li>
                <li class="breadcrumb-item active" aria-current="page">Event Details</li>
                <li class="separator"><i class="ri-arrow-drop-right-line"></i></li>
                <li class="breadcrumb-item active" aria-current="page">Event Details</li>
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

  <div class="edu-event-details-area edu-event-details edu-section-gap bg-color-white">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-12">
          <div class="thumbnail">
            <img src="assets/images/event/event-details/event-01.jpg" alt="Event Images">
          </div>
        </div>
      </div>
      <div class="row g-5">
        <div class="col-lg-7">
          <div class="content">
            <h3 class="title">UI/UX Design & Development Contest 2023</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod te invidunt. ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam. et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
              no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
              et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
            <ul class="column-gallery gallery-column-2">
              <li><img src="assets/images/event/event-details/event-gallery-01.jpg" alt="Gallery Images"></li>
              <li><img src="assets/images/event/event-details/event-gallery-02.jpg" alt="Gallery Images"></li>
            </ul>
            <h4>Four major elements that we offer:</h4>
            <ul class="list-style-1 mb--20">
              <li><i class="icon-checkbox-circle-fill-solid"></i> Struggling to sell one multi-million dollar home
                currently on the market</li>
              <li><i class="icon-checkbox-circle-fill-solid"></i> The point of using Lorem Ipsum is that it has a normal
                distribution of letters.</li>
              <li><i class="icon-checkbox-circle-fill-solid"></i> Publishing packages and web page editors now use their
                default model text.</li>
              <li><i class="icon-checkbox-circle-fill-solid"></i> Publishing packages and web page editors now use their
                default model text.</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod te invidunt. ut labore et
              dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam. et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr.</p>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="eduvibe-sidebar">
            <div class="eduvibe-widget eduvibe-widget-details">
              <h5 class="title">Event Detail</h5>
              <div class="widget-content">
                <ul>
                  <li><span><i class="icon-calendar-2-line"></i> Start Date</span><span>25 Dec, 2023</span></li>
                  <li><span><i class="icon-time-line"></i> Start Time</span><span>6:00 PM</span></li>
                  <li><span><i class="icon-calendar-2-line"></i> End Date</span><span>30 Nov, 2023</span></li>
                  <li><span><i class="icon-time-line"></i> End Time</span><span>12:00 PM</span></li>
                  <li><span><i class="icon-user-line"></i> Ongoing</span><span>983+</span></li>
                  <li><span><i class="icon-map-pin-line"></i> Location</span><span>New Margania</span></li>
                </ul>

                <div class="read-more-btn mt--45">
                  <a class="edu-btn btn-bg-alt w-100 text-center" href="#">Price: $79.00</a>
                </div>

                <div class="read-more-btn mt--15">
                  <a class="edu-btn w-100 text-center" href="#">Book Your Seat Now</a>
                </div>

                <div class="read-more-btn mt--30 text-center">
                  <div class="eduvibe-post-share">
                    <span>Share: </span>
                    <a class="linkedin" href="#"><i class="icon-linkedin"></i></a>
                    <a class="facebook" href="#"><i class="icon-Fb"></i></a>
                    <a class="twitter" href="#"><i class="icon-Twitter"></i></a>
                    <a class="youtube" href="#"><i class="icon-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div class="eduvibe-widget eduvibe-widget-details mt--40">
              <h5 class="title">Map</h5>
              <div class="widget-content">
                <div class="google-map">
                  <iframe class="radius-small w-100"
                    src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                    height="290" style="border:0;" loading="lazy"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Convocatoria: { titulo: 'Maestria' }
    }
  }
}
</script>
<!-- 
<style scoped>
.bg-overlay-img {
  background-image: url("@/assets/Fondo2.jpg");
}
</style>

<script>
import { mapState } from "vuex";
import SidebarCustom from "@/components/SidebarCustom.vue";
export default {
  name: "detalleConvocatoria",
  data() {
    return {
      Convocatoria: {},
      errorGet: false,
    };
  },
  components: { SidebarCustom },
  computed: {
    ...mapState(["url_api"]),
  },
  methods: {
    dmy(fecha) {
      if (fecha != undefined) {
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
      }
    },
    async getConvocatoriaOne() {
      try {
        let res = await this.axios.get(
          "/api/convocatorias/" + this.$route.params.idConv
        );
        this.Convocatoria = res.data.Descripcion;
        this.$store.commit("loading");
      } catch (error) {
        console.log(error);
        if (error.response.status == 500) {
          this.errorGet = true;
          this.$store.commit("loading");
        }
      }
    },
    clickBack() {
      this.$store.commit("clickLink");
      this.$router.go(-1);
    },
  },
  mounted() {
    this.$store.commit("loadOn");
    this.getConvocatoriaOne();
  },
  created() {
    this.$store.commit("loadOn");
    this.getConvocatoriaOne();
  },
};
</script> -->