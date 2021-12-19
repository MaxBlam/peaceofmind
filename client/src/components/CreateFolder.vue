<template>
  <div
    class="modal-dialog modal-dialog-centered"
    id="createFolder"
    aria-hidden="true"
  >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"
            >Email address</label
          >
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label"
            >Example textarea</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
