
async function populateObj() {
    const response = await fetch("./data.json")
    const dataSet = await response.json()
    console.log(dataSet)
    const body = document.querySelector('body')
    const head = document.querySelector('head')
    const link = document.createElement('link')
    link.href = './style.css'
    link.rel = "stylesheet"
    const divWrap = document.createElement('div')
    const footer = document.getElementsByClassName("attribution")[0]
    for (data of dataSet.comments) {

        const cContainer = document.createElement('div')
        const image = document.createElement('img')
        const name = document.createElement('h2')
        const createdAt = document.createElement('p');
        const content = document.createElement('p');
        const score = document.createElement('p');
        const replyIcon = document.createElement('img')

        cContainer.appendChild(image)
        cContainer.appendChild(name)
        cContainer.appendChild(createdAt)
        cContainer.appendChild(content)
        cContainer.appendChild(score)
        cContainer.appendChild(replyIcon)

        divWrap.appendChild(cContainer)

        image.src = data.user.image.png
        name.innerText = data.user.username
        content.innerText = data.content
        createdAt.innerText = data.createdAt
        score.innerText = data.score
        replyIcon.src = "./images/icon-reply.svg"
        cContainer.className += "cContainer"

        for (reply of data.replies) {
            const rContainer = document.createElement('div')
            const replyImage = document.createElement('img')
            const replyName = document.createElement('h2')
            const replyContent = document.createElement('p');
            const replyCreatedAt = document.createElement('p');
            const replyScore = document.createElement('p');

            const replyButton = document.createElement('input')
            // const replyIcon = document.createElement('img')

            rContainer.appendChild(replyImage)
            rContainer.appendChild(replyName)
            rContainer.appendChild(replyCreatedAt)
            rContainer.appendChild(replyContent)
            rContainer.appendChild(replyScore)
            rContainer.appendChild(replyButton)
            // replyButton.appendChild(replyIcon)



            divWrap.appendChild(rContainer)
            rContainer.className += "rContainer"

            replyImage.src = reply.user.image.png
            replyName.innerText = reply.user.username
            replyContent.innerText = reply.content
            replyCreatedAt.innerText = reply.createdAt
            replyScore.innerText = reply.score
            replyIcon.src = "./images/icon-reply.svg"
            replyButton.type = "submit"
            replyButton.value = "reply"
            replyButton.className = "reply-btn"
        }
    }
    
    body.prepend(divWrap)
    head.appendChild(link)
    divWrap.appendChild(footer)
}
populateObj()

function click() {
    const replyInput = document.createElement('input')
    replyInput.type = "text"
}
