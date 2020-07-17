export const count = {
  data() {
    return {
      value: 0
    };
  },
  methods: {
    increment() {
      this.value += 1;
    },
    decrement() {
    	if (this.value > 0)
        this.value -= 1;
    }
  }
};
