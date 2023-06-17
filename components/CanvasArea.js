export default function CanvasArea({ listcomponents }) {
  console.log(listcomponents);
  return (
    <div>
      {listcomponents &&
        listcomponents.length > 0 &&
        listcomponents.map((item) => {
          return <div>{item.title}</div>;
        })}
    </div>
  );
}
