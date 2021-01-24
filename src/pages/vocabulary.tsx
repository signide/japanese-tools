import React, { useState } from 'react';
import { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/core';
import { Layout } from '@/components/Layout';
import { words } from '@/util/words';
import { calculate } from '@/util/functions';

const InputHandler: React.FC<{ wordlists: string[][] }> = ({ wordlists }) => {
  const [checked, setChecked] = useState<string[][]>(
    Array(wordlists.length).fill([]),
  );
  const [page, setPage] = useState(0);
  const [wordCounts, setWordCounts] = useState<number[]>(
    Array(wordlists.length).fill(0),
  );
  const [showResults, setShowResults] = useState(false);

  const movePage = (difference: number) => {
    const newPage = page + difference;
    if (newPage > -1 && newPage < wordlists.length) {
      setPage(newPage);
    }
  };
  const wordlist = wordlists[page];

  const Checkboxes = wordlist.map((word) => (
    <Checkbox iconSize="1rem" key={word} value={word} mr={3}>
      {word}
    </Checkbox>
  ));

  const filteredCounts = wordCounts.filter(Boolean);

  return (
    <Box padding={2}>
      <Flex
        direction="column"
        wrap="wrap"
        alignContent="flex-start"
        height={[600, 400]}
      >
        <CheckboxGroup
          onChange={(values) => {
            checked[page] = values.map((value) => String(value));
            setChecked(checked);
          }}
        >
          {Checkboxes}
        </CheckboxGroup>
      </Flex>
      <Stack direction={['column', 'row']} spacing={5} padding={4}>
        <Button onClick={() => movePage(-1)} isDisabled={page === 0}>
          Previous
        </Button>
        <Button
          onClick={() => movePage(+1)}
          isDisabled={page === wordlists.length - 1}
        >
          Next
        </Button>
        <Button
          onClick={() => {
            setWordCounts(calculate(words, checked));
            setShowResults(true);
          }}
          colorScheme="blue"
        >
          Calculate
        </Button>
        {showResults ? (
          <VStack spacing={1} align="left">
            <Text>{filteredCounts.join(', ')} words</Text>
            <Text>
              Average:{' '}
              {filteredCounts.reduce((a, b) => a + b) / filteredCounts.length}
            </Text>
          </VStack>
        ) : null}
      </Stack>
    </Box>
  );
};

const Vocabulary: React.FC<PageProps> = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Vocabulary Calculator</title>
    </Helmet>
    <Heading mb={4}>Vocabulary Calculator</Heading>
    <Text mb={3} width={['100%', null, null, 850]}>
      Select all words that you can read, know at least one meaning of, and have
      encountered in native material.
    </Text>
    <Text mb={3} width={['100%', null, null, 850]}>
      Adult natives score ~45,000 words on average. Please note that different
      resources count &quot;words&quot; differently — plus, the best use of this
      test is to track your own progress over time, not to compare yourself to
      other people. Do not select English-derived words unless you have actually
      encountered them in Japanese, otherwise your score may be significantly
      thrown off.
    </Text>

    <InputHandler wordlists={words} />
  </Layout>
);

export default Vocabulary;
