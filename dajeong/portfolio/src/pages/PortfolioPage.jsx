import MyProfile from "../components/MyProfile";
import MyRepo from "../components/MyRepo";
import MyProject from "../components/MyProject";
import "/src/styles/PageStyle.css";

export default function PortfolioPage() {
  return (
    <>
      <div>
        <MyProfile />
        <MyRepo />
        <MyProject />
      </div>
    </>
  );
}
