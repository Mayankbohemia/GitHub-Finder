import React, { useEffect, useState } from "react";
import Search from "./Search";
import { Container, Flex, Box, Image, Text } from "@chakra-ui/react";

function Users() {
  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (user) {
      fetch(`https://api.github.com/users/${user}`)
        .then((response) => {

            if(!response.ok) {
                throw new Error('User not found: Please enter a valid User ID')
            }
          return response.json();
        })
        .then((data) => {
          setShow(true);
          setUserData(data);
        })
        .catch((error) => {
          alert(error.message);
          setShow(false)
        });
    }
  }, [user]);

  const userIdHandler = (userName) => {
    setUser(userName);
  };

 
  const createdDate = new Date(userData.created_at);

  return (
    <Container>
      <Search userId={userIdHandler} />
      <Container
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop="50px"
      >
        {show && (
          <Container border="solid #22c35e 5px" width="70%">
            <Flex
              padding="30px"
              justifyContent="center"
              alignItems="center"
              gap="2rem"
              flexWrap="wrap"
            >
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap="1rem"
              >
                <Image
                  src={userData.avatar_url}
                  borderRadius="50%"
                  width="150px"
                  height="150px"
                />
                <Text fontSize="1.5rem">{userData.login}</Text>
              </Box>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
                gap="2rem"
              >
                <Text fontSize="2rem" color="#22c35e">
                  {userData.name}
                </Text>
                <Box display="flex" gap="1rem">
                  <Box backgroundColor="#feebc8" borderRadius="10px">
                    <Text
                      fontSize="1rem"
                      fontWeight="600"
                      backgroundColor="#feebc8"
                      borderRadius="10px"
                      padding="4px"
                      color="#7b341e"
                    >
                      PUBLIC REPOS: {userData.public_repos}
                    </Text>
                  </Box>
                  <Box backgroundColor="#fed7e2" borderRadius="10px">
                    <Text
                      fontSize="1rem"
                      fontWeight="600"
                      backgroundColor="#feebc8"
                      borderRadius="10px"
                      padding="4px"
                      color="#702459"
                    >
                      PUBLIC GISTS: {userData.public_gists}
                    </Text>
                  </Box>
                </Box>
                <Text fontSize="1.5rem" color="#22c35e">
                  Joined on: {createdDate.getFullYear()}-{String(createdDate.getMonth() + 1).padStart(2, '0')}-{String(createdDate.getDate()).padStart(2, '0')}
                </Text>
              </Box>
            </Flex>
          </Container>
        )}
      </Container>
    </Container>
  );
}

export default Users;
