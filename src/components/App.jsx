import React, {PureComponent} from 'react';
import {Container, Table} from 'reactstrap';
import LinkSaverNavbar from './LinkSaverNavbar';
import AddLinkForm from './AddLinkForm';
import TableRowLink from './TableRowLink';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {links: []};
  }

  addLink = () => {
    const links = [...this.state.links, {id: this.state.links.length + 1, value: 'link'}];
    this.setState({links});
  };

  render() {
    return (
      <React.Fragment>
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
            {this.state.links.map(link =>
              <TableRowLink id={link.id} value={link.value}/>
            )}
            </tbody>
          </Table>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
