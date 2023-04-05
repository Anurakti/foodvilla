//optional chaining
// ?.

import { createContext, useContext, useState } from "react"
import { useSelector } from "react-redux"
import UserContext from "./src/utils/UserContext"

// import { useEffect, useState } from "react"
// import { render } from "react-dom"
// import { Outlet, useParams } from "react-router-dom"

// npx - to execute directly

// config driven UI - depending on the data given to the UI by backend it automatically renders the UI accordingly

// props = properties = data that is sent by one component to another, same as in function we pass arguments in a function call
// props wraps up all the arguments we pass to a component and we can then display the data with props 
// props is usually the name used in react (like for parameters we receive in function) same way we receive data in component 
// we can have any other name instead of using props 
// props is object received by component 
// what is the difference between map and foreach 


// virtual dom is representation of your actual dom
// react is fast because it uses virtual dom 
// React does reconciliation which uses an algorithm known as (diff algorithm)for determining the changes between
// virtual dom and actual dom and then react finds what needs to be updated and it updates only that part
// it does not re render the whole application again 
// this whole process is called reconciliation
// that is why we use keys which work as unique id for dom elements and helps in differentiating the dom elements
// and helps react with unnecessary re renders


// trees - virtual representation of html document 

// In react16 diff algorithm changed and react introduced something known as react fiber
// React Fiber is the new reconciliation engine which is responsible for diff algorithm


// named import
// diff ways to export
// export default
// how do you import a default export
// how do you import a named export
// what happens when you write a * as 


// React uses one way data binding

// every component in React maintains a state
// if you need to create a local variable in react you need to use state variables, 
// these state variables are created using useState hook

// Hook is a just a normal function and every hook has a specific functionality for it
// useState is used to create local state variables
// useState() function returns an array and the first element of the array is the variable name 


// Why do we need state variables (created with useState) and not local variables like we create in javascript?
// Because every time you want your variables to be in sync with the UI you need state variables

// Whenever you create a state variable using useState(), React is watching this variable
// so when this variable gets updated the whole component re renders 


// what is hook
// hook is a normal js function, hook is coming from react

// postcssrc file needs to be configured to tell our bundler(parcel) that while you are building production build
// we will be using tailwing so compile our tailwind css classes to normal css


// the component re renders when my props or state changes
// after every re render useEffect will be called 

// useEffect is a hook (hook is afunction at the end of the day) which takes 2 parameters
// 1)callback function
// 2)dependency Array
// useEffect is called on ever re render and to avoid this we use empty dependency array 

// For eg-
// const [searchText, setSearchText] = useState("")

// useEffect(()=>{
//     console.log("call this when dependency changes")
// },[searchText])

// here useEffect is called only when searchText changes


// useEffect is called once after initial render when it has a callback function and empty dependency array 

// empty dependency array means my callback function inside useEffect will be called once  

// monolith vs microservices 

// if we dont have dependency array then our useEffect will be called after every render ---
// as it is not dependent on any array. For eg
// useEffect(()=>{
//     console.log("useEffect")
// })

// we pass async function(why we use async function call is to handle promises) in useEffect 

// Never create a component inside a component 

// never write useState inside an if statement or a for loop


// what is spa?
// single page application 
// means earlier when we used to load about us page from homepage it used to make new network call to about us page
// but in spa there is no re loading of the website and no new network call is made

// there are 2 types of routing
// 1)client side routing
// 2)server side routing - means all my pages will come from server


// All the children will go in the Outlet according to the route 

// dynamic routing - means
// we use useParams hook in dynamic routing, loading any restaurant based on its id
// cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards

// useParams is routing parameteres

// Object.values() convert object of objects into array of objects

// functional components are functions at the end of the day and it returns jsx
// class based components are classes at the end of the day and the render function inside class returns jsx
// render function in class based components is used just to return some jsx

// constructor is a place for initialisation
// when the class is created a constructor is called and this is the best place to create state


// React uses one big object to manage the state in class and function based components.
// In function based components multiple useState is converted into one big state object at the end 

// We do not mutate state directly in react components both class and functional


// In React lifecycle first constructor is called then render is called 

// ComponentDidMount is called after initial render 

// The lifecycle of the component is the cycle/sequence in which the lifecycle components are called inside the app
// the lifecycle sequence is as follows
// 1)constructor
// 2)render
// 3)componentDidMount
// 4)componentDidUpdate
// 5)componentWillUnmount

// componentDidMount is used to- API calls and is called only after initial render(after the basic html is loaded)
// then when the data from API is fetched then the UI is updated
// and then componentDidUpdate is called 
// and after time another update happens in UI the componentDidUpdate is called again

// componentWillUnmount is used to do the cleanup of the component like clear the setInterval using clearInterval
// inside the componentWillUnmount



// Why do we even build custom hooks?
// 1)reusability
// 2)readability
// 3)maintainability - seperation of concerns
// 4)modularity - broken down code into meaningful pieces
// 5)testability - code is testable easily

// bundle chunking
// code splitting
// dynamic bundling
// lazy loading
// on demand loading
// dynamic import

// all the above things mean the same thing, remember the example of make my trip, 
// In make my trip we they don't load all the flights, hotels, trains, buses, cabs, packages, etc at the same time 
// Flights are loaded as default but trains component is lazy loaded(only loaded when we click on trains component)

// we use lazy loading to make large scale applications fast 
// so that when the large scale apps load, 
// the bundle doesn't explode with rendering everything on itself at the same time

// why do we learn css framework?
// 1-to write optimised css
// 2-it saves TimeRanges, it is faster development when we use css framework

// scss and sass make the css writing experience better 

// what is the advantage of using scss over css?
// 1-modern way of writing css
// 2- at the end scss is converted into css
// 3-

// why we don't write inline css?
// 1-reusability is not there
// 2-hardcoding the styles 
// 3-repetition of the styles

// why do we use css library like material ui?
// 1-saves us from repetition of code 
// 2-consistent ui
// 3-reusability

// every website has a vibe and that vibe is created by css 

// disadvantages of using a css library?
// 1-increase in bundle size 
// 2-you lose control over how your design of ui elements should look, personal customization becomes hard 

// ways to use css in your projects 

// everything in tailwind css works in class names  
// postcss is a tool for transforming css with javascript, it is used for compilation os tailwind classes
// we need to tell parcel that we are using tailwind classes  

// advantages of using tailwind?
// 1-easy to debugger2-less code to ship
// 3-no duplicate css 
// 4-easy to use
// 5-bundle size is small
// 6-faster development because you don't have to switch between files

// disadvantages of tailwind?
// 1-there is an initial learning curve
// 2-too much classes of tailwind css 

// state is the local variable of a component 
// which has scope to that particular component only in which it is defined
// but a state can be passed as props to another component as state is a variable maintained inside a component

// props are the arguments passed to different components

// prop drilling
//lifting the state up 

// React Context is kind of central state provided by the React 
// so that all the components can share this state 

// we use react context when we want to use some piece of data anywhere in our app 

// just as like any other hook or any other superpower React gives us createContext to create context
// from which we can share data between components

// createContext is a function and takes in some data that you need all across your app 
// import useContext in the component in which you want to read data from context created by createContext

// to create context import { createContext } from "react"
// to use context in a component import { useContext } from "react"

// useContext is another hook 

// in your UserContext.Provider you can override the default value coming of your UserContext


// web application is made up of 2 layers - data layer and ui layer
// 1-data layer consists of the hooks like useState, useContext, etc and the props for passing of data
// 2-ui layer consists of the view we see on the browser like jsx and the tailwind or other css libraries,files 

// We use redux library for managing the data of big scale applications like production ready apps
// we use redux to manage the data layer of our application
// basically for handling huge amount of data 
 
// We used useContext to avoid prop drilling 
// basically to pass props anywhere in our application as context is a central store for a piece of data---
// which we can pass using context to any component in our application 
// any component can access the context and modify it 

// Redux is used for data management 


// Cons of using redux 
// 1)complex to setup and understand 
// 2)there is a huge learning curve 

// If you are building a large scale web application you need many things like 
// 1)bundler
// 2)react library
// 3)many other css library
// 4)redux library - data mangaement tool 
// 5)react-router-dom library for routing
// 6)we need package for testing 

// Redux was difficult to understand so redux created new way of using it which is called redux toolkit 

// Why redux toolkit was created and what were the 3 problems it solved of redux 
// 1)redux requires too much boilerplate code
// 2)configuring a redux store is too complicated 
// 3)you have to install a lot of packages to make redux useful 

// Redux store is like a big object which has sections and those sections are small pieces

// Redux store can be accessed by all the components 
// Similar to context redux store is a central place holding data which can be accessed by anywhere---
// and from any component  in the app 

// Unlike context in which we can create multiple context for holding different data or information 
// Redux has only 1 store for holding all kinds of different data 
// It maintains different data with different slices of store 
// slice is a small portion of the redux store

// We can have different slices of our redux store like-
// 1) it can have theme slice for changing theme dark or light of our web app 
// 2)it can have our cart slice for the web app 
// 3)it can have a user slice 
// 4)it can have authentication slice 

// Our components cannot directly modify the store 
// I will have to dispatch an action 
// this action will call a function(this function is a normal javascript function)
// and this function will modify the store 

// if we click on the add button it will dispatch an action which will call a reducer function
// and this reducer function will modify the slice of our redux store 


// Selector is used to read the data from the store and send it to the component back 
// selector will then update my cart of the app 

// selector is for selecting a slice or the portion of the redux store 

// react-redux library is the bridge between react and redux, it is basically to connect react and redux 

// We subscribe to the store using useSelector 

// useSelector is a bridge between store and component 
// useSelector takes in a function which takes a store


// TDD - TEST DRIVEN DEVELOPMENT - it means we write test even before we write our code 
// tdd is very good and ensures very good quality of code
// but the development process is very slow, development of code takes a lot of time because of tdd
 
// Different type of testing??
// 1)manual testing - human testing a code
// 2)automation testing - code tesing a code (like selenium)
// 3)E2E testing - 