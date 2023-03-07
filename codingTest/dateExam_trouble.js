// day 일 뒤의 날짜 구하기

// 아래의 코드에서 month1 을 정의할때 왜 getMonth() +1 이 되는지 이해를 못했다!
// 위에서 -1 해주고 굳이 아래에서 +1은 왜하는걸까.. 싶었다..

// Date 함수에서 Month의 특징을 이해하자..
// Date 함수를 쓸 때 Month 는 인덱스 형식으로 0~11 로 표현된다...
// 즉 Month[0] = 실제 1월, Month 11 = 실제 12월.

// 아래의 코드에서는 solution 함수의 인자로 month(실제 가정할 월) 을 가져왔다.
// 즉 month를 인덱스값이 아닌 실제 월로 가져왔기 때문에 Date 함수에서 월 세팅을 해줄 때에는 -1 을 붙여서 인덱스화 시켜주는 것이다.

// 하지만 month1은 우리가 result 문자열에 포함해서 표기해주는 실제 월 이지 인덱스값을 표기하면 안된다.
// 그냥 getMonth() 를 해버린다면 Month의 인덱스값이 나와서 실제 월 - 1 월로 표기가 될 것이다.


function solution(month, day) {
    let base = new Date(2022, month - 1, day + 98);
    let month1 = base.getMonth() + 1;
    let day1 = base.getDate();
  
    let result = `${month1}월 ${day1}일`;
  
    return result;
  }
  
  console.log(solution(1, 18));
  // 4월 26일
  
  // 문제 링크
  // https://teamsparta.notion.site/99-13-f6dc48e0230d4195828682c97da235dc