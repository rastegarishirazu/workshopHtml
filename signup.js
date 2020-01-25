new Vue({
  el: '#myForm',
  data: {
      firstName: '',
      lastName: '',
      email:'',
      hashedPassword:'',
      hashedPassword2: '',
      username:'',
      unmatchedPass: true
  },
  methods: {
      logName: function(){
          alert(this.firstName);
      },
      logLastName: function(){
          alert(this.lastName);
      },
      checkpasswd: function(){
        if(this.hashedPassword != this.hashedPassword2)
          this.unmatchedPass = true;
        else
          this.unmatchedPass = false;
      },
      submit:function(){
        axios.post('http://registerhere.ir/dapi/api/v1/users', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          hashedPassword: this.hashedPassword,
          username: this.username
        },
        { headers: {
          'Content-type': 'application/json',
          }
        }).then(function (response) {
          window.location.href = 'index.html';
          console.log(response);
        })
        .catch(function (error) {
          alert("An error occured try again!");
          console.log(error);
        })
      }
  }
});