var taskIDs =["block9","block10","block11","block12","block13","block14","block15","block16","block17"];

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
        $(`#${element}`).val(localStorage.getItem(element));
    });
};

var auditTime = function (timeBlockEl){
    var hour = parseInt($(timeBlockEl).find(".hour").attr("id").replace("hr", ""));
    var time = moment().hour();
    if (hour<time){
        $(timeBlockEl).removeClass("present future");
        $(timeBlockEl).addClass("past");

    }
    else if (hour===time){
        $(timeBlockEl).removeClass("past future");
        $(timeBlockEl).addClass("present");
        console.log("present");
    }
    else{
        $(timeBlockEl).removeClass("present past");
        $(timeBlockEl).addClass("future");
    }
}
//When the user clicks anywhere
$(document).on("click", function() {
    //reload our tasks
    loadTasks();
})

$(document).ready(function(){
    var date = moment().format("dddd MMM Do YYYY");
    $("#currentDay").text(date);
});

loadTasks();
$(".time-block").each(function(index, el){
    console.log(el);
    auditTime(el);
});

setInterval(function(){
    $(".time-block").each(function(index, el){
      auditTime(el);
    });
  }, (1000*60)*30);