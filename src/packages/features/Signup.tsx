import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useViewport, ViewportProvider } from "../hooks";
import { setState, signupState } from "../state/signupSlice";
import { DFlex } from "../ui";
import { Welcome, Username, Email, Phone, Password, Done } from "./SignupFlows";

const SignupFlows = styled.div<{ deviceType: string }>`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  ${DFlex("SPACE-BETWEEN")}
  flex-direction: column;
  align-items: flex-start;
  width: ${({ deviceType }) => (deviceType !== "mobile" ? "60%" : "100%")};
  padding: 5% 2%;
  > h3 {
    max-width: 750px;
  }
`;

const Signup: React.FC = () => {
  const device = useViewport();
  const dispatch = useDispatch();
  const signupStateSelector = useSelector(signupState);
  const urlName = window.location.pathname.toUpperCase().slice(1);

  useEffect(() => {
    console.log(signupStateSelector, "STATO-PRIMA");
    // if (signupStateSelector === urlName.toUpperCase()) {
    dispatch(setState({ value: urlName }));
    // }

    console.log(signupStateSelector, "STATO-DOPO");
    console.log(urlName, "URL");
  }, []); // <-- lasciare vuoto l'array

  // onunload onbeforeunload EFFETTUARE IL REDIRECT ALLA RIAPERTURA DEL TAB

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
