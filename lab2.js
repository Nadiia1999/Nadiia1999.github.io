function calculate()
{ var a, b, c;
a=frmCalc.a.value; a=Number(a); /*Об'єкт Number у JavaScript — це об'єкт-обгортка, що дозволяє працювати з числовими значеннями.*/
b=frmCalc.b.value; b=Number(b);
if (a<=0) 
	alert("Гіпотенуза не може бути меншою за нуль або дорівнювати 0.");
if (b<=0) 
	alert("Катет не може бути меншим за нуль або дорівнювати 0.");
if (a<=b) 
	alert("Катет не може бути більшим за гіпотенузу або дорівнювати їй.");
c=Math.sqrt((a * a) - (b * b));
frmCalc.c.value=c;
}
