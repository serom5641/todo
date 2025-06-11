// 페이지의 모든 DOM 요소가 로드되었을 때 실행
document.addEventListener('DOMContentLoaded', () => {
  // 모든 캘린더 날짜 요소를 가져옴 (각 li.calender-item)
  const calendarItems = document.querySelectorAll('.calender-item');

  // 투두 리스트 ul 요소를 가져옴
  const todoList = document.querySelector('.todo-list');

  // 각 날짜 항목에 클릭 이벤트를 등록
  calendarItems.forEach(item => {
    item.addEventListener('click', () => {
      // 현재 선택된(active 클래스가 붙은) 캘린더 항목에서 active 제거
      document.querySelector('.calender-item.active')?.classList.remove('active');

      // 클릭한 항목에 active 클래스 추가하여 UI상 선택 표시
      item.classList.add('active');

      // 클릭한 항목에서 날짜 숫자(p 태그 두 번째 요소)를 추출
      const selectedDate = item.querySelector('p:last-child').textContent;

      // 해당 날짜에 맞는 투두만 보여주는 필터 함수 호출
      filterTodosByDate(selectedDate);
    });
  });

  /**
   * 선택한 날짜에 맞는 투두 항목만 화면에 보여주는 함수
   * @param {string} date - 선택한 날짜 (예: '9', '10' 등)
   */
  function filterTodosByDate(date) {
    // 모든 투두 항목 요소(.todo-item)을 선택
    const allTodos = document.querySelectorAll('.todo-item');

    // 각 투두 항목을 순회하면서 필터링 적용
    allTodos.forEach(todo => {
      // 각 투두 항목에 저장된 날짜 값(data-date 속성)을 가져옴
      const todoDate = todo.getAttribute('data-date');

      // 투두의 날짜가 선택한 날짜와 같으면 보이게 하고, 다르면 숨김
      todo.style.display = (todoDate === date) ? 'block' : 'none';
    });
  }
});
