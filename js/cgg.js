angular.module('CalculatorApp',[]).controller('CalculatorController',function($scope)
{ 	
	$scope.arrlist=[{"userid":1,"name":"CS"},{"userid":2,"name":"EC"},{"userid":3,"name":"CIVIL"},{"userid":4,"name":"MECH"}];



$scope.getdetails=function()
{
	if($scope.userselected.userid=="1")
	{
		$scope.cs=true;
		$scope.ec=false;
		$scope.civil=false;
		$scope.mech=false;
		$scope.reset();
	}
	
	else if($scope.userselected.userid=="2")
	{
		$scope.cs=false;
		$scope.ec=true;
		$scope.civil=false;
		$scope.mech=false;
		$scope.reset();
	}
	
	else if($scope.userselected.userid=="3")
	{
		$scope.cs=false;
		$scope.ec=false;
		$scope.civil=true;
		$scope.mech=false;
		$scope.reset();
	}
	
	else if($scope.userselected.userid=="4")
	{
		$scope.cs=false;
		$scope.ec=false;
		$scope.civil=false;
		$scope.mech=true;
		$scope.reset();
	}
};

$scope.reset=function()
{
	$scope.sub1="";
	$scope.sub2="";
	$scope.sub3="";
	$scope.sub4="";
	$scope.sub5="";
	$scope.sub6="";
	$scope.sub7="";
	$scope.lab1="";
	$scope.lab2="";
	$scope.lab3="";
	
	$scope.cg1="";
	
	$scope.cg2="";
	$scope.cg3="";
	
	
	
};

$scope.calculateGrade=function(item)
{
	if(item=="S" || item=="s")
		return 10;
	else if(item=="A" || item=="a")
		return 9;
	else if(item=="B" || item=="b")
		return 8;
	else if(item=="C" || item=="c")
		return 7;
	else if(item=="D" || item=="d")
		return 6;
	else if(item=="E" || item=="e")
		return 4;
	else 
		return 0;
};


$scope.resultcs=function()
{
	var gradeSub1=$scope.calculateGrade($scope.sub1);
	var gradeSub2=$scope.calculateGrade($scope.sub2);
	var gradeSub3=$scope.calculateGrade($scope.sub3);
	var gradeSub4=$scope.calculateGrade($scope.sub4);
	var gradeSub5=$scope.calculateGrade($scope.sub5);
	var gradeSub6=$scope.calculateGrade($scope.sub6);
	var gradeLab1=$scope.calculateGrade($scope.lab1);
	var gradeLab2=$scope.calculateGrade($scope.lab2);
	var gradeLab3=$scope.calculateGrade($scope.lab3);
	


	var sgpa=((gradeSub1*3)+(gradeSub2*4)+(gradeSub3*4)+(gradeSub4*4)+(gradeSub5*4)+(gradeSub6*1)+(gradeLab1*1)+(gradeLab2*2)+(gradeLab3*1))/24;
		
	if(isNaN(sgpa))
		{
		return "ENTER THE CORRECT GRADES";
		}
	else
		sgpa=sgpa.toFixed(2);
	
	return sgpa;
	
	
};





$scope.calculateGrade1=function(item)
{
	if(item=="S" || item=="s")
		return 10;
	else if(item=="A" || item=="a")
		return 9;
	else if(item=="B" || item=="b")
		return 8;
	else if(item=="C" || item=="c")
		return 7;
	else if(item=="D" || item=="d")
		return 6;
	else if(item=="E" || item=="e")
		return 4;
	else 
		return 0;
};

$scope.resultecs=function()
{

	var gradeSub11=$scope.calculateGrade1($scope.sub1);
	var gradeSub12=$scope.calculateGrade1($scope.sub2);
	var gradeSub13=$scope.calculateGrade1($scope.sub3);
	var gradeSub14=$scope.calculateGrade1($scope.sub4);
	var gradeSub15=$scope.calculateGrade1($scope.sub5);
	var gradeSub16=$scope.calculateGrade1($scope.sub6);
	var gradeSub17=$scope.calculateGrade1($scope.sub7);
	var gradeLab11=$scope.calculateGrade1($scope.lab1);
	var gradeLab12=$scope.calculateGrade1($scope.lab2);

	var sgpa1=((gradeSub11*3)+(gradeSub12*4)+(gradeSub13*4)+(gradeSub14*4)+(gradeSub15*3)+(gradeSub16*3)+(gradeSub17*1)+(gradeLab11*1)+(gradeLab12*1))/24;
		


	if(isNaN(sgpa1))
		{
		return "ENTER THE CORRECT GRADES";
		}
	else
		sgpa1=sgpa1.toFixed(2);
	
	return sgpa1;
	
	
};

$scope.calculateGrade2=function(item)
{
if(item=="S" || item=="s")
		return 10;
	else if(item=="A" || item=="a")
		return 9;
	else if(item=="B" || item=="b")
		return 8;
	else if(item=="C" || item=="c")
		return 7;
	else if(item=="D" || item=="d")
		return 6;
	else if(item=="E" || item=="e")
		return 4;
	else 
		return 0;
};

$scope.resultmech=function()
{

	var gradeSub21=$scope.calculateGrade2($scope.sub1);
	var gradeSub22=$scope.calculateGrade2($scope.sub2);
	var gradeSub23=$scope.calculateGrade2($scope.sub3);
	var gradeSub24=$scope.calculateGrade2($scope.sub4);
	var gradeSub25=$scope.calculateGrade2($scope.sub5);
	var gradeSub26=$scope.calculateGrade2($scope.sub6);
	var gradeSub27=$scope.calculateGrade2($scope.sub7);
	var gradeLab21=$scope.calculateGrade2($scope.lab1);
	var gradeLab22=$scope.calculateGrade2($scope.lab2);

	var sgpa2=((gradeSub21*3)+(gradeSub22*4)+(gradeSub23*4)+(gradeSub24*4)+(gradeSub25*3)+(gradeSub26*3)+(gradeSub27*1)+(gradeLab21*1)+(gradeLab22*1))/24;
		


	if(isNaN(sgpa2))
		{
		return "ENTER THE CORRECT GRADES";
		}
	else
		sgpa2=sgpa2.toFixed(2);
	
	return sgpa2;
	
	
};




	
$scope.cgpa3semcs=function()
{
	var cgpa=(($scope.cg1*20)+($scope.cg2*20)+($scope.cg3*24))/64;
	if(isNaN(cgpa))
	{
		return "0";
	}
	else
		cgpa=cgpa.toFixed(2);
	
	return cgpa;
};


$scope.cgpa3semec=function()
{
	var cgpa=(($scope.cg1*20)+($scope.cg2*20)+($scope.cg3*24))/64;
	if(isNaN(cgpa))
	{
		return "0";
	}
	else
		cgpa=cgpa.toFixed(2);
	
	return cgpa;
};

$scope.cgpa3semmech=function()
{
	var cgpa=(($scope.cg1*20)+($scope.cg2*20)+($scope.cg3*24))/64;
	if(isNaN(cgpa))
	{
		return "0";
	}
	else
		cgpa=cgpa.toFixed(2);
	
	return cgpa;
};

});