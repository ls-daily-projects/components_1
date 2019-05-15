// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
    constructor(domElement) {
        // assign this.domElement to the passed in domElement
        this.domElement = domElement
        // create a reference to the ".expandButton" class.
        this.expandButton = this.domElement.querySelector(".expandButton")
        // Using your expandButton reference, update the text on your expandButton to say "expand"
        this.expandButton.textContent = "expand"
        // Set a click handler on the expandButton reference, calling the expandArticle method.
        this.expandButton.addEventListener(
            "click",
            this.expandArticle.bind(this)
        )
    }

    expandArticle() {
        // Using our reference to the domElement, toggle a class to expand or hide the article.
        this.domElement.classList.toggle("article-open")
    }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

NodeList.prototype.map = Array.prototype.map

const $articlesContainer = document.querySelector(".articles")
const $existingArticles = [
    document.querySelectorAll(".article").map($a => new Article($a))
]

const create$Article = ({
    heading = "Heading",
    date = new Date(),
    content = ["sdfs", "sdf4"]
}) => {
    const $article = document.createElement("div")
    $article.classList.add("article")

    const $h2 = document.createElement("h2")
    $h2.textContent = heading

    const $paragraphs = content.map(p => {
        const $p = document.createElement("p")
        $p.textContent = p
        return $p
    })

    $article.appendChild($h2)
    $paragraphs.forEach($p => {
        $article.appendChild($p)
    })

    const $btn = document.createElement("span")
    $btn.classList.add("expandButton")

    $article.appendChild($btn)

    return $article
}

const $newArticles = [
    create$Article("Title", new Date(), [
        "blahhahsdlkjf;lasdkfj",
        "asldkfj2323jlkjfas"
    ])
]

$newArticles.forEach($article => {
    $articlesContainer.appendChild($article)
    new Article($article)
})
