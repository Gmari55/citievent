import { useContext } from "react";
import { useForm } from "react-hook-form";
import { CitieseventsContext } from "../contexts/citiesevents.context";

export function Addcitiesevents() {

    const { add } = useContext(CitieseventsContext);

    // ------- 3. using useForm React Hook
    const {
        register,       // to attrack changes of form inputs
        handleSubmit,   // onSubmit event handler
        // add validators
    } = useForm();

    return (
        <div className="CreateUser">
            <h1>Create New Event</h1>
            <form onSubmit={handleSubmit(add)}>
                <label>
                    <span>Title:</span>
                    <input {...register("title")} type="text" />
                </label>
                <label>
                    <span>description:</span>
                    <input {...register("description")} type="text" />
                </label>
                <div>
                    <button type="submit">Create</button>
                </div>
            </form>
        </div>
    );
}