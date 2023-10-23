export class Quiz {
    constructor(result) {
        console.log(result);
        this.result = result;
        document.getElementById('to').innerText = this.result.length
        this.from = document.getElementById('from')
        this.currentIndex = 0
        this.questionTitle = document.getElementById('questionTitle')
        this.questionContent = document.getElementById('questionContent')
        this.correctAnswer;
        this.score=0;
        document.getElementById("nextQuestion").addEventListener("click", this.nextQuestion.bind(this))
        document.getElementById('end').addEventListener("click",()=>{
            location.reload()
        })



        this.showQuestion()

    }
    showQuestion() {
        this.from.innerText = this.currentIndex + 1



        this.questionTitle.innerHTML = this.result[this.currentIndex].question
        this.correctAnswer = this.result[this.currentIndex].correct_answer
        const answers = this.result[this.currentIndex].incorrect_answers
        //   console.log(answers,correctAnswer);

        const randomNumber = Math.ceil(Math.random() * answers.length)
        answers.splice(randomNumber, 0, this.correctAnswer)
        //   console.log(correctAnswer,randomNumber,answers);

        let cartona = ``
        for (let i = 0; i < answers.length; i++) {
            cartona += `<li class="my-3 animate__animated">
      <div class="pretty p-default p-round p-smooth p-plain">
         <input type="radio" name="answer" value="${answers[i]}" />
         <label> ${answers[i]}</label>
       
      </div>
   </li>`

        }
        this.questionContent.innerHTML = cartona






    }

    nextQuestion() {
        const currentAnswer = document.querySelector('[name="answer"]:checked')?.value;


        if (currentAnswer != undefined) {

            $('#alertAns').fadeOut(1000)

            
            if (this.currentIndex > this.result.length - 1) {
                $("#finish").addClass("show");
                $("#quiz").removeClass("show");
                document.getElementById('score').innerHTML=this.score
            } else {
                if(this.correctAnswer==currentAnswer){
                    
                    $("#correct").fadeIn(0)
                     this.score++;
                    setTimeout(() => {
                        $("#correct").fadeOut(0)  
                    }, 300);
                    $('#inCorrect').fadeOut(0)
          
                }else{

            $("#correct").fadeOut(0)
            
            $('#inCorrect').fadeIn(0)
            setTimeout(() => {
                $("#inCorrect").fadeOut(0)  
            }, 300);
                }

                this.currentIndex++
                this.showQuestion()
            }



        } else {
            $('#alertAns').fadeIn(1000)
        }





        // if(this.currentIndex>this.result.length-1){
        // console.log("finish");
        // $('#finish').addClass('show')
        // $('#quiz').eemoveClass('show')
        // }else{
        //     this.currentIndex++
        //     this.showQuestion()
        // }


    }
}