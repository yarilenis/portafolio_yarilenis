<template>
  <div class="container mt-5">
    <div class="page-header text-center">
      <h1 id="timeline">Experiencia</h1>
    </div>
    <ul class="timeline mt-5">
      <li>
        <div class="timeline-badge">
          <i class="fas fa-briefcase"></i>
        </div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <h4 class="timeline-title">Joinnus.com</h4>
            <h6 class="text-pink">Programador Frontend</h6>
            <p>
              <small class="text-muted">
                <i class="far fa-calendar-alt"></i> Oct. 2018 - Actualmente
              </small>
            </p>
          </div>
          <div class="timeline-body">
            <p>{{ text }}</p>
          </div>
        </div>
      </li>
      <li class="timeline-inverted">
        <div class="timeline-badge">
          <i class="fas fa-briefcase"></i>
        </div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <h4 class="timeline-title">Joinnus.com</h4>
            <h6 class="text-pink">Programador Frontend</h6>
            <p>
              <small class="text-muted">
                <i class="far fa-calendar-alt"></i> Oct. 2018 - Actualmente
              </small>
            </p>
          </div>
          <div class="timeline-body">
            <p>{{ text }}</p>
          </div>
        </div>
      </li>
      <li>
        <div class="timeline-badge">
          <i class="fas fa-briefcase"></i>
        </div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <h4 class="timeline-title">Joinnus.com</h4>
            <h6 class="text-pink">Programador Frontend</h6>
            <p>
              <small class="text-muted">
                <i class="far fa-calendar-alt"></i> Oct. 2018 - Actualmente
              </small>
            </p>
          </div>
          <div class="timeline-body">
            <p>{{ text }}</p>
          </div>
        </div>
      </li>
      <li class="timeline-inverted">
        <div class="timeline-badge">
          <i class="fas fa-briefcase"></i>
        </div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <h4 class="timeline-title">Joinnus.com</h4>
            <h6 class="text-pink">Programador Frontend</h6>
            <p>
              <small class="text-muted">
                <i class="far fa-calendar-alt"></i> Oct. 2018 - Actualmente
              </small>
            </p>
          </div>
          <div class="timeline-body">
            <p>{{ text }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
.timeline {
  list-style: none;
  padding: 20px 0 20px;
  position: relative;
}
.timeline:before {
  top: 0;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 3px;
  background-color: #cacaca;
  left: 50%;
  margin-left: -1.5px;
}
.timeline > li {
  margin-bottom: 20px;
  position: relative;
}
.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}
.timeline > li:after {
  clear: both;
}
.timeline > li:before,
.timeline > li:after {
  content: " ";
  display: table;
}
.timeline > li:after {
  clear: both;
}
.timeline > li > .timeline-panel {
  width: 50%;
  float: left;
  border: 1px solid #d4d4d4;
  border-radius: 2px;
  padding: 20px;
  position: relative;
  -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);
}
.timeline > li.timeline-inverted + li:not(.timeline-inverted),
.timeline > li:not(.timeline-inverted) + li.timeline-inverted {
  margin-top: -60px;
}

.timeline > li:not(.timeline-inverted) {
  padding-right: 90px;
}

.timeline > li.timeline-inverted {
  padding-left: 90px;
}
.timeline > li > .timeline-panel:before {
  position: absolute;
  top: 32px;
  right: -30px;
  display: inline-block;
  content: " ";
  width: 30px;
  height: 3px;
  background-color: #cacaca;
}
.timeline > li > .timeline-badge {
  color: #fff;
  width: 35px;
  height: 35px;
  line-height: 1;
  font-size: 0.75rem;
  text-align: center;
  position: absolute;
  top: 16px;
  left: 50%;
  margin-left: -18px;
  background-color: #f378de;
  z-index: 100;
  border-radius: 50%;
}
.timeline > li.timeline-inverted > .timeline-panel {
  float: right;
}
.timeline > li.timeline-inverted > .timeline-panel:before {
  left: -30px;
  right: auto;
}
.timeline-title {
  margin-top: 0;
  color: inherit;
}
.timeline-body > p,
.timeline-body > ul {
  margin-bottom: 0;
}
.timeline-body > p + p {
  margin-top: 5px;
}
</style>
