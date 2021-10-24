import axios from 'axios';
import { React, useEffect, useState } from 'react'
import { Modal, Button, Form, Table } from "react-bootstrap";

const Products = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = (index) => {
        setDatos({
            ...datos,
            id: products[index]?.id,
            nombre: products[index]?.nombre,
            precio: products[index]?.precio
        })
        setShow2(true)
    };

    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = (index) => {
        setDatos({
            ...datos,
            id: products[index]?.id,
            nombre: products[index]?.nombre,
            precio: products[index]?.precio
        })
        setShow3(true)
    };

    const [datos, setDatos] = useState({
        id: '',
        nombre: '',
        precio: ''
    });

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const sendValues = (event) => {
        event.preventDefault();
        const data = {
            nombre: datos.nombre,
            precio: datos.precio
        };
        axios.post(initialUrl, data)
            .then(response => response.data)
            .then(data => {
                setproducts([...products, {id:data['LAST_INSERT_ID()'], nombre: datos.nombre, precio: datos.precio}])
            })
            .then(() => window.alert('Producto creado'))
            .catch(error => console.log(error));
        handleClose();
    };

    const updateValues = (event) => {
        event.preventDefault();
        const data = {
            id: datos.id,
            nombre: datos.nombre,
            precio: datos.precio
        };
        axios.put(`${initialUrl}/${datos.id}`, data)
            .then(response => response.data)
            .then(data => window.alert('Producto actualizado'))
            .catch(error => console.log(error));
        handleClose2();
        setTimeout(() => {
            window.location.reload(false);
        }, 3000);
        // setproducts([...products, {id:datos.id, nombre: datos.nombre, precio: datos.precio}])
    };

    const deleteValue = () => {
        axios.delete(`${initialUrl}/${datos.id}`)
            .then(response => response.data)
            .then(data => window.alert(data))
            .catch(error => console.log(error));
        handleClose3();
        setTimeout(() => {
            window.location.reload(false);
        }, 3000);
    }

    const [products, setproducts] = useState([]);
    const initialUrl = 'https://ventas-note.herokuapp.com/productos';

    const getProducts = (url) => {
        axios.get(url)
            .then(response => response.data)
            .then(data => setproducts(data))
            .catch(error => console.log(error))
    };

    useEffect(() => {
        getProducts(initialUrl);
    }, [])

    return (
        <div className='container pt-3'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item, index) => (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.nombre}</td>
                                <td>{item.precio}</td>
                                <td>
                                    <Button variant="primary" className='me-2' onClick={() => handleShow2(index)}>Editar</Button>
                                    <Button variant="danger" className='me-2' onClick={() => handleShow3(index)}>Eliminar</Button>
                                </td>

                            </tr>
                        ))
                    }

                </tbody>
            </Table>
            <Button variant="primary" onClick={handleShow}>
                Crear Producto
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Crear Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={sendValues}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese el nombre"
                                name='nombre'
                                onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Ingrese el precio"
                                name='precio'
                                onChange={handleInputChange} />

                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Cerrar
                            </Button>
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                    <Modal.Title>Actualizar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={updateValues}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder={datos.nombre}
                                name='nombre'
                                value={datos.nombre}
                                onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder={datos.precio}
                                name='precio'
                                value={datos.precio}
                                onChange={handleInputChange} />

                        </Form.Group>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose2}>
                                Cerrar
                            </Button>
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>

            <Modal show={show3} onHide={handleClose3}>
                <Modal.Header closeButton>
                    <Modal.Title>Eliminar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={deleteValue}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>¿Desea eliminar el producto?</Form.Label>
                        </Form.Group>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose3}>
                                No
                            </Button>
                            <Button variant="primary" type="submit">
                                Si
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Products
