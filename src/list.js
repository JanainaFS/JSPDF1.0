var dados = firebase.database().ref().child('dados');

dados.on('child_added', snap => {
    var nomes = snap.child("tags/0").val();
    var titulo_nome = snap.child("titulo").val();
    
    $("#dadosList").append("<tr><td>" + nomes + "</td><td>" + titulo_nome + "</td><td><a href='editRelatorios.html?id_relatorio="+snap.key +"'><button onclick='editar()'>Selecionar</button></a></td></tr>");
});