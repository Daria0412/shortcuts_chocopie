const nugu = require('./config.json')
const express = require('express')
const app = express()
app.use(express.json())

app.use('/shortcut/response',(req, res)=>{
    const os = req.body.action.parameters['os'].value
    const program = req.body.action.parameters['program'].value
    const action = req.body.action.parameters['action'].value
    let output = nugu.response.output
    console.log(os, program, action)
    var ment = os+"의 "+program+" "+action+"단축키는 "
    
    if(os == "맥"){
        switch (program){
            case "포토샵":
                    switch(action){
                        case "새 문서 만들기": output = {"prompt": ment +"커맨드 엔입니다"};break;
                        case "불러오기": output = {"prompt": ment +"커맨드 오입니다"};break;
                        case "저장": output = {"prompt": ment +"커맨드 에스입니다"};break;
                        case "다른 이름으로 저장": output = {"prompt": ment +"커맨드 쉬프트 에스입니다"};break;
                        case "포토샵 종료": output = {"prompt": ment +"커맨드 큐입니다"};break;
                        case "반전": output = {"prompt": ment +"커맨드 쉬프트 에스입니다"};break;
                        case "선택 영역 해제": output = {"prompt": ment +"커맨드 디입니다"};break;
                        case "전체 선택": output = {"prompt": ment +"커맨드 에이입니다"};break;
                        case "복사하기": output = {"prompt": ment +"커맨드 씨입니다"};break;
                        case "붙여넣기": output = {"prompt": ment +"커맨드 브이입니다"};break;
                        case "자르기": output = {"prompt": ment +"커맨드 엑스입니다"};break;
                        case "새 레이어 만들기": output = {"prompt": ment +"커맨드 쉬프트 엔입니다"};break;
                        case "이미지 자유 변형": output = {"prompt": ment +"커맨드 티입니다"};break;
                        case "그룹": output = {"prompt": ment +"커맨드 쥐입니다"};break;
                        case "그룹 해제": output = {"prompt": ment +"커맨드 쉬프트 쥐입니다"};break;
                        case "레이어 합치기": output = {"prompt": ment +"커맨드 이입니다"};break;
                        case "이미지 보색 반전": output = {"prompt": ment +"커맨드 아이입니다"};break;
                        case "창 닫기": output = {"prompt": ment +"커맨드 더블유입니다"};break;
                        case "웹용으로 저장": output = {"prompt": ment +"커맨드 알트 쉬프트 에스입니다"};break;
                        case "작업 취소": output = {"prompt": ment +"커맨드 제트입니다"};break;
                        case "한 단계씩 작업 취소": output = {"prompt": ment +"커맨드 알트 제트입니다"};break;
                        case "레이어 복제": output = {"prompt": ment +"커맨드 제이입니다"};break;
                        case "FEATHER효과": output = {"prompt": ment +"커맨드 function 6입니다"};break;
                        case "레벨": output = {"prompt": ment +"커맨드 아이입니다"};break;
                        case "커브": output = {"prompt": ment +"커맨드 엠입니다"};break;
                        case "손바닥 툴로 이동하기": output = {"prompt": ment +"스페이스 바입니다"};break;
                        case "눈금 표시": output = {"prompt": ment +"커맨드 r입니다"};break;
                        case "브러시 크기 작게 변환": output = {"prompt": ment +"여는 대괄호입니다"};break;
                        case "브러시 크기 크게 변환": output = {"prompt": ment +"닫는 대괄호입니다"};break;
                        case "처음으로 돌리기": output = {"prompt": ment +"function 12입니다"};break;



                    }
            case "일러스트레이터":
                    switch(action){
                        case "작업창 닫기": output = {"prompt": ment +"커맨드 더블유입니다"};break;
                        case "다른이름으로 저장": output = {"prompt": ment +"커맨드 쉬프트 에스입니다"};break;
                        case "복사해서 저장": output = {"prompt": ment +"커맨드 알트 에스입니다"};break;
                        case "마지막 저장한곳으로 돌아가기": output = {"prompt": ment +"function 12입니다"};break;
                        case "분판설정": output = {"prompt": ment +"커맨드 알트 피입니다"};break;
                        case "작업창 설정": output = {"prompt": ment +"커맨드 쉬프트 피입니다"};break;
                        case "프린트 설정": output = {"prompt": ment +"커맨드 피입니다"};break;
                        case "환경설정": output = {"prompt": ment +"커맨드 케이입니다"};break;
                        case "명령 취소": output = {"prompt": ment +"커맨드 제트입니다"};break;
                        case "명령 복귀": output = {"prompt": ment +"커맨드 쉬프트 제트입니다"};break;
                        case "앞에붙이기": output = {"prompt": ment +"커맨드 에프입니다"};break;
                        case "뒤에붙이기": output = {"prompt": ment +"커맨드 비입니다"};break;
                        case "재실행": output = {"prompt": ment +"커맨드 디입니다"};break;
                        case "앞으로 가져오기": output = {"prompt": ment +"커맨드 쉬프트 닫힌 대괄호입니다"};break;
                        case "한단계 앞으로 가져오기": output = {"prompt": ment +"커맨드 닫힌 대괄호입니다"};break;
                        case "한단계 뒤로 보내기": output = {"prompt": ment +"커맨드 열린 대괄호입니다"};break;
                        case "제일 뒤로 보내기": output = {"prompt": ment +"커맨드 쉬프트 열린 대괄호입니다"};break;
                        case "그룹만들기": output = {"prompt": ment +"커맨드 쥐입니다"};break;
                        case "그룹해제": output = {"prompt": ment +"커맨드 쉬프트 쥐입니다"};break;
                        case "패스결합": output = {"prompt": ment +"커맨드 제이입니다"};break;
                        case "평균점정렬": output = {"prompt": ment +"커맨드 알트 제이입니다"};break;
                        case "평균점결합": output = {"prompt": ment +"커맨드 알트 쉬프트 제이입니다"};break;
                        case "패스파인더열기": output = {"prompt": ment +"커맨드 쉬프트 function 9입니다"};break;
                        case "패스파인더반복": output = {"prompt": ment +"커맨드 4입니다"};break;
                        case "클리핑마스크": output = {"prompt": ment +"커맨드 7입니다"};break;
                        case "마스크해제": output = {"prompt": ment +"커맨드 알트 7입니다"};break;
                        case "폰트선택": output = {"prompt": ment +"커맨드 알트 쉬프트 엠입니다"};break;
                        case "문자팔래트 보이기": output = {"prompt": ment +"커맨드 티입니다"};break;
                        case "외곽선생성": output = {"prompt": ment +"커맨드 쉬프트 오입니다"};break;
                        case "확대": output = {"prompt": ment +"커맨드 플러스 플러스입니다"};break;
                        case "축소": output = {"prompt": ment +"커맨드 마이너스 마이너스입니다"};break;
                        case "윈도우크기에맞게": output = {"prompt": ment +"커맨드 0입니다"};break;
                        case "실제크기": output = {"prompt": ment +"커맨드 1입니다"};break;
                        case "선택시테두리감추기": output = {"prompt": ment +"커맨드 에이치입니다"};break;
                        case "눈금자보이기": output = {"prompt": ment +"커맨드 r입니다"};break;
                        case "안내선보이기": output = {"prompt": ment +"커맨드 세미콜론입니다"};break;
                        case "안내선잠그기": output = {"prompt": ment +"커맨드 알트 세미콜론입니다"};break;
                        case "안내선만들기": output = {"prompt": ment +"커맨드 5입니다"};break;
                        case "안내선해제": output = {"prompt": ment +"커맨드 알트 5입니다"};break;
                        case "격자보이기": output = {"prompt": ment +"커맨드 작은 따옴표입니다"};break;
                        case "격자 선에 정확하게 맞추기": output = {"prompt": ment +"커맨드 쉬프트 작은 따옴표입니다"};break;


                    }
            case "엑셀":  
                switch(action){
                    case "리본 메뉴 확장 축소": output = {"prompt": ment +"커맨드 에프원 입니다"};break;
                    case "리본 메뉴 선택키 활성화": output = {'prompt':ment + "알트 입니다"};break;
                    case "알림 상자": output = {"prompt":ment+"알트 큐입니다"};break;
                    case "파일 페이지 열기":output = {"prompt":ment+"알트 에프 입니다."};break;
                    case "홈 탭 열기":output = {"prompt":ment+"알트 에이치입니다."};break;
                    case "삽입 탭 열기":output = {"prompt":ment+"알트 엔입니다."};break;
                    case "페이지 레이아웃 탭 열기":output = {"prompt":ment+"알트 피입니다."};break;
                    case "수식 탭 열기":output = {"prompt":ment+"알트 엠입니다."};break;
                    case "데이터 탭 열기":output = {"prompt":ment+"알트 에이입니다."};break;
                    case "검토 탭 열기":output = {"prompt":ment+"알트 r입니다."};break;
                    case "보기 탭으로 이동":output = {"prompt":ment+"알트 더블유입니다"};break;
                    case "선택 단추 메뉴 열기":output = {"prompt":ment+"알트 아래 화살표입니다"};break;
                    case "새로만들기":output = {"prompt":ment+"커맨드 엔입니다."};break;
                    case "파일 열기":output = {"prompt":ment+"커맨드 오입니다."};break;
                    case "파일 저장":output = {"prompt":ment+"커맨드 에스입니다."};break;
                    case "파일 닫기":output = {"prompt":ment+"커맨드 더블유입니다."};break;
                    case "인쇄, 미리보기":output = {"prompt":ment+"커맨드 피입니다."};break;
                    case "다른 이름으로 저장":output = {"prompt":ment+"function 12입니다."};break;
                    case "다시 실행":output = {"prompt":ment+"커맨드 와이입니다."};break;
                    case "실행 취소":output = {"prompt":ment+"커맨드 제트입니다."};break;
                    case "잘라내기":output = {"prompt":ment+"커맨드 엑스입니다."};break;
                    case "복사":output = {"prompt":ment+"커맨드 씨입니다."};break;
                    case "붙여넣기":output = {"prompt":ment+"커맨드 브이입니다."};break;
                    case "위쪽 셀 복사":output = {"prompt":ment+"커맨드 디입니다."};break;
                    case "왼쪽 셀 복사":output = {"prompt":ment+"커맨드 r입니다."};break;
                    case "선택 행 숨기기":output = {"prompt":ment+"커맨드 9입니다."};break;
                    case "선택 열 숨기기":output = {"prompt":ment+"커맨드 0입니다."};break;
                    case "셀 삽입":output = {"prompt":ment+"커맨드 쉬프트 더하기입니다."};break;
                    case "셀 삭제":output = {"prompt":ment+"커맨드 빼기입니다."};break;
                    case "찾기":output = {"prompt":ment+"커맨드 에프입니다."};break;
                    case "바꾸기":output = {"prompt":ment+"커맨드 에이치입니다."};break;
                    case "이동":output = {"prompt":ment+"커맨드 쥐입니다."};break;
                    case "표 만들기":output = {"prompt":ment+"커맨드 엘 또는 커맨드 티입니다."};break;
                    case "셀 서식(글꼴)":output = {"prompt":ment+"커맨드 큐입니다."};break;
                    case "셀 서식":output = {"prompt":ment+"커맨드 1입니다."};break;
                    case "텍스트 굵게":output = {"prompt":ment+"커맨드 b 또는 커맨드 2입니다."};break;
                    case "텍스트 기울임꼴":output = {"prompt":ment+"커맨드 아이 또는 커맨드 3입니다."};break;
                    case "텍스트 밑줄":output = {"prompt":ment+"커맨드 유 또는 커맨드 4입니다."};break;
                    case "취소선":output = {"prompt":ment+"커맨드 5입니다."};break;
                    case "개체 숨기기, 표시":output = {"prompt":ment+"커맨드 6입니다."};break;
                    case "윤곽 기호":output = {"prompt":ment+"커맨드 8입니다."};break;
                    case "선택하여 붙여넣기":output = {"prompt":ment+"커맨드 알트 브이입니다."};break;
                    case "일반 숫자":output = {"prompt":ment+"커맨드 쉬프트 물결기호입니다."};break;
                    case "통화":output = {"prompt":ment+"커맨드 쉬프트 느낌표 기호입니다."};break;
                    case "시간":output = {"prompt":ment+"커맨드 쉬프트 골뱅이 기호입니다."};break;
                    case "년, 월, 일 날짜":output = {"prompt":ment+"커맨드 쉬프트 오물정자 기호입니다."};break;
                    case "통화(기호)":output = {"prompt":ment+"커맨드 쉬프트 달러 기호입니다."};break;
                    case "백분율":output = {"prompt":ment+"커맨드 쉬프트 퍼센트 기호입니다."};break;
                    case "소수 두 자리 지수":output = {"prompt":ment+"커맨드 쉬프르 캐럿 기호입니다."};break;
                    case "윤곽선 테두리 적용":output = {"prompt":ment+"커맨드 쉬프트 앰퍼샌드 기호입니다."};break;
                    case "윤곽선 테두리 제거":output = {"prompt":ment+"커맨드 쉬프트 언더바 기호입니다."};break;
                    case "셀 메모 추가, 편집":output = {"prompt":ment+"쉬프트 function2입니다."};break;
                    case "하이퍼링크":output = {"prompt":ment+"커맨드 케이입니다."};break;
                    case "이름 관리자":output = {"prompt":ment+"커맨드 function3입니다."};break;
                    case "현재 열 채우기":output = {"prompt":ment+"커맨드 e입니다."};break;
                    case "현재 날짜 입력":output = {"prompt":ment+"커맨드 세미콜론입니다."};break;
                    case "현재 시간 입력":output = {"prompt":ment+"커맨드 쉬프트 콜론입니다."};break;
                    case "함수 입력":output = {"prompt":ment+"쉬프트 function3입니다."};break;
                    case "한 셀 오른쪽으로 이동":output = {"prompt":ment+"탭입니다."};break;
                    case "한 셀 왼쪽으로 이동":output = {"prompt":ment+"쉬프트 탭입니다."};break;
                    case "데이터 영역 가장자리로 이동":output = {"prompt":ment+"커맨드 화살표입니다."};break;
                    case "시작 부분으로 이동":output = {"prompt":ment+"커맨드 홈입니다."};break;
                    case "테이블 끝 부분으로 이동":output = {"prompt":ment+"커맨드 엔드입니다."};break;
                    case "한 화면 위로 이동":output = {"prompt":ment+"page up입니다."};break;
                    case "한 화면 아래로 이동":output = {"prompt":ment+"page down입니다."};break;
                    case "한 화면 왼쪽으로 이동":output = {"prompt":ment+"알트 page up입니다."};break;
                    case "한 화면 오른쪽으로 이동":output = {"prompt":ment+"알트 page down입니다."};break;
                    case "전체 셀 선택":output = {"prompt":ment+"커맨드 에이입니다."};break;
                    case "위쪽 셀을 선택":output = {"prompt":ment+"쉬프트 엔터입니다."};break;
                    case "전체 열을 선택":output = {"prompt":ment+"커맨드 스페이스바입니다."};break;
                    case "전체 행을 선택":output = {"prompt":ment+"쉬프트 스페이스바입니다."};break;
                    case "같은 셀에서 줄바꾸기":output = {"prompt":ment+"알트 엔터입니다."};break;
                    case "선택 영역 한 셀씩 확장":output = {"prompt":ment+"쉬프트 화살표입니다."};break;
                    case "테이블 선택":output = {"prompt":ment+"커맨드 쉬프트 별표입니다."};break;
                    case "데이터가 있는 마지막 셀까지 확장":output = {"prompt":ment+"커맨드 쉬프트 화살표입니다."};break;
                    case "셀 선택 영역 마지막 셀까지 확장":output = {"prompt":ment+"커맨드 쉬프트 엔드입니다."};break;
                    case "셀 선택 영역 시작 셀까지 확장":output = {"prompt":ment+"커맨드 쉬프트 홈입니다."};break;
                    case "다음 시트로 이동":output = {"prompt":ment+"커맨드 page down입니다."};break;
                    case "이전 시트로 이동":output = {"prompt":ment+"커맨드 page up입니다."};break;
                    case "현재 시트와 다음 시트를 선택":output = {"prompt":ment+"커맨드 쉬프트 page down입니다."};break;
                    case "현재 시트와 이전 시트를 선택":output = {"prompt":ment+"커맨드 쉬프트 page up입니다."};break;
                    case "새 워크시트 삽입":output = {"prompt":ment+"쉬프트 function 11입니다."};break;
                    case "도움말":output = {"prompt":ment+"function1입니다."};break;
                    case "글쓰기":output = {"prompt":ment+"function2입니다."};break;
                    case "맞춤법 검사":output = {"prompt":ment+"function 7입니다."};break;
                    case "창 축소":output = {"prompt":ment+"커맨드 function5입니다."};break;
                    case "창 내리기":output = {"prompt":ment+"커맨드 function9입니다."};break;
                    case "창 확대":output = {"prompt":ment+"커맨드 function10입니다."};break;
                    case "수식 입력줄 확장":output = {"prompt":ment+"커맨드 쉬프트 u입니다."};break;
                    case "수식보기":output = {"prompt":ment+"커맨드 작은 따옴표입니다."};break;
                    case "엑셀 옵션":output = {"prompt":ment+"알트 에프, 그다음 티입니다."};break;
                    case "매크로 보기":output = {"prompt":ment+"알트 function8입니다."};break;
                    case "VBA 편집기 열기":output = {"prompt":ment+"알트 function11입니다."};break;
                } 
         
        }
    }
    
    if(os == "윈도우"){
        switch (program){
            case "포토샵":
                    switch(action){
                        case "새 문서 만들기": output = {"prompt": ment +"컨트롤 엔입니다"};break;
                        case "불러오기": output = {"prompt": ment +"컨트롤 오입니다"};break;
                        case "저장": output = {"prompt": ment +"컨트롤 에스입니다"};break;
                        case "다른 이름으로 저장": output = {"prompt": ment +"컨트롤 쉬프트 에스입니다"};break;
                        case "포토샵 종료": output = {"prompt": ment +"컨트롤 큐입니다"};break;
                        case "반전": output = {"prompt": ment +"컨트롤 쉬프트 에스입니다"};break;
                        case "선택 영역 해제": output = {"prompt": ment +"컨트롤 디입니다"};break;
                        case "전체 선택": output = {"prompt": ment +"컨트롤 에이입니다"};break;
                        case "복사하기": output = {"prompt": ment +"컨트롤 씨입니다"};break;
                        case "붙여넣기": output = {"prompt": ment +"컨트롤 브이입니다"};break;
                        case "자르기": output = {"prompt": ment +"컨트롤 엑스입니다"};break;
                        case "새 레이어 만들기": output = {"prompt": ment +"컨트롤 쉬프트 엔입니다"};break;
                        case "이미지 자유 변형": output = {"prompt": ment +"컨트롤 티입니다"};break;
                        case "그룹": output = {"prompt": ment +"컨트롤 쥐입니다"};break;
                        case "그룹 해제": output = {"prompt": ment +"컨트롤 쉬프트 쥐입니다"};break;
                        case "레이어 합치기": output = {"prompt": ment +"컨트롤 이입니다"};break;
                        case "이미지 보색 반전": output = {"prompt": ment +"컨트롤 아이입니다"};break;
                        case "창 닫기": output = {"prompt": ment +"컨트롤 더블유입니다"};break;
                        case "웹용으로 저장": output = {"prompt": ment +"컨트롤 알트 쉬프트 에스입니다"};break;
                        case "작업 취소": output = {"prompt": ment +"컨트롤 제트입니다"};break;
                        case "한 단계씩 작업 취소": output = {"prompt": ment +"컨트롤 알트 제트입니다"};break;
                        case "레이어 복제": output = {"prompt": ment +"컨트롤 제이입니다"};break;
                        case "FEATHER효과": output = {"prompt": ment +"컨트롤 function 6입니다"};break;
                        case "레벨": output = {"prompt": ment +"컨트롤 아이입니다"};break;
                        case "커브": output = {"prompt": ment +"컨트롤 엠입니다"};break;
                        case "손바닥 툴로 이동하기": output = {"prompt": ment +"스페이스 바입니다"};break;
                        case "눈금 표시": output = {"prompt": ment +"컨트롤 r입니다"};break;
                        case "브러시 크기 작게 변환": output = {"prompt": ment +"여는 대괄호입니다"};break;
                        case "브러시 크기 크게 변환": output = {"prompt": ment +"닫는 대괄호입니다"};break;
                        case "처음으로 돌리기": output = {"prompt": ment +"function 12입니다"};break;



                    }
            case "일러스트레이터":
                    switch(action){
                        case "작업창 닫기": output = {"prompt": ment +"컨트롤 더블유입니다"};break;
                        case "다른이름으로 저장": output = {"prompt": ment +"컨트롤 쉬프트 에스입니다"};break;
                        case "복사해서 저장": output = {"prompt": ment +"컨트롤 알트 에스입니다"};break;
                        case "마지막 저장한곳으로 돌아가기": output = {"prompt": ment +"function 12입니다"};break;
                        case "분판설정": output = {"prompt": ment +"컨트롤 알트 피입니다"};break;
                        case "작업창 설정": output = {"prompt": ment +"컨트롤 쉬프트 피입니다"};break;
                        case "프린트 설정": output = {"prompt": ment +"컨트롤 피입니다"};break;
                        case "환경설정": output = {"prompt": ment +"컨트롤 케이입니다"};break;
                        case "명령 취소": output = {"prompt": ment +"컨트롤 제트입니다"};break;
                        case "명령 복귀": output = {"prompt": ment +"컨트롤 쉬프트 제트입니다"};break;
                        case "앞에붙이기": output = {"prompt": ment +"컨트롤 에프입니다"};break;
                        case "뒤에붙이기": output = {"prompt": ment +"컨트롤 비입니다"};break;
                        case "재실행": output = {"prompt": ment +"컨트롤 디입니다"};break;
                        case "앞으로 가져오기": output = {"prompt": ment +"컨트롤 쉬프트 닫힌 대괄호입니다"};break;
                        case "한단계 앞으로 가져오기": output = {"prompt": ment +"컨트롤 닫힌 대괄호입니다"};break;
                        case "한단계 뒤로 보내기": output = {"prompt": ment +"컨트롤 열린 대괄호입니다"};break;
                        case "제일 뒤로 보내기": output = {"prompt": ment +"컨트롤 쉬프트 열린 대괄호입니다"};break;
                        case "그룹만들기": output = {"prompt": ment +"컨트롤 쥐입니다"};break;
                        case "그룹해제": output = {"prompt": ment +"컨트롤 쉬프트 쥐입니다"};break;
                        case "패스결합": output = {"prompt": ment +"컨트롤 제이입니다"};break;
                        case "평균점정렬": output = {"prompt": ment +"컨트롤 알트 제이입니다"};break;
                        case "평균점결합": output = {"prompt": ment +"컨트롤 알트 쉬프트 제이입니다"};break;
                        case "패스파인더열기": output = {"prompt": ment +"컨트롤 쉬프트 function 9입니다"};break;
                        case "패스파인더반복": output = {"prompt": ment +"컨트롤 4입니다"};break;
                        case "클리핑마스크": output = {"prompt": ment +"컨트롤 7입니다"};break;
                        case "마스크해제": output = {"prompt": ment +"컨트롤 알트 7입니다"};break;
                        case "폰트선택": output = {"prompt": ment +"컨트롤 알트 쉬프트 엠입니다"};break;
                        case "문자팔래트 보이기": output = {"prompt": ment +"컨트롤 티입니다"};break;
                        case "외곽선생성": output = {"prompt": ment +"컨트롤 쉬프트 오입니다"};break;
                        case "확대": output = {"prompt": ment +"컨트롤 플러스 플러스입니다"};break;
                        case "축소": output = {"prompt": ment +"컨트롤 마이너스 마이너스입니다"};break;
                        case "윈도우크기에맞게": output = {"prompt": ment +"컨트롤 0입니다"};break;
                        case "실제크기": output = {"prompt": ment +"컨트롤 1입니다"};break;
                        case "선택시테두리감추기": output = {"prompt": ment +"컨트롤 에이치입니다"};break;
                        case "눈금자보이기": output = {"prompt": ment +"컨트롤 r입니다"};break;
                        case "안내선보이기": output = {"prompt": ment +"컨트롤 세미콜론입니다"};break;
                        case "안내선잠그기": output = {"prompt": ment +"컨트롤 알트 세미콜론입니다"};break;
                        case "안내선만들기": output = {"prompt": ment +"컨트롤 5입니다"};break;
                        case "안내선해제": output = {"prompt": ment +"컨트롤 알트 5입니다"};break;
                        case "격자보이기": output = {"prompt": ment +"컨트롤 작은 따옴표입니다"};break;
                        case "격자 선에 정확하게 맞추기": output = {"prompt": ment +"컨트롤 쉬프트 작은 따옴표입니다"};break;


                    }
            case "엑셀":  
                switch(action){
                    case "리본 메뉴 확장 축소": output = {"prompt": ment +"컨트롤 에프원 입니다"};break;
                    case "리본 메뉴 선택키 활성화": output = {'prompt':ment + "알트 입니다"};break;
                    case "알림 상자": output = {"prompt":ment+"알트 큐입니다"};break;
                    case "파일 페이지 열기":output = {"prompt":ment+"알트 에프 입니다."};break;
                    case "홈 탭 열기":output = {"prompt":ment+"알트 에이치입니다."};break;
                    case "삽입 탭 열기":output = {"prompt":ment+"알트 엔입니다."};break;
                    case "페이지 레이아웃 탭 열기":output = {"prompt":ment+"알트 피입니다."};break;
                    case "수식 탭 열기":output = {"prompt":ment+"알트 엠입니다."};break;
                    case "데이터 탭 열기":output = {"prompt":ment+"알트 에이입니다."};break;
                    case "검토 탭 열기":output = {"prompt":ment+"알트 r입니다."};break;
                    case "보기 탭으로 이동":output = {"prompt":ment+"알트 더블유입니다"};break;
                    case "선택 단추 메뉴 열기":output = {"prompt":ment+"알트 아래 화살표입니다"};break;
                    case "새로만들기":output = {"prompt":ment+"컨트롤 엔입니다."};break;
                    case "파일 열기":output = {"prompt":ment+"컨트롤 오입니다."};break;
                    case "파일 저장":output = {"prompt":ment+"컨트롤 에스입니다."};break;
                    case "파일 닫기":output = {"prompt":ment+"컨트롤 더블유입니다."};break;
                    case "인쇄, 미리보기":output = {"prompt":ment+"컨트롤 피입니다."};break;
                    case "다른 이름으로 저장":output = {"prompt":ment+"function 12입니다."};break;
                    case "다시 실행":output = {"prompt":ment+"컨트롤 와이입니다."};break;
                    case "실행 취소":output = {"prompt":ment+"컨트롤 제트입니다."};break;
                    case "잘라내기":output = {"prompt":ment+"컨트롤 엑스입니다."};break;
                    case "복사":output = {"prompt":ment+"컨트롤 씨입니다."};break;
                    case "붙여넣기":output = {"prompt":ment+"컨트롤 브이입니다."};break;
                    case "위쪽 셀 복사":output = {"prompt":ment+"컨트롤 디입니다."};break;
                    case "왼쪽 셀 복사":output = {"prompt":ment+"컨트롤 r입니다."};break;
                    case "선택 행 숨기기":output = {"prompt":ment+"컨트롤 9입니다."};break;
                    case "선택 열 숨기기":output = {"prompt":ment+"컨트롤 0입니다."};break;
                    case "셀 삽입":output = {"prompt":ment+"컨트롤 쉬프트 더하기입니다."};break;
                    case "셀 삭제":output = {"prompt":ment+"컨트롤 빼기입니다."};break;
                    case "찾기":output = {"prompt":ment+"컨트롤 에프입니다."};break;
                    case "바꾸기":output = {"prompt":ment+"컨트롤 에이치입니다."};break;
                    case "이동":output = {"prompt":ment+"컨트롤 쥐입니다."};break;
                    case "표 만들기":output = {"prompt":ment+"컨트롤 엘 또는 컨트롤 티입니다."};break;
                    case "셀 서식(글꼴)":output = {"prompt":ment+"컨트롤 큐입니다."};break;
                    case "셀 서식":output = {"prompt":ment+"컨트롤 1입니다."};break;
                    case "텍스트 굵게":output = {"prompt":ment+"컨트롤 b 또는 컨트롤 2입니다."};break;
                    case "텍스트 기울임꼴":output = {"prompt":ment+"컨트롤 아이 또는 컨트롤 3입니다."};break;
                    case "텍스트 밑줄":output = {"prompt":ment+"컨트롤 유 또는 컨트롤 4입니다."};break;
                    case "취소선":output = {"prompt":ment+"컨트롤 5입니다."};break;
                    case "개체 숨기기, 표시":output = {"prompt":ment+"컨트롤 6입니다."};break;
                    case "윤곽 기호":output = {"prompt":ment+"컨트롤 8입니다."};break;
                    case "선택하여 붙여넣기":output = {"prompt":ment+"컨트롤 알트 브이입니다."};break;
                    case "일반 숫자":output = {"prompt":ment+"컨트롤 쉬프트 물결기호입니다."};break;
                    case "통화":output = {"prompt":ment+"컨트롤 쉬프트 느낌표 기호입니다."};break;
                    case "시간":output = {"prompt":ment+"컨트롤 쉬프트 골뱅이 기호입니다."};break;
                    case "년, 월, 일 날짜":output = {"prompt":ment+"컨트롤 쉬프트 오물정자 기호입니다."};break;
                    case "통화(기호)":output = {"prompt":ment+"컨트롤 쉬프트 달러 기호입니다."};break;
                    case "백분율":output = {"prompt":ment+"컨트롤 쉬프트 퍼센트 기호입니다."};break;
                    case "소수 두 자리 지수":output = {"prompt":ment+"컨트롤 쉬프르 캐럿 기호입니다."};break;
                    case "윤곽선 테두리 적용":output = {"prompt":ment+"컨트롤 쉬프트 앰퍼샌드 기호입니다."};break;
                    case "윤곽선 테두리 제거":output = {"prompt":ment+"컨트롤 쉬프트 언더바 기호입니다."};break;
                    case "셀 메모 추가, 편집":output = {"prompt":ment+"쉬프트 function2입니다."};break;
                    case "하이퍼링크":output = {"prompt":ment+"컨트롤 케이입니다."};break;
                    case "이름 관리자":output = {"prompt":ment+"컨트롤 function3입니다."};break;
                    case "현재 열 채우기":output = {"prompt":ment+"컨트롤 e입니다."};break;
                    case "현재 날짜 입력":output = {"prompt":ment+"컨트롤 세미콜론입니다."};break;
                    case "현재 시간 입력":output = {"prompt":ment+"컨트롤 쉬프트 콜론입니다."};break;
                    case "함수 입력":output = {"prompt":ment+"쉬프트 function3입니다."};break;
                    case "한 셀 오른쪽으로 이동":output = {"prompt":ment+"탭입니다."};break;
                    case "한 셀 왼쪽으로 이동":output = {"prompt":ment+"쉬프트 탭입니다."};break;
                    case "데이터 영역 가장자리로 이동":output = {"prompt":ment+"컨트롤 화살표입니다."};break;
                    case "시작 부분으로 이동":output = {"prompt":ment+"컨트롤 홈입니다."};break;
                    case "테이블 끝 부분으로 이동":output = {"prompt":ment+"컨트롤 엔드입니다."};break;
                    case "한 화면 위로 이동":output = {"prompt":ment+"page up입니다."};break;
                    case "한 화면 아래로 이동":output = {"prompt":ment+"page down입니다."};break;
                    case "한 화면 왼쪽으로 이동":output = {"prompt":ment+"알트 page up입니다."};break;
                    case "한 화면 오른쪽으로 이동":output = {"prompt":ment+"알트 page down입니다."};break;
                    case "전체 셀 선택":output = {"prompt":ment+"컨트롤 에이입니다."};break;
                    case "위쪽 셀을 선택":output = {"prompt":ment+"쉬프트 엔터입니다."};break;
                    case "전체 열을 선택":output = {"prompt":ment+"컨트롤 스페이스바입니다."};break;
                    case "전체 행을 선택":output = {"prompt":ment+"쉬프트 스페이스바입니다."};break;
                    case "같은 셀에서 줄바꾸기":output = {"prompt":ment+"알트 엔터입니다."};break;
                    case "선택 영역 한 셀씩 확장":output = {"prompt":ment+"쉬프트 화살표입니다."};break;
                    case "테이블 선택":output = {"prompt":ment+"컨트롤 쉬프트 별표입니다."};break;
                    case "데이터가 있는 마지막 셀까지 확장":output = {"prompt":ment+"컨트롤 쉬프트 화살표입니다."};break;
                    case "셀 선택 영역 마지막 셀까지 확장":output = {"prompt":ment+"컨트롤 쉬프트 엔드입니다."};break;
                    case "셀 선택 영역 시작 셀까지 확장":output = {"prompt":ment+"컨트롤 쉬프트 홈입니다."};break;
                    case "다음 시트로 이동":output = {"prompt":ment+"컨트롤 page down입니다."};break;
                    case "이전 시트로 이동":output = {"prompt":ment+"컨트롤 page up입니다."};break;
                    case "현재 시트와 다음 시트를 선택":output = {"prompt":ment+"컨트롤 쉬프트 page down입니다."};break;
                    case "현재 시트와 이전 시트를 선택":output = {"prompt":ment+"컨트롤 쉬프트 page up입니다."};break;
                    case "새 워크시트 삽입":output = {"prompt":ment+"쉬프트 function 11입니다."};break;
                    case "도움말":output = {"prompt":ment+"function1입니다."};break;
                    case "글쓰기":output = {"prompt":ment+"function2입니다."};break;
                    case "맞춤법 검사":output = {"prompt":ment+"function 7입니다."};break;
                    case "창 축소":output = {"prompt":ment+"컨트롤 function5입니다."};break;
                    case "창 내리기":output = {"prompt":ment+"컨트롤 function9입니다."};break;
                    case "창 확대":output = {"prompt":ment+"컨트롤 function10입니다."};break;
                    case "수식 입력줄 확장":output = {"prompt":ment+"컨트롤 쉬프트 u입니다."};break;
                    case "수식보기":output = {"prompt":ment+"컨트롤 작은 따옴표입니다."};break;
                    case "엑셀 옵션":output = {"prompt":ment+"알트 에프, 그다음 티입니다."};break;
                    case "매크로 보기":output = {"prompt":ment+"알트 function8입니다."};break;
                    case "VBA 편집기 열기":output = {"prompt":ment+"알트 function11입니다."};break;
                } 
         
        }
    }
        
    console.log(nugu)
    nugu.response.output = output
    return res.json(nugu.response)
})


app.listen(2025, (err, result)=>{
    console.log("숏컷 서버 시작 : ", 2025)
})


