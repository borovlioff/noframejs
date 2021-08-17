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

Now, when calling render, an element will be returned, which can be inserted into the DOM.
Also, we can reRender element.
> reRender delete all children's and main node, so all external lisener necessary sign again

```html

<html>
 <title>Element</title>
<head>
</head>
<body>
    <div id="app"></div>
    <script type="module">
      import {HelloElement} from './HelloElement';
      let app = document.querySelector('#app');
      app.append(HelloElement().render());
    </script>
</body>
</html>
