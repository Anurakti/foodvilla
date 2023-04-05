import React from "react"

class ProfileClass extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        console.log("Child constructor")
    }
    componentDidMount(){
        //API call
        console.log("Child ComponentDidMount")
    }
    render() {
        const {count} = this.state
        console.log("Child render")
        return (
            <div>
                <h1>Profile Class Component</h1>
                <h2>{this.state.count} </h2>
                <h2>{count} </h2>
                <button onClick={this.setState({count: 1})}>Increment</button>
            </div>
        ) 
    }
}

export default ProfileClass