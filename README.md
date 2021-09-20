# Element
 A simple element that turns into html, with the function of preloading data, and reloading html

## How to use?
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
 render({name:"world"}){
 this.node = document.createElement(`h3`);
 this.node.textContent = `Hello ${name}`;
 //OR
 this.node.innerHTML = `<h3>Hello ${name}</h3>`
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
    <div id="app">
      <h1></h1>
    </div>
    <script type="module">
      import {HelloElement} from './HelloElement';
      let app = document.querySelector('#app');
      app.append(HelloElement().render());

      // Mutation of existing nodes
      new HelloElement().querySelectorAll({selector:`#app h3`});
      // OR
      let h1HTML = document.querySelector('#app h3');
      new HelloElement().touch({node:h1HTML})
    </script>
</body>
</html>
```
### Dynamic parameters
You can set the required properties in the inherited render function
> When using the querySelectorAll function, the parameters will be read from the data-[`any-name`] attributes

```html

<html>
 <title>Dynamic parameters</title>
<head>
</head>
<body>
    <div id="app">
      <h3 data-name="world"></h3>
    </div>
    <script type="module">
      import {HelloElement} from './HelloElement';
      new HelloElement().querySelectorAll({selector:`#app h3`});
      // let dataset = node.dataset;
      // let dataKeys = Object.keys(dataset); h3[name:world]
      // let key = dataKeys[indexKey];
      // let value = dataset[key];
      // data[key] = value;
      // HelloElement.render(data);
      // <h3 data-name="world">Hello world</h3>
    </script>
</body>
</html>
```