import React, { useState, useEffect } from 'react';
import { Card, Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import { getTasks, updateTask } from '../../api';
import SubList from "../../Component/SubList";
import AddTask from "../../Component/AddTask";

function DisplayList() {
    const [isSubTask, setIsSubTask] = useState();
    const [mainList, setMainList] = useState([]);
    const [refresh, toggleRefresh] = useState(false);

    const handleOnChange = (data) => {
        updateTask({ id: data.id, status: data.status === 'pending' ? 'completed' : 'pending' })
            .then((res) => toggleRefresh(!refresh))
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        getTasks()
            .then(res => setMainList(res.data))
            .catch((err) => console.log(err))
    }, [refresh])

    return (
        <Container className='mt-5'>
            <AddTask toggleRefresh={() => toggleRefresh(!refresh)} />
            {mainList.map((data) => (
                <React.Fragment key={data.id}>
                    <Row className="justify-content-md-center">
                        <Col xs lg="6">
                            <Card style={{ width: '35rem' }}>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <Row>
                                            <Col><Form.Check
                                                inline
                                                name="group1"
                                                type='checkbox'
                                                checked={data.status === 'completed'}
                                                onChange={() => handleOnChange(data)}
                                            /></Col>
                                            <Col xs={9}>{data.title}</Col>
                                            <Col onClick={() => setIsSubTask(isSubTask === data.id ? null : data.id)}><i className={`fas fa-chevron-${isSubTask === data.id ? "up" : "down"}`} style={{ cursor: 'pointer' }}></i></Col>
                                        </Row>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                    {isSubTask === data.id ? (<SubList toggleRefresh={() => toggleRefresh(!refresh)} data={data} />) : null}
                </React.Fragment>
            ))}
        </Container>
    );
}

export default DisplayList;
