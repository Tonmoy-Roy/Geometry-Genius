document.getElementById('calculate_btn').addEventListener('click',function(){
    const tri_first1=document.getElementById('tri_1');
    const tri_first2=tri_first1.value;
    const tri_first3=parseFloat(tri_first2);

    const tri_second1=document.getElementById('tri_2');
    const tri_second2=tri_second1.value;
    const tri_second3=parseFloat(tri_second2);

    console.log(tri_first3+tri_second3);
})