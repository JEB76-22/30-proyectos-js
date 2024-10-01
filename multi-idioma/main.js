const langButtons = document.querySelectorAll("[data-language]");
const textToChange = document.querySelectorAll("[data-section]");
console.log(textToChange);

langButtons.forEach((button)=>{
    button.addEventListener("click", ()=>{

        fetch(`../languages/${button.dataset.language}.json`)
            .then(res => res.json())
            .then(data => {
                textToChange.forEach((el)=>{
                    const section = el.dataset.section;
                    const value = el.dataset.value;

                    el.innerHTML = data[section][value];
                })
            })
    })
})