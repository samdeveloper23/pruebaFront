const loginService = async (email, password) => {
    const res = await fetch('https://backprueba-ck3e-dev.fl0.io/users/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });

    const body = await res.json();

    if (!res.ok) {
        throw new Error(body.message);
    }

    return body.data.token;
};

export default loginService;
