const _createModal = (option) => {
  const modal = document.createElement('div');
  modal.classList.add('modale');
  modal.insertAdjacentHTML('afterbegin', `

    <div class="modale-overlay">
      <div class="modale-window">
        <div class="modale-window_header">
          <span class="modale-window_header-title">Modal title</span>
          <span class="modale-close">&times;</span>
        </div>
        <div class="modale-window_body">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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

const $modal = _createModal(options);

  return {
    open() {
      $modal.classList.add('open');
    },
    close() {
     return $modal.classList.remove('open');
    },
    destroy() {

    }
  }
}