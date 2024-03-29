import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Count from "./components/Count";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBinding from "./components/EventBinding";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import TodoList from "./components/TodoList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import Form from "./components/Form";
import styles from "./appStyles.module.css";
import "./appStyles.css";
import LifecycleA from "./components/LifecycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import HoverCounterTwo from "./components/HoverCounterTwo";
import ClickCounterTwo from "./components/ClickCounterTwo";
import User from "./components/User";
import Counter from "./components/Counter";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/userContext";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  return (
    <>
    <PostForm />
    {/* <PostList />
    <UserProvider value='Saqi' >
    <ComponentC />
    </UserProvider>
   <Counter 
      render={(count, incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
      )} 
    />
    <Counter 
      render={(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )} 
    />
    <Counter>
    {(count, incrementCount) => (
      <ClickCounterTwo count={count} incrementCount={incrementCount} />
    )}
    </Counter>
    <Counter>
    {(count, incrementCount) => (
      <HoverCounterTwo count={count} incrementCount={incrementCount} />
    )}
    </Counter>
    <User render={(isLoggedIn) => isLoggedIn ? 'Saqi' : 'User ' }/>
   <ClickCounter />
    <HoverCounter />
    <ErrorBoundary>
    <Hero heroName={'Batman'}/>
    </ErrorBoundary>
    <ErrorBoundary>
    <Hero heroName={'Superman'}/>
    </ErrorBoundary>    
    <ErrorBoundary>
    <Hero heroName={'Joker'}/>
    </ErrorBoundary>
       <PortalDemo />
     <FRParentInput />
       <FocusInput />
      <RefsDemo />
       <ParentComp />
      <Table />
     <FragmentDemo />
      <LifecycleA />
      <Form />
       <h1 className='error'>Error</h1>
    <h1 className={styles.success}>Success</h1>

    <Inline />
     <Stylesheet primary={true} />
    <TodoList />
   <NameList />
      <UserGreeting />
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
  );
}

export default App;
