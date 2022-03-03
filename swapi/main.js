

const buttonLink = document.querySelector('button')



function clickDaButtonDude (){
    console.log('button clicked')
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then(function(res) {
        console.log(res.data)
        for(const key in res.data ){
            console.log(`${key} then ${res.data[key]}`)
        
    axios.get('https://swapi.dev/api/planets/?search=Alderaan')
    .then(function(res){
            for(const key in res.data){

            let {residents} = res.data
            console.log(residents)
        
            }
        })        
        
        
        
        
        
        }
       
    })


}


buttonLink.addEventListener('click', clickDaButtonDude)