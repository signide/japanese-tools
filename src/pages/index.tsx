import React from 'react';
import { PageProps } from 'gatsby';
import { Text, Heading, VStack } from '@chakra-ui/core';
import { Layout } from '@/components/Layout';
import { Link } from '@/components/Link';

const Home: React.FC<PageProps> = () => (
  <Layout>
    <VStack m={8} spacing={3} align="left">
      <Heading mb={4}>Japanese Tools</Heading>
      <Text mr={3}>
        <span role="img" aria-label="under-construction">
          🚧
        </span>
        Under construction. More tools coming soon!
      </Text>
      <Link href="vocabulary">Vocabulary Calculator</Link>
    </VStack>
  </Layout>
);

export default Home;
