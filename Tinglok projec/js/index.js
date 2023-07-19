// =========================[Form]=========================
function form_register_show(){
     document.getElementById('bg_form_register').style.display='block';    
}
function form_register_hide(){
     document.getElementById('bg_form_register').style.display='none';    
}
// ________________________________________________________________________
function form_login_show(){
     document.getElementById('bg_form_login').style.display='block';    
}
function form_login_hide(){
     document.getElementById('bg_form_login').style.display='none';    
}


// ===============================[Sitbar]==============================
$(document).ready(function(){
    $('.sitbar').animate({ marginLeft: "-230px"})
    $('.menu2').click(function(){
        $('.sitbar').animate({ marginLeft: "0" })
        $('.box_none').show();
    });
});
$(document).ready(function(){
    $('.box_none').click(function(){
        $('.sitbar').animate({ marginLeft: "-230px" })
        $('.box_none').hide();
    });
});