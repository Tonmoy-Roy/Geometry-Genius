function multiplication(_a,_b){
    if(_a<=0 || _b<=0 || isNaN(_a) || isNaN(_b)){
        alert('please give a positive number');
        return;
    }
    const result=_a*_b*0.5;
    return result;
}

document.getElementById('calculate_btn').addEventListener('click',function(){
    
    const tri_first1=document.getElementById('tri_1');
    const tri_first2=tri_first1.value;
    const tri_first3=parseFloat(tri_first2);

    const tri_second1=document.getElementById('tri_2');
    const tri_second2=tri_second1.value;
    const tri_second3=parseFloat(tri_second2);

    const tri_decimal_point=multiplication(tri_first3,tri_second3);
    const tri_decimal_point1=tri_decimal_point.toFixed(2);

    const tri_result=document.getElementById('trian1');
    tri_result.innerText=tri_decimal_point1;
    tri_first1.value='';
    tri_second1.value='';

})
document.getElementById('calculate_btn4').addEventListener('click',function(){
    
    const rho_first1=document.getElementById('rho_1');
    const rho_first2=rho_first1.value;
    const rho_first3=parseFloat(rho_first2);

    const rho_second1=document.getElementById('rho_2');
    const rho_second2=rho_second1.value;
    const rho_second3=parseFloat(rho_second2);

    const rh_decimal_point=multiplication(rho_first3,rho_second3);
    const rh_decimal_point1=rh_decimal_point.toFixed(2);

    const rho_result=document.getElementById('trian4');
    rho_result.innerText=rh_decimal_point1;
    rho_first1.value='';
    rho_second1.value='';

})
document.getElementById('calculate_btn5').addEventListener('click',function(){
    
    const penta_first1=document.getElementById('penta_1');
    const penta_first2=penta_first1.value;
    const penta_first3=parseFloat(penta_first2);

    const penta_second1=document.getElementById('penta_2');
    const penta_second2=penta_second1.value;
    const penta_second3=parseFloat(penta_second2);

    const penta_decimal_point=multiplication(penta_first3,penta_second3);
    const penta_decimal_point1=penta_decimal_point.toFixed(2);

    const penta_result=document.getElementById('trian5');
   // const penta_result1=penta_result.innerText;
    // const penta_result2=parseFloat(penta_result1);
    // const final_result=0.5*penta_first3*penta_second3;
    penta_result.innerText=penta_decimal_point1;
    penta_first1.value='';
    penta_second1.value='';

})