// Theme switch code
$(".theme-switch").change(function(){
    var radioClicked = $("input[name ='rad']:checked").val();
    if (radioClicked === "1") {
        $("#theme-id").attr("href","css/theme1.css");
    
    }
    else if (radioClicked === "2") {
        $("#theme-id").attr("href","css/theme2.css");
    }
    else if (radioClicked === "3") {
         $("#theme-id").attr("href","css/theme3.css");
    }
    else{
         alert('something\'s wrong');
    }
    
});

// Pressed button display code
var digits = []; 
var operators = ["/","*","-","+","."];
$(".bt").click(function() {
    if (digits.length > 15) {
        for (var i = 15; i < digits.length; i++) {
            digits.shift();
            
        } 
    }
    
    var pressed = $(this).text();
    // An operator cannot be the pressed first
    
    if((digits.length == 0) && (pressed=="/" || pressed=="*" || pressed=="+")) {
        $(".digits").text("0")
        
    }
    
    
    // Two operators cant follow each other
    else if (operators.includes(digits[(digits.length)-1]) && operators.includes(pressed)) {
        digits.pop()
        digits.push(pressed)
        $(".digits").text(digits.join(''));
    }else if(pressed == "DEL"){
        digits.pop();
        $(".digits").text(digits.join(''));
    }else if(pressed == "RESET"){
        digits.length = 0;
        $(".digits").text("0")
    
    }else if (pressed == "=") {
            var final = eval(digits.join(''))
            $(".digits").text(final)
            digits =[final];
            
        
    }
    else {
        // if (digits.include(final)) {
        //     digits.shift()
        // }
        digits.push(pressed)
        $(".digits").text(digits.join(''));
        

        
    }
    
 
});


    
    
    

