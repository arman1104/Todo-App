import TodoItem from "./TodoItem";
import FilterBar from "./FilterBar";

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

        <FilterBar
          itemsLeft={itemsLeft}
          filter={filter}
          onFilterChange={onFilterChange}
          onClearCompleted={onClearCompleted}
        />
      </div>
      <p className="mt-10 text-center text-sm text-text-muted hidden sm:block">
        Drag and drop to reorder list
      </p>
    </div>
  );
};

export default TodoList;
