import { Album } from "@components/Album/Album";

import styles from "@components/Home/Home.module.css";

const Home = ({ albums }) => {
    return (
        <section>
            {albums && albums.length ? (
                <div className={styles.albumsWrapper}>
                    {albums.map((album) => (
                        <Album key={album._id} album={album} />
                    ))}
                </div>
            ) : (
                <div>Cargando...</div>
            )}
            {/* <ul>
                {albums.map(({ _id, name }) => (
                    <div key={_id}>
                        <li>{name}</li>
                        <button onClick={() => handleAlbumRedirection(_id)}>
                            Ver mas
                        </button>
                    </div>
                ))}
            </ul> */}
        </section>
    );
};

export default Home;
