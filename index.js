var client_id = '6201315';
var scope = 'offline,messages';
var href = "https://oauth.vk.com/authorize?client_id="+client_id+"&display=page&redirect_uri=https://oauth.vk.com/blank.html&scope="+scope+"&response_type=token&v=5.37";
var accessToken =
ReactDOM.render(
    <div>
        <h1 id="title">
            Hello React
        </h1>
        <a href={href}>Push the button</a>
    </div>,    // элемент, который мы хотим создать
    document.getElementById("container")    // где мы этот элемент хотим создать
)




