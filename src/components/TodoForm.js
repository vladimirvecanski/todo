import React, { useState, useEffect, useRef } from 'react';

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });

    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update task'
            value={input}
            name='text'
            ref={inputRef}
            className='todo-input edit'
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className='todo-btn'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add task'
            value={input}
            name='text'
            ref={inputRef}
            className='todo-input'
            onChange={handleChange}
          />
          <button onClick={handleSubmit} className='todo-btn'>
            Add
          </button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
