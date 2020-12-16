import React from "react";

export const Todo: React.FC<{ text: string; isCompleted: boolean }> = ({
  text,
  isCompleted,
}) => {
  return (
    <div className={"todo-item"}>
      {text} - {isCompleted ? "Completed" : "Not completed"}
    </div>
  );
};
