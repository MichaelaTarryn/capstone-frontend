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
    posts: [{
          usernames: "Kehlani",
          img: "https://i.postimg.cc/GmtbrfXM/baby.png",
          profile: "https://i.postimg.cc/LskCW9jG/profilepic.jpg",
          likes: "22332 million",
          caption: "Motherhood vibes",
        },
        {
          usernames: "Hallie",
          img: "https://i.postimg.cc/x8btKM3D/square-1470178174-hailee-ste.jpg",
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
    user: null,
    userPosts: null,
    users: null,
    post:null,
  },
  getters: {},
  mutations: {
    setUser: (state, user) => {
      state.user = user;
      console.log(user);
    },
    setUserPosts: (state, userPosts) => {
      state.userPosts = userPosts;
    },
    setToken: (state, token) => {
      state.token = token;
    },
    setPost(state, post) {
      state.post = post;
    },
    GetUser(state,users){
      state.users=users;
    },
  },
  actions: {
    GetUser: async (context) => {
      fetch("https://minigramproject.herokuapp.com/users")
        .then((res) => res.json())
        .then((data) => {
          context.commit("GetUser", data.results)
        });
    },
    getPost: async (context) => {
      fetch("https://minigramproject.herokuapp.com/post")
        .then((res) => res.json())
        .then((data) => {
          context.commit("setPost", data.results)
        });
    },
    getUserPosts:async (context, id)=>{
      // fetch(`https://minigramproject.herokuapp.com/users/${id}/post`)
      fetch(`http://localhost:3000/users/${id}/post`)
    //  id = req.params.id
      .then((res)=> res.json())
      .then((data) => {
        console.log(data)
        context.commit("setUserPosts", data)
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
      context.state.user = null;
      router.push("/landing");
    },
    Logout: async (context) => {
      context.state.user = null;
      router.push("/login");
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
    }
  },
  modules: {}
})