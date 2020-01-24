var powerOff = new Vue({
    el:'#power-off',
    data:{
    },
    methods:{
        logOut:function() {
            document.cookie = ''
            window.location.href = 'index.html';
        }
    }
});
var role = new Vue({
    el:'#roles',
    data:{
        hasGraderRole:false,
        hasProviderRole:false,
        hasParticipant:false
    },
    methods:{
    },
    beforeMount : function(){
    }
});
var dashboard = new Vue({
    el:'#username',
    data:{
        name:'',
        id:'',
        datae:false
    },
    methods:{
    },
    beforeMount : function(){
        var id
        axios.get('http://127.0.0.1:8080/api/v1/users/token',{
            headers: {
                'Content-type': 'application/json',
                'Authorization': document.cookie
            }
        }).then(function (response){
            id = response.data
            this.id = id
            getUser(id)
            role.getUser(id)
        }).catch(function (error) {
            console.log(error)
            // window.location.href = 'index.html';
        })
    },
    mounted:function(){
        
    }
});
function getUser(id){
    axios.get('http://localhost:8080/api/v1/users/'+id,{
        headers: {
            'Content-type': 'application/json',
            'Authorization': document.cookie
    }}).then( function (response) {
        dashboard.name = response.data.username,
        console.log(response.data.username)
    })
    .catch(function (error) {
        console.log(error);      
    })
}
function getUserRole(id){
    alert(id);
    axios.get('http://localhost:8080/api/v1/users/'+id+'/roles',{
        headers: {
            'Content-type': 'application/json',
            'Authorization': document.cookie
    }}).then( function (response) {
        for (var key in response.data._embedded) {
            if (response.data._embedded.hasOwnProperty(key)) {
                if(key == "graders"){
                    role.hasGraderRole = true;
                }else if(key == "organizers"){
                    role.hasProviderRole = true;
                }else if(key == "participants"){
                    role.hasParticipant =true;
                }
            }
        }
    })
    .catch(function (error) {
        console.log(error)      
    })
    
}