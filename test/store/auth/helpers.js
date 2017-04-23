export const user = () => ({
  id: 'usfdlkfjfdf',
  username: 'AZZ_B',
  email: 'aikido@hotmail.com',
  fullname: 'BENEKA AZZEDDINE',
  bio: 'I like programming',
  followers: [],
  following: [],
  posts: ['podlkfldkfjfjs'],
  comments: ['coldfjlfdj'],
  liked_post: [],
  permission: {
    admin: true,
  },
});


export const validSignupData = () => ({
  username: 'AZZ_B',
  email: 'aikido@hotmail.com',
  password: '123456',
  flag: true,
});

export const invalidSignupData = () => ({
  username: 'GMA',
  email: 'gma@hotmail.com',
  password: '147852',
  flag: false,
});


export const validLoginData = () => ({
  username: 'azz-b',
  password: '123456'
});

export const invalidLoginData = () => ({
  username: 'MED',
  password: '369822',
});

export const delay = (cb, params, time) => {
  setTimeout(() => cb(params), time);
}

export const promiseDelay = (flag, params, time = 500) => (
  new Promise((resolve, reject) => {
    if(flag)
      delay(resolve, params, time);
    else
      delay(reject, params, time);
  })
);
