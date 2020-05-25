let dropdown = document.getElementsByClassName("drop");
let i;

for(i = 0;i<dropdown.length;i++){
    dropdown[i].addEventListener("click",function(){
        let dropcontain = this.nextElementSibling;
        if(dropcontain.style.display === "none"){
            dropcontain.style.display = "block";
        }
        else{
            dropcontain.style.display = "none";
        }
    });
}