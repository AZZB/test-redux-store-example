

export const getPosts = () => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if(localStorage.getItem('token@') !== 'valid_token') reject('auth failed');

      resolve([
        {
          id: 'podlkfldkfjfjs',
          postTime: 'time1',
          desc: 'desc 1',
          content: 'url1',
          user: 'usfdlkfjfdf',
          comments: ['coldfjlfdj', 'coldfeczfddj'],
          liked_by: ['ussccdffkle'],
        },

        {
          id: 'popoehcdcdsf',
          postTime: 'time2',
          desc: 'desc 2',
          content: 'url2',
          user: 'usfdlkfjfdf',
          comments: [],
          liked_by: [],
        }
      ]);
    }, 200);
  })
)


export const getPostsByUsername = (username) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if(username !== 'AZZ_B') reject('user not found');
      resolve([
        {
          id: 'popoehcdcdsf',
          postTime: 'time2',
          desc: 'desc 2',
          content: 'url2',
          user: 'usfdlkfjfdf',
          comments: [],
          liked_by: [],
        }
      ]);
    }, 200);
  })
)
