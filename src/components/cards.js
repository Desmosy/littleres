import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";

import React from "react";

const Card = ({ title, description, imageSrc }) => {
 
  return (
    <VStack
    bg="white"
    borderRadius="10"
    overflow="hidden"
    boxShadow="md"
    spacing={4}
    _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}

    >
     <Image src={imageSrc} alt={title} borderRadius="lg"/>

     <VStack spacing={2} align="start" w="100%" paddingX="10px"
     >
        <Heading as="h3" size="md"
        color="black"
        >
          {title}
        </Heading>
        <Text color="grey"
              overflow="hidden"
              padding="5px"
        >{description}</Text>
      </VStack>
      <HStack justifyContent="flex-start" alignItems="baseline" w="100%" padding="0 10px">
        
      
        
      </HStack>
    </VStack>
  );
};

export default Card;