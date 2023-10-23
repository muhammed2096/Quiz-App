
import { Quiz } from "./quiz.js";
export class Setting{
    constructor(){
        document.getElementById('start').addEventListener('click', ()=>{
            this.startQuestions()
        })  }


    async  startQuestions(){

const category= document.getElementById("category").value

// const difficulty=Array.from(document.getElementsByName("difficulty")).find((item)=>{
//     return item.checked}).value

const difficulty=document.querySelector("[name='difficulty']:checked").value

const amount=document.getElementById("amount").value


if(amount>0){
    const result= await this.getQuestions(category,difficulty,amount)
    console.log(result);
    $('#setting').removeClass('show')
    $('#quiz').addClass('show')
const quiz=new  Quiz(result)

}else{
    $("#alertNumber").fadeIn(1000);}


    }


    async getQuestions(category,difficulty,amount){
        const apiResponse=await fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`)
        const response=await apiResponse.json()
        return response.results ;

       
    }
}