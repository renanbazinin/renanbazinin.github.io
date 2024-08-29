import React from 'react'

export default function SetTheory() {
  const handleNav = (e)=>{
   

    const element = e.target
    let c = element.closest("div");
   const arrayOfA = c.getElementsByTagName('a')




  for (let btc of arrayOfA) {
    btc.className='';
   
    if(btc.innerHTML===e.target.innerHTML)
     btc.className='a-pressed';
    
  } 
 
}


  return (
    <div>
        <h1>לוגיקה</h1>
        <h1>תורת הקבוצות</h1>

        <div class="topnav-heb" style={{"margin":"0"}} >

            <a onClick={handleNav} > כלום 1</a>
            <a onClick={handleNav}> כלום 2</a>


        </div>

    </div>
  )
}
