import React from "react";
import firebase from "firebase/compat/app";
import {
  Container,
  Grid,
  Row,
  Panel,
  Col,
  Button,
  Notification,
  useToaster,
  Message,
} from "rsuite";
import { Icon } from "@rsuite/icons";
import { auth, database } from "../misc/firebase";
import "rsuite/dist/rsuite.min.css";
import CustomNavbar from "../components/Navbar/Navbar";

const SignIn = () => {
  const toaster = useToaster();
  const signInWithProvider = async (provider) => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      if (additionalUserInfo.isNewUser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createdAt: firebase.database.ServerValue.TIMESTAMP,
          email: user.email,
        });
      }

      toaster.push(
        <Message type="success" duration={4500}>
          Signed In
        </Message>,
        { placement: "topCenter" }
      );
    } catch (err) {
      toaster.push(
        <Message type="error" duration={4500}>
          {err.message}
        </Message>,
        { placement: "topCenter" }
      );
    }
  };
  const onFacebookSignIn = () => {
    signInWithProvider(new firebase.auth.FacebookAuthProvider());
  };
  const onGoogleSignIn = () => {
    signInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdOffset={6}>
            <Panel bordered className="colored-border">
              <div className="text-center text-primary">
                <h2>Welcome to Talk2Learn</h2>
                <p>Progressive Language Practice Community for neophytes</p>
              </div>
              <div className="mt-3">
                <Button
                  block
                  color="blue"
                  appearance="primary"
                  onClick={onFacebookSignIn}
                >
                  <Icon icon="facebook" className="mr-1" />
                  <i className="fa fa-brands fa-facebook" />
                  &nbsp; Continue with Facebook
                </Button>

                <Button
                  block
                  color="red"
                  appearance="primary"
                  onClick={onGoogleSignIn}
                >
                  <i className="fa fa-brands fa-google" />
                  &nbsp; Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SignIn;
