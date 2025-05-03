import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import '../styles/insightsPage.css';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import axios from 'axios';

function InsightsPage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [topCategory, setTopCategory] = useState({ name: '', value: 0 });

  useEffect(() => {
    // API call to fetch data
    axios.get('https://api.example.com/expenses') 
      .then(response => {
        const expensesData = response.data;
        
       
        setData(expensesData);
        setTotalExpenses(expensesData.reduce((sum, item) => sum + item.value, 0));

 
        const topSpendingCategory = expensesData.reduce((max, current) => (current.value > max.value ? current : max), { value: 0 });
        setTopCategory(topSpendingCategory);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleBackClick = () => {
    navigate(-1);
  };

  const COLORS = ['#0d6efd', '#003f7f', '#5caeff', '#b0d4ff'];

  return (
    <>
      <TopBar />
      <Container className="main-container mt-4">
        <h2 className="text-center mb-4">Summary & Insights</h2>
        <Row>
          <Col md={6}>
            <Card className="insight-card">
              <Card.Body>
                <Card.Title>Total Expenses</Card.Title>
                <Card.Text>💸 EGP {totalExpenses}</Card.Text>
              </Card.Body>
            </Card>
            <Card className="insight-card mt-3">
              <Card.Body>
                <Card.Title>Top Spending Category</Card.Title>
                <Card.Text> {topCategory.name} - EGP {topCategory.value}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="insight-card chart-card">
              <Card.Body>
                <Card.Title>Expenses Breakdown</Card.Title>
                <div className="chart-container">
                  <PieChart width={300} height={250}>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label
                    >
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="text-center mt-4">
          <Button variant="secondary" onClick={handleBackClick}>
            ← Back
          </Button>
        </div>
      </Container>
    </>
  );
}

export default InsightsPage;
