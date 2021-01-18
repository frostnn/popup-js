const _createModal = (options) => {
  const DEFAULT_WIDTH = '600px'
  const modal = document.createElement('div');
  modal.classList.add('modale');
  modal.insertAdjacentHTML('afterbegin', `

    <div class="modale-overlay" data-close>
      <div class="modale-window" style="width: ${options.width || DEFAULT_WIDTH}">
        <div class="modale-window_header">
          <span class="modale-window_header-title">${options.title || 'Title' }</span>
          ${options.closable ? `<span class="modale-close" data-close>&times;</span>` : '' }
        </div>
        <div class="modale-window_body">
          ${options.content || '' }
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

$.modal = (options) => {
const ANIMATION_SPEED = 300;
const $modal = _createModal(options);
let closing = true;

$modal.addEventListener('click', e => {
  console.log('Click', e.target.dataset.close)
})

  return {
    open() {
      closing && $modal.classList.add('open');
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