function multiplication1(_a,_b){
    if(_a<=0 || _b<=0 || isNaN(_a) || isNaN(_b) || _a=='' || _b==''){
        alert('please give a positive number');
        return;
    }
    const result=_a*_b;
    return result;
}

document.getElementById('calculate_btn2').addEventListener('click',function(){
    
    const rect_first1=document.getElementById('rect_1');
    const rect_first2=rect_first1.value;
    const rect_first3=parseFloat(rect_first2);

    const rect_second1=document.getElementById('rect_2');
    const rect_second2=rect_second1.value;
    const rect_second3=parseFloat(rect_second2);

    const rect_decimal_point=multiplication1(rect_first3,rect_second3);
    const rect_decimal_point1=rect_decimal_point.toFixed(2);

    const rect_result=document.getElementById('trian2');
   // const rect_result1=rect_result.innerText;
    // const rect_result2=parseFloat(rect_result1);
    // const final_result=0.5*rect_first3*rect_second3;
    rect_result.innerText=rect_decimal_point1;
    rect_first1.value='';
    rect_second1.value='';

})
document.getElementById('calculate_btn3').addEventListener('click',function(){
    
    const para_first1=document.getElementById('para_1');
    const para_first2=para_first1.value;
    const para_first3=parseFloat(para_first2);

    const para_second1=document.getElementById('para_2');
    const para_second2=para_second1.value;
    const para_second3=parseFloat(para_second2);

    const rh_decimal_point=multiplication1(para_first3,para_second3);
    const rh_decimal_point1=rh_decimal_point.toFixed(2);

    const para_result=document.getElementById('trian3');
   // const para_result1=para_result.innerText;
    // const para_result2=parseFloat(para_result1);
    // const final_result=0.5*para_first3*para_second3;
    para_result.innerText=rh_decimal_point1;
    para_first1.value='';
    para_second1.value='';

})
document.getElementById('calculate_btn6').addEventListener('click',function(){
    
    const el_first1=document.getElementById('el_1');
    const el_first2=el_first1.value;
    const el_first3=parseFloat(el_first2);

    const el_second1=document.getElementById('el_2');
    const el_second2=el_second1.value;
    const el_second3=el_second2*3.14;
    const el_second4=parseFloat(el_second3);

    const el_decimal_point=multiplication1(el_first3,el_second4);
    const el_decimal_point1=el_decimal_point.toFixed(2);

    const el_result=document.getElementById('trian6');
   // const el_result1=el_result.innerText;
    // const el_result2=parseFloat(el_result1);
    // const final_result=0.5*el_first3*el_second3;
    el_result.innerText=el_decimal_point1;
    el_first1.value='';
    el_second1.value='';

})