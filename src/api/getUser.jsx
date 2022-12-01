export default async function getUser(userName){
  const resData = await fetch(`https://api.github.com/users/${userName}`)
  const data = (resData) => {
                if (resData.status !== 200) {
                    return Promise.reject('user not found')
                }
                else {
                     return resData.json()
                } 
            }
    return await data(resData)
          
}

