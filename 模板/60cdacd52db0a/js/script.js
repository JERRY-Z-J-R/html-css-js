/**
Welcome! This Pen has been updated with ES6 goodness and cleaner code. 
https://codepen.io/nevernotsean/pen/QodqGj
*/

class ProjectList extends React.Component {
  createProjectListItem(project) {
    let byline = project.acf.project_byline;
    let client = project.acf.project_client;
    return /*#__PURE__*/(
      React.createElement("li", { key: 'project-' + project.id }, /*#__PURE__*/
      React.createElement("a", { to: '/projects/' + project.slug }, /*#__PURE__*/
      React.createElement("h3", { className: "projectlist--client" }, client), /*#__PURE__*/
      React.createElement("h4", { className: "projectlist--byline" }, byline))));



  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "project-list" }, /*#__PURE__*/
      React.createElement("ul", { className: "menu vertical" },
      this.props.projects.map(this.createProjectListItem))));



  }}


class ProjectCategory extends React.Component {
  constructor(props) {
    super(props);

    this.setActive = this.setActive.bind(this);

    this.state = {
      projects: [] };

  }
  componentWillMount() {
    // this.getProjects(); // Codepen switched to HTTPS, so I have to load JSON manually instead of the json-generator
    this.setState({
      projects: [{ "acf": { "project_byline": "ut ullamco sunt", "project_credits": [{ "credit_role": "ut", "credit_name": "Leann" }, { "credit_role": "aliquip", "credit_name": "Hernandez" }, { "credit_role": "consequat", "credit_name": "Ashlee" }], "project_description": "Enim est qui Lorem officia adipisicing irure minim. Eu enim fugiat cupidatat elit anim pariatur irure quis aute velit enim. Adipisicing consequat sunt eiusmod reprehenderit nisi fugiat esse ut. Consequat ea ad deserunt mollit quis labore Lorem do qui officia labore. Incididunt reprehenderit anim sunt velit sunt est sit anim.", "project_client": "pariatur", "project_thumbnail": "https://unsplash.it/1000/1000", "project_category": "aute" }, "tags": ["incididunt"], "categories": [2], "excerpt": { "rendered": "Eiusmod reprehenderit incididunt aute do commodo sint laboris exercitation Lorem excepteur sit cillum aute irure." }, "content": { "rendered": "Enim id ex excepteur incididunt in deserunt mollit eiusmod adipisicing officia quis aliquip. Qui aute et consequat consectetur aute consectetur laborum. Non non sint reprehenderit velit proident aliqua elit eiusmod laboris veniam elit ea. Incididunt excepteur et esse minim amet in magna ea enim." }, "title": { "rendered": "non" }, "link": "https://seanma.de", "guid": "7d115e77-9566-4389-b544-deffaf76d058", "slug": "proident", "id": "58653533ca121cbaf664b199" }, { "acf": { "project_byline": "consectetur aute aliquip", "project_credits": [{ "credit_role": "dolor", "credit_name": "Hampton" }, { "credit_role": "mollit", "credit_name": "Kate" }, { "credit_role": "consectetur", "credit_name": "Riddle" }], "project_description": "Reprehenderit in mollit fugiat cupidatat consectetur minim Lorem eiusmod commodo laboris dolor minim tempor eiusmod. Et aute et exercitation dolore fugiat pariatur in ipsum anim dolor qui laborum laborum. Elit qui ad ea exercitation laboris sunt ut et est sunt duis. Esse duis ad ipsum aliqua nulla enim minim minim. Ullamco do tempor ex magna et ipsum sint et voluptate cupidatat anim labore esse.", "project_client": "et", "project_thumbnail": "https://unsplash.it/1000/1001", "project_category": "nisi" }, "tags": ["et"], "categories": [8], "excerpt": { "rendered": "Ipsum excepteur laboris nostrud sit proident." }, "content": { "rendered": "Anim non Lorem id fugiat. Do cillum qui veniam qui ad mollit pariatur Lorem. Lorem veniam nulla commodo aliqua. Fugiat laboris cillum excepteur tempor aliqua sit exercitation sit labore nostrud et." }, "title": { "rendered": "in" }, "link": "http://seanma.de", "guid": "444da15a-5160-48bb-bf6f-7d820d1f62e8", "slug": "dolor", "id": "58653533702dae7921a80c46" }, { "acf": { "project_byline": "eiusmod ullamco commodo", "project_credits": [{ "credit_role": "nulla", "credit_name": "Dickson" }, { "credit_role": "esse", "credit_name": "Trevino" }, { "credit_role": "aliquip", "credit_name": "Joni" }], "project_description": "Ullamco minim occaecat officia anim laborum laboris velit cupidatat esse aliqua irure exercitation. Occaecat elit labore est exercitation aute qui voluptate adipisicing consectetur officia. Adipisicing tempor tempor culpa enim cupidatat.", "project_client": "magna", "project_thumbnail": "https://unsplash.it/1000/1002", "project_category": "consectetur" }, "tags": ["incididunt"], "categories": [3], "excerpt": { "rendered": "Tempor quis cupidatat elit quis aute velit amet pariatur cupidatat ullamco voluptate." }, "content": { "rendered": "Elit commodo aliqua do occaecat consectetur sint ex. Eiusmod proident eiusmod ullamco occaecat cillum voluptate duis. Tempor enim ullamco duis sint est. Minim voluptate sint nisi enim ut pariatur officia cillum excepteur sint aliquip. Amet in proident dolor amet incididunt laborum sint commodo cillum officia consectetur proident aliqua. Incididunt nostrud nulla mollit adipisicing adipisicing nulla exercitation." }, "title": { "rendered": "tempor" }, "link": "http://seanma.de", "guid": "75909710-4410-4b59-bec8-f5cbb342471a", "slug": "ullamco", "id": "58653533e961f59631955144" }, { "acf": { "project_byline": "culpa tempor commodo", "project_credits": [{ "credit_role": "eiusmod", "credit_name": "Pennington" }, { "credit_role": "fugiat", "credit_name": "Jocelyn" }, { "credit_role": "enim", "credit_name": "Byrd" }], "project_description": "Cupidatat incididunt laborum cillum ea dolore quis. Exercitation Lorem eu ad ex. Laboris ipsum excepteur sunt eu irure ipsum. Consequat cupidatat sunt Lorem proident nostrud velit voluptate nulla quis cillum fugiat. Mollit fugiat nulla enim irure commodo officia nulla minim incididunt labore. Labore cillum irure Lorem ut laborum ad laborum.", "project_client": "sint", "project_thumbnail": "https://unsplash.it/1000/1003", "project_category": "do" }, "tags": ["adipisicing"], "categories": [7], "excerpt": { "rendered": "Nostrud laborum aliquip enim aute aute tempor." }, "content": { "rendered": "Consectetur fugiat commodo aliquip culpa occaecat anim cupidatat adipisicing cupidatat voluptate reprehenderit incididunt. Irure consequat enim deserunt incididunt dolor nisi id do cupidatat in Lorem. Laborum amet id minim enim. Nulla sint enim commodo ut qui duis reprehenderit Lorem nulla. Ad sint aliquip aute Lorem ut reprehenderit duis dolore occaecat non. Elit deserunt amet laborum non labore est deserunt eiusmod." }, "title": { "rendered": "nulla" }, "link": "http://seanma.de", "guid": "9581e2ce-8146-4cf5-8d0b-9107ab850828", "slug": "non", "id": "58653533c66184064ccedc40" }, { "acf": { "project_byline": "ex deserunt est", "project_credits": [{ "credit_role": "non", "credit_name": "Hutchinson" }, { "credit_role": "quis", "credit_name": "Donaldson" }, { "credit_role": "aliqua", "credit_name": "Marcie" }], "project_description": "Eu ullamco anim adipisicing duis adipisicing sint sit incididunt pariatur sit. Non veniam deserunt nulla aute. Eiusmod minim ut Lorem consequat. Ut ad ad qui do aute. Duis ipsum do consequat exercitation nisi anim id laboris fugiat dolore ex ut consectetur excepteur. Esse deserunt nostrud esse consectetur pariatur mollit. Enim proident enim non occaecat eu sint nostrud.", "project_client": "occaecat", "project_thumbnail": "https://unsplash.it/1000/1004", "project_category": "sit" }, "tags": ["aliqua"], "categories": [3], "excerpt": { "rendered": "Esse commodo amet excepteur ex ad." }, "content": { "rendered": "Commodo ad et veniam sunt non pariatur elit ex anim esse consequat veniam. Ad magna nulla ea anim est in nostrud magna magna proident voluptate officia. Irure nisi do adipisicing nostrud mollit est non duis quis nisi amet veniam Lorem proident." }, "title": { "rendered": "mollit" }, "link": "http://seanma.de", "guid": "472ababf-2340-4301-b63d-9bec9640a19e", "slug": "incididunt", "id": "586535332e3781792a099619" }] });

  }
  getProjects() {
    let catid = this.props.cat.id;
    let url = 'http://beta.json-generator.com/api/json/get/EyrhxmRVz';
    fetch(url).then(response => response.json()).
    then(json => {this.setState({ projects: json });});
  }
  setActive() {
    this.props.handleClick(this.props.Index);
  }
  getWidth(isActive) {
    let w = !isActive ? 'calc(20vw - 20px)' : '500px';
    return w;
  }
  render() {
    let { active, focused, shiftLeft, isLast } = this.props;

    let styles = {
      container: {
        transform: function () {
          return active ?
          'scale(1.1) translate3d(0, 0, 0)' :
          'scale(1) translate3d(0, 0, 0)';
        }() },
      item: {
        transform: function () {
          let direction = shiftLeft ? '-' : '';
          let transform = focused && !active ? 'translate3d(' + direction + '100%, 0, 0)' : 'translate3d(0, 0, 0)';
          return transform;
        }() },
      background: {
        background: 'url(' + this.props.cat.thumbnail + ') no-repeat center center',
        backgroundSize: 'cover',
        height: '500px',
        width: this.getWidth(active) } };


    let classes = classNames({ category: true, isActive: active, isLast, shiftLeft });
    return /*#__PURE__*/(
      React.createElement("li", { className: classes, style: styles.item }, /*#__PURE__*/
      React.createElement("div", { className: "category--content" }, /*#__PURE__*/
      React.createElement("h2", null, this.props.cat.name), /*#__PURE__*/
      React.createElement(ProjectList, { projects: this.state.projects })), /*#__PURE__*/

      React.createElement("div", { className: "category--image-container", onClick: this.setActive, style: styles.container }, /*#__PURE__*/
      React.createElement("div", { className: "category--image", style: styles.background })), /*#__PURE__*/

      React.createElement("div", { className: "category--name" }, /*#__PURE__*/
      React.createElement("h6", null, this.props.cat.name)), /*#__PURE__*/

      React.createElement("div", { className: "category--closeButton" }, /*#__PURE__*/
      React.createElement("a", { href: "#" }, "Back"))));



  }}


class Collection extends React.Component {

  constructor(props) {
    super(props);

    this._handleClick = this._handleClick.bind(this);
    this.categoryNode = this.categoryNode.bind(this);
    this._focusOff = this._focusOff.bind(this);

    this.state = {
      open: false,
      activeIndex: null,
      categories: [] };

  }
  componentDidMount() {
    // this._getCategories(); // Codepen switched to HTTPS, so I have to load JSON manually instead of the json-generator
    this.setState({
      categories: [{ "thumbnail": "https://unsplash.it/1200/1200", "link": "http://seanma.de", "taxonomy": "category", "count": 6, "name": "consequat", "slug": "commodo", "id": "586537da62981d5fb8c21617" }, { "thumbnail": "https://unsplash.it/1200/1201", "link": "http://seanma.de", "taxonomy": "category", "count": 8, "name": "non", "slug": "laborum", "id": "586537da60c040bc1e3060a1" }, { "thumbnail": "https://unsplash.it/1200/1202", "link": "http://seanma.de", "taxonomy": "category", "count": 3, "name": "non", "slug": "commodo", "id": "586537daffc67c66ec4dc356" }, { "thumbnail": "https://unsplash.it/1200/1203", "link": "http://seanma.de", "taxonomy": "category", "count": 6, "name": "velit", "slug": "voluptate", "id": "586537dae1be34396786ce5f" }, { "thumbnail": "https://unsplash.it/1200/1204", "link": "http://seanma.de", "taxonomy": "category", "count": 2, "name": "non", "slug": "voluptate", "id": "586537dab274a22da2f3edae" }] });

  }
  _getCategories() {
    let _this = this;
    let url = 'http://beta.json-generator.com/api/json/get/E1NpHQAEf';
    fetch(url).then(response => response.json()).
    then(json => {_this.setState({ categories: json });});
  }
  _handleClick(i) {
    this.setState({
      activeIndex: i,
      open: true });

  }
  _focusOff(e) {
    e.preventDefault();
    if (e.target.className !== 'category--image') {
      this.setState({
        activeIndex: null,
        open: false });

    }
  }
  categoryNode(cat, i) {
    let isLast = i === this.state.categories.length - 1 || i === this.state.categories.length - 2;
    let shiftLeft = i < this.state.activeIndex;

    return /*#__PURE__*/(
      React.createElement(ProjectCategory, {
        cat: cat,
        key: 'cat-' + i,
        handleClick: this._handleClick,
        active: i === this.state.activeIndex,
        focusOff: this._focusOff,
        focused: this.state.open,
        shiftLeft: shiftLeft,
        Index: i,
        isLast: isLast }));


  }
  render() {
    let catNodes = this.state.categories.map(this.categoryNode);
    let classes = classNames({
      focused: this.state.open });

    return /*#__PURE__*/(
      React.createElement("div", { className: 'categories--menu-container ' + classes, onClick: this._focusOff, style: { height: window.innerHeight } }, /*#__PURE__*/
      React.createElement("ul", { className: "categories menu" },
      catNodes)));



  }}


class App extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "App" }, /*#__PURE__*/
      React.createElement(Collection, null)));


  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#root"));