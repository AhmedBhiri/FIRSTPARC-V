import React, { useState } from "react";
import styles from "./login.module.css";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Input,
  FormGroup,
  Form,
  Label,
} from "reactstrap";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useDispatch, useSelector } from "react-redux";
import { useHistory, Redirect } from "react-router-dom";
import { logIn } from "../../redux/actions/authActions";

function Login() {
  const { auth } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [state, setState] = useState({
    email: "",
    password: "",
  });

  if (auth) {
    return <Redirect to="/" />;
  }

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleLogIn = () => {
    dispatch(logIn(state));
  };

  return (
    <div className={styles.welcome__container}>
      <Card className={styles.login__body}>
        <CardBody className="d-flex flex-column justify-content-center align-items-center">
          <CardTitle>
            <h2>Login</h2>
          </CardTitle>

          <Form className="mt-2">
            <FormGroup>
              <Label for="email" className="text-info">
                E-mail
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="email@email.com"
                value={state.email}
                onChange={(event) => changeCreds(event)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="password" className="text-info">
                Password
              </Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                value={state.password}
                onChange={(event) => changeCreds(event)}
              />
            </FormGroup>
          </Form>

          <Button className="btn-info" onClick={handleLogIn}>
            Log-in
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
