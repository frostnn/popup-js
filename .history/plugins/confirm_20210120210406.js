$.confirm = (options) => {
  return new Promise((resolve, reject) =>{
    const modal = $.modal({
      title: options.title,
      closable: false,
      width: '400px',
      content: options.content,
      footerButtons: [
        {
          text: 'OK',
          type: 'secondary',
          handler() {
            modal.close()
            resolve()
          }
        },

        {
          text: 'NO',
          type: 'danger',
          handler() {
            modal.close()
            reject()
          }
        },
      ]
    })
    modal.open()
  })
}