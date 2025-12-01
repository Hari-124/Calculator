let calculation='';
      let value='';
      function calculate(object){
          value += object;
        displayCalculation(value);
      }
      function calculateResult(){
        if(value === '')return;
        calculation=eval(value);
          value=calculation;
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