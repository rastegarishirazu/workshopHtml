new veu({
    el : "#mainPage",
    data:{
        hascooki:false
    },
    methods:{
        getCookie:function(){
            alert(document.cookie);
        }
    },
    beforeMount : function(){
        this.getCookie()
    }
});