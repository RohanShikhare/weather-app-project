import { Provider } from 'react-redux';
import './Assets/css/main.css'
import Body from './Components/Body/Body';
import Header from './Components/Header/Header';
import mainStore from './Redux-Store/store';

function App() {
  return (
    <Provider store={mainStore}>
    <div className='main-body'>
      <Header/> 
      <Body/>
    </div>
    </Provider>
  );
}

export default App;
