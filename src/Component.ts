export class Component {
  node: HTMLElement | any;
  constructor() {
    this.onMount();
  }

  async onMount() {}

   querySelectorAll({ selector }: { selector: string }) {
    if (selector) {
      let nodes = document.body.querySelectorAll(selector);
      let listNode:any[] = []
      for (let indexNode = 0; indexNode < nodes.length; indexNode++) {
        let node = nodes[indexNode] as HTMLElement;
        let newNode = this.touch({ node: node });
        listNode.push(newNode);
      }
      return listNode;
    }
  }

  touch({ node }: { node: HTMLElement }) {
    this.node = node;
    let dataset = node.dataset;
    let dataKeys = Object.keys(dataset);
    let data:{} = {};
    for (let indexKey = 0; indexKey < dataKeys.length; indexKey++) {
      let key = dataKeys[indexKey];
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
