var titulo = document.getElementById('titulo');
//var text = document.getElementById('textArea')

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
        <td> <input type="text" nameTag="${index}" value="${childData.tags[0][index]}"/></td>
        <td> <input val="${index}" type="text" value="${childData.tags[1][index]}"> </td>
        </tr>
        `);
    }
    
    titulo.value = childData.titulo;
    $('cke_editable').append(childData.texto)
    CKEDITOR.instances['textArea'].setData(childData.texto)
    
});

