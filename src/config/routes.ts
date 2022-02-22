export enum RoutesMain {
  HOME = 'HOME',
  PHOTOS = 'PHOTOS',
  DETAILS = 'DETAILS',
}

const routes = {
  ...RoutesMain,
};

export type RoutesParamList = {
  PHOTOS: {albumId?: string};
  DETAILS: {
    photo: {
      albumId: string;
      id: number;
      title: string;
      url: string;
      thumbnailUrl: string;
    };
  };
};

export default routes;
export type RoutesTypes = keyof typeof routes;
