import express, { Response, Request } from "express";
const responseWithStatusCode = (
  res: Response,
  statuscode: number,
  data: object | any
) => {
  res.status(statuscode).json({
    result: {
      success: {
        message: "Success",
        data,
      },
    },
  });
};

export default responseWithStatusCode;
