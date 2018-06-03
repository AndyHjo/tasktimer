
var duration = {
    "min": 0,
    "sec": 0
};


// 1. Get the button

var timeTextObject = document.querySelector('.duration__timer');
var unitTextObject = document.querySelector('.duration__unit');
var addButton  = document.querySelector('.add-button');
var newItemBox = document.querySelector('.add-list-item');
var form       = document.querySelector('form');
var data       = document.querySelector('#data');
var body = document.body;

// 2. Add click event listener
addButton.addEventListener('click', function(event){

    // 3. Show dialog box
    newItemBox.classList.remove('hidden');
});

// 4. Handle new items
form.addEventListener('submit', function(event){

    event.preventDefault();

    addNewTask(data.value);
    data.value = '';
    newItemBox.classList.add('hidden');
});

function addNewTask(title) {
    
    
    var selectId = title.replace(/\s+/g, '');
    var table = document.querySelector('tbody');

    var taskNode = document.createElement('tr');
    taskNode.innerHTML = `<td>${title}</td>

    <td id="select">
       <select id="${selectId}-time">    
            <option value="10">10 Min </option>
            <option value="20">20 Min </option>
            <option value="30" selected>30 Min </option>
            <option value="40">40 Min </option>
            <option value="50">50 Min </option>
            <option value="60">60 Min </option>
       </select> 
       </td>
        <td>
        <button id="${selectId}-start-btn" class="start waves-effect waves-light btn">Start</button>
        </td>`;

    table.appendChild(taskNode);

    getSelectedValue(selectId);
    pressStart(selectId, title);
}



function getSelectedValue(value){
    
    var selectElement = document.getElementById(`${value}-time`);
    var value = selectElement.options[selectElement.selectedIndex].value;
    
    duration.min = value;
    
    console.log(duration);

    selectElement.onchange=function(event ){
        value = event.target.value;
        duration.min = value;
        duration.sec = 0;
        console.log(duration);
    }
}





function pressStart(id, taskName, theBtn){

    var theBtn = document.getElementById(id+'-start-btn');

    
    
    theBtn.onclick= function(e){
        //  console.log(taskName);

         unitTextObject.classList.add('invisible');

         
         var intervalObj = setInterval(handleInterval, 1000);
    }

    function handleInterval (){

        if(duration.min == 0 && duration.sec == 0){
       console.log('done');
       
       
           clearInterval(intervalObj);
           playAlarm('Pasta is ready Sir.');
       
        }else {
       
            countDown();
            showDuration();
               }
           } 
       }












function countDown(){


    duration.sec = duration.sec - 1;



    if(duration.sec < 0) {
        duration.min = duration.min - 1;
        duration.sec = 59 
    }

    console.log(duration);
}


function showDuration(){
    var min = duration.min;
    var sec = duration.sec;

    if(min < 10) {
        min = '0' + min;
    }

    if(sec < 10) {
        sec = '0' + sec;
    }
    timeTextObject.textContent = min + ':'+ sec;
}






