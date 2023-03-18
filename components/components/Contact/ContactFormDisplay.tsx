import { FC, SyntheticEvent, useState } from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { useForm } from "react-hook-form";
import { AnimatePresence, m } from "framer-motion";
import { FieldError, FieldErrorsImpl, FieldValues, Merge } from "react-hook-form/dist/types";
import { colors, highlightEffect, medias } from "@/styles/style-variables";
import HighlightText from "components/reusable/HighlightText";
import ArrowLink from "components/reusable/ArrowLink";
import ContactFormConfirmation from "./parts/ContactFormConfirmation";

const ContactFormContainer = styled.div<{ $submitting: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 125px min(5%, 75px);
  row-gap: 50px;
  @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
    padding: 100px min(4%, 50px);
  }
  @media only screen and (max-width: ${medias.phone + "px"}) {
    row-gap: 35px;
    padding: 75px min(5%, 20px);
  }
  .contact-header {
    ${highlightEffect};
    display: flex;
    cursor: default;
    font-weight: 500;
    font-size: 3rem;
    column-gap: 0.7rem;
    @media only screen and (max-width: ${medias.phone + "px"}) {
      font-size: 2.25rem;
      column-gap: 0.5rem;
    }
  }
  .contact-form-container {
    position: relative;
    width: 50%;
    min-width: 650px;
    @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      width: 85%;
      min-width: 400px;
    }
    @media only screen and (max-width: ${medias.phone + "px"}) {
      width: 100%;
      min-width: auto;
    }
  }
  .contact-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    transition: opacity 250ms, transform 250ms;
    ${({ $submitting }) =>
      $submitting &&
      css`
        opacity: 0;
        transform: translateY(50px);
        pointer-events: 0;
        user-select: 0;
      `}
  }
  .input-container {
    display: flex;
    position: relative;
    transition: opacity 150ms;
    .form-input {
      --clip-width: 2px;
      width: 100%;
      padding: 10px 20px;
      font-size: 1.3rem;
      background-color: transparent;
      box-sizing: border-box;
      border: 3px solid ${colors.white};
      color: ${colors.white};
      transition: clip-path 150ms;
      clip-path: polygon(
        var(--clip-width) var(--clip-width),
        calc(100% - var(--clip-width)) var(--clip-width),
        calc(100% - var(--clip-width)) calc(100% - var(--clip-width)),
        var(--clip-width) calc(100% - var(--clip-width))
      );
      @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
      }
      @media only screen and (max-width: ${medias.phone + "px"}) {
        font-size: 1.1rem;
        padding: 10px 15px;
      }
      &:focus {
        outline: 0px;
        --clip-width: 0px;
        & + .form-label {
          top: 0px;
          left: 10px;
          transform: translateY(-50%);
          background-color: ${colors.richBlack};
        }
      }
    }
    .form-label {
      position: absolute;
      font-size: 1.3rem;
      left: 20px;
      top: 13px;
      transition: top 150ms, left 150ms, transform 150ms, background-color 150ms 100ms;
      &[data-haveinput="true"] {
        top: 0px;
        left: 10px;
        transform: translateY(-50%);
        background-color: ${colors.richBlack};
      }
      @media only screen and (max-width: ${medias.phone + "px"}) {
        font-size: 1.1rem;
        left: 15px;
      }
    }
    .form-textarea {
      resize: none;
      scrollbar-width: thin;
      scrollbar-color: ${colors.darkGray};
      &::-webkit-scrollbar {
        appearance: none;
        width: 8px;
      }
      &::-webkit-scrollbar-track {
        background-color: ${colors.white};
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${colors.darkGray};
        transition: background-color 250ms;
        cursor: pointer;
        &:hover {
          background-color: ${colors.gray};
        }
      }
    }
    .error-msg {
      position: absolute;
      bottom: -2px;
      left: 15px;
      color: ${colors.amber};
      font-size: 1rem;
      @media only screen and (max-width: ${medias.phone + "px"}) {
        left: 10px;
        font-size: 0.8rem;
      }
    }
  }
  .submit-container {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    row-gap: 15px;
    transition: opacity 150ms;
    column-gap: 10px;
    @media only screen and (max-width: ${medias.phone + "px"}) {
      flex-direction: column;
      margin-top: 10px;
    }
    .form-submitBtn {
      width: fit-content;
      color: ${colors.white};
      display: flex;
      align-items: center;
      border: 1px solid ${colors.white};
      font-size: 1.3rem;
      @media only screen and (max-width: ${medias.phone + "px"}) {
        font-size: 1.1rem;
      }
      --pseudo-width: 25px;
      &:after,
      &:before {
        overflow: hidden;
        width: var(--pseudo-width);
        transition: width 250ms, padding 250ms;
        transition-timing-function: ease-in-out;
      }
      &::after {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 15 50 20' width='25px' fill='%23FAF9F6'%3E%3Cpath d='M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z'/%3E%3C/svg%3E");
        padding: 12.5px;
        margin-left: 25px;
        border-left: 1px solid ${colors.white};
        @media only screen and (max-width: ${medias.phone + "px"}) {
          padding: 10px;
          margin-left: 20px;
        }
      }
      &::before {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 15 50 20' width='25px' fill='%230b0d10'%3E%3Cpath d='M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z'/%3E%3C/svg%3E");
        margin-right: 25px;
        background-color: ${colors.white};
        padding: 12.5px 0px;
        width: 0;
        @media only screen and (max-width: ${medias.phone + "px"}) {
          padding: 10px 0px;
          margin-right: 20px;
        }
      }
      &:hover {
        &::after {
          padding: 12.5px 0px;
          width: 0;
          @media only screen and (max-width: ${medias.phone + "px"}) {
            padding: 10px 0px;
          }
        }
        &::before {
          padding: 12.5px;
          width: 25px;
          @media only screen and (max-width: ${medias.phone + "px"}) {
            padding: 10px;
          }
        }
      }
    }
    .direct-contact {
      font-size: 1.3rem;
      @media only screen and (max-width: ${medias.phone + "px"}) {
        font-size: 1.1rem;
      }
    }
  }
  .loading-msg {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 25px;
    .loading-icon {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
      > div {
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: ${colors.white};
        animation: loading-icon-ani 1.2s linear infinite;
        &:nth-child(1) {
          top: 8px;
          left: 8px;
          animation-delay: 0s;
        }
        &:nth-child(2) {
          top: 8px;
          left: 32px;
          animation-delay: -0.4s;
        }
        &:nth-child(3) {
          top: 8px;
          left: 56px;
          animation-delay: -0.8s;
        }
        &:nth-child(4) {
          top: 32px;
          left: 8px;
          animation-delay: -0.4s;
        }
        &:nth-child(5) {
          top: 32px;
          left: 32px;
          animation-delay: -0.8s;
        }
        &:nth-child(6) {
          top: 32px;
          left: 56px;
          animation-delay: -1.2s;
        }
        &:nth-child(7) {
          top: 56px;
          left: 8px;
          animation-delay: -0.8s;
        }
        &:nth-child(8) {
          top: 56px;
          left: 32px;
          animation-delay: -1.2s;
        }
        &:nth-child(9) {
          top: 56px;
          left: 56px;
          animation-delay: -1.6s;
        }
      }
      @keyframes loading-icon-ani {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }
    }
    .loading-text {
      display: flex;
      column-gap: 0.25rem;
      > p {
        font-size: 2rem;
        font-weight: 500;
        @media only screen and (min-width: ${medias.phone + 1 + "px"}) and (max-width: ${medias.tablet + "px"}) {
          font-size: 1.6rem;
        }
        @media only screen and (max-width: ${medias.phone + "px"}) {
          font-size: 1.4rem;
        }
        animation: loading-text-bounce 500ms infinite;
        @keyframes loading-text-bounce {
          50% {
            transform: translateY(10px);
          }
        }
      }
    }
  }
`;
interface CFDProps {}
interface ErrorMsgProps {
  message: string;
  className: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}
const LoadingMsg: FC<{}> = () => {
  return (
    <m.div className="loading-msg" initial={{ top: -50, opacity: 0 }} animate={{ top: 0, opacity: 1 }} transition={{ duration: 0.25 }}>
      <div className="loading-icon">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="loading-text">
        {"Sending...".split("").map((letter, i) => {
          return <p style={{ animationDelay: `${i * 50}ms` }}>{letter}</p>;
        })}
      </div>
    </m.div>
  );
};
const ErrorMsg: FC<ErrorMsgProps> = ({ error, className }) => {
  return (
    <AnimatePresence mode="wait">
      {!!error && (
        <m.p
          className={className}
          initial={{ opacity: 0, y: "105%" }}
          animate={{ opacity: 1, y: "105%" }}
          exit={{ x: 25, y: "105%", opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {error.message as string}
        </m.p>
      )}
    </AnimatePresence>
  );
};
const ContactFormDisplay: FC<CFDProps> = ({}) => {
  const {
    register,
    handleSubmit,
    setError,
    resetField,
    formState: { errors, isSubmitting, isSubmitSuccessful, dirtyFields },
  } = useForm();
  const [submitState, setSubmitState] = useState<{ loading: boolean; submitted: boolean }>({
    loading: false,
    submitted: false,
  });

  const handleFormSubmit = async (data: FieldValues) => {
    if (isSubmitting) return;
    setSubmitState((currState) => ({
      ...currState,
      loading: true,
    }));
    const res = await axios.post("/api/send-email", data);
    if (res.data.status !== 200) {
      setError("root.serverError", {
        type: "500",
      });
      return;
    }
    setSubmitState((currState) => ({
      ...currState,
      loading: true,
      submitted: true,
    }));
  };
  const handleReset = (e: SyntheticEvent) => {
    if ((e.target as HTMLInputElement).value !== "") return;
    resetField((e.target as HTMLElement).id, { defaultValue: "", keepDirty: false });
  };
  return (
    <ContactFormContainer $submitting={submitState.loading}>
      <h1 className="contact-header">
        <HighlightText fragment={true}>Contact Me!</HighlightText>
      </h1>
      <AnimatePresence mode="wait">
        {submitState.submitted ? (
          <ContactFormConfirmation successful={isSubmitSuccessful} />
        ) : (
          <m.div className="contact-form-container" key="contact-form" exit={{ y: 50, opacity: 0 }} transition={{ duration: 0.25 }}>
            <form className="contact-form" onSubmit={handleSubmit(handleFormSubmit)}>
              <div className="input-container">
                <input
                  id="name"
                  className="form-input"
                  type="text"
                  {...register("name", { required: "Name is Required!", onChange: handleReset })}
                />
                <label htmlFor="name" className="form-label" data-haveinput={dirtyFields.name || false}>
                  Name*
                </label>
                <ErrorMsg className="error-msg" error={errors.name} message="Message is required!" />
              </div>
              <div className="input-container">
                <input
                  id="email"
                  className="form-input"
                  {...register("email", {
                    required: "Email is Required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please Type in Valid Email",
                    },
                    onChange: handleReset,
                  })}
                />
                <label htmlFor="email" className="form-label" data-haveinput={dirtyFields.email || false}>
                  Email*
                </label>
                <ErrorMsg className="error-msg" error={errors.email} message="Email is required!" />
              </div>
              <div className="input-container">
                <textarea id="message" className="form-input form-textarea" rows={8} {...register("message", { onChange: handleReset })} />
                <label htmlFor="message" className="form-label" data-haveinput={dirtyFields.message || false}>
                  Message
                </label>
              </div>
              <div className="submit-container">
                <button type="submit" className="form-submitBtn">
                  Submit
                </button>
                <ArrowLink className="direct-contact" href="mailto:arthur.lee945+porfolio@gmail.com" target="_blank">
                  Send Email
                </ArrowLink>
              </div>
            </form>
            {submitState.loading && <LoadingMsg />}
          </m.div>
        )}
      </AnimatePresence>
    </ContactFormContainer>
  );
};

export default ContactFormDisplay;
