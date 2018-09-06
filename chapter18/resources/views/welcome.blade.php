<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

       
    </head>
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
</html>
