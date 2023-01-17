import express, { Response, Request } from "express";
const responceWithstatusCode = (
  res: Response,
  statuscode: number,
  data: object | any
) => {
  res.status(statuscode).json({
    status: true,
    NumberofResult: data.length,
    result: {
      data,
    },
  });
};

export = responceWithstatusCode;
