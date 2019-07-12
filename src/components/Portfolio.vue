<template>
  <div class="container">
    <div class="page-header text-center">
      <h1 id="timeline">Portafolio</h1>
    </div>
    <div class="row">
      <div class="col-12 col-sm-6 col-lg-4 py-3">
        <div class="card">
          <a href="#" @click.prevent="$bvModal.show('bv-modal-example')">
            <img
              class="card-img-top"
              src="https://picsum.photos/300/200/?random"
              alt="Card image cap"
            >
          </a>
          <div class="card-body">
            <a href="#" @click.prevent="$bvModal.show('bv-modal-example')">
              <h5 class="card-title">Card title</h5>
            </a>
            <p class="card-text">
              Some quick example text to build on the
              card title and make up the bulk of the
              card's content.
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4 py-3">
        <div class="card">
          <a href="#" @click.prevent="$bvModal.show('bv-modal-example')">
            <img
              class="card-img-top"
              src="https://picsum.photos/300/200/?random"
              alt="Card image cap"
            >
          </a>
          <div class="card-body">
            <a href="#" @click.prevent="$bvModal.show('bv-modal-example')">
              <h5 class="card-title">Card title</h5>
            </a>
            <p class="card-text">
              Some quick example text to build on the
              card title and make up the bulk of the
              card's content.
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4 py-3">
        <div class="card">
          <a href="#" @click.prevent="$bvModal.show('bv-modal-example')">
            <img
              class="card-img-top"
              src="https://picsum.photos/300/200/?random"
              alt="Card image cap"
            >
          </a>
          <div class="card-body">
            <a href="#" @click.prevent="$bvModal.show('bv-modal-example')">
              <h5 class="card-title">Card title</h5>
            </a>
            <p class="card-text">
              Some quick example text to build on the
              card title and make up the bulk of the
              card's content.
            </p>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-6 col-lg-4 py-3">
        <div class="card">
          <a href="#" @click.prevent="$bvModal.show('bv-modal-example')">
            <img
              class="card-img-top"
              src="https://picsum.photos/300/200/?random"
              alt="Card image cap"
            >
          </a>
          <div class="card-body">
            <a href="#" @click.prevent="$bvModal.show('bv-modal-example')">
              <h5 class="card-title">Card title</h5>
            </a>
            <p class="card-text">
              Some quick example text to build on the
              card title and make up the bulk of the
              card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="bv-modal-example" hide-footer>
      <template slot="modal-title">Using Methods</template>
      <div>
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          img-width="1024"
          img-height="480"
        >
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=10"></b-carousel-slide>
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=12"></b-carousel-slide>
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=22"></b-carousel-slide>
        </b-carousel>
      </div>
      <div class="d-block mt-2 d-flex flex-row">
        <div class="py-1 px-3 mb-2 mr-2 bg-primary text-white">Laravel</div>
        <div class="py-1 px-3 mb-2 mr-2 bg-primary text-white">VueJs</div>
        <div class="py-1 px-3 mb-2 mr-2 bg-primary text-white">Bootstrap</div>
      </div>
      <div class="d-block">
        <p>
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
        </p>
      </div>
      <div class="d-block text-right">
        <a href="#" target="_blank" rel="noopener noreferrer">Ver la web</a>
      </div>
    </b-modal>
  </div>
</template>
