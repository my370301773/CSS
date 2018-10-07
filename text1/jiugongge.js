            function over(node){
                //获取start节点
                //var oStartNode = document.getElementById("start").childNodes[0];
                //修改样式
                node.className = "out";
                //oStartNode.style.background-color = #F3C98F;
            }
            
            function out(node){
                //获取start节点
                //var oStartNode = document.getElementById("start").childNodes[0];
                //修改样式
                node.className = "over";
                //oStartNode.style.background-color = #F3C98F;
            }
            var flag;
            function start(){
                flag = window.setInterval(changeColor,1000);
            }
            function stop(){
                clearInterval(flag);
                var oOn1Node = document.getElementById("div_span");
                var oCollSpan = oOn1Node.getElementsByTagName("span");
                
                for(var i=0; i<oCollSpan.length; i++){
                    oCollSpan[i].style.backgroundColor = "#F3C98F";
                }
            }

            function changeColor(){
                //获取三个div标签的节点，并且将节点的所有span对象取出
                var oOn1Node = document.getElementById("div_span");
                var oCollSpan = oOn1Node.getElementsByTagName("span");
                
                //定义三个数字
                var number1,number2,number3;
                //定义三个颜色
                var color1,color2,color3;
                
                //生成随机不重复个位数
                number1 = Math.floor((Math.random()*9 ));
                do{
                  number2 = Math.floor((Math.random()*9 ));
                  number3 = Math.floor((Math.random()*9 ));
                }while((number1 == number2) || (number1 == number3) || (number2 == number3));
                //先将之前的颜色恢复
                for(var i=0; i<oCollSpan.length; i++){
                    oCollSpan[i].style.backgroundColor = "#F3C98F";
                }
                
                //生成随机三个颜色
                color1 = Math.floor(Math.random()*16777216).toString(16);
                color2 = Math.floor(Math.random()*16777216).toString(16);
                color3 = Math.floor(Math.random()*16777216).toString(16);
                  
                
                //赋予三个位置随机颜色
                oCollSpan[number1].style.backgroundColor = color1;
                oCollSpan[number2].style.backgroundColor = color2;
                oCollSpan[number3].style.backgroundColor = color3;
                //alert(color1);
                
            }