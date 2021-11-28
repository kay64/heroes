import { HeroInfo } from '@heroes/api-interfaces';

const heroInfosApi = {
  get: async (offset: number, limit: number): Promise<HeroInfo[]> => {
    const response = await fetch(`/api/heroes?offset=${offset}&limit=${limit}`);
    const json = await response.json();

    // todo: add guard;
    return json as HeroInfo[];
  },
};

export default heroInfosApi;
