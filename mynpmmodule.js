function checknumber(a){
   var hello= check_even_odd(a);
   console.log(hello);
   var palindrom=check_palindrom(a);
   console.log(palindrom);
   var prime = check_prime(a);
   console.log(prime);
}
function check_even_odd(a){
    if(a%2==0){
        return a+'is even';
    }else{
        return a+' is odd';
    }
}
function check_palindrom(a){
    //console.log(typeof(a));
    
    b=a.toString().split('');
    b=b.reverse();
    c=b.toString();
    c=c.replace(/,/gi,'');
    
    c=parseInt(c);
    if(a==c){
       return  a+" is a palindrom";
    }else{
       
       return a+" is not a palindrom";
    }
    
}

function check_prime(a) { 
              
    var  i, flag = true; 
      
    for(i = 2; i <= a- 1; i++) 
        if (a % i == 0) { 
            flag = false; 
            break; 
        } 
          
        // Check and display alert message 
    if (flag == true) 
        return a + " is prime"; 
    else
        return a + " is not prime"; 
} 
//checknumber(101);
module.exports=checknumber;