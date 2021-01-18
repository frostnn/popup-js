const modal = $.modal({
  title: 'Modal title',
  closable: true,
  content: '<p>Modal is working</p>',
  width: '400px',
  footerButtons: [
    {
      text: 'OK',
      type: 'primary',
      handler() {
        console.log('Prim btn clicked')
      }
    },

    {
      text: 'Cancel',
      type: 'danger',
      handler() {
        console.log('Danger btn clicked')
        modal.close()
      }
    },
  ]
}); 