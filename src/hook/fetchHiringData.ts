
import { PageParams } from "@/types/types";
import {api} from "../../api/api";

export default async function fetchHiringData({params}:PageParams) {
  const {  slug  } = await params
  const locale = 'en'
  const path = slug ? 
              `wp-json/wp/v2/hiring?slug=${slug[slug.length - 1]}&lang=${locale}` : 
              `wp-json/wp/v2/pages?front=${locale}`
  const data = await api(path)
  return data[0]
}