import iconCross from "../assets/images/icon-cross.svg";
import iconCheck from "../assets/images/icon-check.svg";

const TodoItem = ({ todo, index, onToggle, onDelete, onReorder }: any) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const fromIndex = Number(e.dataTransfer.getData("text/plain"));
    onReorder(fromIndex, index);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="flex cursor-grab items-center gap-3 px-4 py-3 border-b border-border-light dark:border-border-dark active:cursor-grabbing"
    >
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex h-4 w-4 items-center justify-center rounded-full
          ${
            todo.completed
              ? "bg-gradient-to-br from-cyan-400 to-purple-500"
              : "border border-border-light dark:border-border-dark"
          }`}
      >
        {todo.completed && (
          <img src={iconCheck} alt="checked" className="h-2 w-2" />
        )}
      </button>

      {/* Text */}
      <p
        className={`flex-1 text-[15px] sm:text-[18px] ${
          todo.completed
            ? "line-through text-text-muted"
            : "text-text-light dark:text-text-dark"
        }`}
      >
        {todo.text}
      </p>

      {/* Delete */}
      <button onClick={() => onDelete(todo.id)}>
        <img src={iconCross} alt="delete" className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default TodoItem;
