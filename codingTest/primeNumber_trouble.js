// ## 3번. 소수의 개수와 덧셈 (상)

// ### **문제 설명**

// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 소수의 최대값과 소수가 아닌 수의 최소값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.

// 예를들어 s가 "2 3 4 5"라면 "4 5"를 리턴하고, "15 3 10 9 7 8"라면 "8 7"을 리턴하면 됩니다.

// ---

// ### 제한사항

// - s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
// - 문자열에는 소수가 한개 이상 섞여 있습니다.
// - 문자열에는 소수가 아닌 수가 한개 이상 섞여 있습니다.
// - 음수는 없습니다.


// 바로 아래의 첫번째로 작성된 코드를 보면 굉장히 지저분하고, 필요없는 코드들이 많이 보인다.

// 그 뒤 첫번째 코드를 검토하며 필요없는 코드를 삭제하고, 삼항연산자를 통해 코드를 압축했지만, 가독성이 떨어진다. 가독성을 살리면서 줄일 수도 있었지만 연습도 할겸 최대한 줄여봤다.

function solution(s) {
    let arr = s.split(" ");
    console.log(arr);
    let max = Math.min(...arr);
    let min = Math.max(...arr);
  
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Number(arr[i]);
      if (a(arr[i]) == "x") {
        if (arr[i] <= min) min = arr[i];
      } else {
        if (arr[i] >= max) max = arr[i];
      }
    }
  
    function a(n) {
      let answer = [];
  
      for (let j = 2; j <= n / 2; j++) {
        if (n !== 2) {
          if (n % j == 0) {
            answer.push("x");
          } else {
            answer.push("y");
          }
        } else {
          answer.push("y");
        }
      }
      if (answer.includes("x")) {
        return "x";
      } else {
        return "y";
      }
    }

    return min + ',' + max;
  }
  
  let s = "2 3 4 5";
  
  console.log(solution(s));
  
  
  // 풀이 압축.. 가독성 신경 x
  
  function solution(s) {
    let arr = s.split(" ");
    let max = Math.min(...arr);
    let min = Math.max(...arr);
  
    for (let i = 0; i < arr.length; i++) {
      arr[i] = Number(arr[i]);
      primeCheck(arr[i]) ?
        (arr[i] >= max ? max = arr[i] : max = max) :
        (arr[i] <= min ? min = arr[i] : min = min);
    }
    return min + ',' + max;
  }
  
  function primeCheck(n) {
    let checkBox = [];
      for (let j = 2; j <= Math.sqrt(n); j++) {
        n % j ? checkBox.push("prime") : checkBox.push("nonPrime")
      }
    return checkBox.includes("nonPrime") ? false : true ;
  }
  
  console.log(solution(s));
  