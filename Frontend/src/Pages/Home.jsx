import { Box, Image, Text, Flex } from "@chakra-ui/react";
import React from "react";
import jobs from "../Assets/jobs.jpg";


const Home = () => {
  const imgurl = "https://jobsgaar.com/blog/wp-content/uploads/2021/07/bigstock-170353778.jpg";
  // const imgurl = { jobs };

  return (
    // <Box w={"100%"} m="auto" h={{ md: '100vh', sm: '89vh', base: "90vh" }} py='4' bgImage={bgImg} backgroundRepeat={'no-repeat'} bgSize={'cover'}>

    <Box w={"100%"}
      m="auto"
      h={{ md: "100vh", sm: "89vh", base: "90vh" }}
      py="4"
      bg="gray.200"
      textColor={"black"} >

      <Flex
        w="80%"
        m="auto"
        justify="center"
        direction="column"
        align="center"
        textAlign="center"
        mb="6"
      >
        <Text as="h1" fontSize={{ md: "36px", sm: "24px" }} fontWeight="bold">
          Welcome to <span style={{ color: "#3182ce" }}>Majdoor Saathi</span>
        </Text>
        <Text fontSize={{ md: "18px", sm: "14px" }} mt="4" color="gray.600">
          Connecting skilled laborers with employers to create opportunities
          and ease hiring for all. Your trusted partner for jobs and workers.
        </Text>
      </Flex>

      <Box width={"70%"} m="auto">

        <Image boxSize="70%" objectFit={"contain"} margin="auto" src={imgurl} alt="Dan Abramov" />
      </Box>
      <Flex w={"70%"} m="auto" my='4' justify={'center'}>
        <Text as='b' fontSize={{ md: '28px', sm: '16px' }} textAlign={"center"}>
          Manual Labour Jobs - Jobs for unorganized sector
        </Text>
      </Flex>
    </Box >
  );
};

export default Home;
