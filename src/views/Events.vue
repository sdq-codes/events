<template>
  <section class="section section__events">
    <h2 class="section__events__header">The best events happening now.</h2>
    <div class="section__events__cards">
      <Cards
        v-for="event in events"
        :key="event.id"
        :event="event"
        :index="events.indexOf(event)"
      />
    </div>
    <div class="section__events__button-group">
      <div class="section__events__button-group__single-button">
        <Button
          text="See More"
          @clicked="editPage(page +1)"
          v-if="page < 2"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Cards from "./../components/Cards";
import Button from "../components/Button";
import { mapState, mapActions } from "vuex";

export default {
  name: "Events",
  components: { Cards, Button },
  computed: {
    ...mapState("events", {
      events: state => state.events,
      page: state => state.page
    })
  },
  methods: {
    ...mapActions("events", {
      editPage: "editPageInfo"
    })
  }
};
</script>

<style scoped></style>
