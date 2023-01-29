import React, { useState, useEffect } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import TableTypeCK from './RemplirTableCK';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Contenuck } from '../../../api/CK/contenuck/Contenuck';
import { Typeck } from "../../../api/CK/typeck/Typeck";


import { Link, BrowserRouter } from 'react-router-dom';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input
  } from "reactstrap";
  import { Card, Col } from "react-bootstrap";
  import { Chauffeur } from '../../../api/Chauffeur/Chauffeur';
  import { Vehicule } from '../../../api/Vehicule/Vehicule';
  import { Filiale } from '../../../api/Filiale/Filiale';
  import { CheckList } from '../../../api/CK/CK/CK';
  import { Remorque } from '../../../api/Remorque/Remorque';


function RemplirCK({}) {

  //const { getContenuCKById,removeContenu } = Contenuck();
  const { getCKbyId,removeCK } = CheckList();
  const [Contenuu, setContenuu] = useState([])
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState({data: []})
  const [isLoading, setIsLoading] = useState(false);
  
  const [err, setErr] = useState('');
  const [q, setQ] = useState(0);
  const [Contenu, setContenu] = useState( []);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [state, setState] = useState({
    filiale: undefined,
    vehicule: undefined,
    chauffeur: undefined,
    remorque: undefined,
    date :undefined,
    heure: undefined
});
  // const handleClick = async () => {
  //     setIsLoading(true);
  //   try {
  //     const data = await axios.get(`http://localhost:5000/api/checkList/CK_Contenu/${q}`, {
  //       headers: {
          
  //         Accept: 'application/json',
  //       },
  //     });

  //     console.log('data is: ', JSON.stringify(data, null, 4));

  //     setContenu(data);
  //   } catch (err) {
  //     setErr(err.message);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const [reloadCKTable, setReloadCKTable] = useState(false);

  const fireGetCK = () => {
    setLoading(true);
    getCKbyId(q)
        .then((response) => {
          setContenu(response.data);
            setTotal(response.count);
            setLoading(false);
            
        }) 
        .catch(() => {
            setLoading(false);
        });
};

useEffect(() => {
    fireGetCK();
    console.log(Contenu.CK_Contenu);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reloadCKTable]);


  // const result = Contenu.map((post) => {
  //   return { ...post, CK_Contenu: post.CK_Contenu.map((tag) => tag.designation)
  //   setContenu(result) }
  // })
  //console.log(result)
  
    const [chauffeur, setchauffeur] = useState([]);
    const [vehicule, setvehicule] = useState([]);
    const [filiale, setfiliale] = useState([]);
    const [remorque, setremorque] = useState([]);
    const [types, settypes] = useState([]);
    const { getChauffeur } = Chauffeur();
    const { getVehicule } = Vehicule();
    const { getFiliale } = Filiale();
    const { getRemorque } = Remorque();
   
    const { getCK } = CheckList();
    //const { getCKbyId } = CheckList();

  
    useEffect(() => {
      getChauffeur().then((res) => {
        setchauffeur(res.data);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      getVehicule().then((res) => {
        setvehicule(res.data);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      getFiliale().then((res) => {
        setfiliale(res.data);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      getCK().then((res) => {
          settypes(res.data);
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const changeCredsS = (event) => {
    console.log('event.target.name', event.target.name);
    setState({...state, [event.target.name]: String(event.target.value)});
  };

  console.log(q);
  console.log(Contenu);
    return (
        
        <Container>
          <FormGroup>
          
          <Row>
          <i className='fa fa-edit' aria-hidden="true"></i>
          <Col lg="4" sm="8">
            <Label for='exampleCheckbox'>
                    <h3>Remplir un Checklist </h3>
                </Label>
          </Col>
          </Row>
            </FormGroup>

        <Card >
            <Card.Header>
              <Card.Title as="h4">Entête </Card.Title>
            </Card.Header>
            <Card.Body className="table-full-width table-responsive">

        <Form>
          <Row>
            {/* Left col */}
            <Col>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for="cause">
                      Code Doc <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="Code"
                      name="Code"
                      type="text"
                      required
                      placeholder="Code"
                    />
                  </Col>

                  <Col>
                    <Label for="filiale">
                      Filiale <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="filiale"
                      name="filiale"
                      type="select"
                      
                      required
                      
                    >
                      <option>Fait votre choix...</option>
                      {filiale.map(({ CodeFilial, DesignationFilial }) => {
                                return (
                                    <option key={CodeFilial} value={DesignationFilial}>
                                        {DesignationFilial}
                                    </option>
                                );
                            })}
                    </Input>
                  </Col>
                  <Col>
                    <Label for="vehicule">
                      Véhicule <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="vehicule"
                      name="vehicule"
                      type="select"
                      
                      required
                      
                    >
                      <option>Fait votre choix...</option>
                      {vehicule.map(({ ImmatriculationVeh }) => {
                                return (
                                    <option key={ImmatriculationVeh} value={ImmatriculationVeh}>
                                        {ImmatriculationVeh}
                                    </option>
                                );
                            })}
                    </Input>
                  </Col>
                  <Col>
                    <Label for="chauffeur">
                      Chauffeur <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="chauffeur"
                      name="chauffeur"
                      type="select"
                      
                      required
                      
                    >
                      <option>Fait votre choix...</option>
                      {chauffeur.map(({ MatriculeC, PrenomC }) => {
                                return (
                                    <option key={MatriculeC} value={PrenomC}>
                                        {PrenomC}
                                    </option>
                                );
                            })}
                    </Input>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
              <Row>
                  <Col>
                    <Label for="date">
                      Date  <strong className="text-danger">*</strong>
                    </Label>
                    <DatePicker
                      id="date"
                      name="date"
                      dateFormat="dd/MM/yyyy"
                      selected={startDate} 
                      onChange={(date) => setStartDate(date)}
                      required
                    />
                  </Col>
                  <Col>
                    <Label for="heure">
                      Heure<strong className="text-danger">*</strong>
                    </Label>
                    <DatePicker
                    id="heure"
                    name="heure"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Heure"
                    dateFormat="hh:mm aa"
                  />
                  </Col>
                  <Col>
                    <Label for="remorque">
                      Remorque <strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="remorque"
                      name="remorque"
                      type="select"
                      value={state.remorque || ''}
                      required
                      onChange={(event) => changeCredsS(event)}
                    >
                      <option>Fait votre choix...</option>
                      {remorque.map(({ MatriculeRem }) => {
                                return (
                                    <option key={MatriculeRem} value={MatriculeRem}>
                                        {MatriculeRem}
                                    </option>
                                );
                            })}
                    </Input>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col>
                    <Label for="CodeCK">
                    CodeCK<strong className="text-danger">*</strong>
                    </Label>
                    <Input
                      id="CodeCK"
                      name="CodeCK"
                      type="select"
                      onChange={(e) => setQ(e.target.value)}
                      value={q}
                      required
                      
                    >
                      <option>Fait votre choix...</option>
                      {types.map(({ CodeCK }) => {
                                return (
                                    <option key={CodeCK} value={CodeCK}>
                                        {CodeCK}
                                    </option>
                                );
                            })}
                    </Input>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Row>
                  <Col>
                  <button  type='button' className='btn btn-primary rounded mt-3' onClick={fireGetCK} >
                  <i className="fa fa-eye" aria-hidden="true" > </i>

                          Afficher
                    </button>
           

                  
                  </Col>
                </Row>
               </FormGroup>
              </Col>
              </Row>
        </Form>
        </Card.Body>
        </Card>

        <Row>
            <Col md="12">
            <Card className="strpied-tabled-with-hover">
                    <Card.Header>
                    <Card.Title as="h4">Lignes </Card.Title>
                    </Card.Header>

                    <Card.Body className="table-full-width table-responsive">
                      {/* {JSON.stringify(data, null, 4)}  */}
  
                      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          
            <TableCell>Contenu</TableCell>
            <TableCell>Oui</TableCell>
            <TableCell>Non</TableCell>
            <TableCell>observation</TableCell>

            {/* <TableCell align="right">CodeCK_Contenu</TableCell> */}
           
          
          </TableRow>
        </TableHead>
        <TableBody>
          {Contenu.map((contenu) => (
           
              <TableRow
              key={Contenu.CodeCK_Contenu}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>




            <TableCell component="th" scope="Contenu">{contenu.CK_Contenu.Designation}</TableCell> 
           <TableCell type="checkbox" name="report_myTextEditBox" value="checked" ><input type="checkbox"/></TableCell>
           <TableCell type="checkbox" name="report_myTextEditBox" value="checked" ><input type="checkbox"/></TableCell>
           <TableCell type="checkbox" name="report_myTextEditBox" value="checked" ><input type="file"/></TableCell>
              {/* <TableCell >{contenu.CK_Contenu.CodeCK_Contenu}</TableCell>    */}
          </TableRow>

            
            
              
              
              
        
         
          ))}





        </TableBody>
      </Table>
    </TableContainer>
                    
                    </Card.Body>
            </Card>
            </Col>
         </Row>
              
         <Card >
            
              <Card.Body className="table-full-width table-responsive">
            
                  <Button className='btn btn-danger rounded mt-3'>
                  - Annuler
                  </Button>

                  <Button className='btn btn-success rounded mt-3'>
                  + Valider
                  </Button>
              
              </Card.Body>
             
          </Card>
            
        
             
         
  
        </Container>
    );
}
export default RemplirCK;
