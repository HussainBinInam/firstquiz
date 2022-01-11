var correctval = 0;
var wrongval = 0;
var numquestion = 0;
var crchoices=[1,2,3,2];
var wrchoices1 =[2,1,1,1];
var wrchoices2 = [3,3,2,3];
var questionnum = ["1","2","3","4"];
var dontrun= false;
function Submit(){
    correctval = 0;
    wrongval = 0;
    numquestion = 0;
    question();
    checker();
}
function question (){
    for ( let i=0;i<questionnum.length;i++){
    let question = document.getElementById("Question"+questionnum[i])
    let ch= [document.getElementById("Q"+questionnum[i]+"first"),
            document.getElementById("Q"+questionnum[i]+"second"),
            document.getElementById("Q"+questionnum[i]+"third")]

    console.log([crchoices[i]-1])
    numquestion ++ ;
    if(ch[crchoices[i]-1].checked==true){
        question.style.backgroundColor="rgb(153, 245, 153)";
        correctval ++;
    }else if(ch[wrchoices1[i]-1].checked==true || ch[wrchoices2[i]-1].checked==true){
          question.style.backgroundColor="red";
          wrongval ++;
          dontrun = false;
    }else{
        dontrun= true;
        console.log ("why1")
    }
}}
function checker(){
    setTimeout(function () {
    if (dontrun == true){
        alert ("Please answer all the quetions");
        return;
    }else if (correctval ==numquestion ){
        alert("Congratulations! All the questions are correct.")
    }else if (wrongval == numquestion){
        alert("Brush up your knowledge on the subject! All the questions are wrong.")
    }else {
        alert( correctval+" out of "+numquestion + " questions answered correctly." )
    } },500);
}
