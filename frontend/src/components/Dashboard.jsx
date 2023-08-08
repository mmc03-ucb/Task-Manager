import React, { useState, useEffect } from 'react'
import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import pokemon from '../utils/pokemon.jpeg'
var myWindow;

function signup() {
	myWindow = window.open ('/login');
}

export function Dashboard() {
  return(
    <Box height="50%" align="center" bgImage={pokemon} bgRepeat="no-repeat" bgSize="cover" bgPos="center">
            <Box color="white" fontWeight={700} height={90} bgColor="none">
                <Flex height={90} pt={10} justifyContent="center" alignItems="center">
                    
                    <Spacer/>
                </Flex>
            </Box>
            <Box paddingTop="15%" color="black" fontWeight={700} fontSize="3.8rem">
                <Button onClick={signup}>
                    Login Page
                </Button>
            </Box>
            <Box width="45%" opacity="0" fontSize="1.3rem">
                Make your voice heard about restoring the Roadless Rule protection in the Tongass National Forest.    
            </Box>
            <Box width="45%" opacity="0" fontSize="1.3rem">
                Make your voice heard about restoring the Roadless Rule protection in the Tongass National Forest.    
            </Box>
            <Box width="45%" opacity="0" fontSize="1.3rem">
                Make your voice heard about restoring the Roadless Rule protection in the Tongass National Forest.    
            </Box>
            <Box width="45%" opacity="0" fontSize="1.3rem">
                Make your voice heard about restoring the Roadless Rule protection in the Tongass National Forest.    
            </Box>

            <Box w="100%" textAlign="center" mt={10}>
                <Box w="200px" h="50px" mx={5} rounded="xl" variant="solid" fontWeight={700}>
                    
                </Box>
            </Box>

            <Box mt="12%">
                <ChevronDownIcon w={12} h={12} color="white"/>
            </Box>
        </Box>
  );
}

export default Dashboard