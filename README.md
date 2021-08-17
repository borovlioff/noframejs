# Element
 A simple element that turns into html, with the function of preloading data, and reloading html

##How to use?
Import the main class and inherit into your component.

```js
import { Element } from "./Element";

export class HelloElement extends Element {
}
```

Put in the render function the implementation of creating your component

```js
import { Element } from "./Element";

export class HelloElement extends Element {
render(){
 this.node = document.createElement(`h3`);
 this.node.textContent = `Hello`;
 
 return this.node;
}
}
```
> Важно! Кнопку добавления в избранное стоит размещать внутри формы продукта.
