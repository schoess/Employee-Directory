import React from "react";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


class Search extends React.Component {
  state = {
    searchTerm: "",
  };

  handleInputChange = event => {
    this.setState({ searchTerm: event.target.value });

  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        
        <Container className = "mt-5">
          <Row>

            <Col></Col>

            <Col xs={6}>

              <Form.Control type="text"
                placeholder="Enter employee name!"
                value={this.state.value}
                onChange={this.handleInputChange} />
            </Col>

            <Col xs>
              <Button type='submit'>Search!</Button>
            </Col>

          </Row>

        </Container>
      
      </Form>


    );
  }
}

export default Search;