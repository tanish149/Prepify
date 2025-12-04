import ReactMarkdown from "react-markdown"
function Recipe(props){
    return (
        <section className="suggested-recipe-container">
            <h2>Prepify Recommends:</h2>
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
        </section>
    )
}
export default Recipe;  