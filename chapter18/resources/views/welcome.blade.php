

    <body>
       <div id="app">
              <ul>
                <li v-for="skill in skills" v-text="skill"></li>
              </ul>



              <ul>
                <li v-for="skill2 in skills2" v-text="skill2"></li>
              </ul>
       </div>

       <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
       <script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.js"></script>
       
       <script src="js/app.js"></script>
    </body>

