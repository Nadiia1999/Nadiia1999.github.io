function calculate()
{ var a, b, c;
a=frmCalc.a.value; a=a.replace(',',','); a=Number(a);
b=frmCalc.b.value; b=b.replace(',',','); b=Number(b);
if (a<=0) 
	alert("Гіпотенуза не можу бути меншою за нуль або дорівнювати 0");
if (b<=0) 
	alert("Катет не може бути меншим за нуль або дорівнювати 0");
if (a<b) 
	alert("Катет не може бути більшим за гіпотенузу");
c=Math.sqrt((a * a) - (b * b));
frmCalc.c.value=c;
}