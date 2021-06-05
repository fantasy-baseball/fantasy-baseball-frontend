# FANTASY BASEBALL

![FantasyBaseballLogo](./readme-assets/fantasy-baseball-logo.png)

(메인이미지)

# 목차

- 개요
- 프로젝트 멤버

## 개요
- 판타지 스포츠와 베팅 시스템을 결합한 웹 애플리케이션입니다.
- 유저가 원하는 10인의 로스터로 베팅을 하여 당일 선수들의 경기 성적에 따라 배당금을 획득할 수 있는 시스템입니다.
- 개발 기간 : 2021년 4월 12일 (월) ~ 2021년 4월 30일 (금) 약 3주

## 개발 동기

- 야구를 좋아할 사람, 야구를 좋아하는 사람, 야구를 좋아한 사람, 셋이 모였습니다. **통계의 스포츠**로 불리는 야구를 통해, 다양한 DB 작업 경험을 기대하며, 야구를 소재로 웹 애플리케이션을 개발해보기로 했습니다.
- 판타지 스포츠는, 자신만의 팀을 꾸리고, 각 선수의 실제 경기 결과를 반영하여 경쟁하는 일종의 시뮬레이션 게임입니다. 본 앱은 야구 판타지 스포츠 플레이 환경을 제공하여 야구 경기 관람 흥미를 돋우고 야구에 대한 관심을 높이는 것을 목적으로 기획되었습니다.

## 프로젝트 멤버
- [박정빈](https://github.com/pjb6510): 베팅 이력, 로딩 스켈레톤, 크롤링, 스케쥴링, 베팅액 분배 방식 기획, 백엔드 로깅, 백엔드 로직 통합
- [윤한솔](https://github.com/yoohaso): 로그인, 메일링, 로스터 UI, 모달, 경기 결과 스코어 계산
- [전유림](https://github.com/eluka22): 메인, 베팅 등록, 베팅 결과, 선수별 통계, 공통 컴포넌트 및 스타일 관리, 유저별 배당금 계산

## 기술 스택
### Frontend
- ES2015+
- React
- React-router-dom
- Redux
- Redux-Thunk
- redux-logger
- immer
- styled-component
- date-fns
- react-google-login
- react-loading-skeleton
- react-table
- cross-env


### Backend
- NodeJS
- Express
- MongoDB Atlas
- Puppeteer
- Node-Schedule
- nodemailer
- dotenv
- cross-env

## 시작하기
- ReadMe에 작성해야 하는지 확인 필요

### env 설정

1. Frontend

```shell
REACT_APP_API_ADDRESS=API_ADDRESS
REACT_APP_GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
```

2. Backend

- `MANAGER_EMAIL`: 유저들에게 자동으로 발송되는 메일링을 위한 이메일 주소입니다.

```shell
MONGO_DB=YOUR_MONGODB_URL
CLIENT_URL=CLIENT_URL
PORT=5000
GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
REDIRECT_URL=https://developers.google.com/oauthplayground
REFRESH_TOKEN=
MANAGER_EMAIL=YOUR_MANAGER_EMAIL
```

## 사용 방법

### 로그인

- 우측의 `PLAY BALL` 버튼을 클릭하여 FANTASY BASEBALL에 로그인할 수 있습니다.
- 로그인 방식은 구글 소셜 로그인입니다.

### 메인

- 로그인 후 메인 페이지에 접근하며, 당일 경기 스케쥴 및 랭킹 정보를 확인할 수 있습니다.
- 상단에는 당일 진행되는 경기 스케쥴이 있습니다.
- 좌측 하단에는 유저 / 투수 / 타자별로 랭킹을 확인할 수 있으며, 랭킹은 어제자 기준입니다.
- 게임이 시작되는 COUNTDOWN TIMER를 통해 게임 시작 및 베팅 시작 시간을 알 수 있습니다.
- 베팅이 시작되기 전에는 `BETTING RESULT` 버튼이 노출되며 어제자 베팅 기록 결과 페이지로 이동합니다.
- 게임 및 베팅이 시작되면 COUNTDOWN TIMER가 0이 되면서 `BETTING START` 버튼으로 변경됩니다.
- 베팅은 한 시간 동안 진행되며, 이후 베팅 가능 시간이 종료되면 `BETTING CLOSED`라는 글자로 변경됩니다.
- 경기가 종료된 이후 밤 12시 30분 ~ 새벽 4시 사이에 경기 결과를 바탕으로 베팅 금액이 정산되며, 이때 `SCORE CALCULATING`이라는 글자가 나타납니다.

### 베팅 등록

- 베팅 등록 페이지에서는 유저가 원하는 로스터로 베팅을 등록할 수 있습니다.
- 경기가 시작되기 전 올라오는 선발 라인업을 기준으로 1군 엔트리 리스트를 보여줍니다.
- 1군 엔트리 리스트에서 `INFO` 링크를 클릭하면 KBO 사이트의 해당 선수 상세 정보 페이지로 연결됩니다.
- `ADD` 아이콘을 클릭하면 해당 선수가 로스터에 등록되며, 우측 로스터 영역에서 확인할 수 있습니다.
- 엔트리 하단의 `RANDOM ROASTER`를 클릭하면 랜덤으로 로스터에 선수들이 등록됩니다.
- `CHECK LATEST STATISTICS`를 클릭하면 가장 최근의 선수들의 스코어 순위 페이지로 이동합니다.
- 10명의 선수들을 로스터에 등록하고 원하는 액수 만큼 베팅 금액을 입력한 후 `BETTING`을 클릭하면 성공적으로 베팅이 등록됩니다.
- 경기가 있는 날 베팅은 단 한 번 가능하며, 베팅을 다시 등록하게 되면 이미 등록된 베팅이라는 안내 문구가 출력됩니다.

### 베팅 결과

- 베팅에 참여한 결과를 볼 수 있는 페이지입니다.
- 베팅의 상위 유저 랭킹 3명과 자신의 순위, 획득 금액 및 등록했던 로스터를 확인할 수 있습니다.
- `CHECK PLAYERS STATISTIC` 버튼을 통해 해당 날짜의 선수별 통계를 볼 수 있습니다.

### 베팅 이력

- 날짜 별 베팅 이력을 확인할 수 있는 페이지입니다.
- 각 베팅 별 베팅액, 반환액, 순수 수익을 확인할 수 있습니다.
- 각 베팅 별 결과 링크를 클릭하면 베팅 결과 페이지로 이동하여 해당 베팅의 로스터와 유저 랭킹을 확인할 수 있습니다.

### 선수별 통계

- 포지션 별 선수들의 스코어 통계를 확인할 수 있습니다.
- 스코어 순으로 정렬된 그래프를 볼 수 있으며, 각 선수들에게 베팅한 유저수도 나타납니다.

## 베팅 알고리즘

### 선수 스코어 계산 방법
 - 선발 선수들의 게임 성적으로 스코어를 계산합니다.
 - 배점 항목과 점수는 [컴투스 프로야구 포인트](http://cpbpoint.mbcplus.com/about/cpbpoint/)를 참고하였습니다.
 - 선수들의 성적은 경기 종료 후 KBO에 공개되는 데이터를 이용하였습니다.
 - 본 프로젝트의 배점 항목은 KBO에서 제공하는 데이터에 맞게 재구성하였습니다.
 - 선수들의 포지션은 크게 타자와 투수로 나뉘며, 배점 항목에 차이가 있습니다.
 - 타자는 타석, 1루타, 2루타, 삼진 등의 항목이 있습니다.
 - 투수는 이닝, 승, 패, 탈삼진 등의 항목이 있습니다.

#### 타자
| 항목 | 코드 | 포인트 |
|---|:---:|---:|
| `타석` | PA | 1 |
| `타점` | RBI | 10 |
| `득점` | R | 5 |
| `1루타` | SINGLE | 10 |
| `2루타` | DOUBLE | 20 |
| `3루타` | TRIPLE | 30 |
| `홈런` | HOMERUN | 50 |
| `희생타` | SH | 5 |
| `4사구` | BB | 5 |
| `고의사구` | IBB | 10 |
| `아웃` | Out | -5 |
| `삼진` | SO | -10 |
| `사이클링히트` | CH | 100 |
| `결승타` | WH | 20 |
| `주루사/견제사` | RO | -5 |
| `병살타` | DP | -10 |
| `도루` | SB | 10 |
| `도루자(도루실패)` | CS | -5 |
| `실책` | Err | -10 |

#### 투수
| 항목 | 코드 | 포인트 |
|---|:---:|---:|
| `승` | Wgs | 125 |
| `패` | L | -25 |
| `이닝` | IP | 12 |
| `피안타` | H | -7 |
| `피홈런` | HR | -10 |
| `4사구` | BB | -5 |
| `탈삼진` | SO | 10 |
| `실점` | R | -5 |
| `자책점` | ER | -10 |
| `폭투` | WP | -5 |
| `보크` | BK | -5 |
| `QS` | QS | 10 |
| `QS+` | QSP | 20 |
| `완봉` | SHO | 50 |
| `완투` | CG | 25 |
| `노히트노런` | NHG | 100 |
| `퍼펙트게임` | PFG | 200 |

#### 예시
- 김선수(타자)

| 항목(개수) | 코드 | 포인트 |
|---|:---:|---:|
| `도루` | SB | 10 |
| `유땅` | Out | -5 |
| `좌홈` | HR | 50 |
| `우안` | SINGLE | 10 |
| `우3` | TRIPLE | 30 |
| `중2` | DOUBLE | 20 |
| `타점(6)` | RBI | 6 * 10 |
| `득점(3)` | R | 3 * 5 |
| `사이클링히트` | CH | 100 |
| `타석(5)` | PA | 5 * 1 |
| 총합 |  | 295 |

### 배당금 계산 방법

1. 로스터 구성 방법

- FANTASY BASEBALL은 10인으로 이루어진 로스터에 유저가 자신이 원하는 만큼 베팅 금액을 걸 수 있는 구조입니다.
- 유저가 선택할 수 있는 선수들 리스트는 당일 선발 라인업을 기준으로 각 팀당 10명 씩 총 100명이 매일 갱신됩니다.
- 로스터를 구성할 때는 포지션 별로 한 명씩 선택하여야 합니다. 포지션은 좌익수, 중견수, 우익수, 1루수, 2루수, 3루수, 유격수, 투수, 포수, 지명타자가 있습니다.
- 원하는 로스터를 구성한 후 최소 100포인트 이상 최대 자신이 가진 금액까지 100 단위로 베팅 금액을 설정합니다.

2-1. 배당금 계산 방식

- 모든 경기가 종료된 후 경기 결과를 바탕으로 선수들의 스코어를 계산합니다.
- 같은 포지션을 가진 선수들끼리 경쟁하게 됩니다. 포지션 내에서 점수를 기준으로 선수들을 정렬합니다.
- 포지션은 총 열 포지션이 있습니다. 따라서 유저가 각 포지션에 총 배팅액의 1/10씩 베팅한 것으로 간주합니다. 유저의 베팅액은 열 포지션 각각에 1/10씩 할당됩니다.
- 유저들이 베팅한 선수들 한정으로 가장 높은 스코어를 기록한 1등과 2등 선수를 선별합니다.
- 1등과 2등 선수를 로스터에 포함한 유저들은 자신의 베팅 금액 만큼 돌려 받습니다.
- 1등과 2등 이외의 선수들에게 걸린 금액을 모두 합한 후, 합한 금액의 70%를 1등을 선택한 유저들끼리 나눠갖고, 합한 금액의 30%를 2등을 선택한 유저들끼리 나눠갖습니다.
- 이때, 1등을 선택한 유저들과 2등을 선택한 유저들은 자신이 속한 그룹(1등 그룹 혹은 2등 그룹) 내의 총 베팅액을 기준으로 자신의 베팅액의 비율만큼 금액을 배당받습니다.

2-2. 배당금 계산 예시

---
![user-betting](./readme-assets/user-betting.png)
- 유저 베팅액을 각 포지션에 1/10 씩 할당
---
![return-betting-point](./readme-assets/return-betting-point.png)
- 1루수 포지션에 걸린 총 베팅 금액 : 5,000
- 선택받은 선수 중 점수 1등인 윤타자, 2등인 전머장을 선택한 유저들은 자신의 베팅액을 돌려 받음
---
![return-benefit](./readme-assets/return-benefit.png)
- 1등, 2등을 제외한 나머지 선수들에게 걸린 총 베팅 금액 : 3,000
- 1등 선수를 선택한 유저들이 나눠 가질 총 금액 : 3,000 * 70% = 2,100
- 2등 선수를 선택한 유저들이 나눠 가질 총 금액 : 3,000 * 30% = 900
- 유저1 1등 그룹 베팅액 지분 : 500 / (500 + 1,000) = 33%
- 유저2 1등 그룹 베팅액 지분 : 1,000 / (500 + 1,000) = 66%
- 유저3 2등 그룹 베팅액 지분 : 900 / 900 = 100%
- 유저1 순이익 : 2,100 * 33% = 699
- 유저2 순이익 : 2,100 * 66% = 1,398
- 유저3 순이익 : 900 * 100% = 900
- 유저1 총 획득 금액 : 500 + 699 = 1,199
- 유저2 총 획득 금액 : 1,000 + 1,398 = 2,398
- 유저3 총 획득 금액 : 500 + 900 = 1,400

## DB구조
![db](./readme-assets/db.png)

- Game : 특정 날에 베팅과 정산이 이루어지는 한 게임에 관한 모델입니다. 그 날 진행된 모든 야구경기, 경기에 참가했던 모든 선수들, 유저들이 선택한 선수와 베팅한 금액 등을 다룹니다.
- Player : 선수에 관한 모델입니다. 크롤링 후, kboId를 기준으로 동일 인물의 정보를 이미 갖고 있는지 판별 후 갖고 있다면 갱신, 갖고 있지 않다면 생성합니다.
- Statistic : 특정 날 특정 경기의 특정 선수에 관한 모델입니다. 선수의 경기내용, 그에 따라 계산된 점수 등을 다룹니다.
- User : 유저 모델입니다. 첫 로그인 시 생성되고, 생성 이후 주로 갱신되는 정보는 베팅과 정산에 따른 소지금(money) 필드입니다.
- UserBettingData : 유저 베팅에 관한 모델입니다. 한 게임에서 얼마를 베팅했는지, 어떤 선수들로 로스터를 구성했는지, 랭크는 몇 위인지 등을 다룹니다.

## 개발 중 이슈

1. Frontend / Backend에서 시간을 다루는 방법

- KBO 사이트에서 사용하는 DB구조에 대응하기 위해 경기 별 DB에 `gameDate`라는 필드를 통해 접근하는 방식을 선택하였습니다. 현재 또는 과거 날짜를 `date-fns` 라이브러리를 사용해 형식을 `String`으로 바꾼 후 저장하였는데, 서버에서 날짜 / 시간을 저장하는 방식이 달라 로직을 작성하는 데 어려움을 겪었습니다.
- 크롤링, 메일링 등을 위한 스케쥴링 작업에서도 관련 이슈를 겪었습니다. AWS에서 서버를 배포할 때 `node-schedule-tz` 라이브러리를 사용하였는데, 로컬에서는 정상적으로 로컬 타임 기준으로 작동하였지만 AWS는 UTC가 기준이 되어 예상한 대로 스케쥴링이 진행되지 않았습니다.
- `Date` 객체를 다루면서 Local Time이 아니라 `ISO`를 기준으로 날짜 및 시간을 저장하는 것의 중요성을 알게 되었습니다.

2. 베팅 금액 로직

- 처음 베팅 금액을 유저들에게 분배하는 로직을 구성할 때 포지션 별로 선수들을 나눈 후 포지션 별 총 스코어에 해당하는 선수들의 스코어 비율만큼 베팅 금액을 획득하는 방식을 채택하였습니다.
- 이후 로직을 점검하면서 유저들이 건 베팅 금액이 크더라도 그에 비례하는 이익을 얻지 못한다는 것을 발견하였습니다.
- 더 많은 베팅 금액을 걸었을 때 더 많은 이익을 낼 수 있도록 로직을 수정하면서, DB를 재가공하고 다양한 종류의 Model에 접근하여 DB를 업데이트하게 되었습니다. 이를 통해 Mongoose의 `aggregate` 및 `transaction`을 다양하게 사용할 수 있는 기회가 되었습니다.

3. 크롤링

- 모든 크롤링 작업이 으레 그렇듯, 크롤링 대상 페이지들의 다양한 조건들을 핸들링 하는 데에 어려움을 겪었습니다. 예를 들면, 우천 취소, 미세먼지 취소 등 예기치 못하게 경기 일정이 바뀐 경우, 경기 결과를 가져올 때 취소된 경기는 결과 페이지가 없어, 로드 과정에서 에러가 발생했습니다. 이 때, `Promise.all`을 사용하였기 때문에 하루에 한 경기만 취소되어도 reject처리 되어, 다른 진행된 경기들을 가져오지 못했습니다. 이후 `Promise.allSettled`를 활용하여 이 문제를 해결해보고자 하였습니다. 현재 node버전에서 Promise.allSettled을 지원하지 않아, 유틸 함수 폴더에 따로 작성하여 사용했습니다. 복수의 비동기 처리에 습관처럼 Promise.all을 활용해 왔었기 때문에, 지금까지 비동기 에러 핸들링을 유연하게 하지 못했음을 반성했습니다.
- 크롤링 로직을 작성하는 과정에서 최종적으로 어떤 모양으로 크롤링 된 데이터를 제공해야할지 많은 고민을 했습니다. 나름 고민 끝에 데이터를 만들었다고 생각했습니다만, 크롤링 로직 작성 이후, DB를 사용하는 입장이 되었을 때, KBO사이트에서 제공하는 DB 형식에 매몰되어 데이터 모양을 잘못 잡았다는 생각이 여러 번 들었습니다. 좀 더 데이터 사용자의 입장에서 데이터 모델을 고민했으면 좋았었겠다 하는 아쉬움이 남았습니다.
- 크롤링 로직을 가진 백엔드는 AWS Elastic Beanstalk을 통해서 배포했습니다만 배포된 환경에서 크롤링이 제대로 이루어지지 않았습니다. 첫 번째로 Puppeteer 실행에 필요한 chromium이 배포 환경에서 자동으로 설치되지 않는 문제가 있었고, 두 번째로 너무 많은 페이지를 비동기적으로 한꺼번에 접속하려 하는 바람에 크롤링 도중 서버가 멈춰버리는 문제가 있었습니다. 백엔드 배포도 처음이었고 배포환경과 개발환경의 차이 때문에 예상치 못한 문제를 겪은 것도 처음이었기에 적잖이 당황했습니다만, 다행히 무사히 문제를 해결할 수 있었고, 개발과정에서 배포 환경을 고려하며 로직을 작성해야 한다는 기본적인 원칙을 새삼 되새겼습니다.

4. 로그인

5. 요청에 해당하는 값이 없을 경우, 서버의 응답코드
- 요청 방식은 적절하지만 요청에 해당하는 값이 없을 때, 어떤 응답코드가 적절할지 고민했습니다. 아래는 논의된 의견입니다.

1. 200코드(OK)와 빈 객체.
2. 204코드(No Content).
3. 404코드(Not Found).

- 첫 번째, 200코드의 경우,
성공적으로 요청된 데이터를 보내줄 수 있을 때, 적절한 코드라고 판단하였습니다. 현재 상황에선 데이터를 보내줄 수 없으므로 부적절하다고 판단했습니다.

- 두 번째, 204코드의 경우,
응답에 어떤 데이터도 실어주지 않는다는 의도를 보여준다는 점은 그럴 듯 했지만,
보통 GET 보다는 POST, PUT, DELETE 등에 사용되며, 이러한 요청이 잘 처리되었지만 구체적인 피드백을 주지 않을 때 사용되는 코드라고 이해하여, 부적절하다고 판단했습니다.

- 세 번째, 404코드의 경우,
일반적으로, 서버가 지원하지 않는 url로의 요청 시 응답되는 코드로 잘 알려져 있지만, 요청하는 리소스를 찾을 수 없다는 맥락에서, 현재와 같은 상황에서도 사용될 수 있다고 판단했습니다.

- 따라서 데이터 조회 시 요청하는 데이터가 없을 경우, 요청에 대한 결과와 메시지를 404코드와 함께 응답으로 보내주는 것으로 결정했습니다. 하지만 요청이 성공적으로 처리되었음에도 불구하고 4xx 코드는 클라이언트에서 에러로서 처리되기 때문에 기술적인 문제가 발생할 우려도 있으며, 이를 위해 클라이언트 측에서 별도의 핸들링이 필요한 상황이 적절한가 라는 의문도 남습니다. 백엔드 작업을 할 때 여러 상황에서 REST에 걸맞은 방법은 뭘까 자주 고민하게 됩니다. REST 관련 문제는 조사해 볼 때마다 정답이 명확한 문제가 아니라고 느꼈기에, 앞으로 경험을 쌓으며 다양한 문제상황에 대응해보며 다른 분들의 의견에 귀 기울이며 배워나가야겠다고 생각했습니다.

## 테스트
- Frontend: Cypress
- Backend: Jest, Mocha

## 지원하는 브라우저

- Chrome
- Safari

## 버전
