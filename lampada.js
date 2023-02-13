function acende() {
  const imagemLampada = document.getElementById('fotolampada');
  imagemLampada.src = '/assets/lampada_acesa.jpg';
}

function apaga() {
  const imagemLampada = document.getElementById('fotolampada');
  imagemLampada.src = '/assets/lampada.jpg';
}
function quebra() {
  const imagemLampada = document.getElementById('fotolampada');
  const acende = document.getElementById('acende');
  const apaga = document.getElementById('apaga');
  imagemLampada.src = '/assets/lampada_quebrada.jpg';
  acende.disabled = true;
  apaga.disabled = true;
}
