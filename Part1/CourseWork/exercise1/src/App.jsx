//Exercises 1.1 and 1.2 hardcoded version on the app

/* 

Unfortunately, the entire application is in the same component. 
Refactor the code so that it consists of three new components: 
Header, Content, and Total. 
All data still resides in the App component, which passes the necessary data to each component using props. 


1) Header takes care of rendering the name of the course, --Done

2) Content renders the parts and their number of exercises --Done 

3) and Total renders the total number of exercises. --Done


*/

const Header = () => {
  return (
    <div>
      <h1>Half Stack application development</h1>
    </div>
  )
}

//1.2 

/* 

1.2: course information, step2
Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. 
Instead, it only renders three Part components of which each renders the name and number of exercises of one part.

*/
const Part1 = () => {
  return (
    <div>
      <p>Part1: Fundamentals of React. Number of ecercises: 10</p>
    </div>
  )
}

const Part2 = () => {
  return (
    <div>
      <p>Part2: Using props to pass data. Number of ecercises: 7</p>
    </div>
  )
}

const Part3 = () => {
  return (
    <div>
      <p>Part3: State of a component. Number of ecercises: 14</p>
    </div>
  )
}
const Content = () => {
  return (
    <div>
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  )
}

const Total = () => {
  return (
    <div>
      <p>Number of exercises: {10 + 7 + 14}</p>
    </div>
  )
}

const App = () => {
  //const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header />
      <Content />
      <Total />
    </div>
  )
}

export default App