import { useSelector , useDispatch } from "react-redux";
import { decrement, increment , login , logout} from "./store/actions";
import "./App.css";
const App = () => {
  const count = useSelector( state  =>  state.counter.count )
  const isLogged = useSelector( state  =>  state.login.logged )
  const dispatch = useDispatch()
  return <div className="App">
    <header>
      <div> {count} </div>
      {
        isLogged ? <button onClick={() => dispatch(logout())}>LogOut</button> : <button onClick={() => dispatch(login())}>Login</button>
    }
    </header>
    <div className="counter">
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(increment(3))}>+ 3</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
    </div>
  </div>;
};

export default App;
