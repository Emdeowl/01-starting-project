import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
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
      <div className="form-control">
        <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>{' '}
        {/* 동적 스타일링  */}
        <input
          type="text"
          onChange={goalInputChangeHandler}
          style={{ color: !isValid