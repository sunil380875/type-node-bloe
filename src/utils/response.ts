import express, { Response, Request } from "express";
const responseWithStatusCode = (
  res: Response,

  data: object | any,
  message: string
) => {
  res.json({
    result: {
      success: {
        message: message,
        data,
      },
    },
  });
};

export default responseWithStatusCode;
