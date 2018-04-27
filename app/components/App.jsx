import React from 'react';
import {Container, Table} from 'reactstrap';
import LinkSaverNavbar from "./LinkSaverNavbar";
import AddLinkForm from "./AddLinkForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this._addLink = this._addLink.bind(this);
    this.state = {links: []};
  }

  _addLink() {
    const links = this.state.links;
    links.push({id: links.length + 1, value: 'link'});
    this.setState({links: links});
  }

  render() {
    const trs = this.state.links.map((link) =>
      <tr>
        <th scope="row">{link.id}</th>
        <td>{link.value}</td>
      </tr>
    );

    return (
      <div>
        <LinkSaverNavbar/>
        <br/>
        <Container>
          <AddLinkForm onClick={this._addLink}/>
          <br/>
          <Table striped size="sm">
            <thead>
            <tr>
              <th>№</th>
              <th>Link</th>
            </tr>
            </thead>
            <tbody>
            {trs}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default App;
