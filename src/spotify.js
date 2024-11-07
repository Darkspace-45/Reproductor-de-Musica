const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = '0b2b68708e014e758475c58f52d41e51';
const redirectUrl = 'http://localhost:3000';
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;