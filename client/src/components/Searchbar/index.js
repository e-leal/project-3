import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const Searchbar = (props) => {
  return (
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Search Jobs</Label>
        <Input type="text" name="searcg" id="Searcgh" placeholder="Find your next Career" />
      </FormGroup>
      <Button>Search</Button>
    </Form>
  );
}

export default Searchbar;