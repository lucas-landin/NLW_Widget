import { useState } from "react";

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import bugImageUrl from "../../images/bug.svg";
import ideaImageUrl from "../../images/idea.svg";
import thoughtImageUrl from "../../images/thought.svg";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: { source: bugImageUrl, alt: "Imagem de um inseto" },
  },
  IDEA: {
    title: "Ideia",
    image: { source: ideaImageUrl, alt: "Imagem de uma lâmpada" },
  },
  OTHER: {
    title: "Outro",
    image: { source: thoughtImageUrl, alt: "Imagem de balão de pensamento" },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

//Object.entries retora um array contendo arrays de duas posições => [ ['BUG', {...}] ]

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div
      className="bg-[#18181b] p-4 relative rounded-2xl mb-4 
    flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"
    >
      {feedbackSent ? (
        <FeedbackSucessStep onFeedbackRestartRequest={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequest={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer>
        Feito com ♥ por{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/lucas-landin"
        >
          Lucas&Rocketseat
        </a>
      </footer>
    </div>
  );
}
