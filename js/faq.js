// $(function(){
//     $("#faq h3").click(function(){
//         $(this).parent().addClass("open").siblings().removeClass("open")
//     })
// })

window.addEventListener('load', function(){
    document.querySelectorAll("#faq h3").forEach(function(ele, idx){
        ele.addEventListener('click', function(){
            //onclick사용할거면 동적인지 정적객체인지 확인해야한다.
            this.parentElement.classList.add('open');

            let siblings = this.parentElement.parentElement.children;
            //부모태그까지 포함된 상태임
            //항상 객체검사
            console.log(
                "데이터: " + siblings, 
                "데이터타입: " + typeof siblings, 
                "정렬인가?: " + Array.isArray(siblings),
                "키보여줘 " + Object.keys(siblings) //에러터지면 주석처리해
                //비동기통신 떄 자주 사용               
            )

            //실력자라면 forEach대신에 for of쓰기
            for (let sibling of siblings) {
                //in과 of의 차이 : in은 인덱스의 순서 of는 인덱스 안의 값. array순서 또는 값, 둘 중 무엇을 더 중요시하는지에 따라 달라진다.
                if (sibling !== this.parentElement) { // 부모빼고
                    sibling.classList.remove('open');
                }
            }
        })
    })
})