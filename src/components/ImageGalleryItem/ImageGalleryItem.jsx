import { ImageTile } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ id, miniImg, largeImg }) => {
    return (
<ImageTile src={miniImg} alt="Something" />
    );
};