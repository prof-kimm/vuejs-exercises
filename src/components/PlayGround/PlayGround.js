export default {
  name: "PlayGround",
  data() {
    return {
      backgroundClassName: "red-background",
      counter: 0,
      message: 'static message',
      anchorTag: '<a href="http://google.ca">{{ message }}</a>',
      nameInput: 'No Named',
    };
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('');
    },
  },
  watch: {
    nameInput(newValue, oldValue) {
    /* eslint-disable no-console */
      console.log('old value: ', oldValue);
      console.log('new value: ', newValue);
    }
  },
  methods: {
    handleClick() {
      this.counter++;

      // string interpolation
      this.message = `you are clicking this ${this.counter} times!`
      
      // ternary operator
      this.backgroundClassName = this.counter % 2 ? 'green-background' : 'red-background';

      this.message = this.nameInput;
    },
  }
};
