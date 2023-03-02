const Header = (props) =>{
  return(
    <div>
      <h5>This page is about our courses.</h5> 
      <p><u>It name is {props.course}</u></p>
    </div>
  )
}

const Part = (props) => {
  return (
    <li>{props.part} - {props.exercises}</li>
  )
}

const Content = (props) => {
  return(
    <div>
      <h5>There is body of page to some information.</h5>
      <p>This page include 3 parts, like these:</p>
      <ol>
        <Part part={props.part1} exercises={props.exercises1} />
        <Part part={props.part2} exercises={props.exercises2} />
        <Part part={props.part3} exercises={props.exercises3} />
      </ol>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
    Number of exercises are: {props.exercises1 +  props.exercises2 + props.exercises3} 
    </div>
  )
} 

const App = () => {
  
  const course = "Half Stack application development ";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <>
    <div>
      <Header course={course} />
    </div>
    
    <div>
      <Content
        part1={part1} exercises1={exercises1} 
        part2={part2} exercises2={exercises2} 
        part3= {part3} exercises3={exercises3}
      />
    </div>
    <div>
      <Total exercises1={exercises1} exercises2={exercises2}  exercises3={exercises3} />
    </div>
    </>
  );
}

export default App;

