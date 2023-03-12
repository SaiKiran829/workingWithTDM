import { IconNames } from "@blueprintjs/icons";
import { Spinner } from "@blueprintjs/core";

export const iconMapping = {
  person: IconNames.Person,
  applications: IconNames.Applications,
  labTest: IconNames.LabTest,
  database: IconNames.Database,
  automaticUpdates: IconNames.AutomaticUpdates,
  dataconnection: IconNames.DataConnection,
  build: IconNames.Build,
  dashboard: IconNames.Dashboard,
};

export const sidebarJson = [
  {
    path: "/user-administration",
    name: "User Adminstration",
    icon: iconMapping.person,
  },
  {
    path: "/Environment-Setup",
    name: "Environment Setup",
    icon: iconMapping.applications,
  },
  {
    path: "/Test-Data-Preperation",
    name: "Test Data Preperation",
    icon: iconMapping.labTest,
  },
  {
    path: "/Data-Anonymization",
    name: "Data Anonymization",
    icon: iconMapping.database,
  },
  {
    path: "/Data-Quality-Checks",
    name: "Data Quality Checks",
    icon: iconMapping.automaticUpdates,
  },
  {
    path: "/Test-Assertion",
    name: "Test Assertion",
    icon: iconMapping.dataconnection,
  },
  {
    path: "/Run-Regressions",
    name: "Run Regressions",
    icon: iconMapping.build,
  },
  {
    path: "/Dashboards",
    name: "Dashboards",
    icon: iconMapping.dashboard,
  },
];
