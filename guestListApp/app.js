 new Vue({

    el:'#app',
    data:{
        event:{
            eventDate: 'Jan 12 2018',
                eventTitle: 'Spring Festival',
                eventDescription: 'something something lorem ispsum'
        },
        newNameText:"",
        guestName: [],
    },
    methods:{
        formSubmitted: function(){
            if (this.newNameText.length >0) {
                this.guestName.push(this.newNameText);
                this.newNameText = "";
            }
            
        }
    }
});