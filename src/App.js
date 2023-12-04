import logo from './logo.svg';
import './App.css';
import MyClassComponent from './Components/MyClassComponent';
import { MyFunctionalComponent } from './Components/MyFunctionalComponent';

export function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          <MyClassComponent/>
          <MyFunctionalComponent/>
        </p>
       
      </header>
    </div>
  );
}

