import { HttpResponse } from "../models/http-response-model"

export const StatusHttpOK = async (data: any): Promise<HttpResponse> => {
    return {
      statusCode: 200,
      body: data,
    }
}

export const StatusHttpCreated = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 201,
    body: data,
  }
}

export const StatusHttpNoContent = async (): Promise<HttpResponse> => {
  return {
    statusCode: 204,
    body: null
  }
}