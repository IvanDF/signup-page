import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useViewport, ViewportProvider } from "../hooks";
import { setState } from "../state/signupSlice";
import { DFlex } from "../ui";
import { Welcome, Username, Email, Phone, Password, Done } from "./SignupFlows";

const SignupFlows = styled.div<{ deviceType: string }>`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  position: relative;
  ${DFlex("SPACE-BETWEEN")}
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 5% 2%;
  > h3 {
    max-width: 750px;
  }
`;

export const SignupFlowWrapper = styled.div<{ fullwidth: boolean }>`
  ${({ fullwidth }) =>
    fullwidth
      ? `
  ${DFlex("CENTER")};
  justify-content: center;
  text-align: center;
  `
      : `
  ${DFlex("SPACE-BETWEEN")};
  align-items: flex-start;
  justify-content: space-between;
  `};
  flex-direction: column;
  height: 100%;
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "60%")};
`;

const Signup: React.FC = () => {
  const device = useViewport();
  const dispatch = useDispatch();
  const urlName = window.location.pathname.toUpperCase().slice(1);

  useEffect(() => {
    dispatch(setState({ value: urlName }));
  }, []); // <-- lasciare vuoto l'array

  return (
    <SignupFlows deviceType={device.device}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <ViewportProvider>
              <Welcome fullwidth={false} />
            </ViewportProvider>
          </Route>
          <Route exact path={`/username`}>
            <ViewportProvider>
              <Username fullwidth={false} />
            </ViewportProvider>
          </Route>
          <Route exact path={`/email`}>
            <ViewportProvider>
              <Email fullwidth={false} />
            </ViewportProvider>
          </Route>
          <Route exact path={`/phone`}>
            <ViewportProvider>
              <Phone fullwidth={false} />
            </ViewportProvider>
          </Route>
          <Route exact path={`/password`}>
            <ViewportProvider>
              <Password fullwidth={false} />
            </ViewportProvider>
          </Route>
          <Route exact path={`/done`}>
            <ViewportProvider>
              <Done fullwidth={true} />
            </ViewportProvider>
          </Route>
        </Switch>
      </BrowserRouter>
    </SignupFlows>
  );
};

export default Signup;
