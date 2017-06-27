import React from 'react'

class Keypad extends React.Component {
  logEntry = () => {
    console.log('Entering password...')
  }

  render () {
    return (
      <form>
        <label>
          Password:
          <input type='password' onKeyUp={this.logEntry}/>
        </label>
      </form>
    )
  }
}

export default Keypad
