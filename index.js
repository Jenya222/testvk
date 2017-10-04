var client_id = '6201315';
var scope = 'offline,messages,friends';
var href = "https://oauth.vk.com/authorize?client_id="+client_id+"&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope="+scope+"&response_type=token&v=5.37";
var accessToken;
var hrefFave;

    ReactDOM.render(
    <div>
        <h1 id="title">
            Hello React
        </h1>
        <a href={href}>получить токен</a>
        <input className='fieldAccessToken'/>
        <a href='' className="buttonGetPhotos">получить залайканные фотки</a>
    </div>,    // элемент, который мы хотим создать
    document.getElementById("container")  // где мы этот элемент хотим создать
);

document.querySelector(".buttonGetPhotos").addEventListener("click", function () {
    accessToken = document.querySelector("input");
    accessToken = accessToken.value;
    hrefFave = "https://api.vk.com/method/fave.getPhotos?&access_token="+accessToken+"&v=5.68";
    this.href = hrefFave;
});


