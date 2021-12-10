import { useRouter } from "next/router";

import { Rating } from "@components/Rating/Rating";

import {
    albumCard,
    albumImage,
    albumDescription,
    liked,
    img,
} from "@components/Album/Album.module.css";

export const Album = ({ album }) => {
    const route = useRouter();

    const handleAlbumRedirection = () => {
        route.push(`/album/${album._id}`);
    };

    return (
        <div className={albumCard} onClick={handleAlbumRedirection}>
            <div className={albumImage}>
                <img className={img} src={album.image} alt={album.name} />
            </div>

            <div className={albumDescription}>
                <h1>{album.artist}</h1>
                <h2>{album.name}</h2>
                <p>
                    <b>{album.year}</b>
                </p>

                <hr />

                <Rating rating={album?.rating} />

                {album?.liked && <p className={liked}>♥️</p>}
            </div>
        </div>
    );
};
