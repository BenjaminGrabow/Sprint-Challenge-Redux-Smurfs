1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?
 create a new object : Object.assign()

 Array.filter();
 Array.map();
 Array.reduce();

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions. Actions are central to Redux, and they're quite simple. An action is a regular JavaScript object that usually has two properties, type and payload .2

Reducers specify how the application's state changes in response to actions sent to the store. Actions only describe what happened, but don't describe how the application's state changes.

A store holds the whole state tree of your application. The only way to change the state inside it is to dispatch an action on it.
A store is not a class. It's just an object with a few methods on it. To create it, pass your root reducing function to createStore.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Your application state is global, and your component state is local. Flux or a flux-like library like Redux, use what they call "stores" to hold application state. That means any component, anywhere in the app can access it (kind of like a database) so long as they hook into it.
Component state however, lives within that specific component. As such, it can only be updated within that component and passed down to its children via props.

1.  What is middleware?

Middleware provides a way to interact with actions that have been dispatched to the store before they reach the store's reducer. Examples of different uses for middleware include logging actions, reporting errors, making asynchronous requests, and dispatching new actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

1.  Which `react-redux` method links up our `components` with our `redux store`?

The connect() function connects a React component to a Redux store.



