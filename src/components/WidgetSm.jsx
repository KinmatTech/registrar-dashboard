import '../css/component/widgetSm.css'

import { Visibility } from "@mui/icons-material";

function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://scontent.flos2-2.fna.fbcdn.net/v/t1.6435-9/187203285_947132126048608_8773191570853311344_n.jpg?stp=c0.137.480.480a_dst-jpg_s526x395&_nc_cat=107&ccb=1-6&_nc_sid=09cbfe&_nc_eui2=AeGe943A9EvcKTkjN-KDU2_7I0KhbHrb2EsjQqFsetvYSx-IC1M3ghzOOR_Q2Dv73uZ2JF1MiO3mLise4r4M02hK&_nc_ohc=lIJWTua5--MAX_d7Kfe&_nc_ht=scontent.flos2-2.fna&oh=00_AT8ieREmJZMRI9jSU61PxOm7uvVGGVUBDDVaZC0u8Zbx2g&oe=62A3DD06"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ani Mathew Okechukwu</span>
            <span className="widgetSmUserTitle">Fullstack MERN Sen.Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://pps.whatsapp.net/v/t61.24694-24/145137748_979282972786108_6637272315922901895_n.jpg?ccb=11-4&oh=50b54050bfe01133a2dcd9016d7eb42f&oe=628F8D9A"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Ekene Akubue</span>
            <span className="widgetSmUserTitle">MERN Stack Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://pps.whatsapp.net/v/t61.24694-24/269238626_541674360877610_4124753309886716414_n.jpg?ccb=11-4&oh=01_AVw8uViSkxWY_TmOHuIAkhE8aDAZhMN_snPBsMOx8QkfBQ&oe=6290620E"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Emeka Udoh</span>
            <span className="widgetSmUserTitle">HWL CEO</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>
        
      </ul>
    </div>
  );
}

export default WidgetSm;