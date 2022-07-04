This task is about getting rid of passing state setter functions to child components. 
Instead of this, we are going to use React Context API.

Steps:
1. Adjust `TodosContext.js` implementation in a way that it exposes collection of `todoItems` and a setter function `setTodoItems`.
2. Remove inner state from `ItemsListContextInput` and state setter function from `ItemsAddContext`.
3. Consume `TodosContext` in `ItemsListContextInput.jsx` and `ItemsAddContext.jsx`. 