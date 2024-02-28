import Calculator from "./calculator/Calculator";
import TodoMain from "./todo/TodoMain";
import style from './AppModule.module.css';
function App() {
  return (
    <div className={style.mainApp}>

      <Calculator/>
      <TodoMain/>

    </div>
    
  );
}

export default App;
