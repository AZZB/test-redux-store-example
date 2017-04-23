
export const initialState = () => ({
  auth: {
    currentUser: null,
  },

  users: {},
  posts: {},
  comments: {},
});


export default () => ({
  auth: {
    currentUser: users[0].username,
  },
  users: buildObj(users, fooUser),
  posts: buildObj(posts),
  comments: buildObj(comments),
});


function buildObj(params, fun) {
  const obj = {};

  params.forEach(param => {
    if(fun)
      fun(obj, param);
    else
      obj[param.id] = param;
  });

  return obj;
}


function fooUser(obj, param) {
  obj[param.username] = param;
}



export const users = [
  {
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
  },

  {
    id: 'ussccdffkle',
    username: 'GMA',
    email: 'gamer@hotmail.com',
    avatar: 'avatar-gma',
    fullname: 'MCEGGEM ALLEL',
    bio: 'I like game',
    followers: [],
    following: [],
    posts: [],
    comments: ['coldfeczfddj'],
    liked_post: [],
  },
];



export const posts = [
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
]


export const comments = [
  {
    id: 'coldfjlfdj',
    commentTime: 'time1',
    content: 'comment 1',
    user: 'usfdlkfjfdf',
    post: 'podlkfldkfjfjs',
  },

  {
    id: 'coldfeczfddj',
    commentTime: 'time2',
    content: 'comment 2',
    user: 'ussccdffkle',
    post: 'podlkfldkfjfjs',
  }
]
