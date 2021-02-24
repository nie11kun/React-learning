const React = require('react')
const ReactDOM = require('react-dom')

const city = 'han zhong';

const user = {
    name: 'marco',
    age: 20
}
const element = (
    <h1>
        hello, {user.name}, from {city}, time: {1 + 20}
    </h1>
);

const testFuc = () => {
    return <h1>hello, {user.name}</h1>
}

const el1 = <div tabIndex="0"></div>
const el2 = <img src={user.name}></img>
const el3 = <img src=''/>

const el4 = (
    <div>
        <h1>hello,</h1>
        <h2>i am your friend</h2>
    </div>
);

const el5 = (
    <h1 className='test'>
        hello world
    </h1>
);
const el6 = React.createElement(
    'h1',
    {className: 'test'},
    'hello world'
)

const el7 = {
    type: 'h1',
    props: {
        className: 'test',
        children: 'hello world'
    }
}

const tick = () => {
    const element = <h1>{new Date().toLocaleTimeString()}</h1>;

    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}
setInterval(tick, 1000);