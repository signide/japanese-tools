import { extendTheme } from '@chakra-ui/core';

export const theme = extendTheme({
  components: {
    Link: {
      baseStyle: {
        color: 'blue.500',
      },
    },
  },
});
