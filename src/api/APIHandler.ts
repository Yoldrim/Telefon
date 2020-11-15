import {ApisauceInstance, ApiResponse, create} from 'apisauce';
import {APIRequest, Methods} from "./interfaces";

export class APIHandler {
  domain: string;
  API: ApisauceInstance;

  constructor(domain: string, ) {
    this.domain = domain;
    this.API = create({
      baseURL: this.domain,
    })
  }

  startRequest(req: APIRequest): Promise<ApiResponse<any>> {
    switch (req.method) {
      case Methods.GET:
        return this.API.get(req.path);
      case Methods.POST:
        return this.API.post(req.path, req.body)
      case Methods.PUT:
        return this.API.put(req.path, req.body);
    }
  }
}
