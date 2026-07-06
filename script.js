document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('calcForm');
  const result = document.getElementById('result');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    const r = parseFloat(document.getElementById('radius').value);
    const h = parseFloat(document.getElementById('height').value);
    const unit = document.getElementById('unit').value;

    if (Number.isNaN(r) || Number.isNaN(h) || r < 0 || h < 0) {
      showResult('Introduce valores válidos (≥ 0).');
      return;
    }

    const volume = Math.PI * r * r * h; // V = π r^2 h
    showResult(`${formatNumber(volume)} ${unit}³`);
  });

  function formatNumber(n){
    if (!isFinite(n)) return '—';
    // Muestra hasta 6 decimales, quitando ceros finales
    return Number(n.toFixed(6)).toString();
  }

  function showResult(text){
    result.textContent = text;
  }
});