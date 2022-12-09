document.write("Average of Subjects")
document.write("</br>")
window.alert("This Page Contains:Average of subjects")
var a=20;
document.write("Maths:",a)
document.write("</br>")
var b=40;
document.write("English:",b)
document.write("</br>")
var c=50;
document.write("Physics:",c)
document.write("</br>")
var d=60;
document.write("Biology:",d)
document.write("</br>")
var e=70;
document.write("Chemistry:",e)
document.write("</br>")
var f=80;
document.write("Python:",f)
document.write("</br>")
document.write("Average of these subjects:")
var x=a+b+c+d+e+f
var y=x/6 .toFixed()
document.write("</br>")
document.write("Average: Total Marks/No of subjests =",y.toFixed())
document.write("</br>")
switch(y) {
    case 90<y<100:
        document.write("A GRADE")
        break;
    case 90<y<70:
        document.write('B GRADE')
        break;
    case y>50:
        document.write("C GRADE")
    default:
        document.write("Worst case")
}

// SWITCH STATEMENT ://
//the purpose of switch statement is to give an expression to evaluate an several diffferent statements to be executed on the basics of the value  
//of expression,the interpreter checks the each case against the value of the expression until a match is found , if nothing matches ,then whatever 
//statement is written inside the default log is executed//

