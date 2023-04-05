import { useState } from "react"


 export default function Page(props) {
  const [showBox, setShowBox] = useState(false)
  const handleBox = () => {
    setShowBox(true)
  }

  const [cards, setCards] = useState([])

  const removeCard = (index) => {
    setCards(cards.filter((card, i) => i !== index));
  };

 return (
 <>
<Header username={props.username}/>
  
  <Body handleBox={handleBox} showBox={showBox} setShowBox={setShowBox}></Body>
  {showBox && <BoxAsking setShowBox={setShowBox} setCards={setCards}></BoxAsking>}
  <div className="container">
    <CardsList cards={cards} removeCard={removeCard}/>
  </div>
  </>
  
 )
}



function Header(props){
  return(
    <div className="header">
      <h1>{props.username} Card's</h1>
      <p>☰</p>
    </div>
  )
  }

function Body({handleBox, showBox, setShowBox}){

    return (
      <div>
        <button onClick={handleBox}>Criar</button>
      </div>
    )
  }


function BoxAsking({setShowBox, setCards}){
const [title, setTitle] = useState('')
const [content, setContent] = useState('')

const handleTitle = (event) =>{
  event.preventDefault()
  setTitle(event.target.value)
  }

const handleContent = (event) =>{
  event.preventDefault()
    setContent(event.target.value)
  }

  const handleSubmit = (event) => {
    setCards((prevCards) => [...prevCards, {title, content}])
    setTitle('')
    setContent('')
    event.preventDefault();
    setShowBox(false)
  }

  return(
    <div>
       <form onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleTitle}/>
      <input type="text" value={content}onChange={handleContent}/>
      <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
   


function Card({title, content, index, removeCard}) {

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => removeCard(index)}>excluir</button>
    </div>
  )
}

function CardsList({ cards, removeCard }) {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} removeCard={() => removeCard(index)}
        />
      ))}
    </div>
  );
}