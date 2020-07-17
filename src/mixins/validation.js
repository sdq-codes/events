export const validations = {
  methods: {
    isNumber(evt) {
      const charCode = evt.which ? evt.which : evt.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault();
      }
    },
    isEmail(value) {
      this.isNotEmpty(value);
      const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
      if (!emailRegex.test(value)) {
        return false;
      } else {
        return true;
      }
    },
    isNotEmpty(value) {
      if (value.length < 1) {
        return false;
      } else {
        return true;
      }
    }
  }
};
