const React = require('react');

/* takes an array prop 'items' and returns a <ul> element 
   with each item as <li> elements */

const problems = [
  {
    title: "Multiples of 3 and 5",
    problem: "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23...\n\nFind the sum of all the multiples of 3 or 5 below 1000.",
    code: "let tot = 0;\nfor(let i=0;i<1000;i++){\n\tif(i%3==0 || i%5==0) tot+=i;\n}\nreturn tot;",
    solution: multiplesOf3And5()
  },
  {
    title: "Even Fibonacci numbers",
    problem: "Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:\n\n1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...\n\nBy considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.",
    code: "let arr = [1,2];\nlet numToAdd=0;\nwhile(numToAdd<=4000000){\n\tnumToAdd = +arr[arr.length-1] + +arr[arr.length-2];\n\tif(numToAdd<=4000000)arr.push(numToAdd);\n}\nreturn arr.filter((d) => d%2==0).reduce((acc, val) => acc+val);",
    solution: evenFibonacciNumbers()
  },
  {
    title: "Largest prime factor",
    problem: "The prime factors of 13195 are 5, 7, 13 and 29.\n\nWhat is the largest prime factor of the number 600851475143 ?",
    code: "let num = 600851475143;\nlet prime=2;\nwhile(num>=prime*prime){\n\tif(num%prime==0){\n\t\tnum /= prime;\n\t}else{\n\t\tprime++;\n\t}\n}\nreturn num;",
    solution: largestPrimeFactor()
  },
  {
    title: "Largest palindrome product",
    problem: "A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.\n\nFind the largest palindrome made from the product of two 3-digit numbers.",
    code: "let palProd = 0\nfor(let num1=999;num1>=100;num1--){\n\tfor(let num2=999;num2>=100;num2--){\n\t\tlet prod = num1*num2\n\t\tlet prodArr = prod.toString().split('');\n\t\tif(\n\t\t\tprodArr[0]==prodArr[prodArr.length-1]\n\t\t\t&& prodArr[1]==prodArr[prodArr.length-2]\n\t\t\t&& prodArr[2]==prodArr[prodArr.length-3]\n\t\t\t&& prod>palProd\n\t\t) palProd = prod;\n\t}\n}\nreturn palProd;",
    solution: largestPalindromeProduct()
  },
  {
    title: "Smallest multiple",
    problem: "2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.\n\nWhat is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?",
    code: "let min=1;\nlet max=20;\nlet multiple = max;\nlet isMultiple = true;\ndo{\n\tisMultiple = true;\n\tfor(let i=min;i<=max;i++){\n\t\tif(multiple%i!=0){\n\t\t\tisMultiple = false\n\t\t\tmultiple+=max;\n\t\t\tbreak;\n\t\t}\n\t}\n}while(!isMultiple);\nreturn multiple;",
    solution: smallestMultiple()
  },
  {
    title: "Sum square difference",
    problem: "The sum of the squares of the first ten natural numbers is,\n\n1\u00B2 + 2\u00B2 + ... + 10\u00B2 = 385\n\nThe square of the sum of the first ten natural numbers is,\n\n(1 + 2 + ... + 10)\u00B2 = 55\u00B2 = 3025\n\nHence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.\n\nFind the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.",
    code: "let min=1;\nlet max=100\nlet dif=0;\nfor(let i=min;i<max;i++){\n\tfor(let j=i+1;j<=max;j++){\n\t\tdif+=i*j	\n\t}\n}\ndif*=2;\nreturn dif;",
    solution: sumSquareDifference()
  },
  {
    title: "10001st Prime",
    problem: "By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.\n\nWhat is the 10 001st prime number?",
    code: "let primes = [2, 3, 5];\nlet current = 7;\nlet isPrime=false;\nwhile(true){\n\tisPrime=true;\n\tfor(let i=0;i<primes.length;i++){\n\t\tif(current%primes[i]==0){\n\t\t\tisPrime=false;\n\t\t}\n\t}\n\tif(isPrime){\n\t\tprimes.push(current);\n\t}\n\tcurrent+=2;\n\tif(primes.length>=10001)\n\t\treturn primes[10000];\n}",
    solution: prime10001()
  },
  {
    title: "Largest product in a series",
    problem: "The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.\n\n73167176531330624919225119674426574742355349194934\n96983520312774506326239578318016984801869478851843\n85861560789112949495459501737958331952853208805511\n12540698747158523863050715693290963295227443043557\n66896648950445244523161731856403098711121722383113\n62229893423380308135336276614282806444486645238749\n30358907296290491560440772390713810515859307960866\n70172427121883998797908792274921901699720888093776\n65727333001053367881220235421809751254540594752243\n52584907711670556013604839586446706324415722155397\n53697817977846174064955149290862569321978468622482\n83972241375657056057490261407972968652414535100474\n82166370484403199890008895243450658541227588666881\n16427171479924442928230863465674813919123162824586\n17866458359124566529476545682848912883142607690042\n24219022671055626321111109370544217506941658960408\n07198403850962455444362981230987879927244284909188\n84580156166097919133875499200524063689912560717606\n05886116467109405077541002256983155200055935729725\n71636269561882670428252483600823257530420752963450\n\nFind the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?",
    code: "Working...",
    solution: largestProductInASeries()
  }
];

class Problems extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      problem: 0
    }
    this.changeHandler = this.changeHandler.bind(this);
  }
  changeHandler(e){
    this.setState({problem: e.target.value});
  }
  render(){
    return (
      <div style={{display: "flex",flexDirection:"column",alignItems:"center"}}>
        <h1>Project Euler Solutions</h1>

      <p style={{textAlign:"justify"}}>This is a full stack <a href="http://glitch.com">Glitch</a> app I'm building to write and showcase my solutions for <a href="https://projecteuler.net">Project Euler</a> Problems!
        Please note that this is a work in progress, so I'll be adding solutions as I solve them :</p>
        <select style={{width:"100%"}} autofocus onChange={this.changeHandler}>
          {problems.map(function(item, i) {
            return <option value={i}>{1+i + " - " + item.title}</option>;
          })}
        </select>
        <h2>{problems[this.state.problem].title}</h2>
        <p style={{marginBottom:0}}><b>Problem</b> : </p>
        <p style={{width:"100%",whiteSpace:"pre-line",textAlign:"justify",margin:0,fontFamily:'"Benton Sans",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",helvetica,arial,sans-serif'}}>{problems[this.state.problem].problem}</p>
        <p style={{marginBottom: 0}}><b>Code</b> :</p>
        <pre style={{tabSize:2,padding:"20px",margin:0, backgroundColor:"#999", width:"100%", overflow:"auto"}}>{problems[this.state.problem].code}</pre>
        <p style={{marginBottom:0}}><b>Solution</b> : </p>
        <p style={{margin:0, whiteSpace:"auto"}}>{problems[this.state.problem].solution}</p>
      </div>
  );}
}

function multiplesOf3And5() {
  let tot = 0;
  for(let i=0;i<1000;i++){
    if(i%3==0 || i%5==0) tot+=i;
  }
  return tot;
}

function evenFibonacciNumbers() {
  let arr = [1,2];
  let numToAdd=0;
  while(numToAdd<=4000000){
    numToAdd = +arr[arr.length-1] + +arr[arr.length-2];
    if(numToAdd<=4000000)arr.push(numToAdd);
  }
  return arr.filter((d) => d%2==0).reduce((acc, val) => acc+val);
}

function largestPrimeFactor(){
  let num = 600851475143;
  let prime=2;
  while(num>=prime*prime){
    if(num%prime==0){
      num /= prime;
    }else{
      prime++;
    }
  }
  return num;
}

function largestPalindromeProduct(){
  let palProd = 0
  for(let num1=999;num1>=100;num1--){
    for(let num2=999;num2>=100;num2--){
      let prod = num1*num2
      let prodArr = prod.toString().split('');
      if(
        prodArr[0]==prodArr[prodArr.length-1]
        && prodArr[1]==prodArr[prodArr.length-2]
        && prodArr[2]==prodArr[prodArr.length-3]
        && prod>palProd
      ) palProd = prod;
    }
  }
  return palProd;
}

function smallestMultiple(){
  let min=1;
  let max=20;
  let multiple = max;
  let isMultiple;
  do{
    isMultiple = true;
    for(let i=min;i<=max;i++){
      if(multiple%i!=0){
        isMultiple = false
        multiple+=max;
        break;
      }
    }
  }while(!isMultiple);
  return multiple;
}

function sumSquareDifference(){
  let min=1;
  let max=100
  let dif=0;
  for(let i=min;i<max;i++){
	  for(let j=i+1;j<=max;j++){
	    dif+=i*j	
    }
  }
  dif*=2;
  return dif;
}

function prime10001(){
  let primes = [2, 3, 5];
  let current = 7;
  let isPrime=false;
  while(true){
    isPrime=true;
    for(let i=0;i<primes.length;i++){
      if(current%primes[i]==0){
        isPrime=false;
      }
    }
    if(isPrime){
      primes.push(current);
    }
    current+=2;
    if(primes.length>=10001)
      return primes[10000];
  }
}

function largestProductInASeries(){
  let thouStr = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
  let zeroSplit=thouStr.split('0');
  let thirteenOrLarger = [];
  for(let i=0;i<zeroSplit.length;i++){
    if(zeroSplit[i].length>=13)
      thirteenOrLarger.push(zeroSplit[i])
  }
  console.log(thirteenOrLarger);
  return "Working...";
}

module.exports = Problems;