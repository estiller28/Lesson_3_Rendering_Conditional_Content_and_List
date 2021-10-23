var app = new Vue({
    el:'#assignment',
    data:{
        enteredGoal: '',
        goals: [],
        active: true,
        button: 'Hide'
    },

    methods:{
        addGoal(){
            if(this.enteredGoal === ''){}
            else{
                this.goals.push(this.enteredGoal);
            }
            
        },
        btnToggler(){
            if(this.enteredGoal === ''){
                this.button = 'Hide';
            }else{
                this.active = !this.active;
                if(this.active === true){
                    this.button = 'Hide';
                    this.active = 'hidden';
                }else{
                    this.button = 'Show';
                }
            }
            }
           
    }
});


