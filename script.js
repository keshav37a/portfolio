var skillsGroup = document.getElementById('skills-group');
var progressBar = document.querySelectorAll('.skills-progress>div');
console.log(progressBar);
console.log(skillsGroup);
var skillGroupCoordinates = skillsGroup.getBoundingClientRect();
var animationDone = false;
var currentWidth = 0;
var instanceIdFillBars;
initialiseBars();

function smoothScrollTo(elementId){
    var time = 0;
    var element = document.getElementById(elementId);
    var interval = 20;
    console.log(element);
    var instId = setInterval(countDown, interval);  
    function countDown(){
        time+=interval;
        window.scrollBy(0, 50);
        var currPos = window.pageYOffset;
        var elementPos = element.offsetTop;
        console.log(currPos, elementPos);
        if(currPos>=elementPos || time>=2000)
            clearInterval(instId);
    }     
}



// console.log(skills[0]);
// console.log(skills[1]);

window.addEventListener('scroll', checkScroll);
function checkScroll(){
    // var currPos = window.scrollY + window.innerHeight;
    var coordinates = skillsGroup.getBoundingClientRect();
    if(coordinates.top<=window.innerHeight){
        console.log("reached skills section");
        if(animationDone==false){
            console.log("animation done false");
            fillBars();
            animationDone = true;
        }    
    }
    else if(coordinates.top>window.innerHeight){
        animationDone = false;
        initialiseBars();
    }

}

function initialiseBars(){
    console.log("initialise bars called ");
    for(var bar of progressBar){
        bar.style.width = 0+'%';
    }
}


function fillBars(){
    console.log("fillBars called");
    for(let bar of progressBar){
        currentWidth = 0;
        let targetWidth = bar.dataset.progress;
        instanceIdFillBars = setInterval(increaseCurrentWidth, 10, bar, targetWidth);
    }
}

function increaseCurrentWidth(bar, targetWidth){
    if(currentWidth>=targetWidth){
        clearInterval(instanceIdFillBars);
        // currentWidth = 0;
        return;
    }
    console.log(currentWidth);
    currentWidth+=0.05;
    bar.style.width = currentWidth+'%';
    return currentWidth;
}

// var currPos = window.pageYOffset;
// var skillSectionCoordinates = document.getElementById('skills').getBoundingClientRect();
// var skills = document.getElementsByClassName('skillPerc');
// var curr = 0;
// for(var i=0; i<skills.length; i++){
//     console.log(skills[i]);
//     console.log(skills[i].dataset.progress);
    
//     var perc = skills[i].dataset.progress;
//     // var id = setInterval(getSkillPerc, 1000, perc, curr, skills[i]);

//     // skills[i].style.width = '80%';
//         // console.log(skills[i].getAttribute(''));
// }

// var id = setInterval(getSkillPerc, 1000, perc, curr, skills[0]);
// console.log("curr", curr);
// function getSkillPerc(perc, curr, skill){
//     curr=curr+5;
//     skill.style.width = curr;
//     console.log("curr", curr);
//     console.log("perc", perc);
//     console.log("skill", skills[0]);
//     if(curr>=perc)
//         clearInterval(id);
//     skill.style.width = curr+'%';
// }



// var navMenuAnchorTags = document.querySelectorAll('nav-links-list a');
// for(var i=0; i<navMenuAnchorTags.length; i++){
//     navMenuAnchorTags[i].addEventListener('click', function(event){
//         event.preventDefault();
//         var targetSectionId = this.textContent.trim().toLowerCase();
//         var targetSection = document.getElementById(targetSectionId);
//         console.log(targetSectionId);
//         var interval = setInterval(scrollVertically, 20, targetSection);

//-------------------------------------------------------------------------------------------------------------
//         var targetSection = document.getElementById(targetSectionId);
//         console.log(targetSection);
//         var interval = setInterval(function(){
//             var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             if(targetSectionCoordinates.top<=0){
//                 clearInterval(interval);
//                 return;
//             }
// --------------------------------------------------------------------------------------------------------------                
//----------------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------------
//             window.scroll(0, 50);
//         }, 50)
//     });
// }
 

// function scrollVertically(targetSection){
//     var targetSectionCoordinates = targetSection.getBoundingClientRect();
//     if(targetSectionCoordinates.top<=0){
//         clearInterval(interval);
//         return;
//     }
//     window.scrollBy(0, 50);
// }