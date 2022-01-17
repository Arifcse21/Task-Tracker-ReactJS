import { useState } from "react"
import React from 'react'
import Header from './component/Header'
import Tasks from './component/Tasks'
function App() {
   const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        remainder: true,
    },
    {
        id: 2,
        text: 'Food Shopping',
        day: 'Feb 6th at 2:30pm',
        remainder: false,
    }
])
  return (
    <div className="container">
      {/* <Header title="-title-" /> */}
      {/* <Header title={1} />*/}
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a Class</h1>
//   }
// }

export default App;
