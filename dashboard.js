var grader = document.getElementsByClassName('grader');
var user = document.getElementsByClassName('user');
var provider = document.getElementsByClassName('provider');
var participant = document.getElementsByClassName('participant');
var qgrader = document.querySelector('.grader');
var quser = document.querySelector('.user');
var qprovider = document.querySelector('.provider');
var qparticipant = document.querySelector('.participant');


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
            getUserRole(id)
        }).catch(function (error) {
            console.log(error)
            // window.location.href = 'index.html';
        })
    },
    mounted:function(){
        
    }
});
var role = new Vue({
    el:'#roles',
    data:{
        hasGraderRole:true,
        hasProviderRole:true,
        hasParticipant:true
    },
    methods:{
    },
    beforeMount : function(){
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
    axios.get('http://localhost:8080/api/v1/users/'+id+'/roles',{
        headers: {
            'Content-type': 'application/json',
            'Authorization': document.cookie
    }}).then( function (response) {
        grader[0].style.display = 'none'
        provider[0].style.display = 'none'
        participant[0].style.display = 'none'
        for (var key in response.data._embedded) {
            if (response.data._embedded.hasOwnProperty(key)) {
                
                if(key == "graders"){
                    grader[0].style.display = 'block'
                }else if(key == "organizers"){
                    grader[0].style.display = 'block'
                }else if(key == "participants"){
                    grader[0].style.display = 'block'
                }
            }
        }
    })
    .catch(function (error) {
        console.log(error)      
    })
    
}
function a(){
    
}



function no_active(){
	
    grader[0].classList.remove('active');
    user[0].classList.remove('active');
    provider[0].classList.remove('active');
    participant[0].classList.remove('active');

}
qgrader.addEventListener('click' , function(e){
e.preventDefault();
no_active();
grader[0].classList.add('active');
})
quser.addEventListener('click' , function(e){
e.preventDefault();
no_active();
user[0].classList.add('active');
})
qprovider.addEventListener('click' , function(e){
e.preventDefault();
no_active();
provider[0].classList.add('active');
})
qparticipant.addEventListener('click' , function(e){
e.preventDefault();
no_active();
participant[0].classList.add('active');
})