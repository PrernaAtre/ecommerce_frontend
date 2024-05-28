import { map } from "lodash";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { signUpSchema } from "../schema/signupSchema";
import { signUpData } from "@/config/authQuery";
import toast from "react-hot-toast";

export const useSignUp = () => {
  const router = useRouter();

  const handleSubmit = async (input: Record<string, string>, setModalOpen: (isOpen: boolean) => void) => {
    try {
      console.log("signup input------", input);

      const sanitizeInput = signUpSchema.cast(input, {
        assert: false,
        stripUnknown: false,
      });

      const formData = new FormData();

      map(sanitizeInput, (value: string | File, key: string) => formData.append(key, value));
      const response = await signUpData(sanitizeInput);
      console.log("response signup in hook------", response);
      if (response) {
        toast.success('Signup Successfully');
        setModalOpen(false); // Close the modal on successful signup
      }
    } catch (error: any) {
      toast.error('Invalid Login');
    }
  };

  return {
    initialValues: signUpSchema.cast(
      {},
      { assert: false, stripUnknown: true }
    ),
    validationSchema: signUpSchema,
    handleSubmit,
  };
};
