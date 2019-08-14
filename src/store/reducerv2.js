const initialState = {

    date: 21

};

const reducerv2 = (state = initialState, action) => {

    const newState = {...state};


   switch(action.type) {

       case 'AGE_ADD':
           newState.date =  newState.age * 2;
           break;


       case 'AGE_SUB':
           newState.date = newState.age / 2;
           break;

   }



   return newState;


}


export default reducerv2;
