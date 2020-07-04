import * as https from "https";
import * as http from "http";

interface Response<T> {
  data: T;
  status: number;
}

class Requestor<T> {
  private baseURL: string;

  constructor() {}

  setBaseURL(url: string): void {
    this.baseURL = url;
  }

  private request<T>(url: string): Promise<T> {
    return new Promise(async (resolve, reject) => {
      try {
        url = this.baseURL ? `${this.baseURL}${url}` : url;
        const protocol = url.substring(0, 5) === "https" ? https : http;

        protocol.get(url, (req) => {
          let data = "";
          req
            .on("data", chunks => data += chunks)
            .on("end", () => resolve(JSON.parse(data)))
            .on("error", error => { throw error });
        });

      } catch (error) {
        reject(error);
      }
    });
  }

  public async get<T>(url: string): Promise<Response<T>> {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await this.request<T>(url);
        resolve({ data: data, status: 200 });
      } catch (error) {
        reject(error);
      }
    });
  }
}

export const requestor = new Requestor();