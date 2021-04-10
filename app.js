
function domainFunction(){
   var a = document.getElementById("domains");

   if( a.style.display != "block"){
       a.style.display = "block";
   }else{
        a.style.display = "none";
   }
}

function hostingFunction(){
    var b = document.getElementById("hosting");

    if( b.style.display != "block"){
        b.style.display = "block";
    }else{
         b.style.display = "none";
    }
}

function securityFunction(){
    var c = document.getElementById("security");

    if( c.style.display != "block"){
        c.style.display = "block";
    }else{
        c.style.display = "none";
    }
}

function marketingFunction(){
    var d = document.getElementById("Marketing");

    if( d.style.display != "block"){
        d.style.display = "block";
    }else{
        d.style.display = "none";
    }
}

function contactUsFunction(){
    var e = document.getElementById("contactus");
    var x = document.getElementById("downArrow1");
    var y = document.getElementById("upArrow1");
        
    if( e.style.display != "block"){

        // 
        e.style.display = "block";
        y.style.display = "inline";
        x.style.display = "none";
    }
}

function contactUsClose(){
    var e = document.getElementById("contactus");
    var x = document.getElementById("downArrow1");
    var y = document.getElementById("upArrow1");

    e.style.display ="none";
    x.style.display = "inline";
    y.style.display = "none";
}

function signinFunction(){
    var f = document.getElementById("signin");
    var o = document.getElementById("downArrow2");
    var p = document.getElementById("upArrow2");

    if( f.style.display != "none"){
        f.style.display = "block";
        p.style.display = "inline";
        o.style.display = "none";
    }
}

function signinClose(){
    var f = document.getElementById("signin");
    var o = document.getElementById("downArrow2");
    var p = document.getElementById("upArrow2");

    f.style.display ="none";
    o.style.display = "inline";
    p.style.display = "none";
}