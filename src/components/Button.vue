<template>
  <div class="body-button" @click="clicked">
    <a href="#">{{ text }}</a>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      required: true
    }
  },
  methods: {
    clicked() {
      this.$emit("clicked");
    }
  }
};
</script>

<style scoped></style>
