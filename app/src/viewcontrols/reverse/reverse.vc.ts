import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import HomeViewControl from '../home/home.vc'

export default class ReverseViewControl extends BaseViewControl {
    templateString: string = require('./reverse.vc.html');
    // Here is the context values
    context: any = {
        input: '',
        reversed: '',
        palindrome: ''
    };
    // This function pulls values from the URL
    navigatedTo(params: any, query: any) {
        // Here we decode the URL so its returned to its original state, without symbols
        let newInput = decodeURI(params.theinput);
        // Turning the input into all lowercase
        let lowerCase = newInput.toLowerCase();
        // Reversing the input 
        let reversedWord = lowerCase.split('').reverse().join('');
        // Adding the inputs to strings
        let messageOne = `The word you typed is ${lowerCase}.`
        let messageTwo = `Your word reversed is ${reversedWord},`
        // Changing the context values to the string values above
        this.context.input = messageOne;
        this.context.reversed = messageTwo;
        // This if/else checks if the input and reversed input match
        if(lowerCase == reversedWord){
            // If so you get a cookie for picking a palindrome
            this.context.palindrome = 'Your word is palidrome, want a cookie?';
        }
        else{
            // If not then you get to cry
            this.context.palindrome = 'Your word is not a palidrome, go cry about it!';
        }
    }
    // When this function is called it simply returns the user to the home page
    goHome(){
        this.navigator.navigate(HomeViewControl);
    }
}

register.viewControl('reverse-vc', ReverseViewControl);
