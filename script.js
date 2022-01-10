var tasks = {};

$(document).ready(function(){
    var date = moment().format("dddd MMM Do YYYY");
    $("#currentDay").text(date);
});
//save Button clicked
$(".saveBtn").on("click", function(){
    var taskEl = $(this).closest(".time-block").find(".description");
    var textInput =taskEl.val();
    $(taskEl).attr("value", textInput);
    console.log(taskEl);
});
//save to local Storage
var saveTasks = function(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
};
//load tasks from local Storage
var loadTasks = function(){
    tasks = JSON.parse(localStorage.getItem("tasks"));
    $.each(tasks, )
}

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

// setTimeout(function(){
//     $(".time-block").each(function(index, el){
//       auditTime(el);
//     });
//   }, 1000);