
import { PageParams } from "@/types/types";
import {api} from "../../api/api";
import { toPath } from "@/utils/toPath";

export default async function fetchContactData(id:string) {
  const path = `wp-json/cf7/v1/form/${id}`
  const data = await api(path)
  return data
}