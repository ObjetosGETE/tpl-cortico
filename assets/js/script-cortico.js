function resizeBodyGlossario() {
  var largura = 1920;
  var altura = 1080;

  var larguraScreen = $(window).width();
  var alturaScreen = $(window).height();
  var proporcaoAltura = (alturaScreen * 100) / altura;
  var proporcaoLargura = (larguraScreen * 100) / largura;
  var proporcao, larguraAltura, larguraAlturaAuto;

  
  if(proporcaoAltura < proporcaoLargura){
    larguraAltura = "height";
    larguraAlturaAuto = "width";
    proporcao = proporcaoAltura / 100;
  }else{
    larguraAltura = "width";
    larguraAlturaAuto = "height";
    proporcao = proporcaoLargura / 100;
  }
  console.log(proporcao, proporcaoAltura, proporcaoLargura)
  $(".conteudo-glossario").css({
    "transform": "scale("+proporcao+")",
    "transform-origin": "center center"
  });
}


const personagens = {
    personagem1: {
        classPersonagem: "",
        nomePersonagem: "",
        textPersonagem: "",
    },
    personagem2: {
        classPersonagem: "",
        nomePersonagem: "",
        textPersonagem: "",
    },
    personagem3: {
        classPersonagem: "",
        nomePersonagem: "",
        textPersonagem: "",
    },
    personagem4: {
        classPersonagem: "",
        nomePersonagem: "",
        textPersonagem: "",
    },
    personagem5: {
        classPersonagem: "",
        nomePersonagem: "",
        textPersonagem: "",
    },
    personagem6: {
        classPersonagem: "",
        nomePersonagem: "",
        textPersonagem: "",
    },
    personagem7: {
        classPersonagem: "",
        nomePersonagem: "",
        textPersonagem: "",
    },
    personagem8: {
        classPersonagem: "",
        nomePersonagem: "",
        textPersonagem: "",
    },
}

const cortico = (params) => {
    return personagens[params];
}

const modalPersonagem = (params) => {
    var modal=
    `<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>`;

    $("modal-cortico").html(modal);
    $("#modal").modal("show");
}


$(document).on("click", ".estilo", function (e) {
    modalPersonagem(name($(this).attr("id")));
});