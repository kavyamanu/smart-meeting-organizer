import { useState } from "react";
import { AddMeeting } from "../components/AddMeeting";
import { SelectRoom } from "../components/SelectRoom";

const AboutPage = () => {
  const [formData, setFormData] = useState();

  return formData ? (
    <SelectRoom data={formData} />
  ) : (
    <AddMeeting onNext={setFormData} />
  );
};

export default AboutPage;
