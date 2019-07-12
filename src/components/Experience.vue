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
