let frame = document.querySelector(".frame");
let start = document.querySelector(".start");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let array = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg","16.jpg","17.jpg","18.jpg","19.jpg","20.jpg"];
let count = 0;
let image = document.createElement("img");
let intervalId;
image.src = array[count];
frame.append(image);
start.addEventListener("click", function(){
    if(start.textContent == "START"){
        start.textContent = "STOP";
        intervalId = setInterval(function(){
            if(count == array.length - 1){
                count = 0;
                image.src = array[count];
                frame.append(image);
            }
            else{
                count++;
                image.src = array[count];
                frame.append(image);
            }},2000);
    }
    else{
        start.textContent = "START";
        clearInterval(intervalId);
    }
});

prev.addEventListener("click",function(){
    clearInterval(intervalId);
    show_prev();
})
next.addEventListener("click",function(){
    clearInterval(intervalId);
    show_next();
})

function show_prev(){
    if(count == 0){
        count = array.length - 1;
        image.src = array[count];
        frame.append(image);
    }else{
        count--;
        image.src = array[count];
        frame.append(image);
    }    
}

function show_next(){
    if(count == array.length - 1){
        count = 0;
        image.src = array[count];
        frame.append(image);
    }else{
        count++;
        image.src = array[count];
        frame.append(image);
    }    
}