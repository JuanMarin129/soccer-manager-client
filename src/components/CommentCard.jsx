import React from 'react'

function CommentCard(props) {
  
  console.log(props.eachComment)
  return (
    <div id="commentCardCSS">
      <p>{props.eachComment.texto} </p>
    </div>
  )
}

export default CommentCard
