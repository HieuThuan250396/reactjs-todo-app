interface Todo {
  id: string;
  content: string;
  is_completed: boolean;
}

type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void;
