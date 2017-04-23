


export const login = (payload) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(payload.username === 'MED') reject('user does not exist')
      resolve({token: 'ddfldf', user: {username: 'AZZ_B'}})
    }, 200);
  })
}


export const signup = (payload) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(payload.username === 'GMA') reject('user exist');
      resolve({ok: true})
    }, 200);
  });
}
