import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { createTask } from '../api';

function AddTask(props) {
    const [todo, setTodo] = useState("");

    const addTodoTask = () => {
        createTask({ title: todo, status: 'pending' })
            .then(() => { props.toggleRefresh(); setTodo(''); })
            .catch((error) => console.log(error));
    }

    return (
        <Row className="justify-content-md-center">
            <Col xs lg="5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" onChange={(e) => setTodo(e.target.value)} value={todo} placeholder="What to do?" />
                </Form.Group>
            </Col>
            <Col xs lg="1">
                <Button type="submit" onClick={() => addTodoTask()}>Submit</Button>
            </Col>
        </Row>
    );
}

export default AddTask;
