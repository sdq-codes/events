// import VueToast from "vue-toast-notification";

export const notifications = {
  methods: {
    notify(message, type) {
      this.$toast.open({
        message: message,
        duration: 5000,
        position: "top-right",
        type: type
      });
    }
  }
};
