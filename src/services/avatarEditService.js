const avatarEditService = async (avatar, token) => {
    const formData = new FormData();
    formData.append('avatar', avatar);

    const response = await fetch('https://backprueba-ck3e-dev.fl0.io:8000/users/avatar', {
        method: 'put',
        headers: {
            Authorization: token,
        },
        body: avatar,
    });

    return response.data;
};

export default avatarEditService;
