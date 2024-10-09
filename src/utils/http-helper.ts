import { HttpResponse } from "../models/http-response-model"

export const StatusHttpOK = async (data: any): Promise<HttpResponse> => {
    return {
      statusCode: 200,
      body: data,
    }
}

export const StatusHttpCreated = async (): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: { message: "Successful" },
  }
}

export const StatusHttpNoContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null
  }
}

export const StatusHttpNotFound = async (): Promise<HttpResponse> => {
  return {
    statusCode: 404,
    body: { message: "Resource not found" },
  }
}

export const StatusHttpBadRequest = async (err?: Error): Promise<HttpResponse> => {
  return {
    statusCode: 400,
    body: { message: err?.message || "Bad Request" }
  }
}

export const StatusHttpConflict = async (err?: Error): Promise<HttpResponse> => {
  return {
    statusCode: 409,
    body: { message: err?.message || "Conflict data"}
  }
}