var dados = firebase.database().ref().child('dados');

dados.on('child_added', snap => {
    var nomes = snap.child("tags/0").val();
    var titulo_nome = snap.child("titulo").val();

    $("#dadosList").append("<tr><td>" + nomes + "</td><td>" + titulo_nome + "</td><td><a href='editRelatorios.html'><button>Selecionar</button></a></td></tr>");
});