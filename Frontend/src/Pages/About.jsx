import React from "react";
import { Box, Flex, Text, Image, VStack, Button } from "@chakra-ui/react";
import majdoor from "../Assets/majdoor.jpg";

const About = () => {
    return (
        <Box bg="gray.100" minH="100vh" py="8" textColor={"black"} >
            {/* Header Section */}
            <Flex justify="center" align="center" mb="8" direction="column" textAlign="center">
                <Text as="h1" fontSize={{ base: "24px", md: "36px" }} fontWeight="bold" color="blue.500">
                    About Us
                </Text>
                <Text fontSize={{ base: "14px", md: "18px" }} color="gray.600" mt="4" w={{ base: "90%", md: "70%" }}>
                    Majdoor Saathi is your trusted platform for connecting skilled laborers with reliable employers.
                    Our mission is to empower workers and simplify hiring for industries, households, and businesses.
                </Text>
            </Flex>

            {/* Mission Section */}
            <Flex
                direction={{ base: "column", md: "row" }}
                w="80%"
                m="auto"
                bg="white"
                boxShadow="lg"
                borderRadius="lg"
                p="8"
                align="center"
            >
                {/* Left Section - Image */}
                <Box flex="1" textAlign="center" mb={{ base: "6", md: "0" }}>
                    <Image
                        src={majdoor}
                        alt="About Us"
                        borderRadius="lg"
                        objectFit="cover"
                        boxSize={{ base: "300px", md: "400px" }}
                    />
                </Box>

                {/* Right Section - Text */}
                <Box flex="2">
                    <Text fontSize="24px" fontWeight="semibold" mb="4" color="blue.500">
                        Our Mission
                    </Text>
                    <Text fontSize="16px" color="gray.700" mb="6">
                        At Majdoor Saathi, we aim to bridge the gap between unorganized workers and employers, providing a
                        secure and transparent platform. We believe in uplifting workers by offering them better job opportunities
                        while making the hiring process easy and efficient for employers.
                    </Text>
                    <Button colorScheme="blue" size="md">Learn More</Button>
                </Box>
            </Flex>

            {/* Core Values Section */}
            <Flex w="80%" m="auto" mt="12" direction="column" textAlign="center">
                <Text fontSize="24px" fontWeight="semibold" color="blue.500" mb="6">
                    Our Core Values
                </Text>
                <VStack spacing="6" align="stretch">
                    <Box bg="white" p="6" boxShadow="lg" borderRadius="lg">
                        <Text fontSize="18px" fontWeight="bold" color="blue.500">
                            Empowerment
                        </Text>
                        <Text fontSize="14px" color="gray.600" mt="2">
                            We strive to empower laborers by connecting them to better opportunities and offering skill development support.
                        </Text>
                    </Box>
                    <Box bg="white" p="6" boxShadow="lg" borderRadius="lg">
                        <Text fontSize="18px" fontWeight="bold" color="blue.500">
                            Transparency
                        </Text>
                        <Text fontSize="14px" color="gray.600" mt="2">
                            Trust and transparency are at the heart of our platform, ensuring a secure experience for both laborers and employers.
                        </Text>
                    </Box>
                    <Box bg="white" p="6" boxShadow="lg" borderRadius="lg">
                        <Text fontSize="18px" fontWeight="bold" color="blue.500">
                            Efficiency
                        </Text>
                        <Text fontSize="14px" color="gray.600" mt="2">
                            Simplifying the hiring process and reducing barriers for workers and employers to connect seamlessly.
                        </Text>
                    </Box>
                </VStack>
            </Flex>

            {/* Footer Section */}
            <Flex mt="12" textAlign="center" justify="center">
                <Text fontSize="14px" color="gray.500">
                    © 2024 Majdoor Saathi. All rights reserved.
                </Text>
            </Flex>
        </Box>
    );
};

export default About;
