(function(){
  // Dialog só é usado nas opções que não são cinema
  const dialog = document.getElementById('choiceDialog');
  const content = document.getElementById('dialogContent');
  const closeBtn = dialog ? dialog.querySelector('.dialog-close') : null;

  function openDialog(html){
    if(!dialog) return;
    content.innerHTML = html;
    if(!dialog.open) dialog.showModal();
  }
  function closeDialog(){
    if(dialog && dialog.open) dialog.close();
  }

  if(closeBtn){
    closeBtn.addEventListener('click', closeDialog);
    dialog.addEventListener('click', (e) => {
      if(e.target === dialog) closeDialog();
    });
  }

  // Para os <article.card> (não-cinema), abre modal
  document.querySelectorAll('.card').forEach(el => {
    // Se for o link do cinema (tem href para filmes.html), não intercepta
    const isLink = el.tagName.toLowerCase() === 'a' && el.getAttribute('href');
    const isCinema = el.dataset.type === 'cinema';

    if(!isCinema && !isLink){
      el.addEventListener('click', () => {
        openDialog(`
          <div class="dialog-content">
            <p id="dialogTitle">Perfeita escolha! Já quero esse date com você 💖</p>
          </div>
        `);
      });

      el.addEventListener('keydown', (e) => {
        if(e.key === 'Enter' || e.key === ' '){
          e.preventDefault();
          openDialog(`
            <div class="dialog-content">
              <p id="dialogTitle">Perfeita escolha! Já quero esse date com você 💖</p>
            </div>
          `);
        }
      });
    }
  });
})();
