export class Element {
  node: HTMLElement | any;
  constructor() {
    this.onMount();
  }

  async onMount() {}

  querySelectorAll({ selector }: { selector: string }) {
    if (selector) {
      let nodes = document.body.querySelectorAll(selector);
      for (let i = 0; i < nodes.length; i++) {
        let node = nodes[i] as HTMLElement;
        this.touch({ node: node });
      }
    }
  }

  touch({ node }: { node: HTMLElement }) {
    this.node = node;
    let dataset = node.dataset;
    let dataKeys = Object.keys(dataset);
    let data:{} = {};
    for (let i = 0; i < dataKeys.length; i++) {
      let key = dataKeys[i];
      let value = dataset[key];
      data[key] = value;
    }
    this.render( data );
  }

  async reRender(...args: any[]) {
    for (let i = 0; i < this.node.childNodes.length; i) {
      this.node.children[i].remove();
    }

    this.node.replaceWith(await this.render(...args));
  }

  render(...args: any[]) {
    this.node = document.createElement("h1");
    this.node.textContent = `New Element`;
    return this.node;
  }
}
