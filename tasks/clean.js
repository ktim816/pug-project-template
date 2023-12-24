import {deleteAsync} from "del";

export default async () => {
  return await deleteAsync("dist");
};
