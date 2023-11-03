// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input
  // 🐨 add the onSubmit handler to the <form> below
  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  // Exercise
  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const {value} = event.target.elements.username
  //   onSubmitUsername(value)
  // }
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input id="username" type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )
  // Extra credit 1
  // const inputRef = React.useRef(null)
  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const {value} = inputRef.current
  //   onSubmitUsername(value)
  // }
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input ref={inputRef} id="username" type="text" />
  //     </div>
  //     <button type="submit">Submit</button>
  //   </form>
  // )
  // Extra credit 2
  // const [error, setError] = React.useState(null)
  // function handleSubmit(event) {
  //   event.preventDefault()
  //   const {value} = event.target.elements.username
  //   onSubmitUsername(value)
  // }
  // function handleChange(event) {
  //   const {value} = event.target
  //   const isValid = value === value.toLowerCase()
  //   setError(isValid ? null : 'Username must be lower case')
  // }
  // return (
  //   <form onSubmit={handleSubmit}>
  //     <div>
  //       <label htmlFor="username">Username:</label>
  //       <input id="username" type="text" onChange={handleChange} />
  //       {error ? (
  //         <p role="alert" style={{color: 'red'}}>
  //           {error}
  //         </p>
  //       ) : null}
  //     </div>
  //     <button type="submit" disabled={Boolean(error)}>
  //       Submit
  //     </button>
  //   </form>
  // )
  // Extra credit 3
  const [username, setUsername] = React.useState('')
  function handleSubmit(event) {
    event.preventDefault()
    onSubmitUsername(username)
  }
  function handleChange(event) {
    setUsername(event.target.value.toLowerCase())
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          value={username}
          type="text"
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
