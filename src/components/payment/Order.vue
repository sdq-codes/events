<template>
  <div class="payment-modal__order-group">
    <div v-show="!isShowing" class="payment-modal__order">
      <h3 class="payment-modal__order__title">ORDER SUMMARY</h3>
      <div
        class="payment-modal__order__ticket-info"
        v-for="(value, key) in currentCart"
        :key="key"
      >
        <p class="payment-modal__order__ticket-info__type">
          {{ value }} - {{ eventTicket[key].name }}
        </p>
        <p class="payment-modal__order__ticket-info__price">
          {{ eventTicket[key].price * value }}
        </p>
      </div>
      <div class="payment-modal__order__ticket-info__order-summary">
        <div class="payment-modal__order__ticket-info">
          <p class="payment-modal__order__ticket-info__type">Sub-total</p>
          <p class="payment-modal__order__ticket-info__price">
            N{{ subTotal }}
          </p>
        </div>
        <div class="payment-modal__order__ticket-info">
          <p class="payment-modal__order__ticket-info__type">VAT</p>
          <p class="payment-modal__order__ticket-info__price">
            N{{ 0.05 * subTotal }}
          </p>
        </div>
        <div class="payment-modal__order__ticket-info">
          <p class="payment-modal__order__ticket-info__type__total">
            TOTAL PAYMENT
          </p>
          <p class="payment-modal__order__ticket-info__price__total">
            N{{ total }}
          </p>
        </div>
        <Button text="CONTINUE" @clicked="toggleShow" />
      </div>
    </div>
    <div v-show="isShowing" class="payment-modal__order">
      <h3 class="payment-modal__order__title">
        <svg
          class=""
          @click="toggleShow"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12H5"
            stroke="#333333"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 19L5 12L12 5"
            stroke="#333333"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Go Back
      </h3>
      <form action="" v-if="!transactionCompleted">
        <Input
          @changed="name = $event"
          type="text"
          label="First Name"
          id="name"
          :required="true"
        />
        <Input
          @changed="email = $event"
          type="email"
          label="Email"
          id="email"
          :required="true"
        />
        <Input
          @changed="telephone = $event"
          type="tel"
          label="Telephone"
          id="telephone"
          :required="true"
        />
        <div class="payment-modal__order__ticket-info">
          <p class="payment-modal__order__ticket-info__type__total">
            TOTAL PAYMENT
          </p>
          <p class="payment-modal__order__ticket-info__price__total">
            N{{ total }}
          </p>
        </div>
        <Button @clicked="createOrder" :text="`Pay N${total}`" />
      </form>
    </div>
    <div>
      <div class="payment-modal__guarantee">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6204 25.0104L10.7736 25.8376C9.97042 26.1973 9.02503 25.944 8.50934 25.2309L7.32356 23.5911C7.16849 23.3767 6.9293 23.2386 6.66605 23.2115L4.65308 23.0045C3.77765 22.9144 3.08558 22.2224 2.99554 21.3469L2.7885 19.3339C2.76143 19.0707 2.62333 18.8315 2.40889 18.6764L0.769125 17.4907C0.0559958 16.975 -0.197319 16.0296 0.162423 15.2264L0.989612 13.3796C1.09779 13.1381 1.09779 12.8619 0.989612 12.6204L0.162423 10.7736C-0.197319 9.97042 0.0559958 9.02504 0.769125 8.50934L2.40889 7.32356C2.62333 7.16849 2.76143 6.9293 2.7885 6.66605L2.99554 4.65308C3.08558 3.77765 3.77765 3.08557 4.65308 2.99553L6.66605 2.7885C6.9293 2.76143 7.16849 2.62333 7.32356 2.40889L8.50934 0.769125C9.02503 0.0559959 9.97042 -0.197319 10.7736 0.162423L12.6204 0.989606C12.8619 1.09778 13.1381 1.09778 13.3796 0.989606L15.2264 0.162423C16.0296 -0.197319 16.975 0.0559959 17.4907 0.769125L18.6764 2.40889C18.8315 2.62333 19.0707 2.76143 19.3339 2.7885L21.3469 2.99553C22.2224 3.08557 22.9144 3.77765 23.0045 4.65308L23.2115 6.66605C23.2386 6.9293 23.3767 7.16849 23.5911 7.32356L25.2309 8.50934C25.944 9.02504 26.1973 9.97042 25.8376 10.7736L25.0104 12.6204C24.9022 12.8619 24.9022 13.1381 25.0104 13.3796L25.8376 15.2264C26.1973 16.0296 25.944 16.975 25.2309 17.4907L23.5911 18.6764C23.3767 18.8315 23.2386 19.0707 23.2115 19.3339L23.0045 21.3469C22.9144 22.2224 22.2224 22.9144 21.3469 23.0045L19.3339 23.2115C19.0707 23.2386 18.8315 23.3767 18.6764 23.5911L17.4907 25.2309C16.975 25.944 16.0296 26.1973 15.2264 25.8376L13.3796 25.0104C13.1381 24.9022 12.8619 24.9022 12.6204 25.0104ZM7.98252 11.2433L6.40654 12.8193L11.6971 18.1099L19.8185 9.98847L18.2426 8.41249L11.6971 14.9579L7.98252 11.2433Z"
            fill="#2D9CDB"
          />
        </svg>
        <div class="payment-modal__guarantee__info">
          <h6 class="payment-modal__guarantee__info__title">
            100% customer protection
          </h6>
          <h6 class="payment-modal__guarantee__info__sub-title">
            Money back guarantee
          </h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../../components/Button";
import { toggle } from "../../mixins/toggle";
import Input from "../../components/Input";
import { validations } from "../../mixins/validation";
import { mapGetters } from "vuex";
import { notifications } from "../../mixins/notifications";
import { registerForEvent } from "../../utils/api/Events/events";
export default {
  name: "Order",
  components: { Button, Input },
  mixins: [toggle, validations, notifications],
  created() {
    const script = document.createElement("script");
    script.src = "https://checkout.flutterwave.com/v3.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  },
  computed: {
    ...mapGetters("cart", {
      currentCart: "currentCart"
    }),
    subTotal() {
      let subTotal = 0;
      for (const key of Object.keys(this.currentCart)) {
        subTotal += this.eventTicket[key].price * this.currentCart[key];
      }
      return subTotal;
    },
    total() {
      return 0.05 * this.subTotal + this.subTotal;
    }
  },
  props: {
    cart: {
      type: Object,
      required: true
    },
    eventTicket: {
      type: Array,
      required: true
    },
    event: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      name: "",
      email: "",
      telephone: "",
      transactionCompleted: false
    };
  },
  methods: {
    placeOrder() {
      const vm = this;
      window.FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-50436194c91fc1ddf511f1504a56d3b3-X",
        tx_ref: "new-sale" + new Date(),
        amount: this.total,
        currency: "NGN",
        country: "NG",
        payment_options: "card",
        customer: {
          email: this.email,
          phone_number: this.telephone,
          name: this.name
        },
        callback: data => {
          if (data.status === "successful") {
            vm.requestPaidOrder();
          }
        },
        onclose: function() {},
        customizations: {
          title: "Event Ticket",
          description: "Payment for event ticket"
        }
      });
    },
    createOrder() {
      const isEmail = this.isEmail(this.email);
      const isNameNotEmpty = this.isNotEmpty(this.name);
      const isTelephoneNotEmpty = this.isNotEmpty(this.telephone);
      if (isEmail && isNameNotEmpty && isTelephoneNotEmpty) {
        this.placeOrder();
      } else {
        !isEmail && this.notify("Kindly enter a valid email.", "error");
        !isNameNotEmpty && this.notify("Kindly enter your full name.", "error");
        !isTelephoneNotEmpty &&
          this.notify("Kindly enter your telephone number.", "error");
      }
    },
    requestPaidOrder() {
      registerForEvent(
        {
          name: this.name,
          email: this.email,
          phone: this.telephone,
          base_amount: this.subTotal,
          value_added_tax: 0.05 * this.subTotal,
          tickets_bought: JSON.stringify(this.currentCart),
          event_id: this.event.id
        },
        this.event.id
      ).then(() => {
        this.toggleShow();
        this.paymentModal = false;
        this.transactionCompleted = true;
        this.notify(
          "You have successfully registered for this event",
          "success"
        );
        this.$emit("closeTab");
        this.$emit("successfull");
      });
    }
  }
};
</script>

<style scoped></style>
