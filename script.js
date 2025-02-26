const amountRange = document.querySelector('#amountRange');
const amount = document.getElementById("amount")
const duration = document.getElementById("duration")
const monthsAmount = document.getElementById('monthsAmount');
const faiz = document.getElementById('faiz');
const f1=document.getElementById('f1')
const f2=document.getElementById('f2')

let flag= false

function change(status=true){
    f1.style.backgroundColor=status ? 'purple': '#fff'
    f2.style.backgroundColor= !status ? 'purple': '#fff'
    
    f1.style.color=status ? '#fff' :'#000'
    f1.style.color= !status ? '#fff' :'#000'

}

function updateAmount(value) {
    value = Number(value);
    amount.value = value + " AZN";
    ayliqodenis()
}
function updateDuration(value) {
    let years = Math.floor(value / 12);
    let months = value % 12;

    if (years > 0 && months > 0) {
        duration.value = years + " il " + months + " ay";
    } else if (years > 0) {
        duration.value = years + " il";
    } else {
        duration.value = value + " ay";
    }
    ayliqodenis()
}
function faizArtimi(months) {
    if (months <= 12) return 11; // 1 ilə qədər 11%
    if (months <= 24) return 14.5; // 1 il 1 aydan sonra 14.5%
    if (months <= 36) return 15.5; // 2 il 1 aydan sonra 15.5%
    if (months <= 48) return 16.5; // 3 il 1 aydan sonra 16.5%
    return 17.5; // 4 ilə qədər 17.5%
}
function ayliqodenis() {
    const amountValue = parseFloat(amount.value);
    const durationValue = parseInt(durationRange.value);
    const rate = faizArtimi(durationValue);
    faiz.innerHTML = rate + "%";

    let ayliq = (amountValue * 0.11) * (durationValue / 12)
    const umumi = (ayliq + amountValue) / 3
    monthsAmount.innerHTML = Math.floor(umumi)
}
ayliqodenis()

