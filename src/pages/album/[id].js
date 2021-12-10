import Back from "@components/Back/Back";

const AlbumDetail = ({ album }) => {
    return (
        <div>
            <Back />

            <h1>{album.name}</h1>
            <p>{album._id}</p>
        </div>
    );
};

export default AlbumDetail;

export async function getServerSideProps({ params }) {
    const url = "https://albums-collection-api.herokuapp.com/api/albums";
    const { id } = params;

    const resp = await fetch(`${url}/${id}`);
    const album = await resp.json();

    return {
        props: { album },
    };
}
