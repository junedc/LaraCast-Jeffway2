new Vue({
	el: '#app',


	data: {
       skills: [],
       skills2: []
	},


    methods: {

       getSkills2() {
       	  axios.get('/skills2').then(response => this.skills2 = response.data);
       }
    },

	mounted() {
		//make an ajax request to our server

		axios.get('/skills').then(response => this.skills = response.data);

        this.getSkills2();

        

	}
}); 