import { Link as ChakraLink, LinkProps } from '@chakra-ui/core';
import { Link as GatsbyLink } from 'gatsby';
import React, { ReactElement } from 'react';

export function Link({
  href,
  isExternal,
  ...restProps
}: LinkProps): ReactElement {
  return (
    <ChakraLink
      {...(isExternal ? { href } : { as: GatsbyLink, to: href })}
      {...restProps}
    />
  );
}
