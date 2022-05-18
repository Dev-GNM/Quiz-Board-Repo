//UI Logic
$(document).ready(function(){
    $(#form).click(function(){
        alert("Fill in the required field")
        var firstName=$("input#yourName").val();
        var lastName=$("input#yourName").val();
    });
});

//Business Logic 
$(function () {
    $("#quiz").submit(function(event))
    event.preventDefault();
    alert('You did not answer all the questions');
    var quiz1=$("input:radio[name=Q1]:checked").val();
    var quiz2=$("input:radio[name=Q2]:checked").val();
    var quiz3=$("input:radio[name=Q3]:checked").val();
    var quiz4=$("input:radio[name=Q4]:checked").val();
    var quiz5=$("input:radio[name=Q5]:checked").val();
    var quiz6=$("input:radio[name=Q6]:checked").val();
    var quiz7=$("input:radio[name=Q7]:checked").val();
    var quiz8=$("input:radio[name=Q8]:checked").val();
    var quiz9=$("input:radio[name=Q9]:checked").val();
    var quiz10=$("input:radio[name=Q10]:checked").val();
s
    var correct=0;
    if (quiz1=="Script"){
        correct ++;
    }
    if (quiz2=="Scripting"){
        correct ++;
    }
    if (quiz3=="Declarations statements"){
        correct ++;
    }
    if (quiz4=="immediate if"){
        correct ++;
    }
    if (quiz5=="block that combines a number of statements into a single compound statement"){
        correct ++;
    }
    if (quiz6=="Ignores the statement"){
        correct ++;
    }
    if (quiz7=="The local statement"){
        correct ++;
    }
    if (quiz8=="Function/Method"){
        correct ++;
    }
    if (quiz9=="Mutable variable"){
        correct ++;
    }
    if (quiz10=="oth 0x and 0x"){
        correct ++;
    }












});