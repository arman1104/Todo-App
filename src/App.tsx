import { useEffect, useState } from "react";
import bgDesktopDark from "./assets/images/bg-desktop-dark.jpg";
import bgDesktopLight from "./assets/images/bg-desktop-light.jpg";
import bgMobileDark from "./assets/images/bg-mobile-dark.jpg";
import bgMobileLight from "./assets/images/bg-mobile-light.jpg";

import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // Add Todo
  const addTodo = (text: string) => {
    if (!text.trim()) return;

    setTodos((prev) => [{ id: Date.now(), text, completed: false }, ...prev]);
  };

  // Toggle Todo
  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete Todo
  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Clear Completed Todo
  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  // Filter Todo
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const itemsLeft = todos.filter((todo) => !todo.completed).length;

  // Reorder Todo
  const reorderTodos = (fromIndex: number, toIndex: number) => {
    setTodos((prev) => {
      const updated = [...prev];
      const [moved] = updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, moved);
      return updated;
    });
  };

  // Toggle dark class on <html>
  useEffect(() => {
    const root = document.documentElement;
    // console.log("dark mode:", isDark);

    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      {/* <div className="min-h-screen bg-[#fafafa] dark:bg-[#181824]"> */}
      <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
        {/* Background Section */}
        <div className="relative h-[250px] sm:h-[300px] w-full">
          {/* Desktop background */}
          <img
            src={isDark ? bgDesktopDark : bgDesktopLight}
            alt="desktop background"
            className="absolute inset-0 h-full w-full object-cover sm:block"
          />
          {/* Mobile background */}
          <img
            src={isDark ? bgMobileDark : bgMobileLight}
            alt="mobile background"
            className="absolute inset-0 h-full w-full object-cover sm:hidden"
          />

          {/* Overlay content */}
          <div className="relative z-50">
            <Header
              isDark={isDark}
              onToggleTheme={() => setIsDark((prev) => !prev)}
            />

            <div className="mt-10">
              {/* <TodoInput/> */}
              <TodoInput onAddTodo={addTodo} />
            </div>

            <div className="mt-8 sm:mt-12">
              {/* <TodoList /> */}
              <TodoList
                todos={filteredTodos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                filter={filter}
                onFilterChange={setFilter}
                onClearCompleted={clearCompleted}
                itemsLeft={itemsLeft}
                onReorder={reorderTodos}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
