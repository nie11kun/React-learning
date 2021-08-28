const React = require('react')
const ReactDOM = require('react-dom')

ReactDOM.render(
    <input value="hi" />,
    document.getElementById('root')
);

setTimeout(() => {
    ReactDOM.render(
        <input value={null} />,
        document.getElementById('root')
    );
}, 2000);