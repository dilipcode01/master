import React, { useState } from 'react';
import { Button, Card, Col, Form, FormControl, InputGroup, ListGroup, Row } from 'react-bootstrap';
import { createSubtask, updateSubTask } from '../api';

function SubList(props) {
  const [subtodo, setSubTodo] = useState("");


  const handleOnChange = (data) => {
    updateSubTask({ id: data.id, status: data.status === 'completed' ? 'pending' : 'completed' })
      .then((res) => props.toggleRefresh())
      .catch((error) => console.log(error));
  };

  const addSubTodoTask = (id) => {
    if (!subtodo) return;
    createSubtask({ task_id: id, title: subtodo, status: 'pending' })
      .then((res) => { props.toggleRefresh(); setSubTodo(''); })
      .catch((error) => console.log(error));
  }

  return (
    <React.Fragment>
      <Row className="justify-content-md-center" >
        <Col lg="6">
          <Card style={{ width: '500px', marginRight: '100px', marginLeft: '30px' }}>
            <ListGroup variant="flush">
              {props.data.Subtasks.map((dataItem) =>
                <ListGroup.Item key={dataItem.id}>
                  <Row>
                    <Col xs={1}><Form.Check
                      inline
                      name={`group${dataItem.id}`}
                      type='checkbox'
                      checked={dataItem.status === 'completed'}
                      onChange={() => handleOnChange(dataItem)}
                    /></Col>
                    <Col xs={8} >{dataItem.title}</Col>
                  </Row>
                </ListGroup.Item>
              )}
              <InputGroup className="mb-6">
                <FormControl
                  placeholder="Add another sub task?"
                  onChange={(e) => setSubTodo(e.target.value)} value={subtodo} required
                />
                <Button type="submit" onClick={() => addSubTodoTask(props.data.id)}>Add</Button>
              </InputGroup>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default SubList;
