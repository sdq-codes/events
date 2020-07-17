<template>
  <div class="payment-modal">
    <tickets v-on="$listeners" :event="event" :eventTicket="eventTicket" />
    <Order
      v-on="$listeners"
      :event="event"
      :cart="cart"
      :eventTicket="eventTicket"
    />
  </div>
</template>

<script>
import Tickets from "./payment/Tickets";
import Order from "./payment/Order";
export default {
  name: "PaymentModal",
  components: { Order, Tickets },
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
  data() {
    return {
      cart: {}
    };
  },
  methods: {
  }
};
</script>

<style scoped></style>
