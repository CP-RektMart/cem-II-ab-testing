function App() {
  return (
    <div id="courseville-body">
      <div id="courseville-content-wrap">
        <div id="courseville-page-header">
          <div id="courseville-logo" aria-hidden="true">
            <img
              src="/cv-logo.png"
              aria-label="The Digital Learning Platform of Chulalongkorn University"
              title="The Digital Learning Platform of Chulalongkorn University"
            />
          </div>
          <section
            id="courseville-logo-sider"
            style={{ position: "relative" }}
            aria-label="Information on the logged-in account."
            title=""
          >
            {" "}
            <div className="courseville-fbpict-wrapper">
              {" "}
              <img
                alt="User's Portrait"
                src="https://placehold.co/400?text=\n"
              />
            </div>{" "}
            <div className="courseville-fbpict-sider">
              <div
                style={{
                  backgroundColor: "#dedede",
                  height: 10,
                  margin: "2px 0",
                  width: "80px",
                  borderRadius: 16,
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "#dedede",
                  height: 10,
                  margin: "2px 0",
                  width: "80px",
                  borderRadius: 16,
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "#dedede",
                  height: 10,
                  margin: "2px 0",
                  width: "80px",
                  borderRadius: 16,
                }}
              ></div>
            </div>{" "}
            <div id="courseville-logo-sider-edit-button-wrapper">
              {" "}
              <a
                data-on={0}
                href="https://www.mycourseville.com/?q=courseville/logout"
                className="btn btn-primary btn-sm cv-bs"
                id="courseville-logout-button"
                title="Log out from myCourseVille"
              >
                <i className="fa fa-sign-out" /> Log out
              </a>
            </div>
          </section>
        </div>
        <div id="courseville-panel-wrap">
          <div id="courseville-panel-tab-top" className="cvui-colorset-2"></div>
          <div id="courseville-panel-tab-mid" className="cvui-colorset-2">
            <nav
              id="courseville-panel-tab-mid-inner"
              aria-label="main menu"
              title="main menu"
            >
              {" "}
              <button
                id="courseville-mainmenu-button"
                aria-label="Show/hide menu items"
                title="Show/hide menu items"
                aria-expanded="false"
                aria-controls="courseville-mainmenu-wrapper"
              >
                <i className="fa fa-bars" />
              </button>{" "}
              <ul id="courseville-mainmenu-wrapper">
                {" "}
                <li>
                  <a
                    href="https://www.mycourseville.com/?q=courseville"
                    className="courseville-tab-button cvnav-ajaxnav"
                    data-status-msg="Loading content."
                    data-page="home"
                    data-current={1}
                  >
                    My Courses
                  </a>
                </li>{" "}
                <li>
                  <a
                    className="courseville-tab-button"
                    href="https://www.mycourseville.com/?q=onlinecourse"
                    target="_blank"
                    data-current={0}
                  >
                    Online Courses
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="https://www.mycourseville.com/?q=courseville/course/evalcenter"
                    className="courseville-tab-button cvnav-ajaxnav"
                    data-status-msg="Loading content."
                    data-page="evalcenter"
                    data-current={0}
                  >
                    Evaluation Center
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="https://www.mycourseville.com/?q=courseville/course/notification"
                    className="courseville-tab-button cvnav-ajaxnav"
                    data-status-msg="Loading content."
                    data-page="notification"
                    data-current={0}
                  >
                    Notifications
                    <span
                      className="courseville-notification-count cvui-rounded cvui-colorset-1"
                      style={{ padding: "0 8px", marginLeft: 4 }}
                    >
                      4
                    </span>
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="https://www.mycourseville.com/?q=courseville/course/register"
                    className="courseville-tab-button cvnav-ajaxnav"
                    data-status-msg="Loading content."
                    data-page="register"
                    data-current={0}
                  >
                    Register
                  </a>
                </li>{" "}
                <li>
                  <a
                    href="https://www.mycourseville.com/?q=courseville/course/account"
                    className="courseville-tab-button cvnav-ajaxnav"
                    data-status-msg="Loading content."
                    data-page="account"
                    data-current={0}
                  >
                    Account
                  </a>
                </li>{" "}
                <li>
                  <a
                    className="courseville-tab-button"
                    href="https://www.mycourseville.com/?q=courseville/learningpath/explore/admin"
                    target="_blank"
                    data-current={0}
                  >
                    Curriculum Admin
                  </a>
                </li>
              </ul>{" "}
              <div id="courseville-main-spinner" style={{ display: "none" }}>
                {" "}
                <div className="courseville-css-spinner" />
              </div>
            </nav>
          </div>
          <div id="courseville-panel-tab-bottom" className="cvui-colorset-2" />
          <div id="courseville-panel-mid" className="cvui-colorset-1">
            <div id="courseville-panel-mid-inner">
              <main role="main" aria-label="My courses" title="My courses">
                <div id="courseville-courselist-home">
                  <section
                    aria-label="Customization of course list display"
                    title="Customization of course list display ="
                    id="courseville-courselist-home-viewtoggle-panel"
                  >
                    {" "}
                    <button
                      aria-label="Grid view"
                      title="Grid view ="
                      className="cv-fa-button courseville-viewtoggle"
                      data-view="grid"
                    >
                      <i className="fa fa-th"></i>
                    </button>{" "}
                    |{" "}
                    <button
                      aria-label="List view"
                      title="List view ="
                      className="cv-fa-button courseville-viewtoggle"
                      data-view="list"
                    >
                      <i className="fa fa-list-ul"></i>
                    </button>
                  </section>

                  <p
                    className="cvui-hidden-focusable cvui-focus-grabbing"
                    data-focus-level="panel"
                    tabIndex={-1}
                  >
                    This panel lists all of your courses.
                  </p>

                  <section
                    className="courseville-courselist-group cvui-margin-v"
                    aria-label="Courses I have joined"
                    title="Courses I have joined"
                  >
                    {" "}
                    <div className="cvui-subsection-title cvui-light">
                      <h1>Courses I have joined</h1>
                    </div>
                    <section
                      className="courseville-courseicongroup"
                      aria-label="Courses I have joined in 2024/1"
                      title="Courses I have joined in 2024/1"
                      data-view="grid"
                      data-state="expanded"
                    >
                      <div className="courseville-header">
                        {" "}
                        <h2>2024/1</h2>{" "}
                        <button
                          className="cv-fa-collapse-control"
                          aria-expanded="true"
                          aria-controls="courseville-courseicongroup-icon-lineup-2024-1-join"
                          aria-label="Show/hide courses I join in 2024/1"
                          title="Show/hide courses I join in 2024/1"
                        >
                          {" "}
                          <i className="fa fa-chevron-circle-down" />{" "}
                        </button>
                      </div>
                      <div
                        id="courseville-courseicongroup-icon-lineup-2024-1-join"
                        className="courseville-courseicongroup-icon-lineup"
                      >
                        <a
                          href="https://www.mycourseville.com/?q=courseville/course/56355"
                          aria-label="DATABASE SYSTEMS [Section 1 - 3 & 33]"
                          title="DATABASE SYSTEMS [Section 1 - 3 & 33]"
                          className="courseville-courseicon cantoggle cvnav-ajaxnav"
                          style={{ cursor: "pointer", color: "rgb(0, 0, 0)" }}
                        >
                          <div data-part="bg-effect-mask" aria-hidden="true">
                            <div data-part="bg-effect" />
                          </div>
                          <div className="courseville-courseicon-icon">
                            <img
                              src="/2110422_1419824505_1539830990_1547176385.png"
                              loading="lazy"
                              className="courseville-courseicon-icon-img"
                              aria-label="DATABASE SYSTEMS [Section 1 - 3 & 33]"
                              title="DATABASE SYSTEMS [Section 1 - 3 & 33]"
                            />
                          </div>
                          <div className="courseville-courseicon-text">
                            {" "}
                            <div data-info="courseno-title">
                              {" "}
                              <div
                                data-part="courseno"
                                title="2110322.01to03and33"
                              >
                                2110322.01to...
                              </div>{" "}
                              <div data-part="title">
                                DATABASE SYSTEMS [Section 1 - 3 &amp; 33]
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://www.mycourseville.com/?q=courseville/course/56731"
                          aria-label="Computer Engineering Mathematics II [Section 1]"
                          title="Computer Engineering Mathematics II [Section 1]"
                          className="courseville-courseicon cantoggle cvnav-ajaxnav"
                          style={{ cursor: "pointer" }}
                        >
                          <div data-part="bg-effect-mask" aria-hidden="true">
                            <div data-part="bg-effect" />
                          </div>
                          <div className="courseville-courseicon-icon">
                            <img
                              src="/icon-default.png"
                              loading="lazy"
                              className="courseville-courseicon-icon-img"
                              aria-label="Computer Engineering Mathematics II [Section 1]"
                              title="Computer Engineering Mathematics II [Section 1]"
                            />
                          </div>
                          <div className="courseville-courseicon-text">
                            {" "}
                            <div data-info="courseno-title">
                              {" "}
                              <div data-part="courseno" title="2110203.01">
                                2110203.01
                              </div>{" "}
                              <div data-part="title">
                                Computer Engineering Mathematics II [Section 1]
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://www.mycourseville.com/?q=courseville/course/56733"
                          aria-label="Computer Engineering Mathematics Lab [Section 1 - 2]"
                          title="Computer Engineering Mathematics Lab [Section 1 - 2]"
                          className="courseville-courseicon cantoggle cvnav-ajaxnav"
                          style={{ cursor: "pointer" }}
                        >
                          <div data-part="bg-effect-mask" aria-hidden="true">
                            <div data-part="bg-effect" />
                          </div>
                          <div className="courseville-courseicon-icon">
                            <img
                              src="/icon-default.png"
                              loading="lazy"
                              className="courseville-courseicon-icon-img"
                              aria-label="Computer Engineering Mathematics Lab [Section 1 - 2]"
                              title="Computer Engineering Mathematics Lab [Section 1 - 2]"
                            />
                          </div>
                          <div className="courseville-courseicon-text">
                            {" "}
                            <div data-info="courseno-title">
                              {" "}
                              <div data-part="courseno">2110233</div>{" "}
                              <div data-part="title">
                                Computer Engineering Mathematics Lab [Section 1
                                - 2]
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://www.mycourseville.com/?q=courseville/course/57725"
                          aria-label="Hardware Synthesis Laboratory I [Section 1 - 2]"
                          title="Hardware Synthesis Laboratory I [Section 1 - 2]"
                          className="courseville-courseicon cantoggle cvnav-ajaxnav"
                          style={{ cursor: "pointer" }}
                        >
                          <div data-part="bg-effect-mask" aria-hidden="true">
                            <div data-part="bg-effect" />
                          </div>
                          <div className="courseville-courseicon-icon">
                            <img
                              src="/2110363_1546827549.png"
                              loading="lazy"
                              className="courseville-courseicon-icon-img"
                              aria-label="Hardware Synthesis Laboratory I [Section 1 - 2]"
                              title="Hardware Synthesis Laboratory I [Section 1 - 2]"
                            />
                          </div>
                          <div className="courseville-courseicon-text">
                            {" "}
                            <div data-info="courseno-title">
                              {" "}
                              <div data-part="courseno">2110363</div>{" "}
                              <div data-part="title">
                                Hardware Synthesis Laboratory I [Section 1 - 2]
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://www.mycourseville.com/?q=courseville/course/56518"
                          aria-label="Software Engineering I [Section 1 - 3 & 33]"
                          title="Software Engineering I [Section 1 - 3 & 33]"
                          className="courseville-courseicon cantoggle cvnav-ajaxnav"
                          style={{ cursor: "pointer" }}
                        >
                          <div data-part="bg-effect-mask" aria-hidden="true">
                            <div data-part="bg-effect" />
                          </div>
                          <div className="courseville-courseicon-icon">
                            <img
                              src="/2110423_.8423.1595389958.2977.png"
                              loading="lazy"
                              className="courseville-courseicon-icon-img"
                              aria-label="Software Engineering I [Section 1 - 3 & 33]"
                              title="Software Engineering I [Section 1 - 3 & 33]"
                            />
                          </div>
                          <div className="courseville-courseicon-text">
                            {" "}
                            <div data-info="courseno-title">
                              {" "}
                              <div data-part="courseno">2110335</div>{" "}
                              <div data-part="title">
                                Software Engineering I [Section 1 - 3 &amp; 33]
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://www.mycourseville.com/?q=courseville/course/57287"
                          aria-label="BIOINFORMATICS | [Section 1 & 21]"
                          title="BIOINFORMATICS | [Section 1 & 21]"
                          className="courseville-courseicon cantoggle cvnav-ajaxnav"
                          style={{ cursor: "pointer" }}
                        >
                          <div data-part="bg-effect-mask" aria-hidden="true">
                            <div data-part="bg-effect" />
                          </div>
                          <div className="courseville-courseicon-icon">
                            <img
                              src="/icon-default.png"
                              loading="lazy"
                              className="courseville-courseicon-icon-img"
                              aria-label="BIOINFORMATICS | [Section 1 & 21]"
                              title="BIOINFORMATICS | [Section 1 & 21]"
                            />
                          </div>
                          <div className="courseville-courseicon-text">
                            {" "}
                            <div data-info="courseno-title">
                              {" "}
                              <div data-part="courseno">2110581</div>{" "}
                              <div data-part="title">
                                BIOINFORMATICS | [Section 1 &amp; 21]
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://www.mycourseville.com/?q=courseville/course/56258"
                          aria-label="Introduction to Digital lmaging [Section 33]"
                          title="Introduction to Digital lmaging [Section 33]"
                          className="courseville-courseicon cantoggle cvnav-ajaxnav"
                          style={{ cursor: "pointer", color: "rgb(0, 0, 0)" }}
                        >
                          <div data-part="bg-effect-mask" aria-hidden="true">
                            <div data-part="bg-effect" />
                          </div>
                          <div className="courseville-courseicon-icon">
                            <img
                              src="/icon-default.png"
                              loading="lazy"
                              className="courseville-courseicon-icon-img"
                              aria-label="Introduction to Digital lmaging [Section 33]"
                              title="Introduction to Digital lmaging [Section 33]"
                            />
                          </div>
                          <div className="courseville-courseicon-text">
                            {" "}
                            <div data-info="courseno-title">
                              {" "}
                              <div data-part="courseno">2110431</div>{" "}
                              <div data-part="title">
                                Introduction to Digital lmaging [Section 33]
                              </div>
                            </div>
                          </div>
                        </a>
                        <a
                          href="https://www.mycourseville.com/?q=courseville/course/57416"
                          aria-label="COMPUTER SYSTEM ARCHITECTURES [Section 1 - 2 & 33]"
                          title="COMPUTER SYSTEM ARCHITECTURES [Section 1 - 2 & 33]"
                          className="courseville-courseicon cantoggle cvnav-ajaxnav"
                          style={{ cursor: "pointer", color: "rgb(0, 0, 0)" }}
                        >
                          <div data-part="bg-effect-mask" aria-hidden="true">
                            <div data-part="bg-effect" />
                          </div>
                          <div className="courseville-courseicon-icon">
                            <img
                              src="/2110352.png"
                              loading="lazy"
                              className="courseville-courseicon-icon-img"
                              aria-label="COMPUTER SYSTEM ARCHITECTURES [Section 1 - 2 & 33]"
                              title="COMPUTER SYSTEM ARCHITECTURES [Section 1 - 2 & 33]"
                            />
                          </div>
                          <div className="courseville-courseicon-text">
                            {" "}
                            <div data-info="courseno-title">
                              {" "}
                              <div data-part="courseno">2110352</div>{" "}
                              <div data-part="title">
                                COMPUTER SYSTEM ARCHITECTURES [Section 1 - 2
                                &amp; 33]
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </section>
                    <section
                      className="courseville-courseicongroup"
                      aria-label="Courses I have joined in 2023/2"
                      title="Courses I have joined in 2023/2"
                      data-view="grid"
                      data-state="collapsed"
                    >
                      {" "}
                      <div className="courseville-header">
                        {" "}
                        <h2>2023/2</h2>{" "}
                        <button
                          className="cv-fa-collapse-control"
                          aria-expanded="false"
                          aria-controls="courseville-courseicongroup-icon-lineup-2023-2-join"
                          aria-label="Show/hide courses I join in 2023/2"
                          title="Show/hide courses I join in 2023/2"
                        >
                          {" "}
                          <i className="fa fa-chevron-circle-right" />{" "}
                        </button>
                      </div>{" "}
                      <div
                        id="courseville-courseicongroup-icon-lineup-2023-2-join"
                        className="courseville-courseicongroup-icon-lineup"
                      ></div>
                    </section>
                    <section
                      className="courseville-courseicongroup"
                      aria-label="Courses I have joined in 2023/1"
                      title="Courses I have joined in 2023/1"
                      data-view="grid"
                      data-state="collapsed"
                    >
                      {" "}
                      <div className="courseville-header">
                        {" "}
                        <h2>2023/1</h2>{" "}
                        <button
                          className="cv-fa-collapse-control"
                          aria-expanded="false"
                          aria-controls="courseville-courseicongroup-icon-lineup-2023-1-join"
                          aria-label="Show/hide courses I join in 2023/1"
                          title="Show/hide courses I join in 2023/1"
                        >
                          {" "}
                          <i className="fa fa-chevron-circle-right" />{" "}
                        </button>
                      </div>{" "}
                      <div
                        id="courseville-courseicongroup-icon-lineup-2023-1-join"
                        className="courseville-courseicongroup-icon-lineup"
                      ></div>
                    </section>
                    <section
                      className="courseville-courseicongroup"
                      aria-label="Courses I have joined in 2022/3"
                      title="Courses I have joined in 2022/3"
                      data-view="grid"
                      data-state="collapsed"
                    >
                      {" "}
                      <div className="courseville-header">
                        {" "}
                        <h2>2022/3</h2>{" "}
                        <button
                          className="cv-fa-collapse-control"
                          aria-expanded="false"
                          aria-controls="courseville-courseicongroup-icon-lineup-2022-3-join"
                          aria-label="Show/hide courses I join in 2022/3"
                          title="Show/hide courses I join in 2022/3"
                        >
                          {" "}
                          <i className="fa fa-chevron-circle-right" />{" "}
                        </button>
                      </div>{" "}
                      <div
                        id="courseville-courseicongroup-icon-lineup-2022-3-join"
                        className="courseville-courseicongroup-icon-lineup"
                      ></div>
                    </section>
                    <section
                      className="courseville-courseicongroup"
                      aria-label="Courses I have joined in 2022/2"
                      title="Courses I have joined in 2022/2"
                      data-view="grid"
                      data-state="collapsed"
                    >
                      {" "}
                      <div className="courseville-header">
                        {" "}
                        <h2>2022/2</h2>{" "}
                        <button
                          className="cv-fa-collapse-control"
                          aria-expanded="false"
                          aria-controls="courseville-courseicongroup-icon-lineup-2022-2-join"
                          aria-label="Show/hide courses I join in 2022/2"
                          title="Show/hide courses I join in 2022/2"
                        >
                          {" "}
                          <i className="fa fa-chevron-circle-right" />{" "}
                        </button>
                      </div>{" "}
                      <div
                        id="courseville-courseicongroup-icon-lineup-2022-2-join"
                        className="courseville-courseicongroup-icon-lineup"
                      ></div>
                    </section>
                    <section
                      className="courseville-courseicongroup"
                      aria-label="Courses I have joined in 2022/1"
                      title="Courses I have joined in 2022/1"
                      data-view="grid"
                      data-state="collapsed"
                    >
                      {" "}
                      <div className="courseville-header">
                        {" "}
                        <h2>2022/1</h2>{" "}
                        <button
                          className="cv-fa-collapse-control"
                          aria-expanded="false"
                          aria-controls="courseville-courseicongroup-icon-lineup-2022-1-join"
                          aria-label="Show/hide courses I join in 2022/1"
                          title="Show/hide courses I join in 2022/1"
                        >
                          {" "}
                          <i className="fa fa-chevron-circle-right" />{" "}
                        </button>
                      </div>{" "}
                      <div
                        id="courseville-courseicongroup-icon-lineup-2022-1-join"
                        className="courseville-courseicongroup-icon-lineup"
                      ></div>
                    </section>{" "}
                  </section>
                  <div
                    id="cvhomepanel-spinner-proto-large"
                    style={{ display: "none" }}
                  >
                    <div className="cvui-padded">
                      <div className="cvui-spinner cvui-lg cvui-light-bg  ">
                        <span className="cvui-spinner-icon" />
                        <div
                          className="cvui-spinner-status"
                          aria-live="assertive"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div id="courseville-panel-bottom"></div>
        </div>
      </div>
      <footer id="courseville-footer-wrap">
        <div id="cvfooter-content">
          {" "}
          <div id="cvfooter-version-text">Version 1.15.23.7</div>
          <div id="cvfooter-policies">
            <div className="cvfooter-policy">
              {" "}
              <a
                href="https://lic.chula.ac.th/?page_id=7606"
                aria-label="Read our privacy policy"
                title="Read our privacy policy"
              >
                Privacy Policy
              </a>{" "}
              updated on 06 Jan 2023
            </div>
            <div className="cvfooter-policy">
              {" "}
              <a
                href="https://www.mycourseville.com/cookiepolicy.html"
                aria-label="Read our cookie policy"
                title="Read our cookie policy"
              >
                Cookie Policy
              </a>{" "}
              updated on 21 May 2022
            </div>
          </div>{" "}
          <div id="cvfooter-operator">
            LMS and Online Course Platform within mycourseville.com are operated
            by{" "}
            <a href="http://www.lic.chula.ac.th/" target="_blank">
              Learning Innovation Center, Chulalongkorn University
            </a>{" "}
          </div>{" "}
        </div>
      </footer>
    </div>
  );
}

export default App;
