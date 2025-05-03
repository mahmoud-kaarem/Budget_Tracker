import { Container, Row, Col } from "react-bootstrap";
import TopBar from "../components/TopBar";
import UserCard from "../components/UserCard";
import IncomeCard from "../components/IncomeCard";
import ExpenseCard from "../components/ExpenseCard";
import '../styles/mainPage.css';

function MainPage() {
  return (
    <>
      <TopBar />
      <Container className="main-container mt-4">
        <Row>
          <Col md={4}>
            <UserCard />
          </Col>
          <Col md={8}>
            <Row>
              <Col md={12}>
                <IncomeCard />
              </Col>
              <Col md={12} className="mt-4">
                <ExpenseCard />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MainPage;
