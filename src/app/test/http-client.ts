import { HttpPostClient, HttpPostParams } from '../contracts/http-post-client';
import { HttpResponse, HttpStatusCode } from '../contracts/http-response';

export class HttpPostClientSpy implements HttpPostClient {
  url?: string;
  body?: object;
  response: HttpResponse = {
    statusCode: HttpStatusCode.noContent,
  };

  async post(params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url;
    this.body = params.body;
    return Promise.resolve(this.response);
  }
}