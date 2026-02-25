import { getDatabase } from "./mongodb";
import { Link, RawLink } from "./types";

export async function getLinks(): Promise<Link[]> {
  "use cache"
  const db = await getDatabase();
  // tell Mongo what shape we expect back
  const links = await db.collection<RawLink>("links").find().toArray();
  const data: Link[] = links.map((i) => ({
    ...i,
    _id: i._id.toString(),
  }));
  return data;
}