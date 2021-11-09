# Gaebalance 🛍
### E-commercial 온라인 쇼핑몰 사이트
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/83155239/139663487-de7354f6-3877-4b10-9bbe-7a79ed9cdf6a.gif)
---
## ⚒ 주요 기술 스택 
<img alt="JavaScript" src ="https://img.shields.io/badge/JavaScript-F7DF1E.svg?&style=for-the-badge&logo=JavaScript&logoColor=white"/>   <img alt="ReactJS" src ="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=white"/>   <img alt="ReactRouter" src ="https://img.shields.io/badge/React Router-CA4245.svg?&style=for-the-badge&logo=React Router&logoColor=white"/>   <img alt="Sass" src ="https://img.shields.io/badge/Sass-CC6699.svg?&style=for-the-badge&logo=Sass&logoColor=white"/>   <img alt="JSON" src ="https://img.shields.io/badge/JSON-000000.svg?&style=for-the-badge&logo=JSON&logoColor=white"/>

## 기타 
- Common : AWS(RDS/EC2), RESTful API
- Communication: Slack, Trello, Goolge Docs

#### 개발은 초기 세팅부터 전부 직접 구현했으며, 백엔드 서버와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발했습니다.
---
# 주요 서비스
## 수많은 상품 중 내가 원하는 상품만 필터링
- 4개의 기본 필터 항목과 24개의 하위 항목을 통해 원하는 항목에 맞는 상품을 클릭과 동시에 볼 수 있습니다. 
## 원하는 상품 장바구니 담기   
- 원하는 상품을 장바구니에 담고 수량 별 가격을 확인할 수 있습니다.
# 주요 구현 사항
## 📌 상품 리스트 및 페이지네이션
![pagination](https://user-images.githubusercontent.com/83155239/139663223-66469bf4-3953-4c3a-94ae-36f93ad8c285.gif)
- Query string `limit/offset`을 사용해 리스트 페이지의 페이지네이션을 구현했습니다.
- 120여개의 상품 카드가 한 페이지당 28개(4x7)로 출력됩니다.
- `fetch API`, `sort()` 함수로 '더보기' 클릭 시 다음 상품 리스트가 출력됩니다.
## 📌 상품 리스트 필터링
![selectbox](https://user-images.githubusercontent.com/83155239/139663110-50942fad-c119-40ae-94c2-f6dbf5caaa37.gif)
- select 드롭다운 메뉴로 필터링을 구현했습니다. 
- 신상품순, 인기순, 가격순으로 해당 API를 요청, 해당 상품 리스트를 재배열합니다.
## 📌 상품 조건 검색 메뉴
![filter](https://user-images.githubusercontent.com/83155239/139663174-4969151c-0b57-4dbd-bc83-d1c6d181fa2c.gif)
- 아이템, 색상, 사이즈, 가격 기준 세부 24개 조건별 상품을 검색할 수 있는 서비스를 구현했습니다.
- 필터 체크박스 클릭과 동시에 해당하는 상품을 `fetch API`로 받아오고, 리스트를 재배열합니다.

# ⚙️ 실행 방법
1. git repository clone 및 npm install <br />

`git clone https://github.com/Kayoungkimjs/Gaebalance.git` <br />
`npm install`

2. React App 열기 <br />
`npm start` 

## ⚠️ Issue List - 21.08.02 update
> 최신 버전의 node.js(16.x.x) 설치후 npm 설치시 에러 발생, node.js LTS버전(14.x.x) 이용바랍니다.
---
## 개발 인원 및 기간
- 개발기간 : 2021/8/2 ~ 2021/8/13
- 개발인원 : 프론트엔드 3명 백엔드 3명

## Reference
- 이 프로젝트는 '뉴발란스' 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
