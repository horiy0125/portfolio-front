import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import IndexTemplate from '../components/templates/IndexTemplate';
import { fetchCmsPostsApiClient } from '../api/clients/cmsPosts';
import { CmsPost } from '../types/cmsPost';
import { useSetCmsPosts } from '../hooks/cmsPosts';
import { Announcement } from '../types/announcement';
import { useSetAnnouncements } from '../hooks/announcements';
import { fetchAnnouncementsApiClient } from '../api/clients/announcements';
import { fetchExternalPostsApiClient } from '../api/clients/externalPosts';
import { ExternalPost } from '../types/externalPost';
import { useSetExternalPosts } from '../hooks/externalPosts';
import { debugCategoryNames } from '../config';
import { fetchMarkdownPostsApiClient } from '../api/clients/markdownPosts';
import { MarkdownPost } from '../types/markdownPost';
import { useSetMarkdownPosts } from '../hooks/markdownPosts';

type StaticProps = {
  cmsPosts: CmsPost[];
  externalPosts: ExternalPost[] | null;
  markdownPosts: MarkdownPost[] | null;
  announcements: Announcement[];
};

const IndexPage: NextPage<StaticProps> = ({
  cmsPosts,
  externalPosts,
  markdownPosts,
  announcements,
}) => {
  if (cmsPosts.length !== 0) {
    useSetCmsPosts(cmsPosts);
  }
  if (externalPosts) {
    useSetExternalPosts(externalPosts);
  }
  if (markdownPosts) {
    useSetMarkdownPosts(markdownPosts);
  }
  if (announcements.length !== 0) {
    useSetAnnouncements(announcements);
  }

  return <IndexTemplate />;
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  try {
    const cmsPostsRes = await fetchCmsPostsApiClient();
    const externalPostsRes = await fetchExternalPostsApiClient();
    const markdownPostsRes = await fetchMarkdownPostsApiClient();
    const announcementsRes = await fetchAnnouncementsApiClient();
    const props: StaticProps = {
      cmsPosts: cmsPostsRes.contents,
      externalPosts: externalPostsRes.externalPosts.filter(
        post => debugCategoryNames.includes(post.categoryName) === false,
      ),
      markdownPosts: markdownPostsRes.markdownPosts.filter(
        post => post.publish,
      ),
      announcements: announcementsRes.contents.filter(
        post => post.debug === false,
      ),
    };

    return { props };
  } catch (e) {
    console.error(e);
    const props: StaticProps = {
      cmsPosts: [],
      externalPosts: [],
      markdownPosts: [],
      announcements: [],
    };

    return { props };
  }
};

export default IndexPage;
