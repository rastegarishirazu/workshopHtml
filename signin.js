new Vue({
    el: '#signinForm',
    data: {
        email:'',
        password:'',
        rememberMe: false,
    },
    methods: {
        login:function(){
          // alert("hello");
          //console.log(this.rememberMe);
          axios.post('http://172.16.205.171:8080/api/v1/users/login', {
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
