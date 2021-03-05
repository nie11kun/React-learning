const React = require('react')
const ReactDOM = require('react-dom')

//const numbers = [1, 2, 3, 4, 5];
//const listItems = numbers.map((number) => <li>{number}</li>)

/*
const TodoItems = (props) => {
    const todos = props.todos;
    const listItems = todos.map((todo, index) => 
        <li key={index}>
            {todo.text}
        </li>
    )
    return (
        <ul>{listItems}</ul>
    );
}
const todos = [
    {id: 1, text: '123'},
    {id: 2, text: '456'}
];
*/

const ListItem = (props) => {
    return (
        <li>{props.value}</li>
    );
}

const NumberList = (props) => {
    const numbers = props.numbers;
    /*
    const listItems = numbers.map((number) =>
        <ListItem key={number.toString()} value={number} />);
    */
    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()} value={number} />);}
        </ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
);