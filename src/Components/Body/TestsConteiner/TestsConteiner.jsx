import style from './Tests.module.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import {  useSelector } from "react-redux";
import { useRouteMatch } from 'react-router-dom';
const TestsConteiner = () => {/* 
  const dispatch = useDispatch() */

  const testName = useSelector(state => state.test.testName)
 

  return  <div className={style.MainPage}>

    {testName?.map(el=>(<div key={el.key} className={style.TestsConteiner}>
      <h2>{el.testName} </h2>
      <Button as={Link} to={"/test/" + el.testId} className={style.butStart} variant="success">Start</Button>
      </div>))}

    
  </div>
}

export default TestsConteiner;
