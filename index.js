const Button = props => {
  //  Write your code here.
  const {className, text} = props
  return <button className={className}>{text}</button>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1 className='heading'>Social Buttons</h1>
    <div className='button-container'>
      <Button className='like-button' text='Like' />
      <Button className='comment-button' text='Comment' />
      <Button className='save-button' text='Save' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
