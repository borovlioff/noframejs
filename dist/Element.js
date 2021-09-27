export class Element {
  constructor() {
    this.onMount();
  }
  async onMount() {
  }
  querySelectorAll({selector}) {
    if (selector) {
      let nodes = document.body.querySelectorAll(selector);
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i];
        this.touch({node});
      }
    }
  }
  touch({node}) {
    this.node = node;
    let dataset = node.dataset;
    let dataKeys = Object.keys(dataset);
    let data = {};
    for (let i = 0; i < dataKeys.length; i++) {
      let key = dataKeys[i];
      let value = dataset[key];
      data[key] = value;
    }
    this.render(data);
  }
  async reRender(...args) {
    for (let i = 0; i < this.node.childNodes.length; i) {
      this.node.children[i].remove();
    }
    this.node.replaceWith(await this.render(...args));
  }
  render(...args) {
    this.node = document.createElement("h1");
    this.node.textContent = `New Element`;
    return this.node;
  }
}
