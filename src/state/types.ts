export type AlbumState = {
  albums: Album[];
};
export type Album = {
  userId: number;
  id: number;
  title: string;
  photos: Photo[];
};
export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
