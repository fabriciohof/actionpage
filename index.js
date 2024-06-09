$(document).ready(function(){
    $('#enviar-btn').click(function(){
      // Verifica se todos os campos do formulário estão preenchidos
      if ($('#cadastro-form')[0].checkValidity()) {
        // Se todos os campos estiverem preenchidos, exibe o modal
        $('#successModal').modal('show');
        // Limpa os campos do formulário
        $('#cadastro-form')[0].reset();
      } else {
        // Se algum campo estiver vazio, faz o browser mostrar a mensagem de erro padrão
        $('#cadastro-form')[0].reportValidity();
      }
    });
  });