const onwerUserService = async (token) => {
    const res = await fetch('https://backprueba-ck3e-dev.fl0.io/users/owner', {
        headers: {
            Authorization: token,
        },
    });

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }

    return body.data.user;
};

export default onwerUserService;
