<template>
  <div class="payment-modal__tickets">
    <div class="payment-modal__tickets__content">
      <a
        href=""
        @click.prevent="closeModal"
        class="payment-modal__tickets__close-button"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          s
          <path
            d="M13.5 4.5L4.5 13.5"
            stroke="#333333"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.5 4.5L13.5 13.5"
            stroke="#333333"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Close
      </a>
      <h2 class="payment-modal__tickets__header">{{ event.name }}</h2>
      <h6 class="payment-modal__tickets__date">
        {{ event.start_time | moment("Do MMMM YYYY") }}
      </h6>
      <ticket
        v-for="(ticket, ticketKey) in eventTicket"
        :key="ticket.id"
        :ticket="ticket"
        :ticketKey="ticketKey"
      />
      <h5 class="payment-modal__tickets__ticket__end-date">
        Ticket sales end on {{ event.end_time | moment("Do MMMM YYYY") }}
      </h5>
    </div>
  </div>
</template>

<script>
import Ticket from "./Tickets/Ticket";
import { mapActions } from "vuex";
export default {
  name: "Tickets",
  components: { Ticket },
  data() {
    return {
      ticketCount: []
    };
  },
  mounted() {
    this.emptyCart();
  },
  props: {
    event: {
      type: Object,
      required: true
    },
    eventTicket: {
      type: Array,
      required: true
    }
  },
  methods: {
    ...mapActions("cart", {
      emptyCart: "emptyCart"
    }),
    closeModal() {
      this.$emit("closePaymentModal");
    }
  }
};
</script>

<style scoped></style>
