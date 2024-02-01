const formal = [1, 2, 3, 4, 5, 6, 7];
const user = ['수', '목', '금', '토', '일', '월', '화'];

// 사용자의 입력 요일에 대한 인덱스를 가져오는 함수
const getIndex = (day) => user.indexOf(day);

// 사용자가 입력한 요일에 따라 formal 데이터의 인덱스를 재배열
const rearrangedFormal = user.map(getIndex).map(index => formal[index]);

console.log(rearrangedFormal);
// [3, 4, 5, 6, 7, 1, 2]