
/*
old Header no prop
const Header = () => {
  return (
    <div>
      <h1>Half Stack application development outside</h1>
    </div>
  )
}
*/

// New Header prop
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

//new Part with prop
const Part = (props) => {
  return (
    <div>
      <p>{props.part}{props.exercises}</p>
    </div>
  )
}



// new Content with prop
const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
    </div>
  )
}


// new Total with prop
const Total = (props) => {
  return (
    <div>
      <p>{props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}


/* 
 Now that we have an object to work with we can now go 
 back and refactor out compotents with the "skeleton" of how we 
 eventually want to "unpack" the object at the point or rendering
 within the App components return statement

 */


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App