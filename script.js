var taskIDs =["block9","block10","block11","block12","block13","block14","block15","block16","block17"];

$(document).ready(function(){
    var date = moment().format("dddd MMM Do YYYY");
    $("#currentDay").text(date);
});
//save Button clicked
$(".saveBtn").on("click", function(){
    var taskEl = $(this).closest(".time-block").find(".description");
    var textInput =taskEl.val();
    var taskId = taskEl.attr("id");
    $(taskEl).attr("value", textInput);
   // Save to local storage
    localStorage.setItem(taskId,textInput);
});
//load tasks from local Storage
var loadTasks = function(){
    taskIDs.forEach(function(element){
        $("'#"+element+"'").val(localStorage.getItem(element));
    });
};


var auditTime = function (timeBlockEl){
    var hour = $(timeBlockEl).find(".hour").attr("id").replace("hr", "");
    var time = moment().hour();
    if (hour<time){
        $(timeBlockEl).addClass("past");
    }
    else if (hour===time){
        $(timeBlockEl).addClass("present");
    }
    else{
        $(timeBlockEl).addClass("future");
    }
}

loadTasks();


// setTimeout(function(){
//     $(".time-block").each(function(index, el){
//       auditTime(el);
//     });
//   }, 1000);