export default function LoadMore({ addImage }) {
  return (
    <button
      onClick={() => {
        addImage();
      }}
    >
      LOAD MORE
    </button>
  );
}
