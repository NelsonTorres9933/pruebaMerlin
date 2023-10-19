module.exports = class petsNumber {
  dict;

  constructor(dict) {
    this.dict = dict;
  }

  async sameName() {
    let counts = {};
    this.dict.forEach((element) => {
      counts[element.name] = (counts[element.name] || 0) + 1;
    });
    return counts;
  }
};
