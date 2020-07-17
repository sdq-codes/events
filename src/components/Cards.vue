<template>
  <transition name="fade-in">
    <router-link
    class="card"
    :to="{ name: 'event', params: { id: event.id } }"
  >
    <div class="card__container">
      <img v-if="event.image" :src="event.image" alt="" class="card__image" />
      <img
        v-else
        src="~@/assets/images/default.jpeg"
        alt=""
        class="card__image"
      />
      <h6 class="card__date">{{ event.start_time | moment("Do MMMM YYYY") }}</h6>
      <h4 class="card__title">
        {{ event.name }}
      </h4>
      <h6 v-if="event.is_free" class="card__free">Free</h6>
      <h6 v-else-if="event.is_sold_out" class="card__sold-out">Sold</h6>
      <h6 class="card__date" v-if="eventTicket.length === 1">
        N{{ eventTicket[0].price }}
      </h6>
      <h6 class="card__date" v-else-if="eventTicket.length > 1">
        N{{ eventTicket[0].price }} - N{{
          eventTicket[eventTicket.length - 1].price
        }}
      </h6>
    </div>
  </router-link>
  </transition>
</template>

<script>
export default {
  name: "Cards",
  props: {
    event: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    eventTicket() {
      return JSON.parse(JSON.stringify(this.event.ticket));
    }
  }
};
</script>

<style scoped></style>
