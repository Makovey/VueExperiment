new Vue({
    el: '.sample',
    data: {
        info: [
            {
                name: 'Name',
                value: '',
                pattern: /^[a-zA-Z ]{2,30}$/
            },
            {
                name: 'Phone',
                value: '',
                pattern: /^[0-9]{7,14}$/
            },
            {
                name: 'Email',
                value: '',
                pattern: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            },
            {
                name: 'Some Field 1',
                value: '',
                pattern: /.+/
            },
            {
                name: 'Some Field 2',
                value: '',
                pattern: /.+/
            }
        ],
        inputs: [],
        formSubmit: false
    },
    created(){
        for(let i = 0; i < this.info.length; i++){
            this.inputs.push({
                error: true,
                activated: false
            });
        }
    },
    methods: {
        onInput(index,value){
            let data = this.info[index],
                input = this.inputs[index];

            data.value = value;
            input.error = !data.pattern.test(value);
            input.activated = true;
        }
    },
    computed: {
        done(){
            let done = 0;

            for(let i = 0; i < this.inputs.length; i++){
                if(!this.inputs[i].error){
                    done++;
                }
            }
            return done;
        },
        progress(){
            return{
                width: (this.done / this.info.length * 100) + '%'
            }
        }
    }
});