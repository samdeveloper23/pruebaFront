const singlePublicationService = async (publicationId) => {
    const res = await fetch(
        `https://backprueba-ck3e-dev.fl0.io/publications/${publicationId}`
    );
    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }

    return body.data.publication;
};

export default singlePublicationService;
