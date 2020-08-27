import React, {Component} from 'react'

class Button extends Component {
    
    refresh() {
        console.log('working')
    }
    
    render() {
        return(
            <div>
                 <button style={{fontSize: 200}}>Run</button>
            </div>
           
        )
    }

    componentDidMount() {
        this.refresh()
    }
}

export default Button



