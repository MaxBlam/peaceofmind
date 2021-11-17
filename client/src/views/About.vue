<template>
  <div class="bg-about">
    <a class="fixed-nav m-1" href="#" type="button">
      <img src="@/assets/arrow.svg" id="arrow" alt="" />
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
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1 class="display-2 text-shadow text-center">Find your Inner Peace</h1>
      <i class="fas fa-chevron-down" id="scrollindi"></i>
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
              src="@/assets/ahmedpb.jpg"
              class="card-img-top rounded-4"
              alt="..."
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Ahmed Hasanovic</h5>
              <p class="card-text">Backend</p>
              <p>
                <span class="badge bg-about me-1">APIs</span>
                <span class="badge bg-about me-1">Data Manipulation</span>
                <span class="badge bg-about me-1">Formatting</span>
              </p>
              <a
                href="https://www.linkedin.com/in/ahmed-hasanovic-07a215188/"
                target="_blank"
                class="btn btn-light d-block mt-auto transition-sm"
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
              src="@/assets/maxpb.jpg"
              class="card-img-top rounded-4"
              alt="..."
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Maximilian Blam</h5>
              <p class="card-text">Frontend & Database</p>
              <p>
                <span class="badge bg-about me-1">Website</span>
                <span class="badge bg-about me-1">Progressive Web App</span>
                <span class="badge bg-about me-1">PostgreSQL Database</span>
              </p>
              <a
                href="https://www.linkedin.com/in/maximilian-blam"
                target="_blank"
                class="btn btn-light d-block mt-auto transition-sm"
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
              src="@/assets/moritzpb.jpg"
              class="card-img-top rounded-4"
              alt="..."
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Moritz Miedler</h5>
              <p class="card-text">Marketing & Design</p>
              <p>
                <span class="badge bg-about me-1">Corporate Branding</span>
                <span class="badge bg-about me-1">Social Media Management</span>
                <span class="badge bg-about me-1">Graphics</span>
              </p>
              <a
                href="https://www.linkedin.com/in/moritz-miedler-bb6107189/"
                target="_blank"
                class="btn btn-light d-block mt-auto transition-sm"
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
      "
    >
      <div class="container text-center">
        <h1 class="display-4">The Problem</h1>
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
        <img class="rounded-4 col-12 col-md-5" src="@/assets/logo.svg" />

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
        <h1 class="display-4">Find your Peace of Mind</h1>
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
            <img src="@/assets/badge_pc.png" width="100%" />
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
            <img src="@/assets/badge_leaning.png" width="100%" />
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
            <img src="@/assets/badge_mobile.png" width="100%" />
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
            <img src="@/assets/badge_timeline.png" width="100%" />
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
            <img src="@/assets/badge_easy.png" width="100%" />
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
            <img src="@/assets/badge_safe.png" width="100%" />
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
          <h1 class="display-4">Peace of Mind</h1>
          <p>
            PieceOfMind is an Web App available on mobile and pc to make your
            life easier. Just scan your handwritten notes and add them to a
            folder or subject. Keeping your notes organized has never been
            easier.
          </p>
          <a target="_blank" class="btn btn-outline-primary mb-4 transition-sm"
            ><router-link to="/" style="text-decoration: none">
              Try it!
            </router-link></a
          >
          <a
            href="https://github.com/MaxBlam/peaceofmind"
            target="_blank"
            class="btn btn-outline-primary ms-2 mb-4 transition-sm"
            >Github</a
          >
        </div>
        <img
          class="img-fluid rounded-4 shadow col-12 col-md-5"
          src="@/assets/ph.jpg"
        />
      </div>
    </div>
    <!-- End of The Project -->
    <!-- Start of FAQ -->
    <!-- <div class="container-fluid bg-light p-5">
      <div class="container">
        <h1 class="display-5 mt-5 mb-3" id="faq">Frequently asked Questions</h1>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Question 1
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
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
              >
                Question 2
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  -->
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
        <form class="p-4">
          <div class="row">
            <div>
              <div class="d-inline-block col-12 col-md-6 mb-2 px-2">
                <label class="form-label">Email address <span>*</span></label
                ><input
                  type="email"
                  placeholder="example@email.com"
                  name="user_email"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="d-inline-block col-12 col-md-6 mb-2 px-2">
                <label class="form-label">Name</label
                ><input
                  type="text"
                  placeholder="First name, Last name"
                  name="user_name"
                  class="form-control"
                />
              </div>
              <div class="d-inline-block col-12 mb-2 px-2">
                <label class="form-label">Subject <span>*</span></label
                ><input
                  type="text"
                  placeholder="..."
                  name="user_subject"
                  required="required"
                  class="form-control"
                />
              </div>
              <div class="col-12 mb-3 px-2">
                <label class="form-label">Message <span>*</span></label
                ><textarea
                  rows="7"
                  placeholder="..."
                  name="message"
                  required="required"
                  class="form-control"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-light mx-2">Confirm</button>
            </div>
          </div>
        </form>
      </div>
    </section>
    <!-- End of Contact -->
    <!-- Start of Footer -->
    <div class="container-fluid bg-light">
      <footer class="py-3 my-4">
        <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <li class="nav-item">
            <router-link to="/imprint" class="nav-link px-2 text-muted"
              >Imprint</router-link
            >
          </li>
          <li class="nav-item">
            <a
              href="https://www.instagram.com/pieceofmind_htlww/"
              class="nav-link px-2 text-muted"
              >Instagram</a
            >
          </li>
          <li class="nav-item">
            <a href="#faq" class="nav-link px-2 text-muted">FAQs</a>
          </li>
          <li class="nav-item">
            <a
              href="https://github.com/MaxBlam/peaceofmind"
              class="nav-link px-2 text-muted"
              >Github</a
            >
          </li>
        </ul>
        <p class="text-center text-muted">© 2021 Piece of Mind</p>
      </footer>
    </div>
    <!-- End of Footer -->
  </div>
</template>

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
.transition-sm {
  transition: 0.5s !important;
}
.no-border {
  border: 0px !important;
}
h1 {
  font-family: 'Jost', sans-serif;
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
