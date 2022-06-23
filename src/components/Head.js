import troll from '../images/Troll Face.svg'

export default function Head(){
  return(
    <div className='header'>
      <img
        className='header--img'
        src={troll}
      />
      <h2 className='header--h2'>Meme Generator</h2>
      <h3 className='header--h3'>React Course - Project 4</h3>
    </div>
  )
}
