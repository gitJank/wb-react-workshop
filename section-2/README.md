# Section 2 - State and Props

#### From the react documentation:

Props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).

#### Example explanation:

In App.js initialState is a prop that is used as the initial value in the useState hook. We will get into hooks later but here all you need to know is that the useState hook takes a prop as its inital value and returns a state variable and a function to set its value. Count represents our state variable and is displayed inside of the number span. We use the button onClicks to call setCount passing the new value of count. Setting count to a new value will trigger a rerender, rendering our change to the DOM, and displaying our new value.

#### PropTypes

In our example we use PropTypes to specify the props required by the component and their type. Using a similar pattern we can also declare default props.
`App.defaultProps = { initialCount: 0 }`
