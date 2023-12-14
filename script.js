let cont = 0
function toggle() {
    cont++
    document.getElementsByClassName("bg-primary")[0].style.backgroundColor = 'blue'

    if (cont %2 == 0) {
        document.getElementsByClassName("bg-primary")[0].style.backgroundColor = '#25A6D9'
    }
}
