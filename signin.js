new Vue({
    el: '#signinForm',
    data: {
        email:'',
        password:'',
        rememberMe: false,
    },
    methods: {
        login:function(){
          //console.log(this.rememberMe);
          axios.post('http:/:8085/api/v1/users/login', {
            email: this.email,
            password: this.password,
            rememberMe: this.rememberMe
          },
          { headers: {
            'Content-type': 'application/json',
            }
          }).then(function (response) {
            window.location.href = 'doshboard.html';
            document.cookie = response.data.token;
            console.log(document.cookie);
          })
          .catch(function (error) {
            console.log(error);
          })
        },
        getCookie:function(){
          //console.log(document.cookie)
      }
        
    },
    beforeMount : function(){
        // this.getUserByToken()
    }

  });
