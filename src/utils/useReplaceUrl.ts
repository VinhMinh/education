
import {ReplaceUrlOptions} from '@/types/types'

const backendUrl:string = process.env.WORDPRESS_API_URL || '';  
const frontendUrl:string = '';

const useReplaceUrl = (
  url : string | undefined,
  {replaceUrl = backendUrl,
  toUrl = frontendUrl} : ReplaceUrlOptions = {} ):string | undefined => {
  if (!url) return url; 

  return url.replace(new RegExp(replaceUrl, 'g'), toUrl);
};

export default useReplaceUrl;