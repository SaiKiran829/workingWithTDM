import React, { Suspense, useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./Content.scss";
import { Spinner } from "@blueprintjs/core";
import EnvironmentSetup from "../../views/environment-setup/EnvironmentSetup";
import UserAdministration from "../../views/user-administration/UserAdministration";

const Content = () => {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/user-administration" element={<UserAdministration />} />
          <Route path="/environment-setup" element={<EnvironmentSetup />} />
          <Route path="/" element={<UserAdministration />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Content;
    