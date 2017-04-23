
export const getComments = (postId) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if(postId !== 'valid_post_id') reject('post not found');
      resolve([
        {
          id: 'coldfjlfdj',
          commentTime: 'time1',
          content: 'comment 1',
          user: 'usfdlkfjfdf',
          post: 'podlkfldkfjfjs',
        },
      ]);
    }, 200);
  })
)
