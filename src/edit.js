var keys = []
var chaves = firebase.database().ref().child('dados');

chaves.on('value', getChave);

function getChave(data){
    var chave = data.val();
    keys = Object.keys(chave);
    console.log(keys);
}