import React, { useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaCheck, FaArrowLeft } from 'react-icons/fa'
import Box from '../../components/Box'


const DisciplinasForm = () => {

    const [dados, setDados] = useState({})

    function handleDados(event){
        const valor = event.target.value
        const name = event.target.name

        setDados({...dados, [name]: valor});
    }

    function handleSubmit(){
        console.log(dados);
    }

    return (
        <>
            <Box title="Cursos">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="text" name="nome" onChange={handleDados} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="curso">
                        <Form.Label column sm={2}>Curso: </Form.Label>
                        <Col sm={10}>
                            <Form.Control type="number" name="curso" onChange={handleDados}  />
                        </Col>
                    </Form.Group>
    
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/cursos"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default DisciplinasForm