// import iconCross from "../assets/images/icon-cross.svg";
// import iconCheck from "../assets/images/icon-check.svg";

// const TodoItem = ({ todo, index, onToggle, onDelete, onReorder }: any) => {
//   const handleDragStart = (e: React.DragEvent) => {
//     e.dataTransfer.setData("text/plain", index.toString());
//   };

//   const handleDrop = (e: React.DragEvent) => {
//     e.preventDefault();
//     const fromIndex = Number(e.dataTransfer.getData("text/plain"));
//     onReorder(fromIndex, index);
//   };

//   return (
//     <div
//       draggable
//       onDragStart={handleDragStart}
//       onDragOver={(e) => e.preventDefault()}
//       onDrop={handleDrop}
//       className="flex cursor-grab items-center gap-3 px-4 py-3 border-b border-border-light dark:border-border-dark active:cursor-grabbing"
//     >
//       {/* Checkbox */}
//       <button
//         onClick={() => onToggle(todo.id)}
//         className={`flex h-4 w-4 items-center justify-center rounded-full
//           ${
//             todo.completed
//               ? "bg-gradient-to-br from-cyan-400 to-purple-500"
//               : "border border-border-light dark:border-border-dark"
//           }`}
//       >
//         {todo.completed && (
//           <img src={iconCheck} alt="checked" className="h-2 w-2" />
//         )}
//       </button>

//       {/* Text */}
//       <p
//         className={`flex-1 text-[15px] sm:text-[18px] ${
//           todo.completed
//             ? "line-through text-text-muted"
//             : "text-text-light dark:text-text-dark"
//         }`}
//       >
//         {todo.text}
//       </p>

//       {/* Delete */}
//       <button onClick={() => onDelete(todo.id)}>
//         <img src={iconCross} alt="delete" className="h-3.5 w-3.5" />
//       </button>
//     </div>
//   );
// };

// export default TodoItem;

import { useState } from "react";
// import { X, Check } from "lucide-react";
import iconCross from "../assets/images/icon-cross.svg";
import iconCheck from "../assets/images/icon-check.svg";

const TodoItem = ({ todo, index, onToggle, onDelete, onReorder }: any) => {
  const [isDragging, setIsDragging] = useState(false);

  // Desktop drag handlers
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("text/plain", index.toString());
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const fromIndex = Number(e.dataTransfer.getData("text/plain"));
    onReorder(fromIndex, index);
  };

  // Mobile touch handlers
  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchMove = () => {
    // Touch move tracking
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsDragging(false);

    const touchEndY = e.changedTouches[0].clientY;
    const element = e.currentTarget as HTMLElement;
    const elementAtPoint = document.elementFromPoint(
      e.changedTouches[0].clientX,
      touchEndY
    );

    // Find the closest todo item
    let dropTarget = elementAtPoint;
    while (dropTarget && !dropTarget.hasAttribute("data-todo-index")) {
      dropTarget = dropTarget.parentElement;
    }

    if (dropTarget && dropTarget !== element) {
      const toIndex = Number(dropTarget.getAttribute("data-todo-index"));
      onReorder(index, toIndex);
    }
  };

  return (
    <div
      data-todo-index={index}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={`flex items-center gap-3 px-4 py-3 border-b border-border-light dark:border-border-dark transition-opacity ${
        isDragging
          ? "opacity-50 cursor-grabbing"
          : "cursor-grab active:cursor-grabbing"
      }`}
    >
      {/* Checkbox */}
      <button
        onClick={() => onToggle(todo.id)}
        className={`flex h-4 w-4 items-center justify-center rounded-full flex-shrink-0
          ${
            todo.completed
              ? "bg-gradient-to-br from-cyan-400 to-purple-500"
              : "border border-border-light dark:border-border-dark"
          }`}
      >
        {todo.completed && (
          //   <Check className="h-2 w-2 text-white" strokeWidth={3} />
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
      <button onClick={() => onDelete(todo.id)} className="flex-shrink-0">
        {/* <X className="h-3.5 w-3.5 text-text-muted hover:text-text-light dark:hover:text-text-dark" /> */}
        <img src={iconCross} alt="delete" className="h-3.5 w-3.5" />
      </button>
    </div>
  );
};

export default TodoItem;
