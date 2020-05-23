var skillsGroup = document.getElementById('skills-group');
var skillProgess=document.querySelectorAll("#skills-group > div .skills-progress");
var progressBar = document.querySelectorAll('.skills-progress>div');
console.log('animation done array created');
var animationDoneArray = new Array(skillsGroup.length);
var currentWidthArray = [];
for(var i=0; i<animationDoneArray.length; i++){
    animationDoneArray[i]=false;
}
for(var i=0; i<progressBar.length; i++){
    currentWidthArray.push(0);
}
var counter = 0;
console.log(progressBar);
console.log(skillsGroup);
var skillGroupCoordinates = skillsGroup.getBoundingClientRect();
// var animationDone = false;
var currentWidth = 0;
var instanceIdFillBars;
initialiseBars();
function isInView(ele)
{
    var coor=ele.getBoundingClientRect();
    return coor.top<=window.innerHeight;
}

function initialiseBar(bar)
{
    bar.style.width=0+"%";
}

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
    console.log("checkscroll");
    // for(var i=0; i<progressBar.length; i++){
    //     var bar = progressBar[i];
        //console.log(bar,i);
        // var coordinates = bar.getBoundingClientRect();
        // if(coordinates.top<=window.innerHeight && !animationDoneArray[i]){
            //console.log(counter+"reached skills section for bar "+i);
           // console.log(animationDoneArray);

                //console.log(counter+"animation done true for bar" + i);
    //             console.log("visible",bar);
    //             fillBars(bar, i);
    //             animationDoneArray[i] = true;
            
    //     }
    //     else if(coordinates.top>window.innerHeight){
    //         console.log("invisible",bar);
    //         animationDoneArray[i] = false;
    //         initialiseBar(bar);
    //     }
    // }
    for(var i=0;i<skillProgess.length;i++)
    {
        if(!animationDoneArray[i] && isInView(skillProgess[i]))
        {
            fillBar(skillProgess[i].firstElementChild);
            animationDoneArray[i]=true;
        }
        else if(!isInView(skillProgess[i]))
        {
            initialiseBar(skillProgess[i].firstElementChild);
            animationDoneArray[i]=false;
        }
    }
}

function initialiseBars(){
    console.log(counter+"initialise bars called ");
    for(var bar of progressBar){
        bar.style.width = 0+'%';
    }
}


function fillBars(bar, i){
    console.log(counter+"fillBars called for bar" + i);
    let targetWidth = bar.dataset.progress;
    instanceIdFillBars = setInterval(increaseCurrentWidth, 10, bar, targetWidth, i);
}

function fillBar(bar)
{
    var curr=0;
    var target=bar.getAttribute("data-progress");
    function barFilling()
    {
        if(curr>=target)
        {
            clearInterval(id1);
            return;
        }
        curr++;
        bar.style.width=curr+"%";
    }
    var id1=setInterval(barFilling,10);
}
function increaseCurrentWidth(bar, targetWidth, i){
    //console.log('increase current width for bar ' + i +' called' );
    //console.log(currentWidthArray);
    if(currentWidthArray[i]>=targetWidth){
        //console.log("currentWidth:"+currentWidthArray[i]+" targetWidth:"+targetWidth);
        //console.log('clearinterval for bar'+i+' called');
        clearInterval(instanceIdFillBars);
        // currentWidth = 0;
        return;
    }
    // console.log(currentWidth);
    currentWidthArray[i]+=0.5;
    bar.style.width = currentWidthArray[i]+'%';
   // return;
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
