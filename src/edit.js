var query = location.search.slice(1);
var partes = query.split('&');
var data = {};
partes.forEach(function (parte) {
    var chaveValor = parte.split('=');
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    data[chave] = valor;
});

console.log(data); 



// var keys = []
// var chaves = firebase.database().ref().child('dados');

// chaves.on('value', getChave);

// function getChave(data){
//     var chave = data.val();
//     keys = Object.keys(chave);
//     console.log(keys);
// }