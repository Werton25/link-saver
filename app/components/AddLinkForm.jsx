import React from 'react';
import {Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';

const AddLinkForm = (props) => (
  <InputGroup>
    <Input placeholder="Enter link"/>
    <InputGroupAddon addonType="append">
      <Button color="primary" onClick={props.onAdd}>Add Link</Button>
    </InputGroupAddon>
  </InputGroup>
);

export default AddLinkForm;
