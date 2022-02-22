export const renderAlbumPhoto = (id: string) => {
  switch (Number(id)) {
    case 1:
      return 'https://picsum.photos/id/100/200/300';
    case 2:
      return 'https://picsum.photos/id/110/200/300';
    case 3:
      return 'https://picsum.photos/id/220/200/300';
    case 4:
      return 'https://picsum.photos/id/130/200/300';
    case 5:
      return 'https://picsum.photos/id/140/200/300';
    case 6:
      return 'https://picsum.photos/id/250/200/300';
    case 7:
      return 'https://picsum.photos/id/160/200/300';
    case 8:
      return 'https://picsum.photos/id/170/200/300';
    case 9:
      return 'https://picsum.photos/id/180/200/300';
    case 10:
      return 'https://picsum.photos/id/190/200/300';
    default:
      break;
  }
};
