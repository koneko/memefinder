function pageLoad(page, content) {
    if (page == "Home") {
        removeChildren(content)
        gotoHome()
    }
    if (page == "Custom") {
        removeChildren(content)
        gotoCustom()
    }
    if (page == "Random") {
        removeChildren(content)
        gotoRandom()
    }
}

async function getMemes(num) {
    let holder = document.querySelector('.holder')
    if (document.querySelector('.getmemesbutton')) {
        removeButton()
    }
    fetch(`https://meme-api.herokuapp.com/gimme/${num}`)
        .then(response => response.json())
        .then(data => {
            data.memes.forEach(meme => {
                let div = document.createElement('div')
                if (meme.preview[2] == undefined) {
                    div.innerHTML =
                        `
                <h3>${meme.title}</h3>
                <img src="${meme.preview[0]}"><br><br>
                <button onclick="window.open('${meme.url}')">Raw</button>
                <button onclick="memeDelete(this.parentNode)">Remove meme</button>
                `
                } else {
                    div.innerHTML =
                        `
                <h3>${meme.title}</h3>
                <img src="${meme.preview[2]}"><br><br>
                <button onclick="window.open('${meme.url}')">Raw</button>
                <button onclick="memeDelete(this.parentNode)">Remove meme</button>
                `
                }
                div.className = 'meme'
                holder.appendChild(div)
            });
            addButton()
        });
}

//<button onclick="viewFull('${meme.title}', '${meme.author}', '${meme.preview[0]}', '${meme.subreddit}', '${meme.postLink}', '${meme.url}')">View</button>
function getFromSub(num, sub) {
    fetch(`https://meme-api.herokuapp.com/gimme/${sub}/${num}`)
        .then(response => response.json())
        .then(data => {
            return data.memes
        });
}

// function replaceMeme(meme) {
//     fetch('https://meme-api.herokuapp.com/gimme/1')
//         .then(response => response.json())
//         .then(data => {
//             let newmeme = data.memes[0]
//             meme.innerHTML =
//                 `
//             <h3>${newmeme.title}</h3>
//             <img src="${newmeme.preview[2]}">
//             <button onclick="viewFull('${newmeme.title}', '${newmeme.author}', '${newmeme.preview[2]}', '${newmeme.subreddit}', '${newmeme.postLink}', '${newmeme.url}')">View</button>
//             <button onclick="replaceMeme('${meme}')">Dont like? Replace</button>
//             `
//         })
// }

function memeDelete(meme) {
    getMemes(1)
    meme.remove()
}



function addButton() {
    let br = document.createElement('br')
    let holder = document.querySelector('.holder')
    let buttondiv = document.createElement('div')
    buttondiv.className = "buttondiv"
    let button = document.createElement("button")
    button.className = "getmemesbutton"
    buttondiv.style.textAlign = 'center'
    button.innerText = "More memes"
    button.onclick = () => getMemes(50)
    holder.appendChild(br)
    holder.appendChild(buttondiv)
    buttondiv.appendChild(button)
}

function removeButton() {
    let button = document.querySelector('.buttondiv')
    button.remove()
}

function viewFull(title, author, preview, subreddit, post, raw) {
    // console.log(title, author, preview, subreddit, post, raw)
}

function removeChildren(parent) {
    while (parent.firstChild) {
        console.log(parent.firstChild)
        parent.removeChild(parent.firstChild);
    }
}