import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { Logo } from './components/logo';

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/vguleaev/concepts',
  },
  docsRepositoryBase: 'https://github.com/vguleaev/concepts',
  footer: {
    text: 'Concepts for SWE by Vladislav Guleaev',
  },
  head: (
    <>
      <title>Concepts for SWE</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="title" content="Concepts for SWE" />
      <meta name="description" content="List of concepts that every SWE needs" />
      <meta property="og:title" content="Concepts for SWE" />
      <meta property="og:description" content="List of concepts that every SWE needs" />
    </>
  ),
};

export default config;
