const legend = document.getElementsByClassName('lenda');

for (let index = 0; index < legend.length; index += 1) {
    if (legend[index].innerText === 'Ayrton Senna') {
        legend.innerText = 'Ayrton Senna - O maior de todos os tempos';
    }
}