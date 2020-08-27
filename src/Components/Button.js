import React, {Component} from 'react'

class Button extends Component {
    
    code() {
        console.log('test')
    }
    
    render() {
        return(
            <div>
                 <button style={{fontSize: 200}} onClick={() => window.location.reload()}>Run</button>
            </div>
           
        )
    }

    componentDidMount() {
        this.code()
    }
}

export default Button



