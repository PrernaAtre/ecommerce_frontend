import * as Yup from "yup";

export enum JobRole {
  JobSeeker = "Job Seeker",
  JobProvider = "Job Provider",
}


export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter email"),
  password: Yup.string().required("Please enter password"),
  role: Yup.mixed<JobRole>()
    .oneOf(Object.values(JobRole), "Invalid role")
    .required("Please select a role"),
});
