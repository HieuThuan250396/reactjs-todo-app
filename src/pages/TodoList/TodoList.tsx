import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import { TodoListItem } from './TodoListItem';
import { toggleError } from "../../redux/actions";
import { connect } from 'react-redux';
let moment = require('moment');

interface Props {

}

const TodoList: React.FC<Props> = (props: any) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const [radioOpt, setRadioOpt] = useState('');

  const getTodoList = () => {
    let params = {}
    if (radioOpt) {
      params = {
        created_date: radioOpt,
      }
    }
    axios.get('http://localhost:5050/tasks', {
      params: params,
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((response) => {
      if (response.data.data) {
        setTodos(response.data.data);
      }
      props.toggleError('');
    })
  }

  useEffect(() => {
    getTodoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [radioOpt]);

  const toggleTodo = (selectedTodo: Todo) => {
    const data = {
      id: selectedTodo.id,
      is_completed: !selectedTodo.is_completed
    }
    axios.put('http://localhost:5050/tasks', data, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((response) => {
      if (response.data.data) {
        getTodoList()
      }
    })
  }

  const addTodo: AddTodo = (text: string) => {
    const data = {
      content: text,
    };

    axios.post('http://localhost:5050/tasks', data, {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    }).then((response) => {
      if (response.data.data) {
        getTodoList()
      }
    }).catch((error) => {
      props.toggleError(error.response.data.error)
    })
  };

  const onRadioChange = (e: any) => {
    console.log(e.target.value);
    setRadioOpt(e.target.value);
  }

  return (
    <>
      <div>
        <label htmlFor="all">All task</label>
        <input
          id="all"
          type="radio"
          name="radio-opt"
          value=""
          onChange={onRadioChange}
          defaultChecked
        />
      </div>
      <div>
        <label htmlFor="today">Today</label>
        <input
          id="today"
          type="radio"
          name="radio-opt"
          value={moment(new Date()).format('yyyy-MM-DD')}
          onChange={onRadioChange}
        />
      </div>
      <ul>
        {todos.map(todo => (
          <TodoListItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
      <AddTodoForm addTodo={addTodo} />
    </>

  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleError: (error: String) => dispatch(toggleError(error))
  }
}

export default connect(null, mapDispatchToProps)(TodoList)