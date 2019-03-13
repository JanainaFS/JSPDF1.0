var nomesTag = [], valoresTag = [];
var quantidade, editor, textHTML, title;
var lMargin = 15, RMargin = 4;

function quantTag() {
    var quantTag = document.getElementById('quant').value;
    quantidade = quantTag;
    for (var i = 0; i < quantTag; i++) {
        $('#tags').append(`
        <tr>
        <td> <input type="text" nomeTag-id="${i}"/> </td>
        <td> <input valor-id="${i}" type="text"> </td>
        </tr>
        `);
    }
}

$(document).ready(function () {
    CKEDITOR.replace('textArea1');

    CKEDITOR.on('instanceReady', function (evt) {
        editor = evt.editor;
        editor.on('focus', function (e) {
            nomesTag = [];
            valoresTag = [];

            for (var i = 0; i < quantidade; i++) {
                var tagName = "{{" + ($('[nomeTag-id=' + i + ']').val()) + "}}";
                var tagValue = $('[valor-id=' + i + ']').val();

                nomesTag.push(tagName);
                valoresTag.push(tagValue);
            }
        });
    });
});

function gerarPdf() {

    title = document.getElementById("titulo").value;

    var doc = new jsPDF("p", "mm", "a4");

    document.getElementById("baixar").style.backgroundColor = "#AB9F9D";

    textHTML = CKEDITOR.instances.textArea.getData();

    create(nomesTag, valoresTag, textHTML, title);

    for (var i = 0; i < nomesTag.length; i++) {
        while (textHTML.includes(nomesTag[i])) {
            textHTML = textHTML.replace(nomesTag[i], valoresTag[i]);
        }
        while (textHTML.includes("{{Titulo}}")) {
            textHTML = textHTML.replace("{{Titulo}}", title);
        }
    }
    
    doc.fromHTML(textHTML, lMargin, RMargin, { 'width': 190 });
    doc.save('documento.pdf');
    
}   

function create(nomesTag, valoresTag, textHTML, title){
    var data = {
        tags: [nomesTag, valoresTag],
        texto: textHTML,
        titulo: title      
    };

    return firebase.database().ref().child('dados').push(data);
}