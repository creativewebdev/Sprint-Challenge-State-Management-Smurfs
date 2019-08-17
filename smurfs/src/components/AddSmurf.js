import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSmurf } from '../Actions'

class AddSmurf extends Component {
    constructor(props) {
        super(props)
        this.state = {
            age: '',
            name: '',
            height: ''
        }
    }

    // inputHandler = e => {
    //     this.setState({[e.target.name]: e.target.value})
    // } 

    inputHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = event => {
        event.preventDefault()
        this.props.addSmurf(this.state)
        this.setState({
            age: '',
            name: '',
            height: ''
        })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type='text' placeholder='name' name='name' value={this.state.name} onChange={this.inputHandler} />
                <input type='number' placeholder='age' name='age' value={this.state.age} onChange={this.inputHandler} />
                <input type='text' placeholder='height' name='height' value={this.state.height} onChange={this.inputHandler} />
                <button type='submit'> Add Smurf </button>
            </form> 
        )
    }
}


const mapStateToProps = state => {
    return{}
}

export default connect(mapStateToProps, {addSmurf: addSmurf})(AddSmurf)