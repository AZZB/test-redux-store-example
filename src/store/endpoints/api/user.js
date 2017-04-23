

export const getUserByUsername = (username) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if(username === 'AZZ_B') resolve({
        id: 'usfdlkfjfdf',
        username: 'AZZ_B',
        email: 'aikido@hotmail.com',
        avatar: 'avatar-azz-b',
        fullname: 'BENEKA AZZEDDINE',
        bio: 'I like programming',
        followers: [],
        following: [],
        posts: ['podlkfldkfjfjs', 'popoehcdcdsf'],
        comments: ['coldfjlfdj'],
        liked_post: [],
      });

      reject('user not found!');
    }, 200);
  })
);
