const React = require('react')
const ReactDOM = require('react-dom')

const Post = (props) => {
    return (
        <li>
            {props.id}: {props.title}
        </li>
    )
}
const Blog = (props) => {
    const sideBar = (
        <ul>
            {props.posts.map((post) =>
                <Post key={post.id} id={post.id} title={post.title} />
            )}
        </ul>
    );
    const content = props.posts.map((post) =>
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    return (
        <div>
            {sideBar}
            <hr />
            {content}
        </div>
    );
}

const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];

ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
);