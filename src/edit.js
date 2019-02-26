var query = location.search.slice(1);
var partes = query.split('&');
var data = {};
partes.forEach(function (parte) {
    var chaveValor = parte.split('=');
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    data[chave] = valor;
});

var dados = firebase.database().ref("dados/" + data.id_relatorio);

dados.on("value", function(snapshot){
    var childData = snapshot.val();
    var key = Object.keys(childData);
    
    for(let index = 0; index < childData.tags[0].length; index++) {
        $('#documento').append(`
        <tr>
        <td> <input type="text" nameTag="${index}"/> </td>
        <td> <input val="${index}" type="text"> </td>
        </tr>
        `);
        
        // console.log(childData.tags[1][index]);
    }

    for (let index = 0; index < childData.tags[0].length; index++) {
        var oi = document.getElementById('[nameTag='+index+']')
        
        oi.appendChild(childData.tags[0][index]);
    }
    

});

