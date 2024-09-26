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

## 1. sideEffect:

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

- #### Three ways we can use it.
- 1. without [] dependency array, it will call every time component render.
    By default, if no second argument is provided to the useEffect function, the effect will run after every render.

- 2. with [] dependency array but empty, it will run the function inside it just once when the component first renders.

- 3. with [] dependency array but NOT empty , and has specific dependency when it will run its code.

#### 2. pure function: no side effect

- always return the same output. take props input


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

- Browser is a post office
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

1. the fetch() function initially fetches data from the API,
2. then it retrieves a response from API in JSON format
3. finally, update the state variable by `setUpdate()` with returned data.
4. then catch any error from data fetching.

```

```

### designing the API in Meta

- talk with one function to another function /or/ one app to another app /or/ frontend to back end / frontend to server- we need API
  API makes the link of two parties.

## we check when we are designing the API are:
----------------------------------------------

1. type of safety means we are getting what we are expecting. like we are wanting a photo—we are actually getting a photo.
2. things do not break anything.
3. to make the API need to be balance—between future and present. expect the future but also focus problem in front of you now and how you can address it effectively.
4. keep it simple. not do overthinking, not to put too many things, not to make too much fancy - using complicated and complex design pattern. simplicity is very important
5. readability is a big plus
6. make it stable


# useReducer()
----------------
useState vs useReducer: 

* useState hooks and useReducer do the same this — `they update the state`. 

### useState hook limitation: 
-----------------------------
* the useState hook may become cumbersome, if you have a complex state logic that involves `multiple sub-values` or `when the next state depends on the previous one`.
note:
* `In these situations they useReducer hook can provide a much better alternative.`

useReducer() 
-----------
* this is a superpower of superpower `useState`
* They `useState` hook starts with an `initial state`, but they `useReducer` hook gets a `reducer function` in addition to the initial state. 
* This is beneficial because the reducer functions `second argument` is the `action object`. 
* the `action object` has multiple type values, and `based on each of these types values`, you can invoke the `dispatch function` to perform a specific operation.
* The `reducer function` takes in the `previous state` and an `action` and `returns the new state`. The action type determines the specific action of the reducer. `Actions can have any form`.
* `Instead of using setState` like the useState hook, we use the `dispatch method` of the useReducer hook. 
* This accepts an object literal with a single property called `type set` to a `matching action datatype` whose `behavior is defined` inside the reducer function.
``` 
say the brand little lemon restaurant is growing in popularity and demand. 
As a result, `keeping track of expenses` is becoming an issue. 
Far, they have been calculating the income and outgoings manually as they `sell meals` to their customers and `buy ingredients` to replenish the stock. 
Little lemon is looking for a solution to this `using React` in order to `keep track of expenses in their app and reduce the burden on their staff`. 
Because using the useState hook would make the solution to this unnecessarily extensive. 
This is a perfect opportunity to implement the useReducer hook in order to -
simply keep track of the cost of buying ingredients and the income generated from selling the finished meals to the customers. 
```

```javascript
function reducer(state, action) {
  if(action.type === 'hello') return {}
  
}

initialState = {
  name: 'Shah'
}

const [state, dispatch] = useReducer(reducer, initialState);

// FOR JSX 
dispatch({type: 'hello'})
```



### When to choose useReducer vs useState
-----------------------------------------
The `useState hook` is best used on `less complex` data.

While it's possible to use any kind of a data structure when working with useState, it's better to use it with primitive data types, such as strings, numbers, or booleans.

The `useReducer hook` is best used on `more complex data`, specifically, arrays or objects.

While this rule is simple enough, there are situations where you might be working with a simple object and still decide to use the useState hook.

Such a decision might stem from the simple fact that working with useState can sometimes feel easier than thinking about how the state is controlled when working with useReducer.

It might help conceptualizing this dilemma as a gradual scale, there is the useState hook with primitive data types and simple use cases, such as toggling a variable on or off.

- there is the useReducer hook used to control state of large state-holding objects.

There's no clear-cut point on this spectrum:- `"If my state object has three or more properties, I'll use the useReducer hook"`.

Sometimes such a statement might make sense, and other times it might not.

What's important to remember is to keep your code simple to understand, collaborate on, contribute to, and build from.

One `negative characteristic` of `useState` is that it often gets hard to maintain as the state gets more complex.

On the flip side, a `negative characteristic` of `useReducer` is that it requires `more prep work to begin with`. 
There's more setup involved. However, once this setup is completed, it gets easier to extend the code based on new requirements.

So this is the way we have learned about the decision-making process: -  when we are choosing between useReducer and useState for working with different types of data.



### JSX 
-------
- React is used to describe UI appearance. it is an extension to js 
- React produces—nothing more-pure: HTML, CSS, and JavaScript
- elements of React are the final represented of HTML—it is a plain object-this object has two property - types and props
- types are type of nodes/ components/ functions/ HTML tag in the tree. 
- props are all the property the components receive as a single object. 
- example of jsx to elements below

JSX
```jsx

const buttonTitle = 'Submit';

return (
  <button className='button button-blue'>
    <span>
      {buttonTitle}
    </span>
  </button>
    
)
```

To 

Elements: 
```
{
  type: 'button',
  props: {
    className: 'button button-blue',
    children: {
      type: 'span',
      children: 'Submit',
    }
  }
}
```
### Why is building a high-performing application so importantly? 
---------------------------------------------------------------
- performance means—`not responsive, not fast enough, not interactive`.
- performance is the key thing when we are building any application. 
- we might think that the colorful or feature is important than performance. 
- performance not be that visible as you do see the feature.


### How does React help software engineers build high-performing application? 
-----------------------------------------------------------------------------
- it is localized the changes by making components 
- try to find out—why this component is so slow, why it is taking so long, 
- how we can refactor the component to make faster. 
- maybe we can delegate some of the computation to the back-end, so that we are not incurring this cost on the user on the front-end.
- by checking when it is developed. 
- stability 
- usability 
- completeness 
- release
- feedback cycle

how we can achieve that: 
- designing 
- delegating the tasks 
- using tools like memoization,



## Component composition:

How we can design the React app
-----------------------------------------------------------
- one of the most important part `Component Composition`
1. Children's props.
2. containment: it refers to the fact that some components don't know their children ahead of the time. also can be described as generic boxes. like a Dialog or Alert. 
 it will pop up some generic box. specialization will be doing the rest. 
3. Specialization: it defines components as being `special cases` of other components. for example, the conformationDialog(){} is a special case of dialog.
   means we use is for user to show what will happen when a user takes this action.
4. robust and reusable components



### Spread Operator: 
--------------------
* meaning—`copping or cloning` the props of the elements. 
* `in Javasript` `spread operator` for `props` can be used for any data type - like - array, object, event string 
* But `in React` as the props are object - react mostly used for an object type.  
* `coping and merging` are the `two main operations` we may perform with the operator. 
* it can be amended or merge new props. 
* first we need to do spreed the object, then we can change or modify or add new items on it. 
* if some properties completely are New, it will be before spread Object.
* if we want to change the existing properties, then we need to spread Object first then need to put change item from the property with value. 

```jsx
const order = {
  id: 1,
  userName: 'shah', 
  itemOrder: 'Pizza Margarita', 
  price: '$30.00'
}

// order - spread operator
const orderCopy = {...order}

```
- Order copy and merge 

```jsx
const orderAmend = {
  ...order,
  itemOrder: 'Pizza Roquito'
}
```

without spread operator in a component 
```jsx
function OrderList() {
  return <Order id='1' userName='shah' itemOrder='Pizza Roquito' price=price: '$30.00'/>
}
```

with spread operator

```jsx
function OrderList() {
  return <Order {...order}/>
}
```


## Most Important Generic Functionality:
----------------------------------------
* Cross-cutting concern in Application
* components and reusing behavior
* Pattern of common functionality in React 
* Higher order Components 
-------------------------------------
1. permission roles
2. handling errors
3. Logging 

### Higher Order Components (HOC)
---------------------------
- `higher order components` transforms a components into another component. 
- it enhances or extends the capabilities of the component provided. 
`const EnhancedComponents = higherOrderComponent(WrappedComponent)`
- benefit of HOC
-------------------
1. it enhances or extends the capabilities of the component provided. 
2. we can define the logic in a single place and share it across many components and keep the unchanged and stateless




### Testing: 
------------
1. it finds the bugs 
2. it ensures the quality of the software we develop 
3. reduce the user complain and save time and money 

Best Practices
--------------
1. The tests need to avoid implementation details of your components.
2. React is just a tool, and the final users will have no notion that React exists at all. 
3. Rather than dealing with instances of rendered React components, tests should work with actual `DOM nodes`. 
4. What is actual things it brings to DOM
5. resemble the way the software is used, the more confidence they can give us.
6. Finally, the tests to be maintainable in the long term. 

Two tools for texting
---------------------
1. jest
   - Jest is a JavaScript test runner that lets you access an artificial DOM called jsdom. While jsdom is only an approximation of how the browser works, it is often good enough for testing React components.
2. React testing library 
   - React Testing Library is designed to fulfill all testing best practices out of the box, so that you are able to focus on the business logic your tests need to run assertions on.

--------------------
jest: 
* Mocking Feature 
* good iteration speed

React testing library
---------------------
- set utilities 
- fulfills testing best practice 
