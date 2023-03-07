import { v2 } from "cloudinary";
import fs from "fs";

class MediaStoreService {
  constructor() {
    v2.config({
      cloud_name: "dipnfo5ix",
      api_key: "222532489468871",
      api_secret: "f6KFBG6NNM-ZChFqugrWiUQ4bC0",
    });
  }
  public async upload({
    file,
    dir,
    folderName,
  }: // folderName,
  {
    file: any;
    dir: string;
    folderName?: string;
  }): Promise<
    | {
        key: string;
        Location: string;
        allData: any;
      }
    | boolean
  > {
    try {
      const tempFile = file.tempFilePath;
      const option: any = {
        resource_type: file.mimetype.split("/")[0],
      };
      folderName && (option.folder = folderName);
      if (file.mimetype.split("/")[0] === "application")
        delete option["resource_type"];

      const uploadImageData = await v2.uploader.upload(tempFile);
      fs.rm(`${tempFile}`, { recursive: true }, () => {});

      return {
        key: uploadImageData.secure_url,
        Location: uploadImageData.public_id,
        allData: uploadImageData,
      };
    } catch (error) {
      new Error();
      return false;
    }
  }

  async delete(key: string): Promise<any> {
    try {
      if (!key) return false;
      const deleteImageData = await v2.uploader.destroy(key);
      return deleteImageData;
      //   }
    } catch (error) {
      new Error();
      return false;
    }
  }
  async deleteAll(ids: string[]): Promise<any> {
    try {
      const deleteAll = await v2.api.delete_resources(ids);
      return deleteAll;
      //   }
    } catch (error) {
      new Error();
      return false;
    }
  }
}

export default MediaStoreService;
