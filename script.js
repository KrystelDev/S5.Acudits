//Inicialització de variables generals:
let reportAcudits = [];
let htmlTemps = document.getElementById('temps');


// Exerici 1:
function mostrarChisteEnConsola() {
    const url = 'https://icanhazdadjoke.com/slack';
    fetch(url)
    .then(response => response.json() )
    .then(data => console.log(data.attachments[0].text))
    .catch(err => console.log(err));
}

// Exercici 2:
function mostrarChisteGeneral() {
    const url = 'https://icanhazdadjoke.com/slack';
    fetch(url)
    .then(response => response.json() )
    .then(data => {
        let element = document.getElementById('acudit')
        element.innerHTML = `${data.attachments[0].text}`
        console.log(data)
    })
    .catch(err => console.log(err));
}

//Exercici 3:
function valorarChiste(score) {
    let acudit = {};
    acudit.joke = document.getElementById('acudit').innerHTML;
    acudit.score = score;
    acudit.data = new Date();
    reportAcudits.push(acudit);
    console.log(reportAcudits);
}

//Exercici 4:
meteorologia()

    //1- localización del usuario:
function meteorologia() {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            //console.log(position);
            let latitude = position.coords.latitude; 
            let longitude = position.coords.longitude; 
            let key = '7513fcda5e9a460feaea239e8fa589e9'; // codigo personal de https://openweathermap.org/
            fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&units=metric&lang=es&appid=' + key ).then(response => response.json())
            .then(data => {
                console.log(data) 
                visualitzarTemps(data)
            });
        },
        // Si el usuario no da permisos de localización dar un aviso por consola, nunca en web.
        (error) => console.log(new Date(), error),
        { enableHighAccuracy: false, timeout: 5000},
    );
}

    //2- Cuando ya sabemos donde está, modificamos el código HTML como nos interesa:
function visualitzarTemps(data) {
    let iconoTemps = data.weather[0].icon;
    let temperatura = data.main.feels_like;
    let descripcioTemps = data.weather[0].description;
    htmlTemps.innerHTML = 
    '<div class="d-flex">' +
    '<img src="https://openweathermap.org/img/wn/' +
    iconoTemps + '@2x.png" alt="'+ descripcioTemps + ' class="text-end" style="width: 20%;' +
    'min-width: 100px;">' +
    '<p class="text-start fw-bold"> '+ temperatura + 'Cº </p>' +
    '</div>'
    +'<p class="text-center">'+ descripcioTemps +'</p>';
}

//Exercici 5:
function mostrarChisteChuck() {
    const url = 'https://api.chucknorris.io/jokes/random';
    fetch(url)
    .then(response => response.json() )
    .then(data => {
        let element = document.getElementById('acudit')
        element.innerHTML = `${data.value}`
        console.log(data)
    })
    .catch(err => console.log(err));
}
    //1- button crida funcio numero aleatori. 0-1
function mostrarChiste() {
    let numeroRandom = Math.floor(Math.random()*(2-0));
    //2-  si variablenova es 0 general, si no chuck
    if (numeroRandom == 0) {
        mostrarChisteGeneral();
    } else {
        mostrarChisteChuck();
    }
}
    

