// create your App component here
import React from 'react'

export default class App extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(resp => resp.json())
        .then(console.log)
    }

    render() {
        return (
            <div>
            
            </div>
        )
    }
}
