import React from "react";
import { Box, Flex, Text, Input, Textarea, Button, VStack } from "@chakra-ui/react";

const Contact = () => {
    return (
        <Box bg="gray.100" minH="100vh" py="8" textColor={"black"}>
            {/* Header */}
            <Flex justify="center" align="center" mb="8">
                <Text as="h1" fontSize={{ base: "24px", md: "36px" }} fontWeight="bold" textAlign="center">
                    Contact Us
                </Text>
            </Flex>

            {/* Form Section */}
            <Flex
                w={{ base: "90%", md: "50%" }}
                m="auto"
                bg="white"
                boxShadow="lg"
                borderRadius="lg"
                p="8"
                direction="column"
            >
                <Text fontSize="18px" fontWeight="semibold" mb="4">
                    We'd love to hear from you!
                </Text>

                <VStack spacing="4" align="stretch">
                    {/* Name Input */}
                    <Box>
                        <Text fontSize="14px" mb="2" fontWeight="medium">
                            Your Name
                        </Text>
                        <Input placeholder="Enter your name" focusBorderColor="blue.500" />
                    </Box>

                    {/* Email Input */}
                    <Box>
                        <Text fontSize="14px" mb="2" fontWeight="medium">
                            Your Email
                        </Text>
                        <Input placeholder="Enter your email" type="email" focusBorderColor="blue.500" />
                    </Box>

                    {/* Message Input */}
                    <Box>
                        <Text fontSize="14px" mb="2" fontWeight="medium">
                            Your Message
                        </Text>
                        <Textarea placeholder="Write your message" focusBorderColor="blue.500" />
                    </Box>

                    {/* Submit Button */}
                    <Button colorScheme="blue" size="lg" w="100%">
                        Submit
                    </Button>
                </VStack>
            </Flex>

            {/* Contact Info Section */}
            <Flex
                w={{ base: "90%", md: "50%" }}
                m="auto"
                mt="12"
                direction="column"
                textAlign="center"
                color="gray.600"
            >
                <Text fontSize="16px" mb="2" fontWeight="bold">
                    Reach us at:
                </Text>
                <Text fontSize="14px">Email: support@majdoorsathi.com</Text>
                <Text fontSize="14px">Phone: +91 9876543210</Text>
                <Text fontSize="14px">Address: 123 Majdoor Street, City, Country</Text>
            </Flex>
        </Box>
    );
};

export default Contact;
