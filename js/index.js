// Находим все кнопки с тремя точками
const moreInfoBtns = document.querySelectorAll('.more-info-btn');

// Обрабатываем клик по каждой кнопке
moreInfoBtns.forEach(button => {
  button.addEventListener('click', function() {
    // Находим соответствующее всплывающее окно
    const productDetailPopup = this.closest('li').querySelector('.product-detail-popup');
    
    // Переключаем видимость всплывающего окна
    productDetailPopup.style.display = productDetailPopup.style.display === 'block' ? 'none' : 'block';
  });
});

// Закрытие окна с подробным описанием
const closePopupBtns = document.querySelectorAll('.close-popup');

closePopupBtns.forEach(button => {
  button.addEventListener('click', function() {
    const productDetailPopup = this.closest('.product-detail-popup');
    productDetailPopup.style.display = 'none';
  });
});
