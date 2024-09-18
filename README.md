#React important Link:

1. [Sorting in Js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
2. [Sorting String](https://www.geeksforgeeks.org/sort-a-string-in-javascript/)
3. [State](https://react.dev/learn/choosing-the-state-structure)

## Input

There are some specific form inputs that are always uncontrolled, like the file input tag.

In React, `<input type="file" />`
is always an uncontrolled component because its value is read-only and can't be set programmatically.

### control vs uncontrolled components

- `Control` component data handle by component state
- `Uncontrolled` component data handle by Dom itself.

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

---

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

---

- when a component needs to alter one of its attributes at some point in time, that attributes should be part of its state.
- This object is a way to allow react to determine when it should re-render.
- A component react is set up so that any change to the value served in the state object will trigger a rear ender of a given component states.

### `Props`:

---

- which is a shorthand for properties are a components configuration.
- They are received from parents in the tree and are immutable as far as the component receiving them is concerned.
- A component cannot change its props, but it is responsible for putting together the props of its child components.

# Context API: Context Application Programming Interface.

---

- passing data as a props to the component called `Context`
- global state of the entire application.

## Summery of context for use

---

### 1. create context

`import { createContext, useState } from 'react';`
`const BooksContext = createContext({});` /// could be: undefined / null / empty object {}'

### 2. create Provider function for that context we created.

note: this component accepts value={} props. which will be passed to consuming components.

### 3. in the provider function - use

`children as a props`
`state for update`
and
`object for valueShared`

and
`return` the Created Context with provider `children` and `shared value object`
`return <BooksContext.Provider value={valueShared} children={children} />;`

## example for: 2 and 3 :

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
import BooksContext from '../Context/Books';

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

---

## useState

---

### destructuring

#### for array, we can put any name of the item when destructuring

#### for object, we have to use exact name (`key`) when destructuring.

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

## for object update:

`setUpdate({...pre, [e.target.name]: e.target.value});`

here, we are updating the object any name it has, and it values from input.
so dynamically, object for name/ `key`: update `[e.target.name]`
for value: `e.target.value`

## useEffect

---

#### 1. sideEffect:

If the function calls another function inside it to get the data from Api, outside the React app to work properly.
The console log call makes the function impure as it's a call to a browser, application programming interface or API.
A side effect can be thought of as something external to or outside a function.
`the function depends on something outside of itself and even outside of the react app to work properly.`
A side effect is something that makes a function in pure.

- invoke console.log();// changes directly to the browser with a function.
- invoke fetch()
- invoke geolocation()
  these three things make the function impure because it has a side effect.

#### So how should you deal with the issue of impure functions in React.

---

- useEffect hook
- inside the useEffect hook we will put those outside function and code.
  `useEffect(()=>{
console.log('hello');
}, [])`

- it has a callback function `()=>` and array`[]` for dependency

- Three ways we can use it.
- 1. without [] dependency array, it will call every time component render.
     By default, if no second argument is provided to the useEffect function, the effect will run after every render.

- 2. with [] dependency array but empty, it will run the function inside it just once when the component first renders.

- 3. with [] dependency array but NOT empty , and has specific dependency when it will run its code.

#### 2. pure function: no side effect

- always return the same output. take props input
-

#### 3. impure Function: has side effect

Note:
the correct usage of the dependency array and the different useEffect calls
that can be used to separate different concerns.
We also need to know how you can clean up resources
and free up memory in your useEffect logic by returning a function.
The `useEffect` hook has been designed to keep the code for adding and removing a subscription together, since it’s tightly related.
In addition, depending on our configuration via the dependencies array, the effects can also run `when certain state variables or props change`.

```
useEffect(() => {
   document.title = 'Little Lemon';
 });

useEffect(() => {
document.title = `Little Lemon, v${version}`;
}, [version]); // Only re-run the effect if version changes

```

### Use multiple Effects to Separate Concerns

# Note:

#### if we are making multiple hooks calls, we need to call them in the same sequence. we have to always make multiple hooks calls in the same sequence.

---

React doesn’t limit you in the number of effects your component can have.
In fact, it encourages you to group related logic together in the same effect and break up unrelated logic into different effects.

```javascript
function MenuPage(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    document.title = 'Little Lemon';
  }, []);

  useEffect(() => {
    fetch(`https://littlelemon/menu/${id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [props.id]);

  // ...
}
```

### Effects with Cleanup

---

Some side effects may need to clean up resources or memory that is not required anymore, avoiding any memory leaks that could slow down your applications.

For example, you may want to set up a subscription to an external data source.
In that scenario, it is vital to perform a `cleanup` after the effect finishes its execution.

```javascript
function LittleLemonChat(props) {
  const [status, chatStatus] = useState('offline');

  useEffect(() => {
    LemonChat.subscribeToMessages(props.chatId, () => setStatus('online'));

    return () => {
      setStatus('offline');
      LemonChat.unsubscribeFromMessages(props.chatId);
    };
  }, []);

  // ...
}
```

Returning a function is optional and it’s the mechanism React provides in case you need to perform additional cleanup in your components.

React will make sure to run the cleanup logic when it’s needed.
The execution will always happen when the component unmounts. However, in effects that run after every render and not just once, React will also clean up the effect from the previous render before running the new effect next time.

# Rules of Hooks: four rules

---

1. we should only call hooks from a React Component Function
2. we should only call hooks at the top level of React component function/ not inside the condition/ loops
3. allow calling multiple hooks and effect
4. always make these multiple hook calls in the same sequence. / for the same sequence of invocation from one render to the next.
5. we can do `if condition ` inside the useEffect hook.

# `fetch ()` function fetch API

---

Q-1.How the Fetch function works to retrieve data from the web
Q-2.How to provide an example in plain JavaScript of the process.

- Fetch is used to make a server requests to retrieve some JSON data from it
  Post Office Clerk: Example:
- It's a bit like a clerk at the post office.
  Say you're bringing a package to the post office and you're the first in the queue. The clerk on the other side of the service desk is JavaScript.
  Since they can only do one thing at a time.
  They go through the process of getting your details, measuring the weight of the package, pasting stamps onto the package,
  charging you for the service, and go into the back-office
  and carrying the package there, then taking time to find the correct place for the package before it gets shipped.
  The problem with this approach is that the next step cannot start before the previous one is finished.
  That's what's known as single-threaded execution.

### For Async process:

- Brower is a post office
- js is a clerk - post office worker.
- all other clerks will refer as browser/ web API - fetch api, axios api, where js is not wait for this.
- fetch api is for call a browser API from java script.
- another world - fetch api is to access a piece of browser functionality thats outside of javascript.

## Asynchronous Javascript:

when JS use `fetch function`, it is delegating duties to an external API so that it can continue its process. this is known as asynchronous Javascript.

when data get from this fetch functionality,
then js makes it `JSON` formate by using `respond.json()` to use in its code, this JSON formate we can see in console.

-How the response from fetching third-party data might `fail`, or `be delayed`,

- and that it can be useful to provide different renders, based on whether or not the data has been `received`.

when working with React, namely, that fetching data from a third-party API is considered a side-effect.
Being a side-effect, you need to use the `useEffect hook` to deal with using the Fetch API calls in React.

## How to use useEffect for data fetching:

```
useEffect(
    () => {
        // ... data fetching code goes here / body of the anonymous function.
    },
    []
);
```

### Note

---

this way can be used:

```
  const fetchData = () => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
      .then((response) => response.json())
      .then((jsonData) => setBtcData(jsonData.bpi.USD))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

```

The code above emphasizes the fact that the `useEffect hook` takes `two arguments`, and that the `first argument` holds the `anonymous function`, which, `inside its body`, `holds the data fetching code`.

Alternatively, you might extract this anonymous function into a separate function expression or function declaration, and then just reference it.

### Data delay , fail, or receive.

Very often, the response from fetching third-party data might fail, or be delayed. That's why it can be useful to provide different renders, based on whether or not the data has been received.

The simplest conditional rendering might involve setting up two renders, based on whether or not the data has been successfully fetched. the return of the function we can write below:

```
return someStateVariable.length > 0 ? (
    <div>
      <h1>Data returned:</h1>
      <h2>{someStateVariable.results[0].price}</h2>
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
```

In this example, I'm conditionally returning an h1 and h2, if the length of the someStateVariable binding's length is longer than 0.

This approach would work if the someStateVariable holds an array.

If the someStateVariable is initialized as an empty array, passed to the call to the useState hook, then it would be possible to update this state variable with an array item that might get returned from a fetch() call to a third-party JSON data provider.

If this works out as described above, the length of the someStateVariable would increase from the starting length of zero - because an empty array's length is zero.

### Fetch data: steps:

1. the fetch() function initially fetches data from API,
2. then it retrieves a respond from API in JSON formate
3. finally, update the state variable by `setUpdate()` with returned data.
4. then catch any error from data fetching.

```

```

### designing the API in Meta

- talk with one function to another function /or/ one app to another app /or/ frontend to back end / frontend to server- we need API
  API makes the link of two parties.

we check when we are designing the API are:

1. type safety - means we are getting what we are expecting. like we are wanting a photo - we are actually getting a photo.
2. things does not breaking anything.
3. to make the API need to be balance - between future and present. anticipate about future but also focus problem in front of you now and how you can address it effectively.
4. keep it simple. not do over think , not to put too many thing , not to make too much fancy - using complicated and complex design pattern. simplicity is very important
5. readability is a big plus
6. make it statable
