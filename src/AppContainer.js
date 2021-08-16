import { useEffect, React } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Test from "./pages/Test";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import { selectCurrentUser } from "./redux/selectors/auth.selector";

const AppContainer = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  //const currentUser = useSelector(selectCurrentUser);
  return (
    <Container fluid={true}>
      <Switch location={location} key={location.pathname}>
        <Route component={Test} exact path="/test" />
        <Route component={SigninPage} exact path="/signin" />
        <Route component={SignupPage} exact path="/signup" />
        <Route path="*">
          <Redirect to="/signin" />
        </Route>
      </Switch>
    </Container>
  );
};

export default AppContainer;
