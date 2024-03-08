import React from 'react'
import FormOne from './components/SystemData/FormOne'
import MyTable from './components/SystemData/Table'
import { useSelector } from 'react-redux';
import FormTow from './components/DefinitionOfLog/FormTow';
import FormThree from './components/DefineAndConfirmTheAgent/FormThree';

const Home = () => {
  const changeForm = useSelector(state => state.changeForm);
  console.log("changeForm",changeForm)
  return (
    <div className='rtl:pr-4' dir='rtl'>
      {changeForm === 'تعریف سامانه' &&  <FormOne/> } 
      {changeForm === 'تعریف لاگ' && <FormTow/>}
      {changeForm === 'تعریف / تایید عامل' && <FormThree/>}
    </div>
  )
}

export default Home
