import {APIHandler} from "../APIHandler";
import {APIRequest, Methods} from "../interfaces";

const fs = require('fs');

// System paths
const VERSION_PATH = './src/res/static/ddragon_version.json';

// Domain
const DD_URL = 'https://ddragon.leagueoflegends.com';

// Paths
const paths = {
  DD_CHAMPIONS: '/data/en_US/champion.json'
}

// Riots centralized endpoints for League of Legends data and assets
export class DataDragon {
  handler: APIHandler;
  version: string;

  constructor() {
    const ddVersion = JSON.parse(fs.readFileSync(VERSION_PATH));
    this.version = ddVersion.version;
    this.handler = new APIHandler(`${DD_URL}/cdn`)
  }

  // Get current League version from dd servers. Used for getting latest assets and data
  static async updateVersion(): Promise<boolean> {
    const API = new APIHandler(DD_URL);

    const request: APIRequest = {
      path: '/realms/euw.json',
      method: Methods.GET
    }

    await API.startRequest(request)
      .then((response) => {
        const data = response.data;

        if (data && data.v) {
          fs.writeFileSync(VERSION_PATH, JSON.stringify({version: data.v}));
          return true;
        } else {
          throw `Missing response data from ${API.domain + request.path}`;
        }
      })
      .catch((err) => {
        throw err;
      });
    return false;
  }
}
