import React from 'react'

const Map = () => {

    const userData = [
        { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
        { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
        { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
        { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
      
      ]
    //   const filterData = userData.filter((el)=>{
    //         if(el.name[0]=="J"){
    //             return el
    //         }
    //   })

    const filterData2 = userData.filter((el)=>{
        if(el.user_type=="Designer"){
            return el
        }
  })

  const sum = filterData2.reduce((acc,el)=>{
return acc + el.years
  },0)

  console.log(sum)
  return (
    <div>
       
       {
       
      filterData2.map((el)=>{
      
        return <ul> <span >ID :   {      el.id     }   </span>      <span>    Name :    {       el.name      }    </span>      <span>     User_Type :    {         el.user_type     }    </span> </ul>
         
    }) 
    }
      
    </div>
  )
}

export default Map
