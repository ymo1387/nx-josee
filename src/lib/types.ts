import type { ObjectId } from "mongodb";

// Raw record as it exists in MongoDB
export interface RawLink {
  _id: ObjectId;
  title: string;
  url: string;
}

// Client-facing link where the id has been stringified
export interface Link {
  _id: string;
  title: string;
  url: string;
}
