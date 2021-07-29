import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

const Update = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const [id, setID] = useState(null);
  let history = useHistory();

  useEffect(() => {
    setID(localStorage.getItem('ID'))
    setFirstName(localStorage.getItem('First Name'));
    setLastName(localStorage.getItem('Last Name'));
    setCheckbox(localStorage.getItem('Checkbox Value'))
  }, []);

  const updateAPIData = () => {
    axios.put(`https://610158184e50960017c29d98.mockapi.io/fakeData/${id}`, {
      firstName,
      lastName,
      checkbox
    }).then(() => {
      history.push('/read')
    })
  }

  return (
    <div>
      <Form className="create-form">
          <Form.Field>
              <label>First Name</label>
              <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
          </Form.Field>
          <Form.Field>
              <label>Last Name</label>
              <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
          </Form.Field>
          <Form.Field>
              <Checkbox label='I agree to the Terms and Conditions' checked={checkbox} onChange={(e) => setCheckbox(!checkbox)}/>
          </Form.Field>
          <Button onClick={updateAPIData} type='submit'>Update</Button>
      </Form>
        </div>
  )
}

export default Update
