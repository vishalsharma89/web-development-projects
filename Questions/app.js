// Using selectors insisde the elements
// Traversing the DOM

// Solution1
const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    // conso;e.log(question);
    const btn = question.querySelector(".question-btn");
    // console.log(btn);
    btn.addEventListener("click",function(){
        questions.forEach(function(item){
            if(item !==question){
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text");
    });
});


// Solution2
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click',function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text")
//     });
// });