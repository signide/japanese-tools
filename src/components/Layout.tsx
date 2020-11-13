import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/core';
import { Helmet } from 'react-helmet';
import { theme } from '@/theme';

export const Layout: React.FC = ({ children }) => (
  <ChakraProvider theme={theme} resetCSS>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Japanese Tools by Kashi</title>
    </Helmet>
    <Box as="main" padding={8}>
      {children}
    </Box>
  </ChakraProvider>
);
