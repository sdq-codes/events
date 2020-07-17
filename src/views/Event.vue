<template>
  <section class="section__event" v-if="event !== undefined">
    <modal v-if="isShowing" @close="toggleShow">
      <template slot="header">
        <h5 class="modal__header__title" v-if="!transactionCompleted">
          Register for free
        </h5>
      </template>
      <template slot="seperator" v-if="!transactionCompleted">
        <svg
          width="100%"
          height="1"
          viewBox="0 0 368 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="modal__seperator"
        >
          <line y1="0.5" x2="368" y2="0.5" stroke="#BDBDBD" />
        </svg>
      </template>
      <template slot="body">
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
          <Button text="Register" @clicked="requestFreeOrder" />
        </form>
        <div v-else class="modal__content__success">
          <svg
            width="137"
            height="137"
            viewBox="0 0 137 137"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M125.583 63.2476V68.4993C125.576 80.8089 121.59 92.7864 114.22 102.646C106.849 112.505 96.4894 119.717 84.685 123.207C72.8806 126.698 60.2642 126.278 48.7174 122.013C37.1707 117.747 27.3122 109.862 20.6124 99.5359C13.9126 89.2093 10.7303 76.9937 11.5402 64.7108C12.3502 52.4279 17.1089 40.7358 25.1067 31.3784C33.1045 22.021 43.9128 15.4996 55.9197 12.7868C67.9267 10.074 80.4889 11.3151 91.7328 16.3251"
              stroke="#F5A623"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M125.583 22.8335L68.5 79.9739L51.375 62.8489"
              stroke="#F5A623"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <h5 class="modal__content__message">
            You have successfully registered for the
            {{ event.name }} experience.
          </h5>
        </div>
      </template>
    </modal>
    <transition name="slide-fade">
      <payment-modal
        @closePaymentModal="togglePaymentModal"
        v-if="paymentModal"
        :event="event"
        :eventTicket="eventTicket"
        @closeTab="togglePaymentModal"
        @successfull="successfull"
      />
    </transition>
    <div class="section__event__section cont">
      <div class="section__event__section__container">
        <h5 class="section__event__section__medium-title">
          {{ event.start_time | moment("Do MMMM YYYY") }}
        </h5>
        <h2 class="section__event__section__large-title">
          {{ event.name }}
        </h2>
        <p class="section__event__section__italic">
          {{ event.description }}
        </p>
        <h6 v-if="event.is_free" class="section__event__section__price">
          Free
        </h6>
        <h6
          v-else-if="event.is_sold_out"
          class="section__event__section__price"
        >
          Sold
        </h6>
        <h6
          class="section__event__section__price"
          v-if="eventTicket.length === 1"
        >
          N{{ eventTicket[0].price }}
        </h6>
        <h6
          class="section__event__section__price"
          v-else-if="eventTicket.length > 1"
        >
          N{{ eventTicket[0].price }} - N{{
            eventTicket[eventTicket.length - 1].price
          }}
        </h6>
        <div class="section__event__section__button-cover">
          <Button
            v-if="!event.is_free"
            :text="'Register for free'"
            @clicked="toggleShow"
          />
          <Button
            v-else-if="event.is_sold_out"
            :text="'Sold Out'"
            class="disabled"
            @click.prevent.stop
          />
          <Button
            v-else-if="eventTicket.length >= 1"
            @clicked="togglePaymentModal"
            :text="'Buy Tickets'"
          />
          <Button
            v-else
            :text="'No Tickets Available'"
            class="disabled"
            @click.prevent.stop
          />
        </div>
      </div>
    </div>
    <div class="section__event__picture-section">
      <div class="section__event__section__container">
        <img
          v-if="event.image"
          :src="event.image"
          alt=""
          class="section__event__picture-section__imgae"
        />
        <img
          v-else
          src="~@/assets/images/default.jpeg"
          alt=""
          class="card__image"
        />
      </div>
    </div>
    <div class="section__event__line"></div>
    <div class="section__event__section cont">
      <div class="section__event__section__container">
        <h5 class="section__event__section__medium-title">Venue</h5>
        <h3 class="section__event__venue">
          {{ event.venue }}
        </h3>
        <span class="section__event__location">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M0.75 4.5V16.5L6 13.5L12 16.5L17.25 13.5V1.5L12 4.5L6 1.5L0.75 4.5Z"
                stroke="#F5A623"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 1.5V13.5"
                stroke="#F5A623"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 4.5V16.5"
                stroke="#F5A623"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="18" height="18" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h6 class="section__event__location__map-text">
            View map for direction
          </h6>
        </span>
      </div>
    </div>
    <div class="section__event__section cont">
      <div class="section__event__section__container">
        <h5 class="section__event__section__medium-title">Date and Time</h5>
        <h4 class="section__event__date">
          {{ event.start_time | moment("Do MMMM YYYY, h:mm a") }}
        </h4>
        <h5 class="section__event__social-title">Social Links</h5>
        <a class="section__event__social-links">http://www.nathanielcole.com</a>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Button from "../components/Button";
import { toggle } from "../mixins/toggle";
import Modal from "../components/Modal";
import Input from "../components/Input";
import { validations } from "../mixins/validation";
import { notifications } from "../mixins/notifications";
import { registerForFreeEvent } from "../utils/api/Events/events";
import PaymentModal from "../components/PaymentModal";

export default {
  name: "Event",
  components: { PaymentModal, Input, Modal, Button },
  mixins: [toggle, validations, notifications],
  data() {
    return {
      name: "",
      email: "",
      telephone: "",
      transactionCompleted: false,
      paymentModal: false
    };
  },
  computed: {
    ...mapState("events", {
      events: state => state.events
    }),
    event() {
      // console.log(this.events);
      let allEvent = this.events;
      return allEvent.find(
        event => parseInt(event.id) === parseInt(this.$route.params.id)
      );
    },
    eventTicket() {
      return JSON.parse(JSON.stringify(this.event.ticket));
    }
  },
  mounted() {
    console.log(this.event);
  },
  methods: {
    requestFreeOrder() {
      const isEmail = this.isEmail(this.email);
      const isNameNotEmpty = this.isNotEmpty(this.name);
      const isTelephoneNotEmpty = this.isNotEmpty(this.name);
      if (isEmail && isNameNotEmpty && isTelephoneNotEmpty) {
	      registerForFreeEvent(
          {
            email: this.email,
            phone: this.telephone,
            name: this.name
          },
          this.event.id
        ).then(() => {
          this.transactionCompleted = true;
          this.notify(
            "You have successfully registered for this event",
            "success"
          );
        });
      } else {
        !isEmail && this.notify("Kindly enter a valid email.", "error");
        !isNameNotEmpty && this.notify("Kindly enter your full name.", "error");
        !isTelephoneNotEmpty &&
          this.notify("Kindly enter your full name.", "error");
      }
    },
    togglePaymentModal() {
      this.paymentModal = !this.paymentModal;
    },
	  successfull() {
    	this.transactionCompleted = true;
    	this.toggleShow();
    }
  }
};
</script>

<style scoped></style>
