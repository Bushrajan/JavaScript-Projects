var weathers = ["Rainy", "Snow", "Cloudy", "Summer", "Fog", "Spring", "Autumn"]
var user_input = prompt(`"Enter only one Weather : \n Rainy", "Snow", "Cloudy", "Summer", "Fog", "Spring", "Autumn"`)
var istrue = false;


for (let i = 0; i < weathers.length; i++) {
    if (user_input === "Rainy" || user_input === "rainy") {
        istrue = true;
        document.write(` 
           
    <div class="container-fluid first p-lg-5 p-lg-5 p-1">
        <h1 class="text-center fw-bold pt-2  display-4 ">Weather Card</h1>
        <h5 class="text-center fw-bold mt-3">"Rainy", "Snow", "Cloudy", "Summer", "Fog",
            "Spring",
            "Autumn"</h5>
        
            <div class="card " style="animation:bounceInDown;  animation-duration:2s;"> 
            <img src="https://jovelmusic.com/wp-content/uploads/2014/02/tumblr_n0bwlwivnr1qeodauo1_500.gif" alt="Avatar" style="width:100%"> 
            <div class="container"> 
            <h4 class="text-center mt-1"><b>🌧️🌧️Rainy Day🌧️🌧️</b></h4> 
            <p class="text-center mt-1">Lorem ipsum Deserunt minus fugiat itaque voluptates, ea enim.</p> 
            </div> 
            </div>
    </div>
    `)
        break;
    }

    if (user_input === "Snow" || user_input === "snow") {
        istrue = true;
        document.write(` 
           
           
    <div class="container-fluid first p-lg-5 p-lg-5 p-1">
        <h1 class="text-center fw-bold pt-2  display-4 ">Weather Card</h1>
        <h5 class="text-center fw-bold mt-3">"Rainy", "Snow", "Cloudy", "Summer", "Fog",
            "Spring",
            "Autumn"</h5>
             
                    <div class="card " style="animation:bounceInDown;  animation-duration:2s;"> 
                    <img src="https://www.icegif.com/wp-content/uploads/2022/01/icegif-1026.gif" alt="Avatar" style="width:100%"> 
                    <div class="container"> 
                    <h4 class="text-center mt-1"><b>❄️❄️Snow Day❄️❄️</b></h4> 
                    <p class="text-center mt-1">Lorem ipsum Deserunt minus fugiat itaque voluptates, ea enim.</p> 
                    </div> 
                    </div>
            </div>
            `)
        break;
    }

    else if (user_input === "Fog" || user_input === "fog") {
        istrue = true;
        document.write(` 
               
                
    <div class="container-fluid first p-lg-5 p-lg-5 p-1">
        <h1 class="text-center fw-bold pt-2  display-4 ">Weather Card</h1>
        <h5 class="text-center fw-bold mt-3">"Rainy", "Snow", "Cloudy", "Summer", "Fog",
            "Spring",
            "Autumn"</h5>
        
            <div class="card " style="animation:bounceInDown;  animation-duration:2s;"> 
                        <img src="https://i.makeagif.com/media/10-16-2018/rjxI8k.gif" alt="Avatar" style="width:100%"> 
                        <div class="container"> 
                        <h4 class="text-center mt-1"><b>🌫️🌫️Fog Day🌫️🌫️</b></h4> 
                        <p class="text-center mt-1">Lorem ipsum Deserunt minus fugiat itaque voluptates, ea enim.</p> 
                        </div> 
                        </div>
                </div>
                `)
        break;
    }

    else if (user_input === "Summer" || user_input === "summer") {
        istrue = true;
        document.write(` 
               
           
    <div class="container-fluid first p-lg-5 p-lg-5 p-1">
        <h1 class="text-center fw-bold pt-2  display-4 ">Weather Card</h1>
        <h5 class="text-center fw-bold mt-3">"Rainy", "Snow", "Cloudy", "Summer", "Fog",
            "Spring",
            "Autumn"</h5>
        
                    <div class="card " style="animation:bounceInDown;  animation-duration:2s;"> 
                    <img src="https://img1.picmix.com/output/pic/normal/4/7/4/3/3373474_92041.gif" alt="Avatar" style="width:100%"> 
                    <div class="container"> 
                    <h4 class="text-center mt-1"><b>🏖️🏖️Summer Day🏖️🏖️</b></h4> 
                    <p class="text-center mt-1">Lorem ipsum Deserunt minus fugiat itaque voluptates, ea enim.</p> 
                    </div> 
                    </div>
            </div>
            `)
        break;
    }

    else if (user_input === "Cloudy" || user_input === "cloudy") {
        istrue = true;
        document.write(` 
               
            
    <div class="container-fluid first p-lg-5 p-lg-5 p-1">
        <h1 class="text-center fw-bold pt-2  display-4 ">Weather Card</h1>
        <h5 class="text-center fw-bold mt-3">"Rainy", "Snow", "Cloudy", "Summer", "Fog",
            "Spring",
            "Autumn"</h5>
        
                
                    <div class="card " style="animation:bounceInDown;  animation-duration:2s;"> 
                    <img src="https://i.gifer.com/embedded/download/1Unb.gif" alt="Avatar" style="width:100%"> 
                    <div class="container"> 
                    <h4 class="text-center mt-1"><b>⛅⛅Cloudy Day⛅⛅</b></h4> 
                    <p class="text-center mt-1">Lorem ipsum Deserunt minus fugiat itaque voluptates, ea enim.</p> 
                    </div> 
                    </div>
            </div>
            `)
        break;
    }


    else if (user_input === "Spring" || user_input === "spring") {
        istrue = true;
        document.write(` 
               
         
    <div class="container-fluid first p-lg-5 p-lg-5 p-1">
        <h1 class="text-center fw-bold pt-2  display-4 ">Weather Card</h1>
        <h5 class="text-center fw-bold mt-3">"Rainy", "Snow", "Cloudy", "Summer", "Fog",
            "Spring",
            "Autumn"</h5>
        
                    <div class="card " style="animation:bounceInDown;  animation-duration:2s;"> 
                    <img src="https://img1.picmix.com/output/pic/normal/5/4/9/1/7551945_6e670.gif" alt="Avatar" style="width:100%"> 
                    <div class="container"> 
                    <h4 class="text-center mt-1"><b>🪻🪻Spring Day🪻🪻</b></h4> 
                    <p class="text-center mt-1">Lorem ipsum Deserunt minus fugiat itaque voluptates, ea enim.</p> 
                    </div> 
                    </div>
            </div>
            `)
        break;
    }

    else if (user_input === "Autumn" || user_input === "autumn") {
        istrue = true;
        document.write(` 
          
    <div class="container-fluid first p-lg-5 p-lg-5 p-1">
        <h1 class="text-center fw-bold pt-2  display-4 ">Weather Card</h1>
        <h5 class="text-center fw-bold mt-3">"Rainy", "Snow", "Cloudy", "Summer", "Fog",
            "Spring",
            "Autumn"</h5>
        
                
                    <div class="card " style="animation:bounceInDown;  animation-duration:2s;"> 
                    <img src="https://img1.picmix.com/output/pic/normal/7/4/0/8/9328047_cca75.gif" alt="Avatar" style="width:100%"> 
                    <div class="container"> 
                    <h4 class="text-center mt-1"><b>🍂🍂Autumn Day🍂🍂</b></h4> 
                    <p class="text-center mt-1">Lorem ipsum Deserunt minus fugiat itaque voluptates, ea enim.</p> 
                    </div> 
                    </div>
            </div>
            `)
        break;
    }

    else {
        document.write(`<div class="container text-center mt-5 pt-5 p-5"><h1>unvalid input Try again...</h1></div>`)
        break;
    }

}

if (!istrue) {
    alert("Not found Any Card")
}
