
import './App.css';
const APi="https://opentdb.com/api.php?amount=10&difficulty=easy&type=boolean"
function Card (){
  return (
    <>
      <div>
        i am a card
      </div>
      <div >

      </div>
    </>

  )
}
function App() {
  return (
    <div className="App">
    ddd
    <Card/>
    <Card/>
    <Card/>
    </div>
  );
}

export default App;
