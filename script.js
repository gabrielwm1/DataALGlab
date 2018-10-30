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
        $(document).querySelector("display-que").innerHTML = "";
        let count = 0;
        for (let entry of this.entries){
            const Entry = document.createElement("section");
            const title = $("title").attr("title", $("input").eq(0).val());
            const description = $("description").attr("description", $("input").eq(1).val());
            problem.addBeginning(new Entry(title, description));


        }
    }
}

let problem = new Que;
problem.display();

$(document).ready(() => {

    $(document).on("click", ".add", (event) => {
        
        console.log(description);
        display();
        $(".display-que").append(`
        <section class="probEntry">
            Title: ${$(title).attr("title")}</br>
            Description: ${$(description).attr("description")}
      </section>
      `);
    });
});



//       `)
//     });
// });

//push adds at end
//shift takes away from beggining
//unshift ads to begining 
//pop takes away from end