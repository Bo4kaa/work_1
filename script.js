
// Modal Comment
const btn = document.querySelector('#btn'),
      modalActive = document.querySelector('.modalBackground'),
      modalClose = document.querySelector('.closeModal'),
      bntComment = document.querySelector('#btn__comment'),
      nameInput = document.querySelector('.input__name'),
      inputComment = document.querySelector('#input__comment'),
      modalName = document.querySelector('.modal__name')


  
function displayNone() {
  modalActive.style.display = 'none';
}

function displayBlock() {
  modalActive.style.display = 'block';
}

function remove() {
  nameInput.value= '';
  inputComment.value= '';

}

function com(){
  new Comments (
    "img/STAR.svg",
    inputComment.value,
    nameInput.value,
    '.container-comments'
  ).render();
  remove()
}

btn.addEventListener('click',(e) =>{
  e.preventDefault();
  modalName.innerHTML = `
    ${nameInput.value} oставьте свой комментарий
  `
  displayBlock();
})

modalClose.addEventListener('click',() =>{
  displayNone() 
})

window.addEventListener('keydown',(e) =>{
  if(e.code === 'Enter' && modalActive.style.display === 'block'){
    displayNone()
    com()
  }
})


// comments

class Comments {
  constructor(img, h3, a, parentSelector){
    this.img = img;
    this.h3 = h3;
    this.a = a;
    this.parent = document.querySelector(parentSelector);
  }

  render() {
    const comm = document.createElement('div')
    
    comm.innerHTML = `
    
      <div class="block-text">
          <ul class="block-text-ul">
              <li><img src="${this.img}" alt="star"></li>
              <li><img src="${this.img}" alt="star"></li>
              <li><img src="${this.img}" alt="star"></li>
              <li><img src="${this.img}" alt="star"></li>
              <li><img src="${this.img}" alt="star"></li>
          </ul>
          <h3>${this.h3}</h3>
          <a href="#" class="user-name" aria-label="автор комментария">${this.a}</a>
      </div>
   
    `;
    this.parent.append(comm);
  }
}



bntComment.addEventListener('click', () => {
  displayNone();
  com()
})