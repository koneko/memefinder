var home = document.getElementById('Home')
var custom = document.getElementById('Custom')
var random = document.getElementById('Random')
var content = document.querySelector('.content')

if (!localStorage.page) {
    localStorage.page = 'Home'
}

home.onclick = () => {
    localStorage.page = "Home"
    checkPage()
    pageLoad("Home", content)
}
custom.onclick = () => {
    localStorage.page = "Custom"
    checkPage()
    pageLoad("Custom", content)
}
random.onclick = () => {
    localStorage.page = "Random"
    checkPage()
    pageLoad("Random", content)
}

function checkPage() {
    if (localStorage.page == 'Home') {
        // console.log(home)
        home.className = 'current'
        custom.className = ''
        random.className = ''
        pageLoad("Home", content)
    }
    if (localStorage.page == 'Custom') {
        home.className = ''
        custom.className = 'current'
        random.className = ''
        pageLoad("Custom", content)
    }
    if (localStorage.page == "Random") {
        home.className = ''
        custom.className = ''
        random.className = 'current'
        pageLoad("Random", content)
    }
}
// removeChildren(content)
checkPage()