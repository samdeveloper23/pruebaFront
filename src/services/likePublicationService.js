const likePublicationService = async (publicationId, likedByMe, token) => {
    const method = likedByMe ? 'delete' : 'post';

    const res = await fetch(
        `https://backprueba-ck3e-dev.fl0.io/publications/${publicationId}/likes`,
        {
            method,
            headers: {
                Authorization: token,
            },
        }
    );

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }
};

export default likePublicationService;
