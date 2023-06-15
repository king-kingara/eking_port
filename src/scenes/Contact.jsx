import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import CodeSetImg from "../assets/code-setup.jpg";

const Contact = () => {
    const form = useRef();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: { yes_i_understand: false }
    });

    const sendEmail = () => {
        emailjs
            .sendForm(
                `service_g38ldll`,
                `template_f0q025l`,
                form.current,
                `Nuv1eElqTUcdmBbII`
            )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        reset();
    };

    return (
        <section id="contact" className="contact pt-24 pb-48">
            {/* HEADINGS */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                }}
                className="flex justify-end w-full"
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        <span className="text-[#f5cc8a]">CONTACT ME</span> TO GET STARTED
                    </p>
                    <div className="flex md:justify-end my-5">
                        <LineGradient width="w-1/2" />
                    </div>
                </div>
            </motion.div>

            {/* FORM & IMAGE */}
            <div className="md:flex md:justify-between gap-16 mt-5">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="basis-1/2 flex justify-center"
                >
                    <img src={CodeSetImg} alt="contact" />
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    className="basis-1/2 mt-10 border-2 border-solid border-[#f5cc8a] rounded-lg p-4 shadow-md md:mt-0"
                >
                    <form
                        ref={form}
                        onSubmit={handleSubmit(sendEmail)}
                    >
                        <input
                            className="w-full bg-[#f5cc8a] text-deep-blue font-semibold placeholder-opaque-black p-3"
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className="text-[#a1080d] mt-1">
                                {errors.name.type === "required" && "This field is required."}
                                {errors.name.type === "maxLength" && "Max length is 100 char."}
                            </p>
                        )}

                        <input
                            className="w-full bg-[#f5cc8a] text-deep-blue font-semibold placeholder-opaque-black p-3 mt-5"
                            type="text"
                            placeholder="EMAIL"
                            {...register("email", {
                                required: true,
                                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            })}
                        />
                        {errors.email && (
                            <p className="text-[#a1080d] mt-1">
                                {errors.email.type === "required" && "This field is required."}
                                {errors.email.type === "pattern" && "Invalid email address."}
                            </p>
                        )}

                        <textarea
                            className="w-full bg-[#f5cc8a] text-deep-blue font-semibold placeholder-opaque-black p-3 mt-5"
                            name="message"
                            placeholder="MESSAGE"
                            rows="4"
                            cols="50"
                            {...register("message", {
                                required: true,
                                maxLength: 2000,
                            })}
                        />
                        {errors.message && (
                            <p className="text-[#a1080d] mt-1">
                                {errors.message.type === "required" &&
                                    "This field is required."}
                                {errors.message.type === "maxLength" &&
                                    "Max length is 2000 char."}
                            </p>
                        )}

                        <button
                            className="p-5 bg-[#f5cc8a] font-semibold text-deep-blue mt-5 hover:bg-[#180c02] hover:text-[#f5cc8a] rounded-lg hover:border-2 hover:border-solid hover:border-[#f5cc8a] ease-in-out hover:scale-110 active:scale-90 transition duration-500"
                            type="submit"
                        >
                            SEND ME A MESSAGE
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;