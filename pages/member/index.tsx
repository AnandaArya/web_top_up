import OverviewContent from "../../components/organism/OverviewContent";
import SideBar from "../../components/organism/SideBar";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <SideBar />
      <OverviewContent />
    </section>
  );
}
