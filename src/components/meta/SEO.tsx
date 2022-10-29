import React from 'react';
import { Helmet } from 'react-helmet';

type MetaTag = {
  name?: string;
  content: string;
  property?: string;
};

type SEOProps = {
  title: string;
  description: string;
  meta?: MetaTag[];
};

function SEO({ title, meta, description }: SEOProps) {
  const defaultMeta: MetaTag[] = [
    {
      name: 'description',
      content: description,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
  ];

  return (
    <Helmet
      title={title}
      meta={meta ? defaultMeta.concat(meta) : defaultMeta}
    />
  );
}

export default SEO;

SEO.defaultProps = {
  meta: [],
};
