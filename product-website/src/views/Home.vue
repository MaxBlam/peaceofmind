<template>
  <div id="homebg">
    <!-- Start of Introduction -->
    <div
      class="container-fluid d-flex justify-content-center align-content-center flex-column align-items-center text-light"
      id="parallax"
    >
      <h1 class="display-2 text-shadow">Introduction</h1>
      <p class="text-shadow">Work in progress!</p>
      <a class="btn btn-light" href="">Try it!</a>
    </div>
    <!-- End of Introduction -->
    <!-- Start of The Team -->
    <section class="p-5 bg-light">
      <div class="container">
        <div class="row justify-content-center text-center section-intro">
          <div class="col-12 col-md-9 col-lg-8">
            <h1
              class="display-4 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              The Team
            </h1>
          </div>
        </div>

        <div
          class="row d-flex justify-content-around feature-list feature-list-sm"
        >
          <div class="card p-0 mt-4" style="width: 18rem">
            <img src="../assets/ahmedpb.jpg" class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Ahmed Hasanovic</h5>
              <p class="card-text">
                "Do tomorrow, what you can do tomorrow"
              </p>
              <a
                href="https://www.linkedin.com/in/ahmed-hasanovic-07a215188/"
                target="_blank"
                class="btn btn-outline-primary d-block mt-auto"
                >View LinkedIn Profile</a
              >
            </div>
          </div>
          <div class="card p-0 mt-4" style="width: 18rem">
            <img src="../assets/maxpb.jpg" class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Maximilian Blam</h5>
              <p class="card-text">
                "Never underestimate your goals."
              </p>
              <a
                href="https://www.linkedin.com/in/maximilian-blam"
                target="_blank"
                class="btn btn-outline-primary d-block mt-auto"
                >View LinkedIn Profile</a
              >
            </div>
          </div>

          <div class="card p-0 mt-4" style="width: 18rem">
            <img src="../assets/moritzpb.jpg" class="card-img-top" alt="..." />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Moritz Miedler</h5>
              <p class="card-text">
                "Bruh? Bitte sein Sie mein bruh 🥺"
              </p>
              <a
                href="https://www.linkedin.com/in/moritz-miedler-bb6107189/"
                target="_blank"
                class="btn btn-outline-primary d-block mt-auto"
                >View LinkedIn Profile</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of The Team -->
    <!-- Start of The Problem -->
    <section
      class="container-fluid d-flex justify-content-center align-content-center flex-column align-items-center text-light p-5"
      style="backdrop-filter: blur(10px);"
    >
      <h1 class="display-4 text-shadow">The Problem</h1>
      <p class="text-shadow text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Vestibulum morbi
        blandit cursus risus. Ultrices sagittis orci a scelerisque purus semper
        eget. Tristique senectus et netus et malesuada. Suscipit adipiscing
        bibendum est ultricies integer. Nisl tincidunt eget nullam non nisi est
        sit. Convallis tellus id interdum velit laoreet. Egestas integer eget
        aliquet nibh praesent tristique magna. Faucibus pulvinar elementum
        integer enim neque. Neque laoreet suspendisse interdum consectetur
        libero id. Tincidunt dui ut ornare lectus sit amet est placerat. Dolor
        morbi non arcu risus quis varius. Neque egestas congue quisque egestas
        diam. Eu turpis egestas pretium aenean pharetra. Mauris rhoncus aenean
        vel elit scelerisque mauris pellentesque pulvinar pellentesque. Massa
        sapien faucibus et molestie ac feugiat sed lectus. Eu facilisis sed odio
        morbi quis commodo odio.
      </p>
    </section>
    <!-- End of The Problem -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  /*components: {
    HelloWorld
  }*/
};
</script>

<style>
#parallax {
  background-image: url('../assets/ph.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
}
.text-shadow {
  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
#homebg {
  background-image: url('../assets/bgph.png');
  background-position: center;
  background-size: cover;
}
</style>
