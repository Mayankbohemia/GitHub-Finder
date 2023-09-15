import React, { useState } from "react";
import { Button, Input, Container, Text } from "@chakra-ui/react";

function Search(props) {

    const [inputValue, setInputValue] = useState('')
  const submitHandler = (event) => {
    event.preventDefault();
    props.userId(inputValue);
  };

  const inputValueHandler = (event) => {
    setInputValue(event.target.value)
  }
  return (
    <Container marginTop="30px" textAlign="center">
      <form onSubmit={submitHandler}>
        <Text fontSize="2rem">Search users on GitHub</Text>
        <Container
          display="flex"
          gap="1rem"
          alignItems="center"
          justifyContent="center"
          marginTop="20px"
          flexWrap="wrap"
        >
          <Input
          value={inputValue}
          onChange={inputValueHandler}
            width="80%"
            height="45px"
            borderRadius="10px"
            paddingLeft="1rem"
            fontSize="1.5rem"
            fontWeight="600"
            color="green"
            placeholder="Type a username (i.e. Mayankbohemia)"
          />
          <Button
            color="white"
            fontSize="1.5rem"
            fontWeight="900"
            height="45px"
            width="150px"
            borderRadius="10px"
            backgroundColor="#22c35e"
            type="submit"
           
            cursor="pointer"
          >
            Search
          </Button>
        </Container>
      </form>
    </Container>
  );
}

export default Search;
