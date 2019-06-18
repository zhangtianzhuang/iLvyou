			
			function fun1(){
				if(document.getElementById("maerdaifu").style.display=="block"){
					document.getElementById("maerdaifu").style.display="none" ;
					document.getElementById("maer").innerHTML="[展开]" ;
				}else{
					document.getElementById("maer").innerHTML="[收起]" ;
					document.getElementById("maerdaifu").style.display="block" ;
				}	
			}

			function fun2(){
				if(document.getElementById("maoliqiusi").style.display=="block"){
					document.getElementById("maoliqiusi").style.display="none" ;
					document.getElementById("maoli").innerHTML="[展开]" ;
				}else{
					document.getElementById("maoli").innerHTML="[收起]" ;
					document.getElementById("maoliqiusi").style.display="block" ;
				}	
			}

			function fun3(){
				if(document.getElementById("shengtuolini").style.display=="block"){
					document.getElementById("shengtuolini").style.display="none" ;
					document.getElementById("shengtuo").innerHTML="[展开]" ;
				}else{
					document.getElementById("shengtuo").innerHTML="[收起]" ;
					document.getElementById("shengtuolini").style.display="block" ;
				}	
			}

			function fun4(){
				if(document.getElementById("daxidi").style.display=="block"){
					document.getElementById("daxidi").style.display="none" ;
					document.getElementById("daxi").innerHTML="[展开]" ;
				}else{
					document.getElementById("daxi").innerHTML="[收起]" ;
					document.getElementById("daxidi").style.display="block" ;
				}	
			}
			function city_jiaohuan(){
				var s1 = document.getElementById("start_city").value;
				var s2 = document.getElementById("end_city").value;
				document.getElementById("start_city").value = s2 ;
				document.getElementById("end_city").value = s1 ;
			}
			function changeImageBlue(){
				document.getElementById("shuangjiantou").src="url(..images/ztz_shuangxiangjiantou_blue.png)";
			}
			
			function changeImageGray(){
				document.getElementById("shuangjiantou").src="url(../images/ztz_shuangxiangjiantou_gray.png)";
			}

			function change_color(x){
				var colors = new Array("white");
				
				if(x==1){
					
				}else if(x==2){

					document.getElementById("beijing").style.display="none";
					document.getElementById("guangzhou").style.display="block";
					document.getElementById("shanghai").style.display="none";
					document.getElementById("shenzhen").style.display="none";
				}else if(x==3){

					document.getElementById("beijing").style.display="none";
					document.getElementById("guangzhou").style.display="none";
					document.getElementById("shanghai").style.display="block";
					document.getElementById("shenzhen").style.display="none";
				}else if(x==4){
		
					document.getElementById("beijing").style.display="none";
					document.getElementById("guangzhou").style.display="none";
					document.getElementById("shanghai").style.display="none";
					document.getElementById("shenzhen").style.display="block";
				}
			}
			function aaa(x){
				var colors2 = new Array("#00aeae");
				
				if(x==1){
					
					document.getElementById("beijing").style.display="block";
					document.getElementById("shanghai").style.display="none";
					document.getElementById("guangzhou").style.display="none";
					document.getElementById("shenzhen").style.display="none";
						
				}else if(x==2){
					
					document.getElementById("beijing").style.display="none";
					document.getElementById("shanghai").style.display="none";
					document.getElementById("guangzhou").style.display="block";
					document.getElementById("shenzhen").style.display="none";
				}else if(x==3){
					
					document.getElementById("beijing").style.display="none";
					document.getElementById("shanghai").style.display="block";
					document.getElementById("guangzhou").style.display="none";
					document.getElementById("shenzhen").style.display="none";
				}else if(x==4){
					
					document.getElementById("beijing").style.display="none";
					document.getElementById("shanghai").style.display="none";
					document.getElementById("guangzhou").style.display="none";
					document.getElementById("shenzhen").style.display="block";
				}
			}