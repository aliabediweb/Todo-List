// JavaScript Document
const app = new Vue({
	
	el: '#app',
	
	data: {
		title: 'TO-DO LIST',
		newTodo: '',
		todos: [],
	},
	
	methods: {
		addTodo() {
			this.todos.push({
				title: this.newTodo,
				done: false
			});
			this.newTodo = '';
		},
		removeTodo(todo) {
			const todoIndex = this.todos.indexOf(todo);
			this.todos.splice(todoIndex, 1);
		},
		completeTodo(todo) {
			todo.done = true;
		},
	}
	
});



//------------ Copyright © Ali Abedi [August 2020] ------------