var grader = document.getElementsByClassName('grader');
var user = document.getElementsByClassName('user');
var provider = document.getElementsByClassName('provider');
var participant = document.getElementsByClassName('participant');
var qgrader = document.querySelector('.grader');
var quser = document.querySelector('.user');
var qprovider = document.querySelector('.provider');
var qparticipant = document.querySelector('.participant');

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