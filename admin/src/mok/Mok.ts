export type IPortfolioList = {
  num: number;
  name: string;
  sitename: string;
  subs: string;
  part: string;
  mission: string;
  exp: string;
  skill: string;
  func: string;
  git: string;
  sitepage: string;
  thum: string;
  howlong: string;
  responsive: string;
  color: string;
};

export const fakePortfolioList: IPortfolioList[] = [
  {
    num: 1,
    name: "Portfolio_Project",
    sitename: "Portfolio_JIA",
    subs: "포트폴리오 Web",
    part: "개인 프로젝트_참여도 100%",
    mission:
      "                                    이번 프로젝트는 저를 소개해보는 페이지 이며 지금까지 진행했던 프로젝트들을 정리해보는 페이지를 목표로 제작하였습니다. \r\n하나하나 정성스레 제작했던 저의 웹페이지를 여러 사람들이 볼 수 있게 제작하였습니다.\r\n                            ",
    exp: "                                    이번 프로젝트에 핵심기능은 Axios 입니다. PHP를 이용하여 관리자 모드를 만들고 포트폴리오의 정보를 입력받아 데이터베이스에 저장시키고 해당 데이터베이스를 JSON파일로 변환 시킵니다. React 안에서 Axios를 이용하여 JSON파일을 불러오고 Slick과 Testimonial 탭에 연결 시켰습니다. \r\nAxios를 비동기 처리하여 불러오는 도중 생기는 오류를 하나씩 해결해 나가며, Slick과 연결시켜 클라이언트가 원하는 정보만을 띄워주는 모달창을 만들었습니다. 그리고 useRef를 이용하여 tab들간에 ScrollIntoView, 애니메이션 효과를 넣었습니다.\r\n                                                                                                          ",
    skill: "React Js, Scss, Photoshop, PHP, MySQL",
    func: "Slick, Modal, ScrollIntoView, Axios, etc Hooks",
    git: "git",
    sitepage: "http://dlsdk0601.dothome.co.kr/",
    thum: require("../styles/img/dummyImg.png"),
    howlong: "2021.09-2021.10",
    responsive: "",
    color: "#666666",
  },
  {
    num: 2,
    name: "Renewal_Project",
    sitename: "MiniDeco",
    subs: "미니데코 WEB/MOBIL 리뉴얼",
    part: "개인 프로젝트_참여도 100%",
    mission:
      "이번 프로젝트는 기존에 알고 있던 HTML, CSS 그리고 JavaScript 이론과 문법을 토대로 실무에 적용 할 수 있도록 연습해보는 첫 프로젝트입니다.\r\n서버상에 존재하는 여러가지 사이트들중에서 업데이트가 필요한 사이트를 선정하고 단계적으로 접근해보며 제작하였습니다.\r\n                              ",
    exp: "리뉴얼 프로젝트를 제작하며 구현한 핵심 기능은 상품 진열 페이지에서 클라이언트가 원하는 상품만을 진열 해주는 필터링 기능입니다. 이 기능을 구현하면서 두 가지의 규칙을 세웠습니다.\r\n첫번째는 즉각적인 반응을 하는 것입니다. 필터링을 거치기 위해 최소 1번에서 최대 3번까지의 클릭을 걸쳐야 하지만 클릭을 할때 마다 즉각 적으로 필터링 하며 상품 리스트를 구현합니다. \r\n두번째는 클릭의 순서와 상관없이 기능이 구현되도록 제작하였습니다. 그리고 반응형 작업하며 pwa를 build 하며 웹앱으로도 구현했습니다.          ",
    skill: "HTML, CSS, jQuery",
    func: "slick, 애니메이션 효과, 상품 진열, PWA build",
    git: "https://github.com/dlsdk0601/renualProject_jQuery",
    sitepage: "https://dlsdk0601.github.io/renualProject_jQuery/",
    thum: require("../styles/img/dummyImg.png"),
    howlong: "2021.06-2021.07",
    responsive: "on",
    color: "#a3714e",
  },
  {
    num: 5,
    name: "Clone_Project",
    sitename: "KGC 인삼공사",
    subs: "KGC 인삼공사 클론프로젝트",
    part: "개인 프로젝트_참여도 100%",
    mission:
      "이번 프로젝트는 3가지의 기획의도를 가지고 있습니다.\r\n첫 번째는 실제 현업에서 어떠한 UI/UX를 구현하는지 세세한 관찰과 연구가 목적입니다.\r\n어떤 기능을 추가 하였고, 어디에 배치하였는지 그리고 이를 통해 어떻게 클라이언트들의 이목을 집중시켜 콘텐츠의 노출도를 상승 시키는지 알 수있는 기회였습니다.\r\n두 번째는 고난이도의 기능을 구현 해 볼수 있는 연습이 돼었습니다.\r\n세 번째는 취업 후, 한 집단에 소속되어 다른 개발자들과 협업을 진행하면서 서로의 코드 스킬을 빠르게 이해 할 수 있게 하는 것입니다. 다른 개발자들과의 협업이 중요하다고 생각합니다. 그래서 다른 개발자가 기획한 UI/UX를 보며 그 의도를 파악해보는 것이 목적입니다.        ",
    exp: "클론 프로젝트에서 핵심 기능은 Canvas 태그입니다. \r\n일반 video 태그만 이용하여 단순한 영상 재생만 하는것이 아닌, 비디오 drawImage를 이용하여 다양한 애니메이션 효과를 적용 할 수 있습니다.\r\ndrawImage를 이용하여 canvas 태그를 컨트롤 하는 함수를 만들어 setInterval을 통해 해당 배너와 같이 실행이 되도록 구성하였습니다. \r\n\r\n                    ",
    skill: "HTML, SCSS, Vanilla JS",
    func: "Canvas, Swiper Library, Slide, Animation",
    git: "https://github.com/dlsdk0601/clone_Project",
    sitepage: "https://dlsdk0601.github.io/clone_Project/",
    thum: require("../styles/img/dummyImg.png"),
    howlong: "2021.08",
    responsive: "",
    color: "#803013",
  },
  {
    num: 6,
    name: "Admin_Project",
    sitename: "Admin Page",
    subs: "관리자 페이지 제작 및 서버 구축",
    part: "개인 프로젝트 100%",
    mission:
      "웹 사이트를 제작 할 경우, UI 와 기능 구현을 넘어서 서버와의 통신도 중요하다고 생각합니다. \r\n왜냐하면 프론트 엔드 개발자가 수행 해야할 중요한 업무중에 하나는 백엔드 개발자와의 의사소통이 중요하기 때문입니다.\r\n백엔드 개발자와의 원활하게 교류하기 위해 관리자 페이지를 직접 만들었습니다. 관리자 페이지에서 웹사이트에 필요한 정보를 컨트롤이 가능하게 제작하였습니다. 직접 만들어 보면서 서버상에서 데이터 공유 프로세스를 좀더 이해 할 수있었습니다. \r\n                  ",
    exp: "정보를 다루는 관리자 페이지에서 중요한 기능은 CRUD 기능입니다. 웹사이트에 필요한 정보를 입력하고 submit을 하게 되면 데이터 베이스(MySQL)에 등록하게 만들었습니다. 해당 데이터를 불러와서 읽어 볼 수 있고, 수정 할 수 있게 구축하였습니다. \r\n그리고 데이터가 등록 및 새롭게 업데이트가 될때 마다 JSON파일을 생성하게 하였습니다. \r\n웹사이트에서는 해당 JSON 파일을 불러와서 필요한 정보를 불러서 웹사이트 제작을 할 수 있습니다. 그리고 관리자 권한이 있는 사람만 정보를 볼 수 있도록 로그인 기능도 넣었습니다.                                          ",
    skill: "PHP, CSS, JS, MySQL",
    func: "Create, Read, Update, Delte",
    git: "https://github.com/dlsdk0601/Admin_Project",
    sitepage: "http://dlsdk0601.dothome.co.kr/admin/login.php",
    thum: require("../styles/img/dummyImg.png"),
    howlong: "2021.08 1주",
    responsive: "",
    color: "#35464e",
  },
];
