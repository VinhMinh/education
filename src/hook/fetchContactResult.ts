import { apiPost } from "../../api/post";

export default async function fetchContactResult(id: string, formData: any) {
  const path = `/wp-json/cf7/v1/submit/${id}`;
  return await apiPost(path, formData);
}
