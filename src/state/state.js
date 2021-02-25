this.setState((state, props) => ({
    counter: state.counter + props.increment
}));

this.setState(function (state, props) {
    return {
        counter: state.counter + props.increment
    };
});

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            comments: []
        };
    }
    componentDidMount() {
        fetchPosts().then(response => {
            this.setState({
                posts: response.posts
            });
        });

        fetchComments().then(response => {
            this.setState({
                comments: response.comments
            });
        });
    }
}