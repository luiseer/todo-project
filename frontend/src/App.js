import { useState, useEffect } from 'react';
import axios from 'axios';

// Components
import Form from './components/form/form.component';
import TodoList from './components/todo-list/todo-list.component';

import './App.css';


const App = () => {
	// State
	const [todos, setTodos] = useState([]);

	const addTodo = async todo => {
		await axios.post(`http://localhost:4000/api/v1/todos`, {
			content: todo.data
		}); // req.body.content
		setTodos(prevState => console.log([...prevState, todo]));
	};

	//prevState => [...prevState, todo]

	const fetchTodos = async () => {
		const res = await axios.get('http://localhost:4000/api/v1/todos');
		const resTodos = res.data;
		console.log(resTodos);
		setTodos(resTodos.data.todosDb);
	};

	const editTodo = async (id, newContent) => {
		await axios.patch(`http://localhost:4000/api/v1/todos`, {
			content: newContent,
		});

		setTodos(prevState => {
			const currentTodos = prevState;

			const todoIndex = currentTodos.findIndex(todo => +todo.id === +id);

			const updatedTodo = currentTodos[todoIndex];

			updatedTodo.content = newContent;

			currentTodos[todoIndex] = updatedTodo;

			return [...currentTodos];
		});
	};

	const deleteTodo = async id => {
		await axios.delete(`http://localhost:4000/api/v1/todos`);

		setTodos(prevState => {
			const currentTodos = prevState;
			const updatedTodos = currentTodos.filter(todo => +todo.id !== +id);
			return [...updatedTodos];
		});
	};

	// When component is mounted, fetch todos
	useEffect(() => {
		if (!fetchTodos) {
			console.log('no todos');
			return
		}
		fetchTodos();
	}, []);

	return (
		<div className="app">
			<Form onAddTodo={addTodo} />
			<TodoList onDeleteTodo={deleteTodo} onEditTodo={editTodo} items={todos} />
		</div>
	);
};

export default App;
