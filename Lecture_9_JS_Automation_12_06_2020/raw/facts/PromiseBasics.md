* Promise=> assurance of future value
* Promise could either be resolved or rejected once in a lifetime
* Promise=>
    Initial State => pending 
    final state => settled
        if you call resolve => final state => promise will resolve with the value passed while calling resolve
        if you call reject=> final state => promise will rejected with the err or val passed while calling reject
* To consume a promise we have two **synchronous** functions then and catch.
They are used to register cb fcn to that promise.
* cb attached to a promise will only execute when the promise reaches it's final state 
* cb registered by then and catch are async
* then and catch also returns a promise
* final state of promise returned from then / catch depends upon value returned from there cb=> 
                    val=>val
                    nothing=> undefined
                    promise=> promise
                    err
                        err=> catch call
* why only one catch is enough for all the thens??  