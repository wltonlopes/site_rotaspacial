import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Headings from './componets/Headings';
import store from './redux/store/store';
import Routes from './Routes';

function App() {
  return (
    <Provider store={ store }>
      <BrowserRouter>
        <div>
          <Headings/>
          <Routes/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
