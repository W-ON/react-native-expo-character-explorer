type OriginOrLocation = {
  name: string;
  url: string;
};

export type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: OriginOrLocation;
  location: OriginOrLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
};
