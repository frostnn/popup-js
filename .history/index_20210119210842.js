const house = [
  {
    id: 1,
    title: 'Fire and Blood',
    img: 'https://i.pinimg.com/originals/1a/31/06/1a3106eb0af5c689290d57a37a3059a9.jpg',
    text: 'The Targaryens are one of the great houses of Westeros, a former royal dynasty that previously ruled the Seven Kingdoms. The Targaryens were one of the aristocratic families of Valeria who knew how to command dragons; according to legend, they had dragon blood in their veins. Many years after the fall of Valyria, Aegon I Targaryen invaded mainland Westeros with three dragons, conquered the kingdoms of the Andals and the First Men, and proclaimed himself king on the Iron Throne.',
  },
  {
    id: 2,
    title: 'We Do Not Sow',
    img: 'https://img-s3.onedio.com/id-5cdbe2c70a7c009a1807099a/rev-0/raw/s-1cabfd1b36af7b68d884c2d0bac629d1565dea47.jpg',
    text: 'Greyjoy is one of the great houses of the Seven Kingdoms. The Greyjoys rule the Iron Islands from their Pike Castle on the island of the same name. Their motto is "We do not sow." The head of the house traditionally holds the title of Lord Reaper Pike. Members of this house tend to have dark skin, black hair, and dark eyes.',
  },
  {
    id: 3,
    title: 'Unbowed, Unbent, Unbroken',
    img: 'https://img3.goodfon.ru/original/1920x1080/5/78/german-style-game-of-thrones.jpg',
    text: 'The Martells are one of the great houses of Westeros, rulers of Dorne. Traditionally, the head of the house and members of his family are called "princes"and " princesses". On their coat of arms is a red sun pierced by a golden spear. The Martells motto is Unyielding, unyielding, unyielding. The Martells rule Dorne from Sunspear Castle.',
  },
]

const toHTML = houses => `
  <div class="col-4">
    <div class="card">
      <img src="${houses.img}" class="card-img-top" alt="${houses.title}">
      <div class="card-body">
        <h5 class="card-title">${houses.title}</h5>
          <a href="#" class="btn btn-primary" data-btn="view" data-id="${houses.id}">view</a>
          <a href="#" class="btn btn-danger">remove</a>
      </div>
    </div>
  </div>
`
const render = () => {
  const html = house.map( houses => toHTML(houses)).join('');
  document.querySelector('#house').innerHTML = html;
}

render();

const houseModal = $.modal({
  title: 'Seven Kingdoms',
  closable: true,
  width: '400px',
  footerButtons: [
    {
      text: 'View',
      type: 'primary',
      handler() {

      }
    },

    {
      text: 'Close',
      type: 'danger',
      handler() {
        houseModal.close()
      }
    },
  ]
}); 

document.addEventListener('click', e => {
  e.preventDefault();
  const btnType = e.target.dataset.btn;
  const id = +e.target.dataset.id;
  if(btnType === "view") {
    const houseId = house.find(fn => fn.id === id);
    houseModal.setContent(`
    <h2>${houseId.title}</h2>
    <p>${houseId.text}</p>
    `)
    houseModal.open();
    

  }
  
})