function goToPage(page) {
  window.location.href = page;
}

let giftSelected = "";

function selectGift(element, gift) {
  document.querySelectorAll('.gift-option').forEach(e =>
    e.classList.remove('selected')
  );
  element.classList.add('selected');
  giftSelected = gift;
}

// === EMAILJS CONFIG ===
emailjs.init("YgXI2-8YiEiE9BzH2"); 
// contoh: emailjs.init("QWERTY123ABC");

function sendEmail() {
  if (!giftSelected) {
    alert("Pilih hadiah dulu ya!");
    return;
  }

  emailjs.send("service_wcflyo7", "template_8u6suyl", {
      gift: giftSelected
  })
  .then(function() {
      alert("Pilihan sudah terkirim!");
      alert("JANGAN DISCREENSHOT!!!!!!!!!!");
  }, function(error) {
      alert("Gagal mengirim! Coba lagi.");
      console.log(error);
  });
}