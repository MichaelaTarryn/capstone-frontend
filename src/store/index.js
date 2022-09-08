import {
  createStore
} from 'vuex'
import router from '@/router';
import API, {
  API_LOCAL,
  API_LIVE
} from './api'
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
    postedUser: null,
    userSinglePostswithoutcomments: null,
    users: null,
    post: null,
    posts: null,
    token: null || localStorage.getItem('usertoken'),
    me: false,
    userprofile: null,
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
    setPostedUser: (state, postedUser) => {
      state.postedUser = postedUser;
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
    setuserprofile(state, userprofile) {
      state.userprofile = userprofile;
    }
    // checkme(state, me) {
    //   state.me = me;
    // },
  },
  actions: {

    GetUser: async (context) => {
      await fetch(`${API.API_LIVE}/users`)
        //  await fetch(`${API.API_LOCAL}/users`)
        .then((res) => res.json())
        .then((data) => {
          context.commit("GetUser", data.results)
        });
    },

    getUserprofile: async (context, id) => {
      // console.log(id)
      await fetch(`${API.API_LIVE}/users/${id}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          context.commit("setuserprofile", data[0])
        });
    },

    getPost: async (context) => {
      await fetch(`${API.API_LIVE}/post`)
        .then((res) => res.json())
        .then((data) => {
          context.commit("setPost", data)
        });
    },
    getUserPosts: async (context, id) => {
      // fetch(`https://minigramproject.herokuapp.com/users/${id}/post`)
      // https://minigramproject.herokuapp.com/users/${id}/post
      await fetch(`${API.API_LIVE}/users/${id}/post`)
        //  id = req.params.id
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          context.commit("setUserPosts", data)
        });
    },
    getUserSinglePost: async (context, postId) => {
      const id = context.state.user.id
      console.log(postId)
      // fetch(`https://minigramproject.herokuapp.com/users/${id}/post/${postId}`)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     console.log(data)
      //     context.commit("setUserSinglePosts", data[0])
      await fetch(`${API.API_LIVE}/users/${id}/post/${postId}/comments`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          // Data
          // contains two values
          // comment & posted_user
          context.commit("setUserSinglePosts", data.comment)
          context.commit("setPostedUser", data.posted_user)
        });
    },
    getUserpostswithoutComments: async (context, postId) => {

      const id = context.state.user.id
      await fetch(`${API.API_LIVE}/users/${id}/post/${postId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.commit("setUserSinglePostswithoutcomments", data[0])
        });
    },
    Addlike: async (context, post) => {
      fetch(`${API.API_LIVE}/post/${post.postId}`, {
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
      context.state.userSinglePosts = null
      context.state.userSinglePostswithoutcomments = null
      router.push("/landing");
    },
    Goback1: async (context, id) => {
      router.push("/profile/" + id);
    },
    Logout: async (context) => {
      localStorage.removeItem('usertoken');
      localStorage.removeItem('user');
      localStorage.clear()
      context.state.user = null;
      context.state.token  = null;
      context.state.userPosts = null;
      context.state.userSinglePosts = null;
      context.state.postedUser = null;
      context.state.userSinglePostswithoutcomments = null;
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
      fetch(`${API.API_LIVE}/users`, {
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
      fetch(`${API.API_LIVE}/users`, {
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
          // if (data.msg === "Email not found, Please Register") {
          //   swal({
          //     icon: "error",
          //     title: "The email does not match",
          //     text: "Type in the proper email",
          //     buttons: "Try Again",
          //   });
          // }
          if (data.msg === "Login Successful") {
            swal({
              icon: "success",
              title: "Welcome to 𝓜𝓘𝓜𝓘𝓖𝓡𝓐𝓜",
              text: "Go explore",
              buttons: "Enjoy",
            });
            // alert(data.msg);
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
            // (data.msg === "The password does not match") {
              swal({
                icon: "error",
                title: "The password does not match",
                text: "Type in the password carefully",
                buttons: "Try Again",
              });
              if (data.msg === "Email not found, Please Register") {
                swal({
                  icon: "error",
                  title: "The email does not match",
                  text: "Type in the proper email",
                  buttons: "Try Again",
                });
              }
            // }
            // alert(data.msg)
            // router.push({
            //   name:"landing"
            // })
          }
        });
    },
    // update user information
    updateUser: async (context, user) => {
      fetch(`${API.API_LIVE}/users/` + user.id, {
          method: "PUT",
          body: JSON.stringify(user),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          // alert(data.msg);
          if (data.msg === "Successfully update details") {
            swal({
              icon: "success",
              title: "Successfully update details",
            })
          };
          context.dispatch("GetUser");
        });
    },
    // Deletes user from db
    deleteuser: async (context, id) => {
      fetch(`${API.API_LIVE}/users/` + id, {
          method: "DELETE",
          headers: {
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          // alert(data.msg)
          if (data.msg === "deleted user") {
            swal({
              icon: "success",
              title: "Successfully delete user account",
            })
          };
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
      fetch(`${API.API_LIVE}/post`, {
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
          // alert(data.msg);
          if (data.msg === "successully added a post") {
            swal({
              icon: "success",
              title: "successully added a post",
            })
          };
          context.dispatch("getPost");
        });
    },

    //edit a post
    EditPost: async (context, post) => {
      fetch(`${API.API_LIVE}/post/` + post.postId, {
          method: "PUT",
          body: JSON.stringify(post),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          // alert(data.msg);
          if (data.msg === "Successfully edit a post") {
            swal({
              icon: "success",
              title: "Successfully edit a post",
            })
          };
          context.dispatch("getPost");
        });
    },
    //delete a post
    deletePost: async (context, post) => {
      fetch(`${API.API_LIVE}/post/` + post.postId, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          // alert(data.msg)
          if (data.msg === "successully  delete") {
            swal({
              icon: "success",
              title: "successully  delete A POST",
            })
          };
          context.dispatch("getPost")
        });
      router.push({
        name: "search"
      })
    },

    //add a comment
    addComment: async (context, payload) => {
      console.log(payload);
      // console.log(post);
      const {
        description,
      } = payload;
      fetch(`${API.API_LIVE}/comments/` + payload.post, {
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
          // alert(data.msg);
          if (data.msg === "succeessfully add a comment !") {
            swal({
              icon: "success",
              title: "succeessfully add a comment !",
            })
          };
          context.dispatch("getUserSinglePost", payload.post)
          context.dispatch("getUserpostswithoutComments", payload.post)
        });
    },

    //edit comment
    EditComment: async (context, comments) => {
      console.log(comments)
      console.log('comments')

      // fetch("https://minigramproject.herokuapp.com/comments/" + comments.commentsId, {
      fetch(`${API.API_LIVE}/comments/` + comments.commentId, {
          method: "PATCH",
          body: JSON.stringify(comments),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          // alert(data.msg);
          if (data.msg === "Successfully edit comment") {
            swal({
              icon: "success",
              title: "Successfully edit comment",
            })
          };
          console.log(data);
          context.dispatch("getUserSinglePost", comments.postId);
          context.dispatch("getUserpostswithoutComments", comments.postId)
        });
    },

    //delete a comment
    deleteComment: async (context, comments) => {
      console.log(comments.postId);
      fetch(`${API.API_LIVE}/comments/` + comments.commentId, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "x-auth-token": context.state.token,
          },
        })
        .then((res) => res.json())
        .then((data) => {
          // alert(data.msg)
          if (data.msg === "Delete a comment!") {
            swal({
              icon: "success",
              title: "Delete a comment!",
            })
          };
          context.dispatch("getUserSinglePost", comments.postId);
          context.dispatch("getUserpostswithoutComments", comments.postId)
        });
    },
    checkme: async (context) => {
      // console.log("object");
      // let user = await context.state.user;
      let postedUser = await context.state.userSinglePostswithoutcomments
      console.log(postedUser)
      console.log(userSinglePosts);
      // console.log(user);
      if (user && userSinglePosts != null) {
        console.log('test')
        // console.log(user.id);
        // console.log(userSinglePosts[0].userId);
        if (user.id === userSinglePosts[0].userId) {
          context.state.me = true
        } else {
          context.state.me = false
        }
      }
    },

  },
  modules: {}
})