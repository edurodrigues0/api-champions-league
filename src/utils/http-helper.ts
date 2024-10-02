interface HttpResponse {
  statusCode: number;
  body: any;
}

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
