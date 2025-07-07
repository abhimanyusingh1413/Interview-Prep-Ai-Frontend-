import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Inputs/Input';
import SpinnerLoader from '../../components/Loader/SpinnerLoader';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';


const CreateSessionForm = () => {
    const [formData, setFormData] = useState({
        role: "",
        experience: "",
        topicsToFocus: "",
        questions: "",
        description: ""
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleChange = (key, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [key]: value
        }));
    };

    const handleCreateSession = async (e) => {
        e.preventDefault();

        const { role, experience, topicsToFocus } = formData;
        if (!role || !experience || !topicsToFocus) {
            setError("Please fill all the fields");
            return;
        }
        setError("");
        setIsLoading(true);
        try {
            // call AI api to generate questions
            const aiResponse = await axiosInstance.post(
                API_PATHS.AI.GENERATE_QUESTIONS,
                {
                    role,
                    experience,
                    topicsToFocus,
                    numberOfQuestions: 10,
                }
            );

            //should be array like [{question, answer},....]
            const generatedQuestions = aiResponse.data;

            const response = await axiosInstance.post(API_PATHS.SESSION.CREATE, {
                ...formData,
                questions: generatedQuestions,
            });

            if (response.data?.session?._id) {
                // session created successfully
                navigate(`/interview-prep/${response.data?.session?._id}`);
            }
        } catch (error) {
            if (error.response && error.response.data.message) {
                setError(error.response.data.message);
            }else {
                setError("something went wrong, please try again later");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return <div className="w-[90vw] md:w-[35vw] p-7 flex flex-col justify-center">
         <h3 className="text-lg font-semibold text-black ">
            Start a New Interview Journey
         </h3>
         <p className="text-xs text-slate-900 mt-[5px] mb-3">
            Fill out a few quick details and unlock your personalized set of interview questions preparation experience.
         </p>

         <form onSubmit={handleCreateSession} className="flex flex-col gap-3">
            <Input
               value={formData.role}
                onChange={({ target }) => handleChange("role", target.value)}
                label=" Target Role"
                placeholder="e.g. Software Engineer, Data Scientist"
                type="text"
            />
            <Input
                value={formData.experience}
                onChange={({ target }) => handleChange("experience", target.value)}
                label="Years of Experience"
                placeholder="e.g. 2, 5, 10"
                type="number"
            />
            <Input
                value={formData.topicsToFocus}
                onChange={({ target }) => handleChange("topicsToFocus", target.value)}
                label=" Topics to Focus"
                placeholder="(e.g. Data Structures, Algorithms, System Design)"
                type="text"
            />
            <Input
                value={formData.description}
                onChange={({ target }) => handleChange("description", target.value)}
                label="Description"
                placeholder="(e.g. Briefly describe the session)"
                type="text"
            />

            {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}

            <button
                type="submit"
                className="btn-primary w-full mt-2"
                disabled={isLoading}
            >
               {isLoading && <SpinnerLoader/>} Create Session
            </button>
         </form>
    </div>
}

export default CreateSessionForm
