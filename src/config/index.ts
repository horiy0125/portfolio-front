import { envVariables } from './envVariables';

export const domain = 'k-hori.com';

export const getUrl = (path: string) => {
  if (envVariables.NODE_ENV === 'development') {
    return `http://localhost:8000${path}`;
  }
  return `https://${domain}${path}`;
};

export const getApiEndpoint = (path: string) => {
  return `${envVariables.API_BASE_URL}${path}`;
};

export const getCmsEndpoint = (path: string) => {
  return `${envVariables.CMS_BASE_URL}${path}`;
};

export const apiRequestHeaders = {
  'Content-Type': 'application/json',
};

export const cmsRequestHeaders = {
  'X-MICROCMS-API-KEY': envVariables.CMS_KEY,
};

export const debugCategoryNames =
  envVariables.NODE_ENV === 'production'
    ? ['debug', 'prv memo', 'note記事']
    : [];
