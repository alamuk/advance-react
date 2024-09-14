(sorting in Js)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort]
(Sorting String)[https://www.geeksforgeeks.org/sort-a-string-in-javascript/]



## Input
There are some specific form inputs that are always uncontrolled, like the file input tag.

In React,  `<input type="file" />`
is always an uncontrolled component because its value is read-only and can't be set programmatically. 

### control vs uncontrolled components
- `Control` component data handle by component state 
- `Uncontrol` component data handle by Dom itself.


## Events for React for input
(Events from React:)[https://legacy.reactjs.org/docs/events.html#focus-events]
#### onFocus:
The onFocus event is called when the element (or some element inside it) receives focus. 
For example, it’s called when the user clicks on a text input.


#### onBlur
The onBlur event handler is called when focus has left the element (or left some element inside it).
For example, it’s called when the user clicks outside a focused `text input`, 
What’s the correct event prop you should use to determine when an input has been interacted with at least once? 

https://github.com/jquense/yup
https://legacy.reactjs.org/docs/forms.html
https://formik.org/
https://github.com/react-hook-form/react-hook-form


# Props and State: 
------------------
- both are plain `JS object`.
- both are built in an object in React
- the React uses to `hold the information`. as a`storage`
- both influence the render the output.
- main different between them is: how they pass in the component. 
- `Props` get passed to the component - like parameters in a function. 
- props are offered to pass the data down to a children component
- `State` is managed within the component - like variables declared within a function. 
- there are areas they overlap— especially when designing a component. 
- its main responsibility is to translate raw data into rich HTML in the React ecosystem. 
- both are changed, and both are trigger and updates. 
## `the rule of thumb is: `
### `State`: 
------------
- when a component needs to alter one of its attributes at some point in time, that attributes should be part of its state.
-  This object is a way to allow react to determine when it should re-render. 
- A component react is set up so that any change to the value served in the state object will trigger a rear ender of a given component states.
### `Props`: 
------------
- which is a shorthand for properties are a components configuration. 
- They are received from parents in the tree and are immutable as far as the component receiving them is concerned. 
- A component cannot change its props, but it is responsible for putting together the props of its child components. 

# Context API: Context Application Programming Interface.
----------
- passing data as a props to the component called `Context`
- global state of the entire application.
  

## Summery of context for use
-----------------------------

### 1. create context
`import { createContext, useState } from 'react';`
`const BooksContext = createContext({});` /// could be: undefined / null / empty object {}'
### 2. create Provider function for that context we created. 
note: this component accepts value={} props. which will be passed to consuming components. 
### 3. in the provider function - use
   `children as a props`
   `state for update`
   and
   `oject for valueShared`

   and
   `return` the Created Context with provider `children` and `shared value object`
   `return <BooksContext.Provider value={valueShared} children={children} />;`

 example for: 2 and 3 :
-----------------------

```js
export function Provider({ children }) {
  const [count, setCount] = useState(5);

  const valueShared = {
    count,
    incrementCount: () => {
      setCount(count + 1);
    },
  };
  return <BooksContext.Provider value={valueShared} children={children} />;
}
```

### 4. wrap up children components who are using it.
   `<Provider>
  <children components />
</Provider>`
   );


### 5. use `shared variables` which we want to use it through `useContext(with context name)`
   ` const { count } = useContext(BooksContext);`

### for (5) use custom hook - will be better: 
```js
import { useContext } from 'react';
import BooksContext from '../Contex/Books';

function useBookContext() {
return useContext(BooksContext);
}

export default useBookContext;
```

