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

// var navMenuAnchorTags = document.querySelectorAll('nav-links-list a');
// for(var i=0; i<navMenuAnchorTags.length; i++){
//     navMenuAnchorTags[i].addEventListener('click', function(event){
//         event.preventDefault();
        
//         var targetSectionId = this.textContent.trim().toLowerCase();
//         console.log(targetSectionId);
//         var targetSection = document.getElementById(targetSectionId);
//         console.log(targetSection);
//         var interval = setInterval(function(){
//             var targetSectionCoordinates = targetSection.getBoundingClientRect();
//             if(targetSectionCoordinates.top<=0){
//                 clearInterval(interval);
//                 return;
//             }
                
//             window.scroll(0, 50);
//         }, 50)
//     });
// }
