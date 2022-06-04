function Validation()
{
   var inputNumber = document.getElementById("inputCardNumber").value;
 
   var size = inputNumber.length;

     if(size<16)
      {
         alert("Enter 16 digits card number\n\nYou entered less than 16 digits");
      }
     else if(size>16)
      {
         alert("Enter 16 digits card number\n\nYou entered more than 16 digits");
      }
     else
      {
         let array = [];
         let arrayDouble = [];
          a=0;
          b=0;
        for(let i=0;i<size;i++)
          {
             if(i%2==0)
              {
                 arrayDouble[a] = inputNumber[i]*2;
                 a++;
              }   
              else
              {
                 array[b] = inputNumber[i];
                 b++;
              }
          }

          let arrayNew = [];
            c=0;
          for(let j=0;j<a;j++)
            {
              var sum=0;
              var rem=0;
                temp = arrayDouble[j];
                while(temp!=0)
                  {
                    rem = temp%10;
                    sum = sum + rem;
                    temp = Math.floor(temp/10);
                  }
                    arrayNew[c]=sum;
                    c++;
            }

            let arraySecond = [];
            var d=0;
            for(let k=0;k<a;k++)
              {
                var sum=0;
                var rem=0;
                temp = array[k];
                while(temp!=0)
                {
                  rem = temp%10;
                  sum = sum + rem;
                  temp = Math.floor(temp/10);
                }
                  arraySecond[d]=sum;
                  d++;
              }
  
            var Sum1=0;
            for(let i=0;i<size/2;i++)
            {
              Sum1 += arraySecond[i];
            }

            var Sum2=0;
            for(let z=0;z<size/2;z++)
            {
              Sum2 = Sum2 + arrayNew[z];
            }

            var totalSum=0;
            totalSum = Sum1+Sum2;

 
        if(totalSum%10==0)
        {
            window.location.href = "valid.html";
        }
        else
        {
            window.location.href = "Notvalid.html";
        }
     }
}