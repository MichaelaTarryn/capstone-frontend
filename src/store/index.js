import { createStore } from 'vuex'

export default createStore({
  state: {
user:null,
users:null,
  },
  getters: {
  },
  mutations: {
    setUser: (state, user) => {
      state.user = user;
    },
    setToken: (state, token) => {
      state.token = token;
    },
    setPost(state, post) {
      state.post = post;
    },
  },
  actions: {
    getPost: async (context) => {
      fetch("https://minigramproject.herokuapp.com/post")
        .then((res) => res.json())
        .then((data) => { 
          context.commit("setPost", data.results)
        }
        );
    },
     // REGISTER user to mysqldb   
     register: async (context, payload) => {
      const {
        fullname,
        email,
        password,
        username,
      } = payload
      fetch("https://minigramproject.herokuapp.com/users", {
          method: "POST",
          body: JSON.stringify({
            fullname: fullname,
            email: email,
            password: password,
            username: username,
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
    login:async (context,payload)=>{
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
                // router.push({
                //   name: "posts"
                // }) 
                router.push({
                  name:'landing'
                })
              } else {
                alert(data.msg)
              }
            });
            
          
     
    }
  },
  modules: {
  }
})
