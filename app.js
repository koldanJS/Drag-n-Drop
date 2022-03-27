const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    //когда мышь с эл-том над областью placeholder
    placeholder.addEventListener('dragover', dragover)
    //когда заходим на территорию какого-то placeholder
    placeholder.addEventListener('dragenter', dragenter)
    //когда покинули границы placeholder
    placeholder.addEventListener('dragleave', dragleave)
    //когда отпустили эл-т над placeholder
    placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0);
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide')
}

function dragover(event) {
    event.preventDefault()
}
function dragenter(event) {
    event.target.classList.add('hovered')
}
function dragleave(event) {
    event.target.classList.remove('hovered')
}
function dragdrop(event) {
    event.target.append(item)
    event.target.classList.remove('hovered')
}