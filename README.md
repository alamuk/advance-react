#React important Link: 

1. [Sorting in Js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
2. [Sorting String](https://www.geeksforgeeks.org/sort-a-string-in-javascript/)
3. [State](https://react.dev/learn/choosing-the-state-structure)


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

## useMemo Hook
If your component renders the same result given the same props, 
you can wrap it in a call to React.memo for a performance boost by memorizing the result.

Memoization is a programming technique that speeds up performance by caching the return values of expensive function calls.

This means that React will skip rendering the component, and reuse the last rendered result.
A good rule of thumb is to wrap the React component right after your context provider with React.memo.

we need to remember that in JavaScript, the below assertion is true:

{a: ‘hi’, b: ‘bye’} !== {a: ‘hi’, b: ‘bye’} // true

That is because object comparison in JavaScript is done by reference. 
Every time a new re-render happens in the App component, a new instance of the value object is created, 
resulting in the provider performing a comparison against its previous value and determining that it has changed, 
hence informing all context consumers that they should re-render.

This problem can be resolved by using the useMemo hook from React as follows. 

https://legacy.reactjs.org/docs/hooks-reference.html#usememo


# useHooks()

# destructuring 
### for array, we can put any name of the item when destructuring 
### for object, we have to use exact name (`key`) when destructuring. 
- when the structuring objects, you have to d structure a property of an object using that exact properties name as the name of the d structured variable. 
- This makes objects a lot stricter in terms of what you can name your D structure variables. 
- For that reason, `react uses` the `array data structure` for the `used state hooks` return value.


The correct way to update the state object in React when using useState
The suggested approach for updating the state object in React when using useState is to `copy the state object` and `then update the copy`.

This usually involves using the `spread operator (...)`

Specifically, the TypeError is: "Assignment to constant variable".

To reiterate, the proper way of working with state when it's saved as an object is to:

Copy the old state object using the spread (...) operator and save it into a new variable and

Pass the new variable to the state-updating function


### why we do shallow copy when updated. 
The set form data function accepts a shallow clone of the `previous value` of the form data variable. 
That's the form data variable with the spread operator before it here. 
Remember that we `should not work` with the form data variable `directly` which is why, we are making a copy. 
This is because of `how React optimizes its virtual DOM`. 
Keeping `state immutable` makes it possible `to compare a previous version` of the virtual DOM with the updated version more efficiently and cost effectively.




### dynamic update of the key and value: through an event 
for object update: 
-----------------
`setUpdate({...pre, [e.target.name]: e.target.value});`

here, we are updating the object any name it has, and it values from input. 
so dynamically, object for name/ `key`:  update `[e.target.name]`
for value: `e.target.value`


