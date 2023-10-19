import React from 'react';

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

const SEO = ({ title, meta = [], description }: SEOProps) => {
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

  const tags = defaultMeta.concat(meta);

  return (
    <>
      <title>{title}</title>
      {tags.map((tag) => (
        <meta key={tag.name || tag.property} {...tag} />
      ))}
    </>
  );
};

export default SEO;

SEO.defaultProps = {
  meta: [],
};
