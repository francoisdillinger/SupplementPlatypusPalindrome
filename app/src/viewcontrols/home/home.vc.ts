import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ReverseViewControl from '../reverse/reverse.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');
    // This sets the context values 
    context: any = {
        word: ''
    };
    // This function checks to make sure the input has a valid value   
    isInputValid(){
        // Just a console log to let me know the function is firing
        console.log('Function is fired');
        // Puts the context value into a variable, making it easier to use
        let input = this.context.word;
        // Checking that the input is valid, if not it will alert the user
        if(input == null || input == ''){
            alert('You need to type a word in order to reverse it!');
        }
        // If the value is valid it will run this code instead.
        else{
            // This navigates to the second view
            this.navigator.navigate(ReverseViewControl,{
                // Here I am passing the input value as a parameter
                parameters:{
                    theinput: this.context.word,
                }
            });
        }
    }
}

register.viewControl('home-vc', HomeViewControl);
