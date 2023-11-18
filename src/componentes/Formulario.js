import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Axios from'axios';   
import Table from 'react-bootstrap/Table';


function Formulario() {
  const[nombre, setNombre]=useState(0);
  const[apellido, setApellido]=useState(0);
  const[correo, setCorreo]=useState(0);
  const[formulario,setFormulario]=useState([]);

  const add=(e)=>{
    e.preventDefault();
    Axios.post("http://localhost:3001/create",{
      nombre:nombre,
      apellido:apellido,
      correo:correo
    }).then(()=>{
      alert("Usuario registrado");
    });
  }

  const getFormulario =() =>{
    Axios.get('http://localhost:3001/usuario').then((response)=>{
    setFormulario(response.data);
     })
  }
  
    const [validated, setValidated] = useState(false);
  
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };



    <link rel="stylesheet" href="./App.css"/>
    return (

        <Form noValidate validated={validated} onSubmit={handleSubmit} action="#" id="form">
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                
                onChange={(event)=>{
                  setNombre(event.target.value);
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                
                onChange={(event)=>{
                  setApellido(event.target.value);
                }}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Correo</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                  onChange={(event)=>{
                    setCorreo(event.target.value);
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          
          <Form.Group className="mb-3">
          </Form.Group>

          <Button 
          type="submit"
          variant="primary"
          onClick={add}
          >Enviar</Button>

          <Button 
          type="submit"
          variant="primary"
          onClick={getFormulario}>
          Agregar
          </Button>

         
          
       

       
<Table striped bordered hover >
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>correo</th>
        </tr>
      </thead>
      <tbody>
      {formulario.map((val)=>(
        <tr>
          <td key={val.id} ></td>
          <td>{val.Nombre} </td>
          <td>{val.Apellido}</td>
          <td>{val.Correo}</td>
          <td><Button variant="success">Editar</Button>{' '}
          <Button variant="danger">Eliminar</Button>{' '}
          </td>
        </tr>
        ))}
      </tbody>
    </Table>

        </Form>

    

      
    );
  }
  
  export default Formulario;