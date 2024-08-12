import React from 'react';
import '../css/home.css';
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';

function Home() {
    return (
        <Container className="home-container mt-4">
            {/* Header */}
            <Row className="mb-4">
                <Col>
                    <h1 className="welcome-text">Welcome back, [User's Name]!</h1>
                </Col>
            </Row>

            {/* Overview Cards */}
            <Row className="mb-4">
                <Col lg={3} md={6} sm={12}>
                    <Card className="overview-card">
                        <Card.Body>
                            <Card.Title>Total Balance</Card.Title>
                            <Card.Text>₹50,000</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Card className="overview-card">
                        <Card.Body>
                            <Card.Title>Total Income</Card.Title>
                            <Card.Text>₹30,000</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Card className="overview-card">
                        <Card.Body>
                            <Card.Title>Total Expenses</Card.Title>
                            <Card.Text>₹20,000</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3} md={6} sm={12}>
                    <Card className="overview-card">
                        <Card.Body>
                            <Card.Title>Budget Status</Card.Title>
                            <ProgressBar now={70} label={`70%`} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Visualizations */}
            <Row className="mb-4">
                <Col lg={6} md={12}>
                    <Card className="chart-card">
                        <Card.Body>
                            <Card.Title>Spending Overview</Card.Title>
                            {/* Replace with actual chart */}
                            <div className="chart-placeholder">Pie/Donut Chart</div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6} md={12}>
                    <Card className="chart-card">
                        <Card.Body>
                            <Card.Title>Income vs. Expenses</Card.Title>
                            {/* Replace with actual chart */}
                            <div className="chart-placeholder">Line Graph</div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Quick Actions */}
            <Row className="mb-4">
                <Col>
                    <Button variant="primary" className="me-2">Add Expense</Button>
                    <Button variant="success" className="me-2">Add Income</Button>
                    <Button variant="info">Set Budget</Button>
                </Col>
            </Row>

            {/* Recent Transactions */}
            <Row className="mb-4">
                <Col>
                    <Card className="transactions-card">
                        <Card.Body>
                            <Card.Title>Recent Transactions</Card.Title>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Category</th>
                                        <th>Description</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>08/08/2024</td>
                                        <td>Groceries</td>
                                        <td>Supermarket Purchase</td>
                                        <td>₹1,200</td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                            <Button variant="link">View All Transactions</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Budget Alerts/Notifications */}
            <Row>
                <Col>
                    <Card className="alert-card">
                        <Card.Body>
                            <Card.Text>You have exceeded your budget for dining out!</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
