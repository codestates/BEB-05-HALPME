# 🚨 팀 소개
<br/>
### BEB-05-02-05
<br/>
## 💡Project : HALP ME!!

- **팀명 : HALP ME!**
- **팀장 : 홍유진**
- **팀원 : 박수연, 이송영, 안병현**
- **Site  Link** :
- **Date** : 2022/08/17 - 2022/08/30
<br/>

## 💡 HALP Project **Intro**
<br/>

<aside>
➡️ 질의응답 커뮤니티. 사용자는 질문에 대한 게시글을 작성하고, 다른 사용자들이 해당 게시글에 답변을 댓글로 작성한다. 질문을 한 사용자는 게시글에 달린 답변 댓글 중 가장 적합한 답변을 채택한다. 채택받은 댓글의 사용자는 IC토큰을 보상으로 받는다.

</aside>

## 역할

| 이름 | 포지션 |
| --- | --- |
| 박수연 | FE |
| 이송영 | FE |
| 안병현 | BE, SC |
| 홍유진 | BE, SC |

💻 **FE**

> 웹의 View를 유저 플로우에 따라 구성할 수 있고, 개발하기.
> 

💻 **SC**

> 스마트 컨트랙트 개발을 위해 솔리디티 언어를 다루고, 분석하고, 적용 가능. 기본으로 제공되는 ERC-20, ERC-721 스마트 컨트랙트 코드 외의 덧붙일 기능은 응용하여 코드 작성해야함.
> 

→ 솔리디티로 작성된 ERC-20,  ERC-721 코드를 파악하고, 응용할 수 있다.

💻 **BE**

> 백엔드에서 지갑 생성, 서명 및 전송 담당. 서버 구축, 지갑 생성 및 관리, 스마트 컨트랙트와 서버를 연동하여 사용. 동작 확인을 위해 실시간 트래킹.
> 

<br/>

# 🚨 프로젝트 소개

## 기술 스택

### Tech

| Language | JavaScript | * |
| --- | --- | --- |
| Server Framework | Node.js | * |
| Contract Language | Solidity | SC |
| Container | Ganache | SC |
| Web Library | React | FE |
| Database(DB) | MySQL | BE |
| Web Library | Redux | FE |
| Web Library | Babel | BE |
| Web Library | Bootstrap | FE |
| Web Framework | Express.js | BE |
| JavaScript Library | Web3.js | SC |
| Framework | Truffle | SC |
| Framework | OpenZepplin | SC |

### Position Tech

| Position | 기술 스택 |
| --- | --- |
| Front-End | React, Redux, Bootstrap |
| Back-End | MySQL, Babel, Express |
| Smart-Contract | Solidity, Web3.js, Truffle, OpenZepplin |

### 개발 환경

| OS | MacOS, Ubuntu |
| --- | --- |
| IDE | VisualStudioCode |
| 개발 도구 | Git |
| 개발 언어 | JavaScript, Solidity |
| 테스트 네트워크 | Ganache(ETH) |
| 지갑 | MetaMask |
| 문서 관리 | Notion |

<br/>

## 구현 기능

### 🔗 주요 기능

**▶️ 회원관리**

- [ ]  사용자는 아이디와 패스워드를 입력하여 회원가입할 수 있다.
- [ ]  사용자는 아이디와 패스워드를 사용하여 로그인할 수 있다.

**▶️ 게시글**

- [ ]  사용자는 게시글을 작성할 수 있다.
- [ ]  사용자는 게시글 목록을 확인할 수 있다.
- [ ]  사용자는 게시글 상세 내용을 확인할 수 있다.
- [ ]  사용자는 게시글에 대한 댓글을 작성할 수 있다.
- [ ]  사용자는 자신의 게시글에 달린 댓글 중 하나의 댓글을 채택할 수 있다.

**▶️ 마이페이지**

- [ ]  사용자는 자신의 정보를 확인할 수 있다.
- [ ]  사용자는 자신이 소유한 NFT 목록을 확인할 수 있다.
- [ ]  사용자는 자신이 소유한 토큰의 개수를 확인할 수 있다.
- [ ]  사용자는 자신이 작성한 게시글을 확인할 수 있다.
- [ ]  사용자는 자신의 토큰을 다른 사용자에게 전송할 수 있다.

**▶️ 토큰**

- [ ]  사용자는 자신이 작성한 댓글이 채택됨으로, 토큰을 획득할 수 있다.

**▶️ NFT**

- [ ]  사용자는 NFT를 생성할 수 있다.

### 🔗 추가 기능

**▶️ 게시글**

- [ ]  사용자는 자신이 작성한 게시글을 수정할 수 있다.
- [ ]  사용자는 자신이 작성한 게시글을 삭제할 수 있다.
- [ ]  사용자는 자신이 작성한 댓글을 수정할 수 있다.
- [ ]  사용자는 자신이 작성한 댓글을 삭제할 수 있다.
- [ ]  사용자는 게시글에 좋아요를 표시할 수 있다.
- [ ]  사용자는 댓글에 좋아요를 표시할 수 있다.

### 🔗 Night Mare

- [ ]  사용자는 소유한 nft를 전송할 수 있다
- [ ]  사용자는 nft를 고정된 가격에 구매하거나 경매할 수 있다
- [ ]  사용자는 카테고리의 Explore에서 nft 조회 방식을 선택할 수 있다


<img width="709" alt="스크린샷 2022-08-30 오후 5 06 46" src="https://user-images.githubusercontent.com/99964401/187392230-8b990b1d-af26-438a-8e00-374e469811e1.png">


<br/>

## 시나리오

**Home**

- 기본 Index 화면.
- 왼쪽 상단의 사이트 로고 클릭시 홈(Home)으로 이동한다.

**Navigation**

- Home 화면 상단에 위치.
- Login / Sign 클릭시 login과 sign 선택 화면으로 이동한다.
- Market 클릭시 market 화면으로 이동한다.
- Create 클릭시 NFTcreate 화면으로 이동한다.
- My Page 클릭시 mypage 화면으로 이동한다.

**Login / Sign up**

- Home 화면 상단의 오른쪽에 위치.
- Sign 클릭시 회원가입 화면으로 이동한다.
- 회원가입에 필요한 Id, Password를 포함한 정보 기입 후, 회원가입 버튼을 클릭하여 가입한다.
- 회원가입에 실패하면 error message 송출한다.
- Login 클릭시 로그인 화면으로 이동한다.
- Id, Password 입력 후, 로그인 버튼 클릭으로 로그인한다.
- 로그인 실패시 error message 송출한다.
- 로그인에 성공하면 화면 오른쪽 상단의 Login 버튼이 Logout 으로 바뀐다.
- Logout 클릭시 사이트에서 로그아웃 된다.

**Market**

- 게시글 리스트의 게시글 클릭시, 게시글의 상세 페이지로 이동한다.
- 게시글 리스트의 상단에 위치한 게시글 작성 버튼을 누르면 게시글 작성 화면으로 이동한다.
- 클라이언트는 서버에 NFT 정보를 요청하고 서버는 DB에 저장된 NFT 정보를 응답한다.
- 클라이언트는 응답받은 정보를 marketplace 페이지에 보여준다.
- NFT 중 하나를 눌렀을 때 지갑연결이 되어있으면 구매 페이지로, 아니면 지갑 연결 페이지로 이동한다.

**Create (NFT Create)**

- **지갑 연결 [URClass eth연결]**
    - 연결이 되지 않은 상황에오른쪽 위 지갑을 누르거나, 오른쪽 위 사용자를 누르거나, Explore에서 NFT를 눌렀을 때 이동한다.
    - 지갑을 클릭하면 MetaMask 지갑을 표시한다.
    - 지갑에 로그인하면 사이트에 로그인된다.
- 사용자는 자신이 보유한 IC토큰을 인증하고, NFT 생성을 위해 Create 버튼을 눌러 create 화면으로 이동한다.
- 클라이언트는 사용자에게 NFT CreationFrom을 제공한다.
- 사용자는 이미지와 정보를 입력하고 Create NFT 버튼을 클릭하여 NFT 정보를 IPFS에 업로드 요청한다.
- 이미지를 IPFS에 저장 후 이미지 IPFS URI를 입력한 정보에 추가하여 metadata.json 파일을 IPFS에 업로드한다.
- 업로드 완료 후, 업로드된 이미지는 My Page의 Minted List에서 확인할 수 있다.

**My Page**

- 로그인한 사용자의 상세 정보 확인.
- 사용자가 보유한 IC토큰을 확인.
- 사용자가 보유한 NFT 조회.
- 구매한 NFT 목록 조회 / 민팅한 NFT 목록 조회.
- 사용자가 작성한 게시글 확인.
- 사용자가 작성한 댓글 확인.

**필수 구현**

- 로그인 / 로그아웃
- 회원가입
- 게시글 읽기 및 작성
- 게시글에 대한 댓글 작성
- 게시글의 작성자가 댓글 채택
- 채택된 댓글의 작성자는 보상으로 IC토큰을 받음
- IC토큰을 민팅한 NFT 토큰으로 교환
- NFT Create를 하면 데이터베이스에 저장
- Minted List에서 데이터를 받아와서 보유 NFT 표시

**추가 기능 구현**

- 내 NFT 컬렉션 페이지 조회 기능.
- 사용자 NFT 페이지 조회 기능.
- 답변 채택이 완료된 게시글은 완료 리스트로 이동하기.
- 보유한 IC토큰과 NFT 전송 기능.
- 보유한 NFT 판매 기능.

<br/>

## Flow Chart

![HALP ME Flowchart drawio final](https://user-images.githubusercontent.com/99964401/187382272-fc67e10e-c839-4c98-8f2e-91b359f729f9.png)


<br/>

## ER-Diagram

![Project2](https://user-images.githubusercontent.com/99964401/187381769-7e781965-5ec2-43d3-8cf5-662596be9f28.png)


<br/>

## API

<img width="629" alt="스크린샷 2022-08-30 오후 5 42 43" src="https://user-images.githubusercontent.com/99964401/187392336-5983b34c-0411-47d7-b2c1-eddd00a77bfd.png">
<img width="629" alt="스크린샷 2022-08-30 오후 5 43 14" src="https://user-images.githubusercontent.com/99964401/187392357-4c2f6067-d86f-46bd-a92c-387f68090dd1.png">


<br/>

## Installation

### 1. `.env` 추가

`.env` 파일을 생성하여 다음과 같이 환경 변수를 추가한다.

- client

```bash
REACT_APP_SECRET_KEY=
REACT_APP_SERVER_URL=http://127.0.0.1:8080
```

- server

```bash
PORT=8080
SERVER_BANNER=
DB_USER_NAME=root
DB_USER_PASSWORD=
DB_DATABASE_NAME=HALP_ME
DB_HOST=127.0.0.1
DB_DIALECT=mysql
```

- contract

```bash
SERVER_ADDRESS=가나슈 첫번째 계정
SERVER_SECRET_KEY=가나슈 첫번째 계정 비밀 키
CONTRACT_ADDRESS=내가 배포한 컨트랙트 주소
RPC_URL=http://127.0.0.1:7545/
```

### 2. 실행

```bash
# client
cd client
npm install
npm start

# server
cd server
npm install
npm start
```

### 3. contract deploy

```bash
# install truffle & ganache
npm install -g truffle
npm install -g ganache-cli

# 프롬프트 실행
truffle develop

# 컴파일
compile

# 배포
migrate

# 테스트
test
```

<br/>

# 실행 화면

### Home

<img width="958" alt="home" src="https://user-images.githubusercontent.com/99964401/187381843-cbeb10d7-e266-49ba-b41e-a229d3870713.png">


### Post

<img width="943" alt="post" src="https://user-images.githubusercontent.com/99964401/187381872-1d28726b-a21b-4919-891e-87d6e84c393a.png">


### Post Create

<img width="944" alt="postCreate" src="https://user-images.githubusercontent.com/99964401/187382010-464c0ba3-0342-4609-a002-55e11d7bf863.png">


### Comments

<img width="944" alt="comments" src="https://user-images.githubusercontent.com/99964401/187382091-48ff3a1c-0d86-4ff7-aca4-8f29f079ef8c.png">


### Comments Selected

<img width="943" alt="commentSelected" src="https://user-images.githubusercontent.com/99964401/187382120-e51646eb-b463-406b-9b7c-64ac503bd811.png">


### Market

<img width="953" alt="market" src="https://user-images.githubusercontent.com/99964401/187382144-1a46382a-678a-4cff-a9b6-b8661761ddfe.png">


### My Page

<img width="945" alt="mypage" src="https://user-images.githubusercontent.com/99964401/187382170-d3eba9c8-ae7d-474f-986c-858096510d1c.png">

<br/>
