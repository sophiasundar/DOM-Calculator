const navBar = document.createElement("h1");
   navBar.setAttribute("class","text-center");
   navBar.setAttribute("id","title");
   navBar.innerHTML = "<h1>Simple Calculator using DOM</h1>"

   const paraTag = document.createElement("p");
   paraTag.setAttribute("id","description");
   paraTag.innerHTML = "Good to use"

   const division = document.createElement("div");
   division.setAttribute("class","container-fluid");

   const division1 = document.createElement("div");
   division1.setAttribute("class","calculator")

   let input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("placeholder","0");
    input.setAttribute("id","result");
    division1.append(input);

    let btn = document.createElement("button");
     btn.innerHTML ="C";
     btn.setAttribute("type","number");
     btn.setAttribute("id","clear")
     btn.setAttribute("onClick","Clear()");

     let btn1 = document.createElement("button");
     btn1.innerHTML ="<=";
     btn1.setAttribute("type","number");
     btn1.setAttribute("id","delete")
     btn1.setAttribute("onClick","Delete()");

     let btn2 = document.createElement("button");  
      btn2.innerText =".";
      btn2.setAttribute("type","number");
      btn2.setAttribute("id","dotbtn");
      btn2.setAttribute("onClick","Display('.')");

      let btn3 = document.createElement("button");  
       btn3.innerText ="*";                             
       btn3.setAttribute("type","number");
       btn3.setAttribute("id","mulbtn");
       btn3.setAttribute("onClick","Display('*')");

       let btn4 = document.createElement("button");
        btn4.innerText ="7";
        btn4.setAttribute("type","number");
        btn4.setAttribute("id","7");
        btn4.setAttribute("onClick","Display('7')");

      let btn5 = document.createElement("button");
       btn5.innerText ="8";
       btn5.setAttribute("type","number");
       btn5.setAttribute("id","8")
       btn5.setAttribute("onClick","Display('8')");

      let btn6 = document.createElement("button");
       btn6.innerText ="9";
       btn6.setAttribute("type","number");
       btn6.setAttribute("id","9");
       btn6.setAttribute("onClick","Display('9')");

       let btn7 = document.createElement("button");
        btn7.innerHTML ="/";
        btn7.setAttribute("type","number");
        btn7.setAttribute("id","divbtn");
        btn7.setAttribute("onClick","Display('/')");

       let btn8 = document.createElement("button");
         btn8.innerText ="4";
         btn8.setAttribute("type","number");
         btn8.setAttribute("id","4");
         btn8.setAttribute("onClick","Display('4')");

       let btn9 = document.createElement("button");
        btn9.innerText ="5";
        btn9.setAttribute("type","number");
        btn9.setAttribute("id","5");
        btn9.setAttribute("onClick","Display('5')");

       let btn10 = document.createElement("button");
        btn10.innerText ="6";
        btn10.setAttribute("type","number");
        btn10.setAttribute("id","6");
        btn10.setAttribute("onClick","Display('6')");

       let btn11 = document.createElement("button");
        btn11.innerText ="-";
        btn11.setAttribute("type","number");
        btn11.setAttribute("id","subtract");
        btn11.setAttribute("onClick","Display('-')");

       let btn12 = document.createElement("button");
        btn12.innerText ="1";
        btn12.setAttribute("type","number");
        btn12.setAttribute("id","1");
        btn12.setAttribute("onClick","Display('1')");

       let btn13 = document.createElement("button");
        btn13.innerText ="2";
        btn13.setAttribute("type","number");
        btn13.setAttribute("id","2");
        btn13.setAttribute("onClick","Display('2')");

       let btn14 = document.createElement("button");
        btn14.innerText ="3";
        btn14.setAttribute("type","number");
        btn14.setAttribute("id","3");
        btn14.setAttribute("onClick","Display('3')");

       let btn15 = document.createElement("button");
        btn15.innerText ="+";
        btn15.setAttribute("type","number");
        btn15.setAttribute("id","add");
        btn15.setAttribute("onClick","Display('+')");
      
        let btn16 = document.createElement("button");
        btn16.innerText ="0";
        btn16.setAttribute("type","number");
        btn16.setAttribute("id","zerobtn");
        btn16.setAttribute("onClick","Display('0')");

       let btn17 = document.createElement("button");
        btn17.innerText ="00";
        btn17.setAttribute("type","number");
        btn17.setAttribute("id","doublezerobtn");   
        btn17.setAttribute("onClick","Display('00')");

        let btn18 = document.createElement("button");  
        btn18.innerHTML ="%";
        btn18.setAttribute("type","number");
        btn18.setAttribute("id","modbtn");
        btn18.setAttribute("onClick","Display('%')");

        let btn19 = document.createElement("button");
        btn19.innerText ="=";
        btn19.setAttribute("type","number");
        btn19.setAttribute("id","equal");    
        btn19.setAttribute("onClick","Calculate()");


        division1.append(btn,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9,btn10,btn11,btn12,btn13,btn14,btn15,btn16,btn17,btn18,btn19);
        division.append(division1);
        document.body.append(navBar,paraTag,division);


        //DOM

        let calc = document.getElementById("result");

         function Display(num){
             calc.value += num;
              }
         function Calculate(){
            try{
                calc.value = eval(calc.value);
                }
            catch(err){
                alert("Only Numbers are Allowed");
                    }
                }

            function Clear(){
                calc.value = "";
                }
            function Delete(){
                calc.value = calc.value.slice(0,-1);
                    }