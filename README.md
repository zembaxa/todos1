1. Create a new component `ItemsAdd.jsx` inside `/components` directory.
2. Separate HTML responsible for adding new items from `ItemsListStateInput.jsx` and move it to the new component.
3. Move input state logic to the new component.
4. Add `props` to the new component. Pass it as an argument to component function as `{addTodoFn}`.
5. Create `onClick` handler that invokes `addTodoFn` for adding new items.
6. Create `addTodoItem` function that handles adding new item to the state. This function should be placed inside `ItemsListStateInput.jsx` component.
7. Pass `addTodoItem` handler to `ItemsAdd.jsx` component as `<ItemsAdd addTodoFn={addTodoItem}/>`