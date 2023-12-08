const elSelect = document.getElementById('select')
const elBtn = document.getElementById('counter')
const elText = document.getElementById('zikr')
let elCount = document.getElementById('count')
const elResetBtn = document.getElementById('reset')

elSelect.addEventListener('change', function () {
    elText.textContent = elSelect.value;
    elBtn.disabled = false;
    elCount.textContent = 0
});

elBtn.addEventListener('click', function () {
    elCount.textContent = + elCount.textContent +1
});

elResetBtn.addEventListener('click', function () {
    elCount.textContent = 0;
    elText.textContent = "Iltimos waytmoqchi bo'lgan zikrni tanlang :)";
    elBtn.disabled = true;
    elSelect.value = "Zikrni tanlang";
})
