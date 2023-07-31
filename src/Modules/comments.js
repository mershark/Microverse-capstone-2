import { APP_URL } from "./API-Data"

const postComment = async (id, username,comment) => {
  const request = await fetch(`${APP_URL}/comments/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
        item_id: id,
        username: username,
        comment: comment
    })
  })
}

const getComments = async (id) => {
  const request = await fetch(`${APP_URL}/comments?item_id=${id}`)
  const response = await request.json()
  return response
}


export {postComment, getComments}