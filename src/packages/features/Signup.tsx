import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useSignupFlowState, useViewport, ViewportProvider } from "../hooks";
import { signupState, setState } from "../state/signupSlice";
import { DFlex } from "../ui";
import { Welcome, Username, Email, Phone, Password, Done } from "./SignupFlows";

export const InputWrapper = styled.div`
  margin: 40% 0 35%;
`;

const SignupFlows = styled.div<{ deviceType: string }>`
  /* min-height: -webkit-fill-available; // funziona su iphone
  min-height: 100vh; // funziona su desktop */
  position: relative;
  ${DFlex("SPACE-BETWEEN")} // vedere come risolvere senza space batween
  flex-direction: column;
  align-items: flex-start;
  height: ${({ deviceType }) => (deviceType === "mobile" ? "60%" : "100%")};
  width: ${({ deviceType }) => (deviceType !== "mobile" ? "60%" : "100%")};
  padding: 5% 2%;
  > h3 {
    max-width: 750px;
  }
`;

const Signup: React.FC = () => {
  const device = useViewport();

  return (
    <SignupFlows deviceType={device.device}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ViewportProvider>
              <Welcome />
            </ViewportProvider>
          </Route>
          <Route exact path={`/username`}>
            <ViewportProvider>
              <Username />
            </ViewportProvider>
          </Route>
          <Route exact path={`/email`}>
            <ViewportProvider>
              <Email />
            </ViewportProvider>
          </Route>
          <Route exact path={`/phone`}>
            <ViewportProvider>
              <Phone />
            </ViewportProvider>
          </Route>
          <Route exact path={`/password`}>
            <ViewportProvider>
              <Password />
            </ViewportProvider>
          </Route>
          <Route exact path={`/done`}>
            <ViewportProvider>
              <Done />
            </ViewportProvider>
          </Route>
        </Switch>
      </BrowserRouter>
    </SignupFlows>
  );
};

export default Signup;
