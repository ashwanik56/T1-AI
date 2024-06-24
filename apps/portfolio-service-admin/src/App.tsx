import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ExperienceList } from "./experience/ExperienceList";
import { ExperienceCreate } from "./experience/ExperienceCreate";
import { ExperienceEdit } from "./experience/ExperienceEdit";
import { ExperienceShow } from "./experience/ExperienceShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { SkillList } from "./skill/SkillList";
import { SkillCreate } from "./skill/SkillCreate";
import { SkillEdit } from "./skill/SkillEdit";
import { SkillShow } from "./skill/SkillShow";
import { ContactInfoList } from "./contactInfo/ContactInfoList";
import { ContactInfoCreate } from "./contactInfo/ContactInfoCreate";
import { ContactInfoEdit } from "./contactInfo/ContactInfoEdit";
import { ContactInfoShow } from "./contactInfo/ContactInfoShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PortfolioService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Experience"
          list={ExperienceList}
          edit={ExperienceEdit}
          create={ExperienceCreate}
          show={ExperienceShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Skill"
          list={SkillList}
          edit={SkillEdit}
          create={SkillCreate}
          show={SkillShow}
        />
        <Resource
          name="ContactInfo"
          list={ContactInfoList}
          edit={ContactInfoEdit}
          create={ContactInfoCreate}
          show={ContactInfoShow}
        />
      </Admin>
    </div>
  );
};

export default App;
