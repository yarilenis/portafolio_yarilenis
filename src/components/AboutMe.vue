<template>
  <div class="container">
    <div class="row">
      <div class="col-12 about-me mt-5">
        <div class="row">
          <div class="col-4 mt-4">
            <div>
              <img src="/images/photo.jpg" alt="Photo" class="avatar rounded-circle" style>
            </div>
            <p class="about-me__name">Yarilenis Laverde</p>
          </div>
          <div class="col-8 mt-4">
            <h2>Sobre mi</h2>
            <div class="mt-5">
              <p class="mb-0"><span class="text-primary">Edad:</span> 29</p>
              <p class="mb-0"><span class="text-primary">Dirección:</span> Chorrillos, Lim - Perú</p>
              <p class="mb-0"><span class="text-primary">Email:</span> yarilaverde@gmail.com</p>
              <p class="mb-0"><span class="text-primary">Teléfono:</span> (+51) 927 431 824</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 social-media py-2 d-flex justify-content-center">
        <a href="" class="mr-4">
          <i class="fas fa-circle"></i>
          <i class="fab fa-facebook-f social-media__primary"
          style="padding-left:7px"></i>
        </a>
        <a href="" class="mr-4">
          <i class="fas fa-circle"></i>
          <i class="fab fa-twitter social-media__primary"></i>
        </a>
        <a href="" class="mr-4">
          <i class="fas fa-circle"></i>
          <i class="fab fa-instagram social-media__primary"></i>
        </a>
        <a href="" class="mr-4">
          <i class="fas fa-circle"></i>
          <i class="fab fa-linkedin-in social-media__primary"></i>
        </a>
      </div>
      <div class="col-12">
        <hr>
        <i class="fa fa-graduation-cap"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutme",
  data() {
    return {
      text: `
        Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
        tempor. Laborum consequat non elit enim exercitation cillum aliqua
        consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
        laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
        Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
        nisi sit est tempor laborum mollit labore officia laborum excepteur
        commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
        ipsum commodo tempor sunt in proident.
      `
    };
  }
};
</script>
<style>
.avatar {
  width: 180px;
}
.about-me {
  background: white;
}
.about-me__name {
  font-family: "Sacramento", cursive;
  margin-top: 15px;
}
.social-media {
  background: #4b4b4b;
}
.social-media a {
  position: relative;
}
.social-media__primary {
  color: #4b4b4b;
  border-radius: 50%;
  padding: 5px;
  position: relative;
  font-size: 20px;
}
.social-media .fa-circle {
  color: white;
  position: absolute;
  left: -4px;
  top: 1px;
  z-index: 0;
  font-size: 35px;
}
</style>