          //..................................................................For Each...........................................................//

    //  This method is an iterative method.The forEach() method is not executed for empty elements.

// Syntex:-   Array.forEach(function(){ })    


// eg. - 
//           let food = [1,2,3,4,6,7];
//           let sum=0
//           food.forEach(function(ele){
//             sum = sum + ele
//           })
//           console.log(sum);

// output:- 23
        


          //..................................................................map function............................................................//

          // The map method is an iterative method and generic. Map creates a new array for every array elements and not execute the function for empty elements and not change the original array.

//  Syntax:-   Array.map(function(costItem){ 
            //     return costItem
            //   })


// eg. - 
//           let cost = [100,200,400,500,800];
//           let data = cost.map(function(costItem){
//             return costItem*2;
//           });
//           console.log(data);
//           console.log(cost);

//   output:-  [200,400,800,1000,1600]
//             [100,200,400,500,800]        



           //..................................................................Filter function..............................................................//

              //  The map method is an iterative method. This method creates a new array filled with elements that pass a test provided by a function and not execute the function for empty elements and not change the original array.
              
    // Syntex:-   Array.filter(function(costItem){ 
             //     return costItem
           //     })


    // eg. -
    //          let deatils = [
    //             {name: "Sohan", age: 30},
    //             {name: "Sohan", age:24},
    //             {name: "Manoj", age:28},
    //             {name: "Manish", age:40}
    //          ]    
    //           let data = deatils.filter(function(costItem){
    //                return costItem.age<= 29
    //          });
    //              console.log(data);

    // output:-  [ {name: "Sohan", age: 24}, {name: "Manoj", age: 28}]             