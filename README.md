[![Netlify Status](https://api.netlify.com/api/v1/badges/d56e4b2f-0796-43ab-8f4e-419b63d6ab6e/deploy-status)](https://app.netlify.com/sites/react-redux-todo-basic/deploys)
🔗 [react-redux-todo-basic.netlify.com](https://react-redux-todo-basic.netlify.app)

# Redux Todo App

<img src="https://raw.githubusercontent.com/moisestech/redux-store/master/public/assets/todos.png" width="150px"/>

**Redux Store Todo application**

## ⚙ Features

- Modern Patterns using React-Redux
- Redux.createStore
- ReactRedux Provider

## 🗺 URL Tree

```bash
├── /                   #Home
├── /todos              #Todos
├── /todos/todoId       #Todos:ID
├── /goals              #Goals
├── /goals/goalID       #Goals:ID
└── /*                  #404
```

### 🌿 App Tree

```bash
├── README.md
├── code-demos
│   ├── index.html
│   └── index.js
├── package.json
├── public
│   ├── _redirects
│   └── index.html
├── src
│   ├── actions
│   │   ├── goals.js
│   │   ├── shared.js
│   │   └── todos.js
│   ├── components
│   │   ├── Goals
│   │   │   └── index.js
│   │   ├── List
│   │   │   └── index.js
│   │   ├── Loading
│   │   │   └── index.js
│   │   ├── Todos
│   │   │   └── index.js
│   │   └── index.js
│   ├── contexts
│   ├── index.css
│   ├── index.js
│   ├── middleware
│   │   ├── checker.js
│   │   ├── index.js
│   │   └── logger.js
│   └── reducers
│       ├── goals.js
│       ├── index.js
│       ├── loading.js
│       └── todos.js
└── webpack.config.js
```

## ⛰️ Roadmap

- Transfer to React Toolkit
- More Robust example
- Transfer to Todo App in Apollo

## 📝 Todos

- Copy examples in the Notes to have a light white background code theme VS Code.
- Edit already Created Todo (Mode)
- Show Completed Tasks
- Show Todays Date
- When a Task was created (Timeago)
- [Todo Codepen CSS Inspo](https://codepen.io/franklynroth/pen/ZYeaBd)
- [TodoMVS w/ XState ReactJS](https://xstate.js.org/docs/examples/todomvc.html#todomvc-with-react)
- Keybinding onKeypress triggers addTodo, addGoal actionCreators
