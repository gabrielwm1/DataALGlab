"use strict"

class Entry{
    constructor(title, description){
        this.title = title;
        this.description = description;
    }

}
class Que {
    constructor(){
        this.entries=[];
    }
    addEnd(info){
     this.entries.push(info);
    // console.log(this.entries);
    }
    takeAwayend(info){
        this.entries.pop(info);
    }
    addBeginning(info){
        this.entries.shift(info);
        
    }
    takeAwayBeg(info){
        this.entries.unshift(info);
    }
    display(){
        console.log(this.entries);
        for (let entry of this.entries){
            $(".display-que").append(`
            <section class="probEntry">
                Title: ${entry.title}</br>
                Description: ${entry.description}
            </section>
        `);
        }   
    }
}



    //     document.querySelector(".display-que").innerHTML = "";
    //     let count = 0;
  
            


    //     }
    // }


let problem = new Que;

$(document).ready(() => {
    let title;
    let description;
    $(document).on("click", ".add", (event) => {
        title = $(".title").val();
        description = $(".description").val();
        
        problem.addEnd(new Entry(title, description));
        problem.display();


    });
});



//       `)
//     });
// });

//push adds at end
//shift takes away from beggining
//unshift ads to begining 
//pop takes away from end