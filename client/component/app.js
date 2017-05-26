import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            name: null
        };
    }

    componentWillMount() {
        fetch('/data/hello_world')
            .then(res=>res.json())
            .then(data=>{
                this.setState({
                    id: data.id,
                    name: data.name
                });
            })
    }

    render() {
        return <div>
            { this.state.id }
            { this.state.name }
        </div>;
    }
}

export default App;