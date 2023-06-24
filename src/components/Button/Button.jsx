import { SubmitButton } from "./ButtonStyled";
export default function LoadMore({ addImage }) {
  return (
    <SubmitButton
      onClick={() => {
        addImage();
      }}
    >
      LOAD MORE
    </SubmitButton>
  );
}
