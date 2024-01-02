import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Count from './components/Count'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBinding from './components/EventBinding'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'

function App() {
  return (
    <>
    <NameList />
     {/* <UserGreeting />
       <ParentComponent />
       <EventBinding />
       <ClassClick />
       <FunctionClick />
       <Count />
    <Message />
     <Welcome name="Superman" /> 
    <Welcome name="Batman" />
     <Greet name="user1"><p> this is children text </p></Greet>
      <Greet name="user2" />
      <Greet name="user3" />
        <Hello /> */}
    </>
  )
}
console.log(<Greet />)

export default App
