declare class Component {
    node: HTMLElement | any;
    constructor():void
  
    onMount():any
  
    querySelectorAll({ selector }: { selector: string }):HTMLElement[]
  
    touch({ node }: { node: HTMLElement }): void
  
    reRender(...args: any[]):void
  
    render(...args: any[]):HTMLElement;
  }
  