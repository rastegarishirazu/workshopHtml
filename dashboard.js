var dashboard = new Vue({
    el:'#username',
    data:{
        name:'',
        hello:''
    },
    methods:{
        getUser:function(hello) {
            
        }
        // ,
        // change:function(){
        //     this.name = this.hello
        // }
    },
    beforeMount : function(){
        var hello
        axios.get('http://172.16.205.171:8080/api/v1/users/token',{
            headers: {
                'Content-type': 'application/json',
                'Authorization': document.cookie
            }
        }).then(function (response){
            hello = response.data.id
            console.log(hello)
            this.hello = getUser(hello)
        }).catch(function (error) {
            console.log(error)
        })
    },
    mounted:function(){

    },

});
function getUser(hello){
    // alert(hello)
    axios.get('http://172.16.205.171:8080/api/v1/users/'+hello,{
        headers: {
            'Content-type': 'application/json',
            'Authorization': document.cookie
    }}).then( function (response) {
        dashboard.name = response.data.username,
        alert(this.name);
        console.log(response.data.username)
    })
    .catch(function (error) {
        console.log(hello)      
    })
}