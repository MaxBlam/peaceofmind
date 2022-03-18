<template>
  <div class="bg-about">
    <a class="fixed-nav m-1" href="#" type="button" title="Scroll Up">
      <img src="@/assets/arrow.svg" alt="Scroll Up Arrow" id="arrow" />
    </a>

    <!-- Start of Introduction -->
    <div
      class="
        container-fluid
        d-flex
        justify-content-center
        align-content-center
        flex-column
        align-items-center
        text-light
      "
      id="parallax"
    >
      <h1
        class="display-2 text-shadow text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Find Your Inner Peace
      </h1>
      <i class="bi bi-caret-down-fill h3" id="scrollindi"></i>
    </div>
    <!-- End of Introduction -->
    <!-- Start of The Team -->
    <section class="p-5 bg-light">
      <div class="container">
        <h1 class="display-4 text-center">The Team</h1>

        <div
          class="row d-flex justify-content-around feature-list feature-list-sm"
        >
          <div
            class="card p-3 mt-4 shadow-sm no-border rounded-4"
            style="width: 18rem"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="@/assets/ahmedpb.avif"
              alt="Developer"
              class="card-img-top rounded-4"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Ahmed Hasanovic</h5>
              <p class="card-text">Backend</p>
              <p>
                <span class="badge bg-identity me-1">APIs</span>
                <span class="badge bg-identity me-1">Data Manipulation</span>
                <span class="badge bg-identity me-1">Formatting</span>
              </p>
              <a
                href="https://www.linkedin.com/in/ahmed-hasanovic-07a215188/"
                target="_blank"
                rel="noreferrer"
                class="btn btn-light d-block mt-auto transition-sm"
                title="Visit LinkedIn"
                >View LinkedIn Profile</a
              >
            </div>
          </div>
          <div
            class="card p-3 mt-4 shadow-sm no-border rounded-4"
            style="width: 18rem"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="@/assets/maxpb.avif"
              alt="Developer"
              class="card-img-top rounded-4"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Maximilian Blam</h5>
              <p class="card-text">Frontend & Database</p>
              <p>
                <span class="badge bg-identity me-1">Website</span>
                <span class="badge bg-identity me-1">Progressive Web App</span>
                <span class="badge bg-identity me-1">PostgreSQL Database</span>
              </p>
              <a
                href="https://www.linkedin.com/in/maximilian-blam"
                target="_blank"
                rel="noreferrer"
                class="btn btn-light d-block mt-auto transition-sm"
                title="Visit LinkedIn"
                >View LinkedIn Profile</a
              >
            </div>
          </div>

          <div
            class="card p-3 mt-4 shadow-sm no-border rounded-4"
            style="width: 18rem"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="@/assets/moritzpb.avif"
              class="card-img-top rounded-4"
              alt="Developer"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Moritz Miedler</h5>
              <p class="card-text">Marketing & Design</p>
              <p>
                <span class="badge bg-identity me-1">Corporate Branding</span>
                <span class="badge bg-identity me-1"
                  >Social Media Management</span
                >
                <span class="badge bg-identity me-1">Graphics</span>
              </p>
              <a
                href="https://www.linkedin.com/in/moritz-miedler-bb6107189/"
                target="_blank"
                rel="noreferrer"
                class="btn btn-light d-block mt-auto transition-sm"
                title="Visit LinkedIn"
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
      class="
        container-fluid
        d-flex
        justify-content-center
        align-content-center
        flex-column
        align-items-center
        text-light
        p-5
        my-5
      "
    >
      <div class="container text-center">
        <h1 class="display-4" data-aos="fade-up" data-aos-duration="1000">
          The Problem
        </h1>
        <p data-aos="fade-up" data-aos-duration="1000">
          You probably know the feeling. You just wrote down some important
          notes onto a piece of paper, but you have related notes on your pc or
          tablet. What do you do now? Rewrite all the notes on your pc?
        </p>
      </div>
    </section>
    <!-- End of The Problem -->
    <!-- Start of The Solution -->
    <div class="container-fluid bg-light p-5 overflow-hidden">
      <div
        class="
          container
          d-flex
          flex-wrap
          justify-content-around
          align-items-center align-content-center
        "
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        <img
          class="rounded-4 col-12 col-md-5"
          alt="Logo"
          src="@/assets/logo.svg"
        />

        <div class="text-dark col-12 col-md-5">
          <h1 class="display-4 mt-2">The Solution</h1>
          <p>
            You want your notes to be organized into timelines and folders? You
            want to simply scan your handwritten notes and add them to your pc
            written notes? PieceOfMind is the solution! No more unorganized
            notes lying around on your desktop or your table! <br />
            <span class="blockquote-footer"> Find your inner peace </span>
          </p>
        </div>
      </div>
    </div>
    <!-- End of The Solution -->
    <!-- Start of Benefits -->
    <section class="container-fluid text-light p-5">
      <div
        class="
          container
          text-center
          d-flex
          justify-content-evenly
          align-content-center
          flex-column
          align-items-center
        "
      >
        <h1 class="display-4">Find your Piece of Mind</h1>
        <div
          class="
            container
            d-flex
            justify-content-center
            align-content-stretch
            flex-column flex-md-row
            align-items-stretch
          "
        >
          <div
            class="rounded-4 shadow-lg m-2 overflow-hidden"
            style="width: 256px"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="@/assets/badge_pc.avif" alt="Easy Access" width="100%" />
            <div class="card-body">
              <h5 class="card-title">Easy Access</h5>
            </div>
          </div>
          <div
            class="rounded-4 shadow-lg m-2 overflow-hidden"
            style="width: 256px"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="@/assets/badge_leaning.avif"
              alt="Organized"
              width="100%"
            />
            <div class="card-body">
              <h5 class="card-title">Organized with Colorful Folders</h5>
            </div>
          </div>
          <div
            class="rounded-4 shadow-lg m-2 overflow-hidden"
            style="width: 256px"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="@/assets/badge_mobile.avif"
              alt="Accessibility"
              width="100%"
            />
            <div class="card-body">
              <h5 class="card-title">View Everywhere</h5>
            </div>
          </div>
        </div>
        <div
          class="
            container
            d-flex
            justify-content-center
            align-content-stretch
            flex-column flex-md-row
            align-items-stretch
          "
        >
          <div
            class="rounded-4 shadow-lg m-2 overflow-hidden"
            style="width: 256px"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="@/assets/badge_timeline.avif"
              alt="Timeline"
              width="100%"
            />
            <div class="card-body">
              <h5 class="card-title">Better Organization with Timelines</h5>
            </div>
          </div>
          <div
            class="rounded-4 shadow-lg m-2 overflow-hidden"
            style="width: 256px"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="@/assets/badge_easy.avif"
              alt="Easy to Use"
              width="100%"
            />
            <div class="card-body">
              <h5 class="card-title">Think about your New Freetime</h5>
            </div>
          </div>
          <div
            class="rounded-4 shadow-lg m-2 overflow-hidden"
            style="width: 256px"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="@/assets/badge_safe.avif" alt="Secure" width="100%" />
            <div class="card-body">
              <h5 class="card-title">Uses Google for Optimal Security</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of Benefits -->
    <!-- Start of The Project -->
    <div class="container-fluid bg-light p-5">
      <div
        class="
          container
          d-flex
          flex-wrap
          justify-content-around
          align-items-center align-content-center
        "
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <div class="text-dark col-12 col-md-5">
          <h1 class="display-4">Piece of Mind</h1>
          <p>
            PieceOfMind is an Web App available on mobile and pc to make your
            life easier. Just scan your handwritten notes and add them to a
            folder or subject. Keeping your notes organized has never been
            easier.
          </p>
          <a
            href="https://pieceofmind-app.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            style="text-decoration: none"
            class="btn btn-identity mb-4 transition-sm"
            title="App"
          >
            Try it!
          </a>
          <a
            href="https://github.com/MaxBlam/peaceofmind"
            target="_blank"
            rel="noreferrer"
            class="btn btn-identity ms-2 mb-4 transition-sm"
            title="Github Repository"
            >Github</a
          >
        </div>
        <img
          class="img-fluid rounded-4 shadow col-12 col-md-5"
          src="@/assets/aboutbg.avif"
          alt="App"
        />
      </div>
    </div>
    <!-- End of The Project -->
    <!-- Start of FAQ -->
    <div class="container-fluid bg-light p-5">
      <div class="container">
        <h1 class="display-5 mt-5 mb-3" id="faq">Frequently asked Questions</h1>
        <div class="accordion" id="faqAccordion">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
                aria-label="Open"
              >
                What is PieceOfMind?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div class="accordion-body">
                PieceOfMind helps you store your digital and handwritten notes
                online, easily and securely.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                aria-label="Open"
              >
                Is PieceOfMind free to use?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div class="accordion-body">
                PieceOfMind is available without hidden costs and completely
                free from advertisements!
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                aria-label="Open"
              >
                How did you come up with your idea?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div class="accordion-body">
                We know what it's like to have to manage a lot of analog and
                digital notes. That's why we wanted a simple and smart solution.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End of FAQ -->
    <!-- Start of Contact -->
    <section class="container-fluid text-light p-5">
      <div
        class="
          container
          d-flex
          justify-content-evenly
          align-content-center
          flex-column
          align-items-center
        "
      >
        <h1 class="display-5 text-center" id="contact">
          Still Questions? Contact us
        </h1>

        <div class="d-inline-block col-12 mb-2">
          <label class="form-label">Subject <span>*</span></label
          ><input
            type="text"
            placeholder="General Inquiry"
            name="user_subject"
            v-model="subject"
            required="required"
            class="form-control"
          />
        </div>
        <div class="col-12 mb-3">
          <label class="form-label">Message <span>*</span></label
          ><textarea
            rows="7"
            placeholder="..."
            name="message"
            v-model="message"
            required="required"
            class="form-control"
          ></textarea>
        </div>
        <p class="me-auto">*needs to be filled out</p>
        <button
          type="button"
          class="btn btn-outline-light me-auto"
          :disabled="subject == '' || message == ''"
          @click="sendMail"
          title="Open Default Email Program"
          aria-label="Send Email"
        >
          Send!
        </button>
      </div>
    </section>
    <!-- End of Contact -->
  </div>
</template>

<script>
export default {
  data: () => ({
    subject: '',
    message: '',
  }),
  methods: {
    sendMail() {
      window.open(
        `mailto:pieceofmind@htlwienwest.at?subject=${this.subject}&body=${this.message}`,
      );
    },
  },
};
</script>

<style>
#parallax {
  background-image: url('../assets/aboutbg.avif');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
}
.text-shadow {
  text-shadow: 2px 2px rgba(0, 0, 0, 0.5);
}
.bg-about {
  background: linear-gradient(0deg, rgb(102, 70, 124) 0%, rgb(48, 11, 90) 100%);
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}
html {
  scroll-behavior: smooth;
}
:target:before {
  content: '';
  display: block;
  height: 100px;
  margin: -100px 0 0;
}
.btn-light:hover {
  background-color: transparent !important;
}
.no-border {
  border: 0px !important;
}

.fixed-nav {
  position: fixed;
  bottom: 3vh;
  right: 2.5vh;
  width: 5vh;
  height: 5vh;
}
#arrow {
  width: 6vh;
}
.rounded-4 {
  border-radius: 0.8rem !important;
}
#scrollindi {
  position: absolute;
  bottom: 10px;
}
</style>
