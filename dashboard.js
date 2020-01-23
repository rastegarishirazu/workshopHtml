new Vue({
    el:'#username',
    data:{
        name:''
    },
    methods:{
        getUser:function(hello) {
            
        }
    },
    beforeMount : function(){
        var hello
        axios.get('http://127.0.0.1:8080/api/v1/users/token',{
            headers: {
                'Content-type': 'application/json',
                'Authorization': document.cookie
            }
        }).then(function (response){
            hello = response.data.id
            console.log(hello)
            getUser(hello)
        }).catch(function (error) {
            console.log(error)
        })
    },
    mounted:function(){
        getUser(hello)
    }
});
function getUser(hello){
    alert(hello)
    axios.get('http://localhost:8080/api/v1/users/'+hello,{
        headers: {
            'Content-type': 'application/json',
            'Authorization': document.cookie
    }}).then( function (response) {
        this.name = response.data.username,
        console.log(response.data.username)
    })
    .catch(function (error) {
        console.log(hello)      
    })
}