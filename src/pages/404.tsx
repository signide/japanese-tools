import React from 'react';
import { PageProps } from 'gatsby';
import { Layout } from '@/components/Layout';
import { Heading, VStack } from '@chakra-ui/core';
import { Link } from '@/components/Link';

const NotFound: React.FC<PageProps> = () => (
  <Layout>
    <VStack m={8} spacing={3} align="left">
      <Heading>
        <span role="img" aria-label="under-construction">
          🚧
        </span>{' '}
        Page not found!
      </Heading>
      <Link href="/">Go back</Link>
    </VStack>
  </Layout>
);

export default NotFound;
