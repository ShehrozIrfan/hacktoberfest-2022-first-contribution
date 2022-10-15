$('.change').on('click', function () {
  const icons = $('.icon-link-github')
  if ($('body').hasClass('dark')) {
    $('body').removeClass('dark')
    $('#myFilter').css('background', '')
    $('#myFilter').css('color', 'black')
    $('.change').text('Dark')
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.filter = ''
    }
  } else {
    $('body').addClass('dark')
    $('.change').text('Light')
    $('#myFilter').css('background', '#0D1117')
    $('#myFilter').css('color', 'white')
    for (let i = 0; i < icons.length; i++) {
      icons[i].style.filter = 'invert(100%)'
    }
  }
})

let backToTopButton = document.getElementById('backToTop')
window.onscroll = function () {
  backToTopButtonOffset()
}

function backToTopButtonOffset() {
  if (document.documentElement.scrollTop > 40) {
    backToTopButton.style.display = 'block'
  } else {
    backToTopButton.style.display = 'none'
  }
}

function scrollBackToTopFunction() {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

function searchFunction() {
  var input, filter, cards, cardContainer, h5, title, i
  input = document.getElementById('myFilter')
  filter = input.value.toUpperCase()
  cardContainer = document.getElementById('myItems')
  cards = cardContainer.getElementsByClassName('profile-section')
  for (i = 0; i < cards.length; i++) {
    title = cards[i].querySelector('.profile-name')
    if (title.innerText.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = ''
    } else {
      cards[i].style.display = 'none'
    }
  }
}


