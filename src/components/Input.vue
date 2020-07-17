<template>
  <div class="form-group">
    <label :for="id" class="form-group__label">{{ label }}</label>
    <input
      :type="type"
      v-model="inputValue"
      class="form-group__input"
      ref="image"
      :id="id"
      :required="required"
      @keypress="validate"
    />
  </div>
</template>

<script>
import { validations } from "../mixins/validation";

export default {
  name: "Input",
  mixins: [validations],
  props: {
    type: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    inputValue() {
      this.$emit("changed", this.inputValue);
    }
  },
  data() {
    return {
      inputValue: ""
    };
  },
  methods: {
    validate($event) {
      (this.type === 'tel') && this.isNumber($event);
    }
  }
};
</script>

<style scoped></style>
