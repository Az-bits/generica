<template>
  <footer class="pv-footer edu-section-gap">
    <div class="container eduvibe-animated-shape">
      <div class="row">
        <div class="col-lg-12">
          <div class="inner text-center">
            <h3 class="title color-white mb--50">Build Best Educational Sites <br> with EduVibe HTML Template </h3>
            <div class="button-group">
              <a class="edu-btn purchase-btn" href="https://1.envato.market/VyeWkO" target="_blank">Get EduVibe <i
                  class="icon-arrow-right-line-right"></i>
              </a>
              <a class="edu-btn bg-white right-button" href="#demo">Explore Demo <i
                  class="icon-arrow-right-line-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="work-shop d-xl-block d-none">
        <div class="inner">
          <div class="thumbnail">
            <img src="assets/images/banner/banner-01/workshop.png" alt="Workshop Images">
          </div>
          <div class="content">
            <h6 class="title">Design Workshop</h6>
            <span class="time">Today at 6:00 am</span>
            <div>
              <a class="edu-btn btn-secondary btn-small" href="#">Join Now <i class="icon-arrow-right-line-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-trophy d-lg-block d-none">
        <div class="trophy-content">
          <div class="icon">
            <img src="assets/images/testimonial-section/trophy.png" alt="Trophy Images">
          </div>
          <div class="content">
            <h6 class="text">50K+</h6>
            <span>Satisfied Learners</span>
          </div>
        </div>
      </div>

      <div class="student-like-status d-xl-block d-none">
        <div class="inner">
          <div class="icon">
            <i class="icon-Smile"></i>
          </div>
          <div class="content">
            <h6 class="title">900K</h6>
            <span class="subtitle">Total Students</span>
          </div>
        </div>
      </div>

      <div class="card-info d-xl-block d-none">
        <div class="inner bounce-slide">
          <div class="name">Shophia D. <span>/ Professior</span>
          </div>
          <div class="rating-wrapper d-flex">
            <div class="rating eduvibe-course-rating-stars">
              <i class="icon-Star"></i>
              <i class="icon-Star"></i>
              <i class="icon-Star"></i>
              <i class="icon-Star"></i>
              <i class="icon-Star"></i>
            </div>
            <span>(2567)</span>
          </div>
        </div>
      </div>

      <div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
        <div class="shape shape-1">
          <img src="assets/images/landing-demo/footer-shop.jpg" alt="Shop Single">
        </div>
        <div class="shape shape-2">
          <img src="assets/images/landing-demo/footer-student.jpg" alt="Student">
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  methods: {
    atras() {
      // this.$router.push('/')
      this.$router.go(-1) //vuelve ala raiz (1 | -1)
    },
    adelante() {
      // this.$router.push('/')
      this.$router.go(1) //vuelve ala raiz (1 | -1)
    }
  }
}

</script>