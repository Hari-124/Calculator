let calculation='';
      let value='';
      let calc='';
      let flag=false;
      function calculate(object){
        if(flag){
          if(!isNaN(object))
            value='';
          else
            value=calc;
            calc='';
          flag=false;
        }
          value += object;
        displayCalculation(value);
      }
      function calculateResult(){
        if(value === '')return;
        calculation=eval(value);
         calc=calculation;
         flag=true;
          displayCalculation(calculation);
      }
      function displayCalculation(result){
        document.querySelector('.result-bar').innerHTML=`${result}`;
      }
      function del(){
        value =value.toString().slice(0,-1);
        displayCalculation(value);
      }
      function resetCalculation(){
        calculation='0';
        value='';
        displayCalculation(calculation);
      }
