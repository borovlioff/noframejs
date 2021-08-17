export class Element {
  node: HTMLElement;

  constructor() {
    this.onMount();
  }

  async onMount() {}

  reRender(...args:any[]){
    for(let i = 0; i < this.node.childNodes.length; i){
      this.node.children[i].remove();
    }

    this.node.replaceWith(this.render(...args));
  }

  render(...args:any[]) {
    this.node = document.createElement("h1");
    this.node.textContent = `New Element`;
    return this.node;
  }
}
