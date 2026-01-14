import FilterBar from "./FilterBar";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="mx-auto mt-6 max-w-xl px-6">
      <div className="overflow-hidden rounded-md bg-white shadow-md dark:bg-[#25273c]">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <FilterBar />
      </div>
    </div>
  );
};

export default TodoList;
