//createP("2:14 PM").parent(bob).addClass("ud")

var input,button,msg,m_div;

function setup(){
    input = select("#ip");
    button  = select(".send");
    m_div = select("#messages")
    bob = createDiv("Today").addClass("day").parent(m_div);
    options= select(".opt")
      bob = createDiv("👋 Hello, My name is Luna").addClass("bot").parent(m_div);
    
      bob = createDiv("I am Your virtual yet personal assistant to help you out of every situation and help you get some intresting chats. First , let me ask you a couple of questions to get to know you better!").addClass("bot").parent(m_div);
    
     bob = createDiv("Should we proceed?").addClass("bot").parent(m_div);
    
     createButton("Not Yet").addClass("btn").parent(m_div).mousePressed(callReply);
        createButton(" Yes").addClass("btn").parent(m_div);
}

function draw (){ 
console.log(input.value());
    
   
}

function send(){
msg = input.value();
    createP(msg).addClass("user").parent(m_div);

    callReply();
}

function callReply(){
   
     var objDiv = document.getElementById("messages");
objDiv.scrollTop = objDiv.scrollHeight;
    
    document.getElementById('ip').value = ''
    
if(msg=="manav"||msg=="hello"){
        bob = createDiv("Hello Sir, I am  glad that I met you, Do you know Sittu").addClass("bot").parent(m_div);
       bob = createDiv("Good Morning").addClass("bot").parent(m_div).style("margin-top", "5px");
}else{
            bob = createDiv("I am Sorry Sir I couldn't getd that").addClass("bot").parent(m_div);

}
    
}