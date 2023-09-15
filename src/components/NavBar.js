import React from "react";

import { Flex, Image, Box } from "@chakra-ui/react";

function NavBar() {
  return (
    <>
    <Flex
      justifyContent="center"
      alignItems="center"
      marginTop="20px"
      flexDirection="column"
    >
      <Box position="relative" aspectRatio={5 / 3}>
        <Image
          src={"/logo.png"}
          height="100px"
          width="200px"
          alt="gitHub logo"
          sx={{ filter: "invert(1)" }}
        />
      </Box>
     
    </Flex>
     
    <hr />
     </>
  );
}

export default NavBar;
