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
          axios.post('http://localhost:8080/api/v1/users/login', {
            email: this.email,
            password: this.password,
            rememberMe: this.rememberMe
          },
          { headers: {
            'Content-type': 'application/json',
            }
          }).then(function (response) {
            document.cookie = "token" + "=" + response.data.token + ";";
            console.log(response.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
        },
        getCookie:function(){
          alert(document.cookie);
      }
        
    },
    beforeMount : function(){
        this.getCookie()
    }

  });