var a = 10
document.write("The value of a is ",a,"</br>","</br>")
document.write("The value of ++a is : ", ++a,"</br>")
document.write("Now the value of a is : ",a,"</br>","</br>")
document.write("The value of a is ", a,"</br>")
document.write("Now the value of a is ",++a,"</br>","</br>")

document.write("The value of --a is : ",--a,"</br>")
document.write("Now the value of a : is ",a,"</br>","</br>")
document.write("The value of --a is : ",--a,"</br>")
document.write("Now the value of --a is : ",a,"</br>")

document.write("<h6>Subjects Total Marks Obtained Marks Percentage </h6>")
var eng = +prompt("English marks")
var urd = +prompt("Urdu marks")
var mat = +prompt("Math marks")
var obt = eng + urd + mat
document.write("English  :  100   :  " ,  eng  ,"  :  " ,eng/100*100, "%")
document.write("</br>","</br>","Urdu   :   100   :  ",   urd ,"  :  " ,urd/100*100, "%")
document.write("</br>","</br>","Math   :   100   :  ",   mat ,"  :  " ,mat/100*100, "%") 
document.write("</br>","</br>", "Total Marks : 300")
document.write("</br>","Obtained Marks : ",obt)
document.write("</br>","Percentage : ",obt/300*100,"%")
