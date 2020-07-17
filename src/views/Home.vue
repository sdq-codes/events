<template>
  <div class="container">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "./../components/Header";
import Footer from "../components/Footer";
import { notifications } from "../mixins/notifications";
import { mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: { Footer, Header },
  mixins: [notifications],
  created() {
    this.fetchEvents()
      .then(() => {
        this.notify("Events have been successfully loaded", "success");
      })
      .catch(() => {
        this.notify("Events have been successfully loaded", "error");
      });
  },
  methods: {
    ...mapActions("events", {
      fetchEvents: "addToEvents"
    })
  }
};
</script>

<style scoped></style>
