import GlobalStyles from './Globals/GlobalStyles';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';




function App() {
  
  return (
   <div>
       <h1 className='text-red-500 content'>dang duy</h1>
      <FontAwesomeIcon className='text-red-500' icon={faFaceFrown}/>
      
   </div>
  );
}

export default App;
