import {
  createStore
} from 'vuex'
import router from '@/router';
export default createStore({
  state: {
    story: [{
        username: "Tom Hollard lovers",
        img: "https://i.postimg.cc/HLRq2yL9/cddd.jpg"
      },
      {
        username: "rein where",
        img: "https://i.postimg.cc/1tDjr72y/3b376864bb4b83d40095e0jpg.jpg"
      },
      {
        username: "Timothee Dune",
        img: "https://i.postimg.cc/h4y931nn/downloasssssd.jpg"
      },
      {
        username: "Dua lipa era",
        img: "https://i.postimg.cc/GmYGt0y3/im-47320ss6.jpg"
      },
      {
        username: "Hallie",
        img: "https://i.postimg.cc/Qd9wMqsk/images5555.jpg"
      },
      {
        username: "Kehlani",
        img: "https://i.postimg.cc/GmRR6NvT/allofme.jpg"
      },
    ],
    landingposts: [{
          usernames: "Kehlani",
          img: "https://i.postimg.cc/GmtbrfXM/baby.png",
          profile: "https://i.postimg.cc/LskCW9jG/profilepic.jpg",
          likes: "22332 million",
          caption: "Motherhood vibes",
        },
        {
          usernames: "Hallie",
          img: "https://i.postimg.cc/5tVmqmSy/5testinhgnj.jpg",
          profile: "https://i.postimg.cc/XYN9W9Bj/profile.jpg",
          likes: "244 22 million",
          caption: "Now you see me now you don't",
        },
        {
          usernames: "dua lipa",
          img: "https://i.postimg.cc/52rLhV64/970de139e11dbc9b866e2.jpg",
          profile: "https://i.postimg.cc/BQxzZmxf/2222.jpg",
          likes: "22 million",
          caption: "STREET STYLES",
        },
      ]

      ,
    user: null || JSON.parse(localStorage.getItem('user')),
    userPosts: null,
    userSinglePosts: null,
    userSinglePostswithoutcomments: null,
    users: null,
    post: null,
    posts: null,
    token: null || localStorage.getItem('usertoken'),
    me: false,
    userprofile:null,
  },
  getters: {},
  mutations: {
    setUser: (state, user) => {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user))
      console.log(user);
    },
    setUserPosts: (state, userPosts) => {
      state.userPosts = userPosts;
    },
    setUserSinglePosts: (state, userSinglePosts) => {
      state.userSinglePosts = userSinglePosts;
    },
    setUserSinglePostswithoutcomments: (state, userSinglePostswithoutcomments) => {
      state.userSinglePostswithoutcomments = userSinglePostswithoutcomments;
    },

    setToken: (state, token) => {
      state.token = token;
      localStorage.setItem("usertoken", token)
    },
    setPost(state, post) {
      state.post = post;
    },
    GetUser(state, users) {
      state.users = users;
    },
    setuserprofile(state,userprofile){
 state.userprofile=userprofile;
    }
    // checkme(state, me) {
    //   state.me = me;
    // },
  },
  actions: {

    GetUser: async (context) => {
      fetch("https://minigramproject.herokuapp.com/users")
        .then((res) => res.json())
        .then((data) => {
          context.commit("GetUser", data.results)
        });
    },
    
    getUserprofile: async (context,id) => {
      console.log(id)
      fetch(`https://minigramproject.herokuapp.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.commit("setuserprofile", data.results)
        });
    },

    getPost: async (context) => {
      fetch("https://minigramproject.herokuapp.com/post")
        .then((res) => res.json())
        .then((data) => {
          context.commit("setPost", data)
        });
    },
    getUserPosts: async (context, id) => {
      // fetch(`https://minigramproject.herokuapp.com/users/${id}/post`)
      fetch(`https://minigramproject.herokuapp.com/users/${id}/post`)
        //  id = req.params.id
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          context.commit("setUserPosts", data)
        });
    },
    getUserSinglePost: async (context, postId) => {
      const id = context.state.user.id
      // fetch(`https://minigramproject.herokuapp.com/users/${id}/post/${postId}`)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data)
      //     context.commit("setUserSinglePosts", data[0])
      fetch(`https://minigramproject.herokuapp.com/users/${id}/post/${postId}/comments`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.commit("setUserSinglePosts", data)
        });
    },
    getUserpostswithoutComments: async (context, postId) => {

      const id = context.state.user.id
      fetch(`https://minigramproject.herokuapp.com/users/${id}/post/${postId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.commit("setUserSinglePostswithoutcomments", data[0])
        });
    },
    Addlike: async (context, post) => {
      fetch(`https://minigramproject.herokuapp.com/post/${post.postId}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          }
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          context.dispatch("getUserSinglePost", post.postId)
          context.dispatch("getUserpostswithoutComments", post.postId)
        });
    },
    Signup: async (context) => {
      context.state.user = null;
      router.push("/register");
    },
    Signin: async (context) => {
      context.state.user = null;
      router.push("/login");
    },
    Goback: async (context) => {
      router.push("/landing");
    },
    Goback1: async (context, id) => {
      router.push("/profile/" + id);
    },
    Logout: async (context) => {
      context.state.user = null;
      localStorage.removeItem('user')
      router.push("/login");
    },
    edit: async (context) => {
      // context.state.user = null;
      router.push("/edit");
    },
    // REGISTER user to mysqldb   
    register: async (context, payload) => {
      const {
        fullname,
        email,
        password,
        username,
        userRole,

      } = payload
      fetch("https://minigramproject.herokuapp.com/users", {
          method: "POST",
          body: JSON.stringify({
            fullname: fullname,
            username: username,
            email: email,
            password: password,
            userRole: userRole,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg === "you have registered successfully: 1") {
            alert(data.msg);
            let user = data.user;
            let token = data.token;
            context.commit("setUser", user);
            context.commit("setToken", token);
            context.dispatch("getPost");
            // router.push({
            //   name: "login",
            // })
          } else {
            alert(data.msg);
            // document.getElementById("register").reset();
          }
        });
      router.push("/login")
    },

    //login 
    login: async (context, payload) => {
      const {
        email,
        password
      } = payload;
      fetch("https://minigramproject.herokuapp.com/users", {
          method: "PATCH",
          body: JSON.stringify({
            email: email,
            password: password,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": await context.state.token,
          },
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.msg === "Login Successful") {
            alert(data.msg);
            let user = data.user;
            let token = data.token;
            context.commit("setUser", user);
            context.commit("setToken", token);
            if (user.usertype === "Admin") {
              context.state.admin = true
            }
            router.push({
              name: "landing"
            })

          } else {
            alert(data.msg)
            // router.push({
            //   name:"landing"
            // })
          }
        });
    },
    // update user information
    updateUser: async (context, user) => {
      fetch("https://minigramproject.herokuapp.com/users/" + user.id, {
          method: "PUT",
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("GetUser");
        });
    },
    // Deletes user from db
    deleteuser: async (context, id) => {
      fetch("https://minigramproject.herokuapp.com/users/" + id, {
          method: "DELETE",
          headers: {
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg)
          context.dispatch("GetUser");
        })
      router.push({
        name: "register"
      })
    },
    //adding a post
    addPost: async (context, payload) => {
      const {
        img,
        caption,
        peopleTag,
        addlocation,
        likes
      } = payload;
      fetch("https://minigramproject.herokuapp.com/post", {
          method: "POST",
          body: JSON.stringify({
            img: img,
            peopleTag: peopleTag,
            caption: caption,
            addlocation: addlocation,
            likes: likes,
            userId: context.state.user.id
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": `${context.state.token}`,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getPost");
        });
    },

    //edit a post
    EditPost: async (context, post) => {
      fetch("https://minigramproject.herokuapp.com/post/" + post.postId, {
          method: "PUT",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          context.dispatch("getPost");
        });
    },
    //delete a post
    deletePost: async (context, post) => {
      fetch("https://minigramproject.herokuapp.com/post/" + post.postId, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg)
          context.dispatch("getPost")
        });
      router.push({
        name: "landing"
      })
    },

    //add a comment
    addComment: async (context, payload) => {
      console.log(payload);
      // console.log(post);
      const {
        description,
      } = payload;
      fetch("https://minigramproject.herokuapp.com/comments/" + payload.post, {
          method: "POST",
          body: JSON.stringify({
            description: description
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": `${context.state.token}`,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          alert(data.msg);
          context.dispatch("getUserSinglePost", payload.post)
          context.dispatch("getUserpostswithoutComments", payload.post)
        });
    },

    //edit comment
    EditComment: async (context, comments) => {
      // fetch("https://minigramproject.herokuapp.com/comments/" + comments.commentsId, {
      fetch("https://minigramproject.herokuapp.com/comments/" + comments.commentId, {
          method: "PATCH",
          body: JSON.stringify(comments),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg);
          console.log(data);
          context.dispatch("getUserSinglePost", comments.postId);
          context.dispatch("getUserpostswithoutComments", comments.postId)
        });
    },

    //delete a comment
    deleteComment: async (context, comments) => {
      console.log(comments.postId);
      fetch("https://minigramproject.herokuapp.com/comments/" + comments.commentId, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          alert(data.msg)
          context.dispatch("getUserSinglePost", comments.postId);
          context.dispatch("getUserpostswithoutComments", comments.postId)
        });
    },
    checkme: async (context) => {
      let user = await context.state.user;
      let userSinglePosts = await context.state.userSinglePostswithoutcomments
      // console.log(userSinglePosts);
      // console.log(user);
      if (user && userSinglePosts != null) {
        if (user.id === userSinglePosts.userId) {
          context.state.me = true
        }
      }
    },

  },
  modules: {}
})