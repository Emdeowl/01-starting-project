import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styled from 'styled-components';
import './CourseInput.css';

const FormControl = styled.div`

  margin: 0.5rem 0;


& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
  color : ${(props) => (props.isValid ? 'red' : 'black')}
}

& input {
  display: block;
  width: 100%;
  border: 1px solid ${(props) => (props.isValid ? 'red' : '#ccc')};
  background: ${(props) => (props.isValid ? 'salmon' : 'transparent')};
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;

}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.inValid label{
  color:'red';
}
`;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true); //글자를 다시 친다면 true가 되어 리셋하는 과정
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      //trim은 공백을 지우는 함수 =  즉 내용이 비어있으면
      setIsValid(false); // 사용자의 입력이 유효하지 않다면
      return; // 리턴을 하면 아래 함수가 작동하지 않게된다. => 목표가 추가가 안된다.
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl isValid={!isValid}>
        {/* `` 사이는 문자열로 취급 */}
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
