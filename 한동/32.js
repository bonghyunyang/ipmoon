//중첩 for문을 통한 구구단 2 ~ 9 단 출력

for (let x = 2; x < 10; x++){
    console.log(`===${x} 단===`);
    for (let y = 1; y < 10; y++){
        console.log(`${x} X ${y} = %d`, x*y );
    }
}