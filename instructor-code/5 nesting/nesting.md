## Nesting

We will commonly need to go through nested objects and arrays.

Nothing new here, just how to use them nested and all together.

Let's dive into some of the afternoon project problems together.

var myObj = {
    ary:[{
        name:'str',
        shirt:{
            fabric:{
                name:'cotton',
                origin:{
                    state:{
                        name:'Texas',
                        doStuff:()=>console.log("shoot dem guns")
                    }
                }
            }
        }
    }]
}
let prop = 'fabric'
myObj.ary[0].shirt[prop].origin.state.doStuff()