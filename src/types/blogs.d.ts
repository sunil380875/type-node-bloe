import { Document } from "mongoose";

interface BlogSchemaType extends Document {
  category: {
    type: String;
    required: true;
  };
  createdBy: {
    type: String;
    required: true;
    default: "Admin";
  };
  ceatedAt: {
    type: Date;
  };
  shortDescription: {
    type: String;
  };
  inPhotoTitle: {
    type: String;
  };
  photo: {
    type: String;
  };
}

export = BlogSchemaType;
