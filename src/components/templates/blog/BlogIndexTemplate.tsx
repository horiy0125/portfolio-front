import React from 'react';
import { paths } from '../../../config/paths';
import { MetaData } from '../../../types';
import Section from '../../molecules/Section';
import BlogPosts from '../../organisms/blog/BlogPosts';
import BlogTemplate from '../common/BlogTemplate';

const BlogIndexTemplate: React.VFC = () => {
  const metaData: MetaData = {
    pageTitle: 'BLOG',
    pagePath: paths.blog.index,
  };

  return (
    <BlogTemplate metaData={metaData}>
      <Section enHeading="Blog Posts" jpHeading="ブログ記事" id="posts">
        <BlogPosts />
      </Section>
    </BlogTemplate>
  );
};

export default BlogIndexTemplate;
