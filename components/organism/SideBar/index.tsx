import Profile from "./Profile";
import Footer from "./Footer";
import MenuItem from "./MenuItem";

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="ic-menu-overview" active/>
          <MenuItem title="Transactions" icon="ic-menu-transaction" />
          <MenuItem title="Messages" icon="ic-menu-message" />
          <MenuItem title="Card" icon="ic-menu-card" />
          <MenuItem title="Settings" icon="ic-menu-setting" />
          <MenuItem title="Logout" icon="ic-menu-logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
