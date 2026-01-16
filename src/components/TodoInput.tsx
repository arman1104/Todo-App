import { useState } from "react";

const TodoInput = ({ onAddTodo }: { onAddTodo: (text: string) => void }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-6 max-w-xl px-6">
      <div className="flex items-center gap-3 rounded-md bg-white px-5 py-3 shadow-md dark:bg-card-dark">
        <div className="h-4 w-4 rounded-full border border-border-light dark:border-border-dark" />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Create a new todo…"
          className="flex-1 bg-transparent text-[15px] sm:text-[18px] outline-none text-text-light dark:text-text-dark"
        />
      </div>
    </form>
  );
};

export default TodoInput;
