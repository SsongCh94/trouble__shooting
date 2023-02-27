const clickDoneButtonHandler = (id) => {
    const doneThing = todos.map((item) => {
      if (item.id === id) {        
        // item.done === false ? item.done = true : item.done = false;
        if (item.done === false) {
          item.done = true;
        } else item.done = false;
      }
      return item;
    } )
    setTodos([...doneThing]);
  }



  // 주석처리된 삼항연산자 부분과 if 문을 사용했을 때의 차이점을 보자.
  // 삼항연산자에선 return 으로 item.done = true, item.done = false 를 줬다.
  // 결국 리턴값으로 나오는건 item.done = false or true 이다.
  // 원했던 결과인 item 에서 done 값만 false or true 로 바뀐 값이 아니다.
  // 삼항연산자를 쓸 때엔 return 값을 잘 생각하자..... 한참헤맸다..