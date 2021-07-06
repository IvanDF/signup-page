import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { useViewport, ViewportProvider } from "../hooks";
import {
  ButtonComponent,
  DFlex,
  InputComponent,
  Theme,
  TyphographyComponent,
} from "../ui";
import { Done } from "./SignupFlows/done/Done";
import { Email } from "./SignupFlows/email/Email";
import { Password } from "./SignupFlows/password/Password";
import { Phone } from "./SignupFlows/phone/Phone";
import { Username } from "./SignupFlows/username/Username";
import { Welcome } from "./SignupFlows/welcome/Welcome";

const SignupFlows = styled.div<{ deviceType: string }>`
  position: relative;
  ${DFlex("SPACE-BETWEEN")}
  flex-direction: column;
  align-items: flex-start;
  height: ${({ deviceType }) => (deviceType === "mobile" ? "60%" : "100%")};
  width: ${({ deviceType }) => (deviceType !== "mobile" ? "60%" : "100%")};
  padding: 5% 2%;
  > h3 {
    max-width: 750px;
  }
`;

const Signup: React.FC<{ baseUrl?: string }> = ({
  baseUrl = window.location.href,
}) => {
  const device = useViewport();

  console.log(baseUrl);

  const [inputText, setInputText] = useState("");

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
