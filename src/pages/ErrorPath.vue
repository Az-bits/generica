<template>
    <div class="edu-error-area eduvibe-404-page edu-error-style">
        <div class="container eduvibe-animated-shape">
            <div class="row g-5">
                <div class="col-lg-12">
                    <div class="content text-center">
                        <div class="thumbnail mb--60">
                            <img src="assets/images/others/404.png" alt="404 Images">
                        </div>
                        <h3 class="title">Vaya... ¡Página no encontrada!</h3>
                        <p class="description">Vuelva a la página de inicio del sitio. Parece que no se encontró nada en
                            esta ubicación.</p>
                        <div class="backto-home-btn">
                            <router-link class="edu-btn" to="/">Ir a Inicio<i
                                    class="icon-arrow-right-line-right"></i></router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shape-dot-wrapper shape-wrapper d-xl-block d-none">
                <div class="shape-image shape-image-1">
                    <img src="assets/images/shapes/shape-11-06.png" alt="Shape Thumb">
                </div>
                <div class="shape-image shape-image-2">
                    <img src="assets/images/shapes/shape-09-02.png" alt="Shape Thumb">
                </div>
                <div class="shape-image shape-image-3">
                    <img src="assets/images/shapes/shape-05-06.png" alt="Shape Thumb">
                </div>
                <div class="shape-image shape-image-4">
                    <img src="assets/images/shapes/shape-14-03.png" alt="Shape Thumb">
                </div>
                <div class="shape-image shape-image-5">
                    <img src="assets/images/shapes/shape-03-10.png" alt="Shape Thumb">
                </div>
                <div class="shape-image shape-image-6">
                    <img src="assets/images/shapes/shape-15.png" alt="Shape Thumb">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        volver() {
            // this.$router.push('/')
            this.$router.go(-1) //vuelve ala raiz (1 | -1)
        }
    }
}

</script>