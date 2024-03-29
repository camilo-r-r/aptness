
PennController.ResetPrefix(null);

PennController.Sequence( "instructions1", "info1", randomize("items"),"send", "end" );

PennController( "instructions1" ,
    newHtml("instructions", "instructions.html")
        .print()
    ,
    newButton("consent button", "weiter")
        .print()
        .wait()
);
PennController( "info1" ,
    newHtml("info", "info2.html")
       .settings.log()
        .print()
    ,
    newButton("info button", "continue")
        .print()
        .wait( getHtml("info").test.complete())
);

PennController.Template( PennController.GetTable("items_metob_apt.csv"),
                 variable => PennController("items",
        newText("context",variable.context)
            .settings.css("font-size", "30px")
            .settings.center()
            .print()
        
   ,
        newKey(" ")
           .wait()
    ,                                        
        newText("sentence",variable.sentence)
            .settings.css("font-size", "30px")
            .settings.css("padding-top", "30px")
            .settings.center()
            .print()
     ,
        newKey(" ")
           .wait()
      ,
            newText("scale_title", "Wie gut ist diese Metapher?")
            .settings.css("font-size", "25px")
            .settings.css("padding-top", "50px")
            .settings.bold()
            .settings.center()
           //.settings.css("padding-left", "100pt")
            .print()
        ,
       newScale("rating", 100)
      .settings.slider()
      .settings.center()
      .settings.css("padding-top", "30px")
      .settings.before( newText("left", "sehr schlecht") )
      .settings.after( newText("right", " sehr gut") )
      .print()
      .wait()
   ,
        newButton("finish", "senden")
            .settings.center()
            .print()
           .wait()
  
       ,   
        getButton("finish")
           .remove()  
       ,      
        getScale("rating")
           .remove() 
    ,      
        getText("scale_title")
           .remove() 
      ,
           getText("sentence")
           .remove()
     ,
           getText("context")
           .remove()                                            
      ,         
        newText("pleasewait2", "Warte kurz...")
          .print()
    ,
        newTimer("wait", 1000)
            .start()
            .wait()
   ,
        getText("pleasewait2")
           .remove()
 ,

        getScale("rating").settings.log("last"),
)
                                          .log( "item" , variable.item )



    );
PennController.SendResults( "send" );

    PennController("end",
    newText("Danke fuer die Teilnahme!")
    .settings.css("font-size", "16pt")
          .settings.center()
          .settings.css("margin-top", "200pt")
        .print()
    ,
    newText("Dein Clickworker code ist: 6794")
    .settings.css("font-size", "16pt")
          .settings.center()
          .settings.css("margin-top", "180pt")
        .print()
    ,
    newButton("void")
        .wait()
);
