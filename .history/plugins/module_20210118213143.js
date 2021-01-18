const _createModal = (option) => {
  const DEFAULT_WIDTH = '600px'
  const modal = document.createElement('div');
  modal.classList.add('modale');
  modal.insertAdjacentHTML('afterbegin', `

    <div class="modale-overlay">
      <div class="modale-window" style="width: ${option.width || DEFAULT_WIDTH}">
        <div class="modale-window_header">
          <span class="modale-window_header-title">${option.title || 'Title' }</span>
          ${option.closable ? `<span class="modale-close">&times;</span>` : '' }
        </div>
        <div class="modale-window_body">
          ${option.content || '' }
        </div>
        <div class="modale-window_footer">
          <button>OK</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>

  `)
  document.body.appendChild(modal);
  return modal;
}

$.modal = (option) => {
const ANIMATION_SPEED = 300;
const $modal = _createModal(option);
let closing = true;

  return {
    open() {
      !closing && $modal.classList.add('open');
    },
    close() {
      closing = false;
      $modal.classList.remove('open');
      $modal.classList.add('hide');
      setTimeout( () => {
        $modal.classList.remove('hide');
      }, ANIMATION_SPEED)
    },
    destroy() {

    }
  }
}