
import { PageParams } from "@/types/types";
import {api} from "../../api/api";
import { toPath } from "@/utils/toPath";

export default async function fetchPostData({params}:PageParams) {
  const {  slug } = await params
  const pathLink = toPath( Array.isArray(slug) ? slug : slug ? [slug] : [])
  const locale = 'en'
  const path = slug ? 
              `wp-json/wp/v2/pages?slug=${slug[slug.length - 1]}&lang=${locale}` : 
              `wp-json/wp/v2/pages?front=${locale}`
  const data = await api(path)
  return data[0]
}