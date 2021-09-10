import { useRouter } from 'next/router';
import { useCallback } from 'react';
import {
  createExternalPostApiClient,
  updateExternalPostApiClient,
} from '../api/clients/externalPosts';
import { paths } from '../config/paths';
import { CreateExternalPostApiRequest } from '../types/api/externalPosts';

export const useExternalPostAdminApiClients = () => {
  const router = useRouter();

  const postExternalPost = useCallback(
    async (
      title: string,
      url: string,
      thumbnailUrl: string,
      categoryId: string,
      publishedAt: string,
    ) => {
      if (
        title === '' ||
        url === '' ||
        thumbnailUrl === '' ||
        categoryId === ''
      ) {
        alert('未入力の項目があります。すべての項目を入力してください。');
        return;
      }

      const parsedCategoryId = Number(categoryId);
      if (isNaN(parsedCategoryId)) {
        alert('カテゴリIDが不正です。');
        return;
      }

      const confirm = window.confirm(`外部記事を登録しますか？`);

      if (confirm) {
        const externalPost: CreateExternalPostApiRequest = {
          title,
          url,
          thumbnailUrl,
          categoryId: parsedCategoryId,
          publishedAt: new Date(publishedAt),
        };

        try {
          await createExternalPostApiClient(externalPost);
          alert('登録が完了しました。');
          router.push(`${paths.admin.externalPosts.index}`);
        } catch {
          alert('登録に失敗しました。');
        }
      }
    },
    [],
  );

  const updateExternalPost = useCallback(
    async (
      id: number,
      title: string,
      url: string,
      thumbnailUrl: string,
      categoryId: string,
      publishedAt: string,
    ) => {
      if (
        title === '' ||
        url === '' ||
        thumbnailUrl === '' ||
        categoryId === '' ||
        publishedAt === ''
      ) {
        alert('未入力の項目があります。すべての項目を入力してください。');
        return;
      }

      const parsedCategoryId = Number(categoryId);
      if (isNaN(parsedCategoryId)) {
        alert('カテゴリIDが不正です。');
        return;
      }

      const confirm = window.confirm(`外部記事を更新しますか？`);

      if (confirm) {
        const externalPost: CreateExternalPostApiRequest = {
          title,
          url,
          thumbnailUrl,
          categoryId: parsedCategoryId,
          publishedAt: new Date(publishedAt),
        };

        try {
          await updateExternalPostApiClient(id, externalPost);
          alert('更新が完了しました。');
          router.push(`${paths.admin.externalPosts.index}`);
        } catch {
          alert('更新に失敗しました。');
        }
      }
    },
    [],
  );

  return { postExternalPost, updateExternalPost };
};
