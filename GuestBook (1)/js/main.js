window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    let form = new Vue({
        el: '#app',
        data: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            showForm: true,
            guests: []
        },
        computed: {
            fullName(){
                return this.firstName + ' ' + this.lastName;
            }
        },
        methods: {
            addGuest(){
                this.guests.push('');
            },
            deleteGuest(index){
                this.guests.splice(index, 1);
            }
        }
    });

});