export default {
  name: "PlayGround",
  data() {
    return {
      input: "",
      message: "some random message",
      noCacheMessage: "some random message",
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
    };
  },
  computed: {
    reverseMessage() {
      return this.noCacheMessage
        .split("")
        .reverse()
        .join("");
    }
  },
  watch: {
    question() {
      this.answer = "Waiting for you to stop typing...";
      setTimeout(() => {
        this.answer = "time ran out!"; 
      }, 4000);
      // this.debouncedGetAnswer();
    },
  },
  methods: {
    handleChange(value) {
      /* eslint-disable */
      console.log("value", value);
    },
    reverseMessageNotCached() {
      // this.noCacheMessage = 'changedCacheMessage'
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
};
