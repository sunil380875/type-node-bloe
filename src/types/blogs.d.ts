import { Document, Schema } from "mongoose";

interface CategoryType extends Document {
  category: [
    {
      type: SchemaTypes.ObjectId;
      ref: "Category";
    }
  ];
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
  Description: String;
}

export = CategoryType;
