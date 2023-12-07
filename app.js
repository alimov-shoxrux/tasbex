const elSelect = document.getElementById('select')
const elBtn = document.getElementById('counter')
const elText = document.getElementById('zikr')
let elCountch = document.getElementById('count')

elSelect.addEventListener('change', function () {
    elText.textContent = elSelect.value;
    elBtn.disabled = false;
    elCountch.textContent = 0
});

elBtn.addEventListener('click', function () {
    elCountch.textContent = + elCount.textContent + 1
});

elResetBtn.addEventListener('click', function () {
    elCountch.textContent = 0;
    elText.textContent = "Iltimos waytmoqchi bo'lgan zikrni tanlang :)";
    elBtn.disabled = true;
    elSelect.value = "Zikrni tanlang";
})
const elCount = document.getElementById('count')
const elResetBtn = document.getElementById("reset")
