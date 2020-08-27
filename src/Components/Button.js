import React, {Component} from 'react'

class Button extends Component {
    
    code() {
        function routes(num) {
            let pathsArray = [[[0, 0]]]
            let counter = 0
            while(pathsArray.length > 0) {
              for (let i = 0; i < pathsArray.length; i++) {
                let currentPath = pathsArray[i]
                console.log(currentPath)
                let duplicate = currentPath
                let lastStep = currentPath[currentPath.length - 1]
                let lastX = lastStep[0]
                let newX = lastX + 1
                let lastY = lastStep[1]
                let newY = lastY + 1
                let newStepX = [newX, lastY]
                let newStepY = [lastX, newY]
                debugger
                if (newX > num) {
                  pathsArray.splice(i, 1)
                } else if (newX === num && lastY === num) {
                  counter++
                  pathsArray.splice(i, 1)
                } else {
                  currentPath.push(newStepX)
                }
                if (newY === num && lastX === num) {
                  counter++
                } else if (newY < num) {
                  duplicate.push(newStepY)
                  pathsArray.push(duplicate)
                }
              }
            }
            return counter
          }
          
          routes(2)
    }
    
    render() {
        return(
            <div>
                 <button style={{fontSize: 200}}>Run</button>
            </div>
           
        )
    }

    componentDidMount() {
        this.code()
    }
}

export default Button



