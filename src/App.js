import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const App = ()=> {
  const[inname,setInname]=useState("");
  const [Destiny1,SetDestiny]=useState();
  const [soul,SetHeart] =useState();
  const[compoundNumber,setCnumber]=useState();
  const [heart,SetHeart1] =useState();


  const handleChange=(e)=>{
    e.preventDefault();
    setInname(e.target.value);

  }
 
  function HandleSum(sum){
    var sum1=0;
    if(sum===11 ||sum===22||sum===33||sum===44){
      sum1=sum;
    }else{
      while(sum!==0){
        sum1+=Number(sum%10);
          sum = Math.floor(sum/10);
    
      }
  }
  return sum1;
  
}
  

  function Handlefunction(props){
    if(props === 'a' || props==='i'||props==='j'||props==='q'||props==='y'){
      return 1;
    }
    else if(props==='b'||props==='k'||props==='r'){
      return 2;

    }
    else if(props==='c'||props==='g'||props==='l'||props==='s'){
      return 3;

    }
    else if(props==='d'||props==='m'||props==='t'){
      return 4;

    }
    else if(props==='e'||props==='h'||props==='n'||props==='x'){
      return 5;

    }
    else if(props==='u'||props==='v'||props==='w'){
      return 6;

    }
    else if(props==='o'||props==='z'){
      return 7;

    }
    else {
      return 8;

    }

  }
  

  const calculateDes=(event)=>{
    event.preventDefault();
    function removeSpaces(n) {

      var count = 0;


      for (var i = 0; i < n.length; i++)
        if (n[i] !== " ") n[count++] = n[i];
 

      return count;
    }


    const singlet = inname.toLowerCase().split("");
    var i = removeSpaces(singlet);
    const rename =(singlet.join("").substring(0, i));
    const sname = rename.split("");

    console.log(sname);


    
      var Heart=0,heart1=0;
      const compare1 =sname.map((item)=>{
          if(item==='a'||item==='e'||item==='i'||item==='o'||item==='u'){
            Heart+=Number(Handlefunction(item));
            return Handlefunction(item);
          }
          else {
            heart1+=Number(Handlefunction(item));
            return Handlefunction(item);
            
          }
        }
        
    )
    SetHeart(HandleSum(Heart));
    SetHeart1(HandleSum(heart1))
  
var destiny =0;
  const compare = sname.map((item)=>{
    destiny+=Number(Handlefunction(item));
    return Handlefunction(item);

  })

SetDestiny(HandleSum(destiny));
setCnumber(destiny);
 


}
  
  
  
return (
    <div className="container d-flex justify-content-center flex-wrap align-content-center">
    <span className="border border-secondary shadow p-4 mb-4 bg-white">
    <form onSubmit={calculateDes} >
   <h2 className=" d-flex justify-content-center">Name Number Numerology</h2>
  <div className="form-group">
    <label htmlFor="example1">Enter Your Name</label>
    <input type="text" className="form-control" value={inname} onChange={handleChange} placeholder="Enter Your Name" autoComplete="off"/>
  </div>
  <br/>
  <br/>
  <button type="submit"  className="btn btn-lg mx-auto btn-danger d-flex justify-content-center">Calculate</button>

</form> 

    </span>

   <div className = "container d-flex justify-content-center flex-wrap align-content-center">
   <div class="card">
  <div class="card-header">
  Compound name number:
  </div>
  <div class="card-body">
    <h4 class="card-title">{compoundNumber}</h4>
  </div>
</div>
 <div class="card">
  <div class="card-header">
  Destiny number:
  </div>
  <div class="card-body">
    <h4 class="card-title">{Destiny1}</h4>
  </div>
</div>
 <div class="card">
  <div class="card-header">
  Soul Urge:
  </div>
  <div class="card-body">
    <h4 class="card-title">{soul}</h4>
  </div>
</div>
 <div class="card">
  <div class="card-header">
  Personality number:
  </div>
  <div class="card-body">
    <h4 class="card-title">{heart}</h4>
  </div>
</div>
   
   </div>

   </div>

  );
}

export default App;
