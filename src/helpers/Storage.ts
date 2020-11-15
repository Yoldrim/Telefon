const fs = require('fs');

interface I_user {
  name: string,
  accountId?: string,
  profileIconId?: number,
  revisionDate?: number,
  id?: string,
  puuid?: string,
  summonerLevel?: number
}

interface I_store {
  user: I_user
}


const DATA_PATH = './data/store.json';

export class Storage {
  data: I_store;

  constructor() {
    this.data = {} as I_store
    this.getPersistedStorage()
      .then((data: I_store) => {
        this.data = data;
      })
  }


  async getPersistedStorage(): Promise<I_store> {
    let file;

    try {
      file = await fs.readFileSync(DATA_PATH);
    } catch (e) {}
    return file;
  }

  async persistStorage(): Promise<boolean> {
    try {
      await fs.writeFileSync(DATA_PATH, JSON.stringify(this.data))
    } catch (e) {
      throw e
    }
    return true;
  }
}
