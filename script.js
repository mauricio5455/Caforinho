const fileInput = document.getElementById('file');
const preview = document.getElementById('img');

fileInput.addEventListener('change', function() {
  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
    preview.style.display = 'block';
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
});


const img = document.querySelector('img');
console.log(img)
img.addEventListener('mousedown', ()=> {
    img.style.cursor = 'grabbing';

});

img.addEventListener('mouseup', ()=> {
    img.style.cursor = 'grab';
});
