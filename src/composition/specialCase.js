const React = require('react')
const ReactDOM = require('react-dom')

const FancyBorder = props => {
    return (
        <div className={`FancyBorder FancyBorder-${props.color}`}>
            {props.children}
        </div>
    );
}

const Dialog = props => {
    return (
        <FancyBorder color='red'>
            <h1 className='Dialog-title'>
                {props.title}
            </h1>
            <p className='Dialog-message'>
                {props.message}
            </p>
        </FancyBorder>
    )
}

const WelcomeDialog = () => {
    return (
        <Dialog 
            title='Welcome'
            message='welcome to this party'
        />
    )
}

ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
);