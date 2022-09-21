//les données utilisées par l'application vue qui sera générée

const appData = {
  data() {
    return {
      message: "Gestion des inputs",
      number: 3,
      string: "Une phrase",
    };
  },
  computed: {
    addSelf() {
      return this.number + this.number;
    },
    pow2() {
      return Math.pow(this.number, 2);
    },
    sqrt() {
      return Math.sqrt(this.number);
    },
    odd() {
      return this.number % 2 == 0;
    },
    strlen() {
      return this.string.length;
    },
    upper() {
      return this.string.toUpperCase();
    },
    wordCount() {
      if (this.strlen == 0) return;
      return this.string.match(/\b/gm).length / 2;
    },
    charivari() {
      const chars = this.string.split("").sort((char) => Math.random() - 0.5);
      return chars.join("");
    },
  },
};

export default appData;
