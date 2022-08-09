
async function populateObj() {
    const response = await fetch("./data.json")
    const dataSet = await response.json()
    console.log(dataSet)
    const commentWrapper = document.getElementById("comment_wrapper")

    for (data of dataSet.comments) {
        const divWrap = document.createElement('div')
        const commentCard = document.createElement('div')
        commentCard.className += "comment_card"
        const commentHeader = document.createElement('div')
        commentHeader.className += "comment_header"
        const commentBody = document.createElement('div')
        commentBody.className += "comment_body"
        const commentFooter = document.createElement('div')
        commentFooter.className += "comment_footer"
        const commentCounter = document.createElement('div')
        commentCounter.className += "comment_counter"
        const replyWrapper = document.createElement("div")
        replyWrapper.className += 'reply_wrapper'

        const image = document.createElement('img')
        const name = document.createElement('h3')
        const createdAt = document.createElement('span');
        const content = document.createElement('p');
        const scoreMinus = document.createElement('span');
        scoreMinus.className += "minus"
        const score = document.createElement('span');
        const scorePlus = document.createElement('span');
        scorePlus.className += "plus"
        const replyButton = document.createElement('button')
        replyButton.className = "btn"

        commentHeader.appendChild(image)
        commentHeader.appendChild(name)
        commentHeader.appendChild(createdAt)
        commentBody.appendChild(content)
        commentFooter.appendChild(commentCounter)
        commentFooter.appendChild(replyButton)
        commentCounter.appendChild(scoreMinus)
        commentCounter.appendChild(score)
        commentCounter.appendChild(scorePlus)

        commentCard.appendChild(commentHeader)
        commentCard.appendChild(commentBody)
        commentCard.appendChild(commentFooter)
        divWrap.appendChild(commentCard)
        divWrap.appendChild(replyWrapper)

        image.src = data.user.image.png
        name.innerText = data.user.username
        content.innerText = data.content
        createdAt.innerText = data.createdAt
        score.innerText = data.score
        scoreMinus.innerText = "-"
        scorePlus.innerText = "+"
        replyButton.innerHTML = '<img src="./images/icon-reply.svg" alt=""> Reply'

        for (reply of data.replies) {
            const replyCard = document.createElement('div')
            replyCard.className += "reply_card"
            const replyHeader = document.createElement('div')
            replyHeader.className += "reply_header"
            const replyBody = document.createElement('div')
            replyBody.className += "reply_body"
            const replyFooter = document.createElement('div')
            replyFooter.className += "reply_footer"
            const replyCounter = document.createElement('div')
            replyCounter.className += "reply_counter"

            const image = document.createElement('img')
            const name = document.createElement('h3')
            const createdAt = document.createElement('span');
            const content = document.createElement('p');
            const scoreMinus = document.createElement('span');
            scoreMinus.className += "minus"
            const score = document.createElement('span');
            const scorePlus = document.createElement('span');
            scorePlus.className += "plus"
            const replyButton = document.createElement('button')
            replyButton.className = "btn"

            replyHeader.appendChild(image)
            replyHeader.appendChild(name)
            replyHeader.appendChild(createdAt)
            replyBody.appendChild(content)
            replyFooter.appendChild(replyCounter)
            replyFooter.appendChild(replyButton)
            replyCounter.appendChild(scoreMinus)
            replyCounter.appendChild(score)
            replyCounter.appendChild(scorePlus)

            replyCard.appendChild(replyHeader)
            replyCard.appendChild(replyBody)
            replyCard.appendChild(replyFooter)
            replyWrapper.appendChild(replyCard)

            image.src = reply.user.image.png
            name.innerText = reply.user.username
            content.innerHTML = `<a href="">@${reply.replyingTo}</a> ${reply.content}`
            // content.innerText = "@" + reply.replyingTo + " " + reply.content
            createdAt.innerText = reply.createdAt
            score.innerText = reply.score
            scoreMinus.innerText = "-"
            scorePlus.innerText = "+"
            replyButton.innerHTML = '<img src="./images/icon-reply.svg" alt=""> Reply'
        }
        commentWrapper.appendChild(divWrap)
    }


}
populateObj()

function click() {
    const replyInput = document.createElement('input')
    replyInput.type = "text"
}
