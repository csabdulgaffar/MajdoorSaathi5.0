import { Box, Text, Flex, Link } from "@chakra-ui/react";
import React from "react";
const Footer = () => {
    return (
        <Box bg="black" color="white" py="6">
            <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                justify="space-between"
                w="80%"
                m="auto"
            >
                {/* Left Section */}
                <Text fontSize="14px" mb={{ base: "4", md: "0" }}>
                    © 2024 Majdoor Saathi. All rights reserved.
                </Text>

                {/* Center Section - Links */}
                <Flex justify="center" gap="4" mb={{ base: "4", md: "0" }}>
                    <Link href="/about" color="gray.300" _hover={{ color: "white" }}>
                        About Us
                    </Link>
                    <Link href="/contact" color="gray.300" _hover={{ color: "white" }}>
                        Contact
                    </Link>
                    <Link href="/" color="gray.300" _hover={{ color: "white" }}>
                        Privacy Policy
                    </Link>
                    <Link href="/" color="gray.300" _hover={{ color: "white" }}>
                        Terms of Service
                    </Link>
                </Flex>

                {/* Right Section - Social Media */}
                <Flex gap="3">
                    <Link href="https://facebook.com" isExternal>
                        <Text as="i" className="fab fa-facebook-f" aria-label="Facebook"></Text>
                    </Link>
                    <Link href="https://twitter.com" isExternal>
                        <Text as="i" className="fab fa-twitter" aria-label="Twitter"></Text>
                    </Link>
                    <Link href="https://instagram.com" isExternal>
                        <Text as="i" className="fab fa-instagram" aria-label="Instagram"></Text>
                    </Link>
                    <Link href="https://linkedin.com" isExternal>
                        <Text as="i" className="fab fa-linkedin-in" aria-label="LinkedIn"></Text>
                    </Link>
                </Flex>
            </Flex>
        </Box>
    );
};

export default Footer;
