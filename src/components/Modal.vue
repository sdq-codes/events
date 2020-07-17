<template>
  <transition name="modal-fade">
    <div class="modal__backdrop">
      <div class="modal__content">
        <header class="modal__header">
          <slot name="header"> </slot>
          <svg
            @click="close"
            class="modal__header__button"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#333333"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </header>
        <slot name="seperator"> </slot>
        <slot name="body"> </slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  methods: {
    close() {
      this.$emit("close");
    },
    submit() {}
  }
};
</script>

<style scoped></style>
