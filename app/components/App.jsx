import React from 'react';
import {Container, Table} from 'reactstrap';
import LinkSaverNavbar from "./LinkSaverNavbar";
import AddLinkForm from "./AddLinkForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {links: []};
  }

  addLink = () => {
    const links = [...this.state.links, {id: this.state.links.length + 1, value: 'link'}];
    this.setState({links});
  };

  render() {
    const links = this.state.links.map((link, index) =>
      <tr key={index}>
        <th scope="row">{link.id}</th>
        <td>{link.value}</td>
      </tr>
    );

    return (
      <div>
        <LinkSaverNavbar/>
        <br/>
        <Container>
          <AddLinkForm onAdd={this.addLink}/>
          <br/>
          <Table striped size="sm">
            <thead>
            <tr>
              <th>№</th>
              <th>Link</th>
            </tr>
            </thead>
            <tbody>
            {links}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default App;
