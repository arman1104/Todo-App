// import TodoItem from "./TodoItem";
// import FilterBar from "./FilterBar";

// const TodoList = ({
//   todos,
//   onToggle,
//   onDelete,
//   filter,
//   onFilterChange,
//   onClearCompleted,
//   itemsLeft,
//   onReorder,
// }: any) => {
//   return (
//     <div className="mx-auto mt-6 max-w-xl px-6">
//       <div className="overflow-hidden rounded-md bg-white shadow-md dark:bg-card-dark">
//         {todos.map((todo: any, index: number) => (
//           <TodoItem
//             key={todo.id}
//             todo={todo}
//             index={index}
//             onToggle={onToggle}
//             onDelete={onDelete}
//             onReorder={onReorder}
//           />
//         ))}

//         <FilterBar
//           itemsLeft={itemsLeft}
//           filter={filter}
//           onFilterChange={onFilterChange}
//           onClearCompleted={onClearCompleted}
//         />
//       </div>
//       {/* <p className="mt-10 text-center text-sm text-text-muted hidden sm:block"> */}
//       <p className="mt-10 text-center text-sm text-text-muted">
//         Drag and drop to reorder list
//       </p>
//     </div>
//   );
// };

// export default TodoList;

import TodoItem from "./TodoItem";
// import FilterBar from "./FilterBar";

const TodoList = ({
  todos,
  onToggle,
  onDelete,
  filter,
  onFilterChange,
  onClearCompleted,
  itemsLeft,
  onReorder,
}: any) => {
  return (
    <div className="mx-auto mt-6 max-w-xl px-6">
      {/* Main todo card */}
      <div className="overflow-hidden rounded-md bg-white shadow-md dark:bg-card-dark">
        {todos.map((todo: any, index: number) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            index={index}
            onToggle={onToggle}
            onDelete={onDelete}
            onReorder={onReorder}
          />
        ))}

        {/* Bottom bar with items left and clear completed */}
        <div className="flex items-center justify-between px-5 py-4 text-sm text-text-muted">
          <span>{itemsLeft} items left</span>

          {/* Desktop filters - only show on desktop */}
          <div className="hidden gap-4 font-bold sm:flex">
            {["all", "active", "completed"].map((f) => (
              <button
                key={f}
                onClick={() => onFilterChange(f)}
                className={
                  filter === f
                    ? "text-accent"
                    : "hover:text-text-light dark:hover:text-text-dark"
                }
              >
                {f[0].toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <button
            onClick={onClearCompleted}
            className="hover:text-text-light dark:hover:text-text-dark"
          >
            Clear Completed
          </button>
        </div>
      </div>

      {/* Mobile filters - separate card below, only show on mobile */}
      <div className="mt-4 rounded-md bg-white py-4 shadow-md dark:bg-card-dark sm:hidden">
        <div className="flex justify-center gap-6 font-bold text-text-muted">
          {["all", "active", "completed"].map((f) => (
            <button
              key={f}
              onClick={() => onFilterChange(f)}
              className={
                filter === f
                  ? "text-accent"
                  : "hover:text-text-light dark:hover:text-text-dark"
              }
            >
              {f[0].toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Drag and drop hint */}
      <p className="mt-10 text-center text-sm text-text-muted">
        Drag and drop to reorder list
      </p>
    </div>
  );
};

export default TodoList;
