import { useQuery } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { AddMeeting } from "../components/AddMeeting";
import { SelectRoom } from "../components/SelectRoom";
import { GET_BUILDINGS } from "../utils/queries";

const AboutPage = () => {
  const [formData, setFormData] = useState();

  return formData ? (
    <SelectRoom data={formData} />
  ) : (
    <AddMeeting onNext={setFormData} />
  );
};

export default AboutPage;
