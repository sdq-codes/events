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
    placeOrder() {
      window.FlutterwaveCheckout({
        public_key: "INSERT YOUR PUBLIC KEY",
        tx_ref: "new-sale" + new Date(),
        amount: 29.99,
        currency: "USD",
        country: "NG",
        payment_options: "card",
        customer: {
          email: "ekene@gmail.com",
          phone_number: "+234702909304",
          name: "Ekene Eze"
        },
        callback: function(data) {
        },
        onclose: function() {},
        customizations: {
          title: "MealsHub",
          description: "Payment for selected meal",
          logo: "http://localhost:1337/uploads/beef_b538baa14d.png"
        }
      });
    }
  }
};
</script>

<style scoped></style>
