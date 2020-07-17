<template>
  <div class="payment-modal__tickets__ticket">
    <h5 class="payment-modal__tickets__ticket__name">{{ ticket.price }}</h5>
    <h5 class="payment-modal__tickets__ticket__price">{{ ticket.name }}</h5>
    <div class="payment-modal__tickets__ticket__quantity">
      <div
        @click="decrement"
        class="payment-modal__tickets__ticket__quantity__round-button"
      >
        <svg
          width="10"
          height="4"
          viewBox="0 0 10 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="payment-modal__tickets__ticket__quantity__round-button__sign"
        >
          <path
            d="M8 0C9.10457 0 10 0.895431 10 2C10 3.10457 9.10457 4 8 4H2C0.89543 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0H8Z"
            fill="#828282"
          />
        </svg>
      </div>
      <h5 class="payment-modal__tickets__ticket__quantity__text">
        {{ value }}
      </h5>
      <div
        @click="increment"
        class="payment-modal__tickets__ticket__quantity__round-button"
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="payment-modal__tickets__ticket__quantity__round-button__sign"
        >
          <path
            d="M10 4.99005C10 5.49288 9.59238 5.9005 9.08955 5.9005H8.00717C6.90656 5.9005 6.01434 6.79272 6.01434 7.89333V8.97541C6.01434 9.54128 5.55562 10 4.98975 10C4.42389 10 3.96516 9.54128 3.96516 8.97541V7.88308C3.96516 6.78813 3.07753 5.9005 1.98258 5.9005H0.910448C0.407621 5.9005 0 5.49288 0 4.99005C0 4.48722 0.407621 4.0796 0.910448 4.0796H1.98258C3.07753 4.0796 3.96516 3.19197 3.96516 2.09702V1.02459C3.96516 0.458724 4.42389 0 4.98975 0C5.55562 0 6.01434 0.458724 6.01434 1.02459V2.08678C6.01434 3.18738 6.90656 4.0796 8.00717 4.0796H9.08955C9.59238 4.0796 10 4.48722 10 4.99005Z"
            fill="#828282"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { count } from "../../../mixins/count";
import { mapActions } from "vuex";

export default {
  name: "Ticket",
  mixins: [count],
  props: {
    ticket: {
      type: Object,
      required: true
    },
    ticketKey: {
      type: Number,
      required: true
    }
  },
  watch: {
    value() {
      this.editCart({
        value: this.value,
        ticketKey: this.ticketKey
      });
    }
  },
  methods: {
    ...mapActions("cart", {
      editCart: "editCart"
    })
  }
};
</script>

<style scoped></style>
