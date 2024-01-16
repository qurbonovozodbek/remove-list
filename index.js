// const cardone = document.getElementsByClassName('cardone');
// const cardtwo = document.getElementsByClassName('cardtwo');
// const cardthree = document.getElementsByClassName('cardthree');
// const dell = document.getElementById('del');

function removeCardone() {
    const card = document.getElementById('myCard');
    
    const confirmation = confirm('Siz rostanham ochirmoqchimisiz?');
    
    if (confirmation) {
      card.remove();
      console.log('Card removed!');
    } else {
      console.log('Card not removed.');
    }
  }

  function removeCardtwo() {
    const card = document.getElementById('myCardtwo');
    
    const confirmation = confirm('Siz rostanham ochirmoqchimisiz?');
    
    if (confirmation) {
      card.remove();
      console.log('Card removed!');
    } else {
      console.log('Card not removed.');
    }
  }

  function removeCardthree() {
    const card = document.getElementById('myCardthree');
    
    const confirmation = confirm('Siz rostanham ochirmoqchimisiz?');
    
    if (confirmation) {
      card.remove();
      console.log('Card removed!');
    } else {
      console.log('Card not removed.');
    }
  }