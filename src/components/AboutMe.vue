<template>
  <div class="container about-me">
    <div class="row">
      <div class="col-12 about-me__box mt-5">
        <div class="row">
          <div class="col-12 col-md-4 mt-4 text-center">
            <div class>
              <img src="/images/photo.jpg" alt="Photo" class="avatar rounded-circle" style>
            </div>
            <p class="about-me__name">Yarilenis Laverde</p>
            <p class="text-right">Desarrollador Web</p>
          </div>
          <div class="col-12 col-md-8 mt-4 pb-4">
            <h2>Sobre mi</h2>
            <div class="mt-5">
              <p class="mb-0">
                <span class="text-pink">
                  <b>Edad:</b>
                </span> 29
              </p>
              <p class="mb-0">
                <span class="text-pink">
                  <b>Dirección:</b>
                </span> Chorrillos, Lim - Perú
              </p>
              <p class="mb-0">
                <span class="text-pink">
                  <b>Email:</b>
                </span> yarilaverde@gmail.com
              </p>
              <p class="mb-0">
                <span class="text-pink">
                  <b>Teléfono:</b>
                </span> (+51) 927 431 824
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 social-media py-2 d-flex justify-content-center">
        <a href class="mr-4">
          <i class="fas fa-circle"></i>
          <i class="fab fa-facebook-f social-media__primary" style="padding-left:7px"></i>
        </a>
        <a href class="mr-4">
          <i class="fas fa-circle"></i>
          <i class="fab fa-twitter social-media__primary"></i>
        </a>
        <a href class="mr-4">
          <i class="fas fa-circle"></i>
          <i class="fab fa-instagram social-media__primary"></i>
        </a>
        <a href class="mr-4">
          <i class="fas fa-circle"></i>
          <i class="fab fa-linkedin-in social-media__primary"></i>
        </a>
      </div>
      <div class="col-12 education mt-4 p-0">
        <hr class="education__hr">
        <div class="education__icon">
          <i class="fa fa-graduation-cap"></i>
        </div>
      </div>
      <div class="col-12 mt-4 p-0">
        <CardShadow class="py-3">
          <h5 class="text-center">Licenciada en Computación - Universidad de Carabobo
            <br>Venezuela (2007 - 2015)
          </h5>
        </CardShadow>
      </div>
    </div>
  </div>
</template>

<script>
import CardShadow from "./CardShadow.vue";

export default {
  name: "aboutme",
  components: {
    CardShadow
  },
  data() {
    return {
      text: `
        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
        tempor. Laborum consequat non elit enim exercitation cillum aliqua
      `
    };
  }
};
</script>
<style>
.about-me__box {
  background: white;
}
.about-me__name {
  font-family: "Sacramento", cursive;
  font-size: 2rem;
  margin-top: 15px;
}
.about-me .avatar {
  width: 180px;
}
.social-media {
  background: #4b4b4b;
}
.social-media__primary {
  color: #4b4b4b;
  border-radius: 50%;
  padding: 8px 5px;
  position: relative;
  font-size: 20px;
}
.social-media a {
  position: relative;
}
.social-media .fa-circle {
  color: white;
  position: absolute;
  left: -4px;
  top: 1px;
  z-index: 0;
  font-size: 35px;
}

.education__icon {
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  background: #f378de;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  text-align: center;
  padding: 2px 5px;
  color: white;
  font-size: 25px;
}
.education__hr {
  border-top: 2px solid #f378de;
}
.text-pink {
  color: #f378de;
}
.bg-pink {
  background-color: #f378de !important;
}
</style>
