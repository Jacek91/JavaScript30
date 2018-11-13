let inputs = document.querySelectorAll(".controls input");
console.log(document.documentElement.style);
function handleUpdate () {
let suffix = this.dataset.sizing || ''
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(function(elements){
    elements.addEventListener('change', handleUpdate)
})
